import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

// NRI pitch deck attached to every acknowledgement email
async function loadPitchDeck(): Promise<{ filename: string; content: Buffer }[]> {
  try {
    const buf = await fs.readFile(path.join(process.cwd(), "private-assets", "nri-pitch-deck.pdf"));
    return [{ filename: "GMHS-NRI-Property-Concierge.pdf", content: buf }];
  } catch {
    return []; // never block the lead if the deck is missing
  }
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const schema = z.object({
  name: z.string().min(2, "Name too short").max(120).trim(),
  email: z.string().email("Enter a valid email").max(254),
  phone: z.string().min(7, "Phone too short").max(25).regex(/^[+]?[0-9\s\-()]{7,25}$/, "Invalid phone"),
  country: z.string().max(60).optional(),
  service: z.string().max(60).optional(),
  propertyCity: z.string().max(120).optional(),
  message: z.string().max(2000).optional(),
  website: z.string().max(0, "Bot detected").optional(), // honeypot
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const e = rateLimitMap.get(ip);
  if (!e || now > e.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  e.count++;
  return e.count > 6;
}

const transport = nodemailer.createTransport({
  host: "smtp.zeptomail.in",
  port: 587,
  auth: { user: "emailapikey", pass: process.env.ZEPTOMAIL_API_KEY! },
});

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const allowed = ["https://growmoresolutions.com", "https://www.growmoresolutions.com"];
    if (process.env.NODE_ENV === "production") {
      const o = origin || (referer ? new URL(referer).origin : null);
      if (!o || !allowed.includes(o)) return NextResponse.json({ error: "Forbidden — invalid origin" }, { status: 403 });
    }
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid input" }, { status: 400 });
    const { name, email, phone, country, service, propertyCity, message, website } = parsed.data;
    if (website) return NextResponse.json({ success: true }); // honeypot

    const s = {
      name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone),
      country: country ? escapeHtml(country) : "", service: service ? escapeHtml(service) : "",
      propertyCity: propertyCity ? escapeHtml(propertyCity) : "", message: message ? escapeHtml(message) : "",
    };

    const row = (l: string, v: string) => `<p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">${l}:</b> ${v}</p>`;

    // Lead → team
    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: "sales@growmoresolutions.com",
      subject: `[NRI] ${s.service || "Enquiry"}: ${s.name}${s.country ? " (" + s.country + ")" : ""}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:24px;border-radius:12px;border:1px solid #1e3050;">
          <h2 style="color:#d4a843;margin:0 0 14px;">New NRI Concierge Lead</h2>
          ${row("Name", s.name)}
          ${row("Email", `<a href="mailto:${s.email}" style="color:#d4a843;">${s.email}</a>`)}
          ${row("Phone / WhatsApp", `<a href="tel:${s.phone}" style="color:#d4a843;">${s.phone}</a>`)}
          ${row("Country of residence", s.country || "—")}
          ${row("Service", s.service || "—")}
          ${row("Property city (India)", s.propertyCity || "—")}
          ${s.message ? row("Message", s.message) : ""}
        </div></div>`,
    });

    // Acknowledgement → NRI (with the pitch deck attached)
    const deckAttachment = await loadPitchDeck();
    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: email,
      attachments: deckAttachment,
      subject: "We've received your NRI property enquiry — Grow More Solutions",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:32px;border-radius:12px;border:1px solid #1e3050;">
          <h1 style="color:#d4a843;margin:0 0 8px;font-size:22px;">Thank you, ${s.name} 🙏</h1>
          <p style="color:#fff;font-size:14px;line-height:1.6;margin:0 0 14px;">
            Your enquiry has reached our NRI desk. A dedicated relationship manager will get back to you
            within <strong style="color:#d4a843;">1 working day</strong>, at a time that suits your timezone${s.country ? " in " + s.country : ""}.
          </p>
          <p style="color:#8899aa;font-size:13px;line-height:1.6;margin:0 0 14px;">
            We look after NRI properties across India — care &amp; monitoring, building &amp; automating, and
            buying or selling with full title, FEMA and tax handling. Backed by a 40-year name and an on-ground team in Delhi-NCR.
          </p>
          <p style="color:#d4a843;font-size:13px;line-height:1.6;margin:0;font-weight:600;">
            📎 We've attached a short overview of how we help NRIs — have a look before our call.
          </p>
        </div>
        <p style="color:#556677;font-size:11px;text-align:center;margin-top:16px;">Grow More Solutions — 15+ Years · 600+ Projects · 25+ Cities</p>
      </div>`,
    }).catch((e: unknown) => console.error("NRI ack email error:", e));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("NRI form error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
