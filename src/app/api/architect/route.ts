import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

// HTML escaping — prevents injection in the email template
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const architectSchema = z.object({
  name: z.string().min(2, "Name too short").max(120).trim(),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(20)
    .regex(/^[+]?[0-9\s\-()]{7,20}$/, "Invalid phone number"),
  email: z.string().email("Invalid email").max(254).optional().or(z.literal("")),
  stage: z.string().max(60).optional(),
  city: z.string().max(120).optional(),
  message: z.string().max(2000).optional(),
  website: z.string().max(0, "Bot detected").optional(), // honeypot
});

// In-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const transport = nodemailer.createTransport({
  host: "smtp.zeptomail.in",
  port: 587,
  auth: { user: "emailapikey", pass: process.env.ZEPTOMAIL_API_KEY! },
});

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_EXT = ["pdf", "dwg", "dxf", "png", "jpg", "jpeg", "zip"];

export async function POST(req: NextRequest) {
  try {
    // CSRF / origin check
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const allowed = ["https://growmoresolutions.com", "https://www.growmoresolutions.com"];
    if (process.env.NODE_ENV === "production") {
      const reqOrigin = origin || (referer ? new URL(referer).origin : null);
      if (!reqOrigin || !allowed.includes(reqOrigin)) {
        return NextResponse.json({ error: "Forbidden — invalid origin" }, { status: 403 });
      }
    }

    // Rate limit
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    // Parse multipart form
    const form = await req.formData();
    const parsed = architectSchema.safeParse({
      name: form.get("name") ?? "",
      phone: form.get("phone") ?? "",
      email: form.get("email") ?? "",
      stage: form.get("stage") ?? "",
      city: form.get("city") ?? "",
      message: form.get("message") ?? "",
      website: form.get("website") ?? "",
    });
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0]?.message || "Invalid input" }, { status: 400 });
    }
    const { name, phone, email, stage, city, message, website } = parsed.data;

    // Honeypot — silently accept
    if (website) return NextResponse.json({ success: true });

    // Optional floor-plan attachment
    const attachments: { filename: string; content: Buffer }[] = [];
    const file = form.get("floorPlan");
    if (file && typeof file === "object" && "arrayBuffer" in file) {
      const f = file as File;
      if (f.size > 0) {
        const ext = (f.name.split(".").pop() || "").toLowerCase();
        if (f.size > MAX_FILE_BYTES) {
          return NextResponse.json({ error: "Floor plan too large (max 10 MB)." }, { status: 400 });
        }
        if (!ALLOWED_EXT.includes(ext)) {
          return NextResponse.json({ error: "Unsupported file type. Use PDF, DWG, DXF, JPG, PNG or ZIP." }, { status: 400 });
        }
        attachments.push({
          filename: f.name.replace(/[^\w.\-]/g, "_").slice(0, 80),
          content: Buffer.from(await f.arrayBuffer()),
        });
      }
    }

    const s = {
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      email: email ? escapeHtml(email) : "",
      stage: stage ? escapeHtml(stage) : "",
      city: city ? escapeHtml(city) : "",
      message: message ? escapeHtml(message) : "",
    };

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:10px 12px;color:#8899aa;font-size:13px;border-bottom:1px solid #1e3050;width:150px;">${label}</td>
        <td style="padding:10px 12px;color:#ffffff;font-size:14px;font-weight:600;border-bottom:1px solid #1e3050;">${value}</td>
      </tr>`;

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#0a1628;padding:24px;border-radius:12px;border:1px solid #1e3050;">
          <h2 style="color:#d4a843;margin:0 0 6px;">New Architect — Request for Project Drawings</h2>
          <p style="color:#8899aa;font-size:13px;margin:0 0 18px;">Submitted via /solutions/for-architects</p>
          <table style="width:100%;border-collapse:collapse;">
            ${row("Name / Firm", s.name)}
            ${row("Phone / WhatsApp", `<a href="tel:${s.phone}" style="color:#d4a843;text-decoration:none;">${s.phone}</a>`)}
            ${row("Email", s.email ? `<a href="mailto:${s.email}" style="color:#d4a843;text-decoration:none;">${s.email}</a>` : "Not provided")}
            ${row("Project stage", s.stage || "Not specified")}
            ${row("City", s.city || "Not specified")}
            ${row("Floor plan", attachments.length ? "Attached ✔" : "Not attached")}
            ${s.message ? row("Notes", s.message) : ""}
          </table>
          <div style="margin-top:20px;padding:12px;background:#d4a843;border-radius:8px;text-align:center;">
            <a href="tel:${s.phone}" style="color:#0a1628;font-weight:700;font-size:14px;text-decoration:none;">Call ${s.name} → ${s.phone}</a>
          </div>
        </div>
        <p style="color:#556677;font-size:11px;text-align:center;margin-top:16px;">Architect drawing request — growmoresolutions.com</p>
      </div>`;

    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: "design@growmoresolutions.com",
      subject: `Architect drawing request: ${s.name}${s.city ? " — " + s.city : ""}`,
      html: htmlBody,
      attachments,
    });

    // Acknowledgement to the architect
    if (email && z.string().email().safeParse(email).success) {
      transport
        .sendMail({
          from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
          to: email,
          subject: `We've received your project — Grow More Solutions design team`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
              <div style="background:#0a1628;padding:32px;border-radius:12px;border:1px solid #1e3050;">
                <h1 style="color:#d4a843;margin:0 0 8px;font-size:22px;">Thank you, ${s.name}!</h1>
                <p style="color:#ffffff;font-size:14px;line-height:1.6;margin:0 0 12px;">
                  Our design team has received your project. We'll review it and respond within
                  <strong style="color:#d4a843;">1 working day</strong> with next steps for your automation drawings.
                </p>
                <p style="color:#8899aa;font-size:13px;line-height:1.6;margin:0;">
                  Your floor plans are kept confidential, and we never contact your clients — your name stays on the drawings.
                </p>
              </div>
              <p style="color:#556677;font-size:11px;text-align:center;margin-top:16px;">
                Grow More Solutions — 15+ Years · 600+ Projects · 25+ Cities
              </p>
            </div>`,
        })
        .catch((err: unknown) => console.error("Architect ack email error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Architect form error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
