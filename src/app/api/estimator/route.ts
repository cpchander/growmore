import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const schema = z.object({
  name: z.string().min(2).max(120).trim(),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(25).regex(/^[+]?[0-9\s\-()]{7,25}$/, "Invalid phone"),
  summary: z.string().max(600).optional(),
  totalRange: z.string().max(120).optional(),
  website: z.string().max(0).optional(), // honeypot
});

const rl = new Map<string, { count: number; resetAt: number }>();
function limited(ip: string) {
  const now = Date.now(); const e = rl.get(ip);
  if (!e || now > e.resetAt) { rl.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 }); return false; }
  e.count++; return e.count > 6;
}

const transport = nodemailer.createTransport({
  host: "smtp.zeptomail.in", port: 587,
  auth: { user: "emailapikey", pass: process.env.ZEPTOMAIL_API_KEY! },
});

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const allowed = ["https://growmoresolutions.com", "https://www.growmoresolutions.com"];
    if (process.env.NODE_ENV === "production") {
      const o = origin || (referer ? new URL(referer).origin : null);
      // Accept the production domains, OR any same-origin POST (Origin host ===
      // this deployment's own Host) — the latter keeps Vercel preview/branch
      // deploys (*.vercel.app) working while still blocking cross-site CSRF.
      let ok = !!o && allowed.includes(o);
      if (!ok && o) {
        try {
          const host = req.headers.get("host");
          const oHost = new URL(o).host;
          ok = oHost === host || oHost.endsWith(".vercel.app");
        } catch { ok = false; }
      }
      if (!ok) return NextResponse.json({ error: "Forbidden — invalid origin" }, { status: 403 });
    }
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });

    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid input" }, { status: 400 });
    const { name, email, phone, summary, totalRange, website } = parsed.data;
    if (website) return NextResponse.json({ success: true });

    const s = { name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), summary: summary ? escapeHtml(summary) : "", totalRange: totalRange ? escapeHtml(totalRange) : "" };

    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: "sales@growmoresolutions.com",
      subject: `[Estimator] BOQ review request: ${s.name}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:24px;border-radius:12px;border:1px solid #1e3050;">
          <h2 style="color:#d4a843;margin:0 0 14px;">Estimator — BOQ Review Request</h2>
          <p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">Name:</b> ${s.name}</p>
          <p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">Email:</b> <a href="mailto:${s.email}" style="color:#d4a843;">${s.email}</a></p>
          <p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">Phone:</b> <a href="tel:${s.phone}" style="color:#d4a843;">${s.phone}</a></p>
          <p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">Estimate:</b> ${s.totalRange || "—"}</p>
          <p style="color:#fff;font-size:14px;margin:5px 0;"><b style="color:#8899aa;">Config:</b> ${s.summary || "—"}</p>
        </div></div>`,
    });

    if (email) {
      transport.sendMail({
        from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
        to: email,
        subject: "We've received your home estimate — Grow More Solutions",
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#0a1628;padding:32px;border-radius:12px;border:1px solid #1e3050;">
            <h1 style="color:#d4a843;margin:0 0 8px;font-size:22px;">Thanks, ${s.name} 🙏</h1>
            <p style="color:#fff;font-size:14px;line-height:1.6;margin:0;">Our team will review your BOQ (${s.totalRange || "your estimate"}) and come back within <strong style="color:#d4a843;">1 working day</strong> with a detailed, accurate quote — in your timezone.</p>
          </div>
          <p style="color:#556677;font-size:11px;text-align:center;margin-top:16px;">Grow More Solutions — 15+ Years · 600+ Projects · 25+ Cities</p>
        </div>`,
      }).catch((e: unknown) => console.error("Estimator ack error:", e));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Estimator form error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
