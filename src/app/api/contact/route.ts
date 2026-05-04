import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    const body = await req.json();
    const { name, phone, email, propertyType, city, budget, features, message } =
      body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Build HTML email
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #0a1628; padding: 24px; border-radius: 12px; border: 1px solid #1e3050;">
          <h2 style="color: #d4a843; margin: 0 0 20px;">New Lead from GrowMoreSolutions.com</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050; width: 140px;">Name</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; font-weight: 600; border-bottom: 1px solid #1e3050;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Phone</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; font-weight: 600; border-bottom: 1px solid #1e3050;">
                <a href="tel:${phone}" style="color: #d4a843; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Email</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">
                <a href="mailto:${email}" style="color: #d4a843; text-decoration: none;">${email || "Not provided"}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Property Type</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${propertyType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">City</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${city || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Budget</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; border-bottom: 1px solid #1e3050;">Features</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px; border-bottom: 1px solid #1e3050;">${features?.length ? features.join(", ") : "None selected"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 12px; color: #8899aa; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 12px; color: #ffffff; font-size: 14px;">${message}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 20px; padding: 12px; background: #d4a843; border-radius: 8px; text-align: center;">
            <a href="tel:${phone}" style="color: #0a1628; font-weight: 700; font-size: 14px; text-decoration: none;">
              Call ${name} Now → ${phone}
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
      subject: `New Lead: ${name} — ${propertyType || "Home Automation"} in ${city || "India"}`,
      html: htmlBody,
    });

    // Send acknowledgment email to visitor (if email provided)
    if (email) {
      const ackHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0a1628; padding: 32px; border-radius: 12px; border: 1px solid #1e3050;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h1 style="color: #d4a843; margin: 0; font-size: 22px;">Thank You, ${name}!</h1>
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
        subject: `Thank you for contacting Grow More Solutions, ${name}!`,
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
