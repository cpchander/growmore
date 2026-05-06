import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `Privacy Policy`,
  description: `Privacy policy for ${COMPANY.name} (growmoresolutions.com). Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: "https://growmoresolutions.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Privacy Policy", url: "/privacy" },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-navy-400 mb-10">
            Last updated: April 30, 2026
          </p>

          <div className="space-y-8 text-navy-300 leading-relaxed text-sm">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Introduction
              </h2>
              <p className="mb-2">
                {COMPANY.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                operates the website growmoresolutions.com. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                personal data when you visit our website or use our services.
              </p>
              <p>
                This policy is published in compliance with the Information
                Technology Act, 2000 (Section 43A), the Information Technology
                (Reasonable Security Practices and Procedures and Sensitive
                Personal Data or Information) Rules, 2011, and the Digital
                Personal Data Protection Act, 2023 (DPDPA) as applicable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Data We Collect and Purpose
              </h2>
              <p className="mb-3">
                We collect personal data only for specified, lawful purposes. Below is what we collect and why:
              </p>
              <p className="mb-2">
                <strong className="text-white">Contact &amp; Consultation Data:</strong>{" "}
                Name, email address, phone number, city, property type, and
                budget range — collected when you fill out our contact form, use the quote calculator, or reach out via WhatsApp. <strong className="text-white">Purpose:</strong> To respond to your inquiry, provide consultation services, and send project proposals.
              </p>
              <p className="mb-2">
                <strong className="text-white">Usage Data:</strong> IP address,
                browser type, device information, pages visited, time spent on
                pages, and referring URLs — collected automatically via Google Analytics (GA4). <strong className="text-white">Purpose:</strong> To analyze website traffic, improve user experience, and measure content effectiveness.
              </p>
              <p>
                <strong className="text-white">Cookies &amp; Tracking:</strong> We use cookies
                and similar technologies to enhance your browsing
                experience. Essential cookies are required for site functionality. Analytics cookies (Google Analytics) are used to understand traffic patterns. You may manage cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Legal Basis for Processing
              </h2>
              <p className="mb-2">We process your personal data based on:</p>
              <p className="mb-2">
                <strong className="text-white">Consent:</strong> When you voluntarily submit your information through our contact forms, quote calculator, or WhatsApp, you consent to our processing of that data for the stated purposes.
              </p>
              <p className="mb-2">
                <strong className="text-white">Legitimate Use:</strong> Under DPDPA Section 6, we may process data for responding to inquiries you initiate and for performing services you request.
              </p>
              <p>
                <strong className="text-white">Legal Obligation:</strong> We may process data as required to comply with applicable Indian laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. How We Use Your Information
              </h2>
              <p>
                Respond to your inquiries and provide consultation services.
                Send project quotes and follow-up communications. Improve our
                website, services, and user experience. Send relevant updates
                about home automation (only with your explicit consent). Analyze website
                traffic and usage patterns. Comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Information Sharing &amp; Third-Party Processors
              </h2>
              <p className="mb-2">
                We do not sell, trade, or rent your personal information to third
                parties.
              </p>
              <p>
                We may share data with the following categories of service providers who process data on our behalf under contractual obligations:
                email delivery services (ZeptoMail by Zoho for sending form confirmations),
                analytics services (Google Analytics for traffic analysis),
                hosting providers (Vercel for website hosting),
                and communication tools (WhatsApp/Meta for direct messaging).
                Each provider processes data only as instructed and is bound by appropriate data protection terms. We may also disclose information if required by law, court order, or to protect our rights and safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Data Security
              </h2>
              <p>
                In accordance with IT Act Section 43A and the SPDI Rules 2011,
                we implement reasonable security practices and procedures to
                protect your personal data. This includes encrypted form
                submissions (HTTPS/TLS), secure email delivery, access controls,
                and regular security reviews. However, no method of electronic
                transmission or storage is completely secure. While we strive to
                protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to
                fulfil the purposes for which it was collected, or as required
                by applicable law. Contact form submissions and consultation
                data are retained for up to 3 years from the date of last
                interaction. You may request earlier deletion at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Third-Party Services
              </h2>
              <p>
                Our website uses Google Analytics (GA4) for traffic analysis,
                ZeptoMail for transactional emails, and may embed content from
                YouTube. These services operate under their own privacy
                policies. Google Analytics data is anonymized and not linked
                to individual users. We recommend reviewing the privacy policies
                of these services for details on their data practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Your Rights Under DPDPA 2023
              </h2>
              <p className="mb-2">
                Under the Digital Personal Data Protection Act, 2023, you have the following rights:
              </p>
              <p className="mb-2">
                <strong className="text-white">Right to Access:</strong> You may request confirmation of whether we process your data and obtain a summary of your personal data and processing activities.
              </p>
              <p className="mb-2">
                <strong className="text-white">Right to Correction &amp; Erasure:</strong> You may request correction of inaccurate data or deletion of your personal data, subject to legal retention requirements.
              </p>
              <p className="mb-2">
                <strong className="text-white">Right to Withdraw Consent:</strong> You may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing performed before withdrawal.
              </p>
              <p className="mb-2">
                <strong className="text-white">Right to Grievance Redressal:</strong> You may raise a complaint regarding our data practices using the contact details below.
              </p>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {COMPANY.email}
                </a>
                . We will respond within 30 days of receiving your request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18. We do not
                knowingly collect personal data from children. If we become
                aware that we have collected data from a child, we will delete
                it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                11. Grievance Officer
              </h2>
              <p>
                In accordance with the IT Act 2000 and DPDPA 2023, the
                Grievance Officer for data-related concerns is:
              </p>
              <p className="mt-2">
                <strong className="text-white">Name:</strong> Anupam Mahajan<br />
                <strong className="text-white">Designation:</strong> Co-Founder &amp; Managing Director<br />
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {COMPANY.email}
                </a><br />
                <strong className="text-white">Address:</strong> Plot No. 4, Sector 12A, Dwarka, New Delhi, India
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                12. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy to reflect changes in our
                practices or applicable law. Changes will be posted on this
                page with an updated revision date. We encourage you to review
                this page periodically. Continued use of our website after
                changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {COMPANY.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {COMPANY.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
