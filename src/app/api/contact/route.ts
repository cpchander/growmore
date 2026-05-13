import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// ============================================================
// SECURITY: HTML Escaping (fixes C2 — HTML injection in emails)
// ============================================================
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================
// SECURITY: Zod Input Validation (fixes H2 — no validation)
// ============================================================
const contactSchema = z.object({
  name: z.string().min(2, "Name too short").max(100, "Name too long").trim(),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^[+]?[0-9\s\-()]{7,15}$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address").max(254).optional().or(z.literal("")),
  propertyType: z.string().max(100).optional(),
  city: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),
  features: z.array(z.string().max(100)).max(20).optional(),
  message: z.string().max(2000, "Message too long").optional(),
  // SECURITY: Honeypot field (fixes H1 — bot detection)
  website: z.string().max(0, "Bot detected").optional(),
});

// ============================================================
// SECURITY: Rate Limiting (fixes H1 — no rate limiting)
// In-memory store. Resets on cold start (Vercel serverless).
// For persistent rate limiting, use @upstash/ratelimit.
// ============================================================
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // max requests per window
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Clean up stale entries every 30 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 30 * 60 * 1000);

// ============================================================
// SMTP Transport
// ============================================================
const transport = nodemailer.createTransport({
  host: "smtp.zeptomail.in",
  port: 587,
  auth: {
    user: "emailapikey",
    pass: process.env.ZEPTOMAIL_API_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    // ========================================================
    // SECURITY: CSRF Protection (fixes M3 — origin check)
    // ========================================================
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const allowedOrigins = [
      "https://growmoresolutions.com",
      "https://www.growmoresolutions.com",
    ];

    // In production, reject requests from unknown origins
    if (process.env.NODE_ENV === "production") {
      const requestOrigin = origin || (referer ? new URL(referer).origin : null);
      if (!requestOrigin || !allowedOrigins.includes(requestOrigin)) {
        return NextResponse.json(
          { error: "Forbidden — invalid origin" },
          { status: 403 }
        );
      }
    }

    // ========================================================
    // SECURITY: Rate Limiting Check
    // ========================================================
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // ========================================================
    // SECURITY: Parse & Validate Input with Zod
    // ========================================================
    const rawBody = await req.json();
    const parseResult = contactSchema.safeParse(rawBody);

    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0];
      return NextResponse.json(
        { error: firstError?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const { name, phone, email, propertyType, city, budget, features, message, website } =
      parseResult.data;

    // SECURITY: Honeypot check — bots fill hidden fields
    if (website) {
      // Silently accept but don't send email (don't reveal detection)
      return NextResponse.json({ success: true });
    }

    // ========================================================
    // SECURITY: Escape ALL user inputs before HTML interpolation
    // ========================================================
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = email ? escapeHtml(email) : "";
    const safePropertyType = propertyType ? escapeHtml(propertyType) : "";
    const safeCity = city ? escapeHtml(city) : "";
    const safeBudget = budget ? escapeHtml(budget) : "";
    const safeFeatures = features?.map(escapeHtml) || [];
    const safeMessage = message ? escapeHtml(message) : "";

    // Build HTML email with escaped values
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #0a1628; padding: 24px; border-radius: 12px; border: 1px solid #1e3050;">
          <h2 style="color: #d4a843; margin: 0 0 20px;">New Lead from GrowMoreSolutions.com</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050; width: 140px;">Name</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; font-weight: 600; border-bottom: 1px solid #1e3050;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Phone</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; font-weight: 600; border-bottom: 1px solid #1e3050;">
                <a href="tel:${safePhone}" style="color: #d4a843; text-decoration: none;">${safePhone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Email</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">
                <a href="mailto:${safeEmail}" style="color: #d4a843; text-decoration: none;">${safeEmail || "Not provided"}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Property Type</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${safePropertyType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">City</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${safeCity || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Budget</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${safeBudget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Features</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${safeFeatures.length ? safeFeatures.join(", ") : "None selected"}</td>
            </tr>
            ${safeMessage ? `
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px;">${safeMessage}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 20px; padding: 12px; background: #d4a843; border-radius: 8px; text-align: center;">
            <a href="tel:${safePhone}" style="color: #0a1628; font-weight: 700; font-size: 14px; text-decoration: none;">
              Call ${safeName} Now → ${safePhone}
            </a>
          </div>
        </div>

        <p style="color: #556677; font-size: 11px; text-align: center; margin-top: 16px;">
          Lead captured from growmoresolutions.com contact form
        </p>
      </div>
    `;

    await transport.sendMail({
      from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
      to: "sales@growmoresolutions.com",
      subject: `New Lead: ${safeName} — ${safePropertyType || "Home Automation"} in ${safeCity || "India"}`,
      html: htmlBody,
    });

    // Send acknowledgment email to visitor (if valid email provided)
    if (email && z.string().email().safeParse(email).success) {
      const ackHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0a1628; padding: 32px; border-radius: 12px; border: 1px solid #1e3050;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #d4a843; margin: 0; font-size: 22px;">Thank You, ${safeName}!</h1>
              <p style="color: #8899aa; font-size: 14px; margin-top: 8px;">We have received your inquiry.</p>
            </div>

            <div style="background: #0d1f35; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <p style="color: #ffffff; font-size: 14px; margin: 0 0 12px; line-height: 1.6;">
                Our smart home expert will reach out to you within <strong style="color: #d4a843;">2 hours</strong> during business hours (Mon–Sat, 9 AM – 6 PM IST).
              </p>
              <p style="color: #8899aa; font-size: 13px; margin: 0; line-height: 1.6;">
                In the meantime, you can explore our resources to learn more about home automation:
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0;">
                    <a href="https://growmoresolutions.com/blog/home-automation-cost-india-complete-guide" style="color: #d4a843; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → Home Automation Cost Guide
                    </a>
                    <p style="color: #667788; font-size: 12px; margin: 4px 0 0;">Detailed pricing from ₹2 Lakh to ₹50 Lakh+</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #1e3050;">
                    <a href="https://growmoresolutions.com/blog/knx-vs-crestron-vs-control4-india" style="color: #d4a843; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → KNX vs Crestron vs Control4
                    </a>
                    <p style="color: #667788; font-size: 12px; margin: 4px 0 0;">Compare the top smart home brands</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #1e3050;">
                    <a href="https://growmoresolutions.com/get-quote" style="color: #d4a843; text-decoration: none; font-size: 14px; font-weight: 600;">
                      → Try Our Smart Home Quote Calculator
                    </a>
                    <p style="color: #667788; font-size: 12px; margin: 4px 0 0;">Get an instant estimate for your home</p>
                  </td>
                </tr>
              </table>
            </div>

            <div style="text-align: center; margin-top: 24px; padding: 16px; background: #d4a843; border-radius: 8px;">
              <p style="color: #0a1628; font-size: 13px; margin: 0 0 4px; font-weight: 600;">Need immediate help?</p>
              <a href="tel:+919999994736" style="color: #0a1628; font-size: 16px; font-weight: 700; text-decoration: none;">
                Call us: +91 99999 94736
              </a>
            </div>
          </div>

          <div style="text-align: center; margin-top: 16px;">
            <p style="color: #556677; font-size: 11px; margin: 0 0 4px;">
              Grow More Solutions — India's Most Experienced Home Automation Company
            </p>
            <p style="color: #445566; font-size: 10px; margin: 0;">
              15+ Years · 300+ Projects · 12+ Cities
            </p>
          </div>
        </div>
      `;

      // Send ack email — non-blocking (don't fail the response if this fails)
      transport.sendMail({
        from: '"Grow More Solutions" <noreply@growmoresolutions.com>',
        to: email,
        subject: `Thank you for contacting Grow More Solutions, ${safeName}!`,
        html: ackHtml,
      }).catch((err: unknown) => {
        console.error("Ack email send error:", err);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
