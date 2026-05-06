import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `Terms of Service`,
  description: `Terms of service for ${COMPANY.name} (growmoresolutions.com). Terms governing the use of our website and home automation services.`,
  alternates: { canonical: "https://growmoresolutions.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Terms of Service", url: "/terms" },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-navy-400 mb-10">
            Last updated: April 30, 2026
          </p>

          <div className="space-y-8 text-navy-300 leading-relaxed text-sm">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using growmoresolutions.com (the
                &quot;Website&quot;), you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our Website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Services
              </h2>
              <p>
                {COMPANY.name} provides home and building automation
                consultation, design, installation, programming, and maintenance
                services across India. Service scope, pricing, and timelines are
                defined in individual project proposals and agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Quotes and Pricing
              </h2>
              <p>
                All quotes provided through our website, including the
                interactive quote calculator, are estimates for informational
                purposes only. Final pricing is determined after a detailed site
                survey and consultation. Quotes are valid for 30 days from the
                date of issue unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Project Agreements
              </h2>
              <p>
                All automation projects are governed by separate project
                agreements that specify scope of work, pricing, payment terms,
                timelines, warranty, and other conditions. These Terms of
                Service apply to website usage and do not replace project-specific
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this Website — including text, graphics, logos,
                images, design elements, and software — is the property of{" "}
                {COMPANY.name} or its content suppliers and is protected by
                Indian and international copyright laws. You may not reproduce,
                distribute, modify, or create derivative works without our
                written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Third-Party Brands
              </h2>
              <p>
                All brand names, product names, logos, and trademarks mentioned
                on this website — including but not limited to KNX, Crestron,
                Control4, Lutron, Sonos, Schneider Electric, ABB, Philips Hue,
                Axis Communications, Bosch, CP Plus, Godrej, Yale, Samsung,
                Hikvision, Dahua, Wipro, and Sonoff — are the property of
                their respective owners. {COMPANY.name} is a certified
                partner/dealer of select brands as indicated on our{" "}
                <a href="/about/certifications" className="text-gold-500 hover:text-gold-400">certifications page</a>.
                Mention of any brand on our website is for informational
                purposes and does not imply endorsement by those companies of
                our website content. All product pricing referenced on this
                website is indicative and subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Warranty and Liability
              </h2>
              <p>
                Product warranties are provided by the respective manufacturers.
                Installation workmanship warranty terms are specified in
                individual project agreements. {COMPANY.name} is not liable for
                any indirect, incidental, or consequential damages arising from
                the use of our website or services. Our total liability is
                limited to the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Website Accuracy
              </h2>
              <p>
                We strive to keep all information on our website accurate and
                up-to-date. However, we do not guarantee that all content is
                error-free, complete, or current. Pricing, specifications, and
                availability are subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                9. User Conduct
              </h2>
              <p>
                You agree not to use this Website for any unlawful purpose, to
                not attempt to gain unauthorized access to any part of the
                Website, and to not interfere with the proper functioning of the
                Website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India. Any disputes arising from these Terms
                or your use of the Website shall be subject to the exclusive
                jurisdiction of the courts in New Delhi, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                11. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                become effective upon posting to this page. Continued use of the
                Website after changes constitutes acceptance of the revised
                terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                12. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at{" "}
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
