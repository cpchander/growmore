import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PlannerClient from "./PlannerClient";

export const metadata: Metadata = {
  title: `Smart Home Planner — Build & Price Your Automation System`,
  description: `Design your smart home online. Pick lighting, security, climate, theater & audio products from top brands like KNX, Crestron, Control4, Lutron. Compare prices and get an instant estimate. ${COMPANY.experience} years expertise.`,
  alternates: { canonical: "https://growmoresolutions.com/smart-home-planner" },
};

const FAQS = [
  {
    question: "How accurate is the Smart Home Planner estimate?",
    answer:
      "The planner provides a ballpark estimate based on product retail pricing. Actual project costs include installation, wiring, programming, and commissioning — typically 30-50% of hardware cost. Book a free consultation for a detailed quote.",
  },
  {
    question: "Can I mix brands in my smart home?",
    answer:
      "Yes, many homes use a mix — for example, Lutron for lighting, Sonos for audio, and generic Wi-Fi devices for climate. Our engineers design interoperability between brands using integration platforms.",
  },
  {
    question: "What's the difference between Standard, Premium, and Luxury tiers?",
    answer:
      "Standard uses Wi-Fi/Zigbee devices (budget-friendly, easy DIY). Premium includes brands like KNX, Lutron, Control4 (professional-grade, reliable, dealer-installed). Luxury means Crestron-level custom systems (enterprise-grade, fully bespoke).",
  },
  {
    question: "Does the estimate include installation?",
    answer:
      "No, the planner shows hardware costs only. Installation, programming, wiring, and commissioning are quoted separately after a site survey. Typical installation runs 30-50% of hardware cost depending on complexity.",
  },
];

export default function SmartHomePlannerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Smart Home Planner", url: "/smart-home-planner" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQS)),
        }}
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Smart Home Planner</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Smart Home{" "}
              <span className="text-gradient-gold">Planner</span>
            </h1>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Pick automation products from our library, compare brands
              side-by-side, and get an instant cost estimate for your project.
            </p>
            <p className="mt-2 text-sm text-navy-400">
              Hardware pricing only. Installation quoted separately after site survey.
            </p>
            <p className="mt-2 text-xs text-navy-500 max-w-xl mx-auto">
              Disclaimer: All prices shown are indicative and may vary based on
              quantity, location, availability, taxes, and prevailing market
              rates. Final pricing will be confirmed after a site survey and
              detailed consultation.
            </p>
          </div>

          {/* Interactive Planner (client component) */}
          <PlannerClient />

          {/* FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-navy-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-300 mb-4">
              Ready for an exact quote? Our engineers will do a free site survey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
