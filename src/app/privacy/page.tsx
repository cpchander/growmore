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
              <p>
                {COMPANY.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                operates the website growmoresolutions.com. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <p className="mb-2">
                <strong className="text-white">Personal Information:</strong>{" "}
                Name, email address, phone number, city, property type, and
                budget range — provided when you fill out our contact form, get
                a quote, or reach out via WhatsApp.
              </p>
              <p className="mb-2">
                <strong className="text-white">Usage Data:</strong> IP address,
                browser type, device information, pages visited, time spent on
                pages, and referring URLs — collected automatically via analytics
                tools.
              </p>
              <p>
                <strong className="text-white">Cookies:</strong> We use cookies
                and similar tracking technologies to enhance your browsing
                experience and analyze site traffic.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. How We Use Your Information
              </h2>
              <p className="mb-2">We use collected information to:</p>
              <p>
                Respond to your inquiries and provide consultation services.
                Send project quotes and follow-up communications. Improve our
                website, services, and user experience. Send relevant updates
                about home automation (with your consent). Analyze website
                traffic and usage patterns. Comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share information with trusted service providers
                who assist in operating our website and conducting business,
                provided they agree to keep information confidential. We may also
                disclose information if required by law or to protect our rights
                and safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information. However, no method of electronic
                transmission or storage is 100% secure. While we strive to
                protect your data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Third-Party Services
              </h2>
              <p>
                Our website may use third-party analytics services (such as
                Google Analytics), embedded content (such as YouTube videos), and
                communication tools (such as WhatsApp). These services have
                their own privacy policies and may collect information as
                described in their respective policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You may opt out of marketing communications at any
                time. To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to individuals under 18. We do not
                knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date. We
                encourage you to review this page periodically.
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
