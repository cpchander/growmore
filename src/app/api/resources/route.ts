import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { signResourceToken } from "@/lib/resourceToken";

export const runtime = "nodejs";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const schema = z.object({
  name: z.string().min(2, "Name too short").max(120).trim(),
  email: z.string().email("Enter a valid email address").max(254),
  phone: z.string().max(20).optional().or(z.literal("")),
  role: z.string().max(60).optional(),
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
    const { name, email, phone, role, website } = parsed.data;
    if (website) return NextResponse.json({ success: true }); // honeypot

    const token = signResourceToken(email);
    const libraryUrl = `https://growmoresolutions.com/resources/library?k=${encodeURIComponent(token)}`;
    const s = { name: escapeHtml(name), email: escapeHtml(email), phone: phone ? escapeHtml(phone) : "", role: role ? escapeHtml(role) : "" };

    // Lead notification to the team
    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: "sales@growmoresolutions.com",
      subject: `Resource library access: ${s.name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:24px;border-radius:12px;border:1px solid #1e3050;">
          <h2 style="color:#d4a843;margin:0 0 16px;">New Resource-Library Lead</h2>
          <p style="color:#fff;font-size:14px;margin:4px 0;"><b style="color:#8899aa;">Name:</b> ${s.name}</p>
          <p style="color:#fff;font-size:14px;margin:4px 0;"><b style="color:#8899aa;">Email:</b> <a href="mailto:${s.email}" style="color:#d4a843;">${s.email}</a></p>
          <p style="color:#fff;font-size:14px;margin:4px 0;"><b style="color:#8899aa;">Phone:</b> ${s.phone || "—"}</p>
          <p style="color:#fff;font-size:14px;margin:4px 0;"><b style="color:#8899aa;">Role:</b> ${s.role || "—"}</p>
        </div></div>`,
    });

    // Acknowledgement with the gated library link
    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: email,
      subject: "Your Grow More Solutions resource library is ready",
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:32px;border-radius:12px;border:1px solid #1e3050;">
          <h1 style="color:#d4a843;margin:0 0 8px;font-size:22px;">Thanks, ${s.name} 👋</h1>
          <p style="color:#fff;font-size:14px;line-height:1.6;margin:0 0 20px;">
            Your resource library is unlocked — the Company Profile, Smart Home Cost Guide,
            Pre-Wiring Checklist and Project Lookbook. View or download them here:
          </p>
          <div style="text-align:center;margin:24px 0;">
            <a href="${libraryUrl}" style="display:inline-block;background:#d4a843;color:#0a1628;font-weight:700;font-size:15px;text-decoration:none;padding:14px 28px;border-radius:10px;">Open My Resource Library →</a>
          </div>
          <p style="color:#8899aa;font-size:12px;line-height:1.6;margin:0;">
            This private link is just for you and works for 7 days. Need it again? Re-submit the form at
            <a href="https://growmoresolutions.com/resources" style="color:#d4a843;">growmoresolutions.com/resources</a>.
          </p>
        </div>
        <p style="color:#556677;font-size:11px;text-align:center;margin-top:16px;">Grow More Solutions — 15+ Years · 600+ Projects · 25+ Cities</p>
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resources form error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
