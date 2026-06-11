import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsSection from "@/components/home/StatsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TrustSection from "@/components/home/TrustSection";
import ExperienceCenterSection from "@/components/home/ExperienceCenterSection";
import ProcessSection from "@/components/home/ProcessSection";
import AudienceSection from "@/components/home/AudienceSection";
import CitiesSection from "@/components/home/CitiesSection";
import CTASection from "@/components/home/CTASection";
import InstagramFeed from "@/components/ui/InstagramFeed";
import { COMPANY } from "@/lib/constants";
import { createMetadata, localBusinessJsonLd, faqJsonLd } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: `Home Automation Company in India — ${COMPANY.experience} Years Experience`,
  description: `India's most experienced home automation company. ${COMPANY.experience} years, ${COMPANY.projectsCompleted} projects. Smart lighting, security, HVAC & home theater. Free consultation.`,
  path: "",
});

const homeFaqs = [
  {
    question: "What is the cost of home automation in India?",
    answer:
      "Home automation costs in India range from ₹2-5 Lakh for basic lighting and security automation, ₹5-15 Lakh for comprehensive smart home packages, and ₹15-50 Lakh+ for luxury whole-home automation built on premium standards like KNX. The exact cost depends on your home size, number of rooms, and automation features required.",
  },
  {
    question: "Which is the best home automation company in India?",
    answer:
      `${COMPANY.name} is one of India's most experienced home automation companies, with ${COMPANY.experience} years in the industry, ${COMPANY.projectsCompleted} completed projects, and presence across ${COMPANY.citiesServed} cities. We design and install on open standards like KNX with our own certified in-house engineers, offering end-to-end smart home solutions from consultation to lifetime support and AMC.`,
  },
  {
    question: "Does home automation stop working if the internet or power goes off?",
    answer:
      "Not if it's designed properly. We build wired, locally-controlled systems (such as KNX) where your keypads, lights and curtains keep working without internet — and basic scenes continue during a power cut on backup. Internet is only needed for remote app access, not for your home to function day to day.",
  },
  {
    question: "Will my smart home become obsolete in a few years?",
    answer:
      "We build on open standards like KNX rather than a single proprietary brand, so your system stays expandable and upgradeable for years. You can add devices or swap a component without ripping out the whole system — and you're never locked into one vendor's app or pricing.",
  },
  {
    question: "Is home automation worth it in India?",
    answer:
      "Yes, home automation is increasingly worth it in India. Benefits include 20-40% energy savings on electricity bills, enhanced security with smart surveillance, convenience of voice and app control, and significant property value increase. With falling technology costs and growing smart home ecosystem in India, automation delivers strong ROI over 3-5 years.",
  },
  {
    question: "Do home automation companies offer after-sales support and AMC?",
    answer:
      `Yes, ${COMPANY.name} provides comprehensive after-sales support including a 1-year warranty, Annual Maintenance Contracts (AMC), remote diagnostics, firmware updates, on-site maintenance, and 24/7 emergency support for AMC clients. We also offer a live Experience Center in New Delhi where you can see automation systems working before you invest.`,
  },
  {
    question: "What systems can be automated in a home?",
    answer:
      "In a modern Indian home, you can automate lighting (scene control, dimming, scheduling), security (CCTV, smart locks, motion sensors), climate control (AC, fans, temperature zones), curtains and blinds (motorized operation), home theater (AV systems, multi-room audio), and voice control (Alexa, Google Home, Siri integration). All systems can be unified into a single app or control panel.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />

      {/* Schema: FAQ — targets PAA and featured snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(homeFaqs)),
        }}
      />

      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <WhyUsSection />
      <TrustSection />
      <ExperienceCenterSection />
      <ProcessSection />
      <AudienceSection />
      <CitiesSection />

      {/* Instagram Feed — real project images */}
      <InstagramFeed count={6} />

      {/* FAQ Section — visible on page for SEO */}
      <section className="py-12 sm:py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <div
                key={faq.question}
                className="glass-card rounded-xl p-5"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-navy-300 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
