import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, CheckCircle2, XCircle, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: `KNX vs Crestron vs Control4 vs Lutron — Comparison Guide India (2026)`,
  description: `Detailed comparison of KNX, Crestron, Control4 & Lutron for Indian homes. Pricing, reliability, features, pros & cons. Expert guide from ${COMPANY.name} — certified partner for all 4 brands.`,
  alternates: { canonical: "https://growmoresolutions.com/compare" },
};

const COMPARISON_DATA = [
  {
    feature: "Protocol Type",
    knx: "Open Standard",
    crestron: "Proprietary",
    control4: "Proprietary",
    lutron: "Proprietary",
  },
  {
    feature: "Connection",
    knx: "Wired (Bus)",
    crestron: "Wired (Cresnet + IP)",
    control4: "Wired + Wireless (ZigBee)",
    lutron: "Wired + Wireless (RF)",
  },
  {
    feature: "Price Range (India)",
    knx: "₹8–30 Lakh",
    crestron: "₹15–50 Lakh+",
    control4: "₹5–20 Lakh",
    lutron: "₹1.5–10 Lakh",
  },
  {
    feature: "Best For",
    knx: "Long-term, open system",
    crestron: "Ultra-luxury, custom AV",
    control4: "Premium ease-of-use",
    lutron: "Lighting & shading",
  },
  {
    feature: "Vendor Lock-in",
    knx: "None (500+ brands)",
    crestron: "High",
    control4: "Moderate",
    lutron: "Moderate (lighting only)",
  },
  {
    feature: "Lifespan",
    knx: "20+ years",
    crestron: "15+ years",
    control4: "10–15 years",
    lutron: "15+ years",
  },
  {
    feature: "Retrofit Friendly",
    knx: "Limited",
    crestron: "Limited",
    control4: "Good (wireless option)",
    lutron: "Excellent (Caseta/RadioRA)",
  },
  {
    feature: "AV Distribution",
    knx: "Via integration",
    crestron: "Industry-leading",
    control4: "Very Good",
    lutron: "Not applicable",
  },
  {
    feature: "Lighting Quality",
    knx: "Excellent",
    crestron: "Excellent",
    control4: "Very Good",
    lutron: "Best-in-class",
  },
  {
    feature: "Voice Control",
    knx: "Via gateway",
    crestron: "Alexa, Google",
    control4: "Alexa, Google",
    lutron: "Alexa, Google, Siri",
  },
  {
    feature: "User Interface",
    knx: "Third-party panels",
    crestron: "Custom touch panels",
    control4: "OS 3 (excellent)",
    lutron: "App + Keypads",
  },
  {
    feature: "DIY Changes",
    knx: "Needs ETS software",
    crestron: "Needs programmer",
    control4: "Some via app",
    lutron: "Easy via app",
  },
];

type FeatureSupport = "yes" | "no" | "partial";

const FEATURE_MATRIX: {
  feature: string;
  knx: FeatureSupport;
  crestron: FeatureSupport;
  control4: FeatureSupport;
  lutron: FeatureSupport;
}[] = [
  { feature: "Smart Lighting", knx: "yes", crestron: "yes", control4: "yes", lutron: "yes" },
  { feature: "Motorized Curtains/Blinds", knx: "yes", crestron: "yes", control4: "yes", lutron: "yes" },
  { feature: "HVAC / Climate Control", knx: "yes", crestron: "yes", control4: "yes", lutron: "no" },
  { feature: "Multi-Room Audio", knx: "partial", crestron: "yes", control4: "yes", lutron: "no" },
  { feature: "Home Theater / AV", knx: "partial", crestron: "yes", control4: "yes", lutron: "no" },
  { feature: "Security / CCTV", knx: "partial", crestron: "yes", control4: "yes", lutron: "no" },
  { feature: "Video Intercom", knx: "partial", crestron: "yes", control4: "yes", lutron: "no" },
  { feature: "Energy Monitoring", knx: "yes", crestron: "partial", control4: "partial", lutron: "partial" },
  { feature: "Biometric Access", knx: "yes", crestron: "partial", control4: "partial", lutron: "no" },
  { feature: "Pool / Garden Automation", knx: "yes", crestron: "yes", control4: "partial", lutron: "no" },
  { feature: "BMS Integration", knx: "yes", crestron: "yes", control4: "partial", lutron: "no" },
  { feature: "Open Standard / No Lock-in", knx: "yes", crestron: "no", control4: "no", lutron: "no" },
];

function SupportIcon({ value }: { value: FeatureSupport }) {
  if (value === "yes")
    return <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />;
  if (value === "no")
    return <XCircle className="w-4 h-4 text-red-500/60 mx-auto" />;
  return <Minus className="w-4 h-4 text-yellow-500 mx-auto" />;
}

const RECOMMENDATIONS = [
  {
    profile: "New Villa / Penthouse (₹3Cr+ Property)",
    recommendation: "KNX",
    reason:
      "Wired reliability, open standard, 20+ year lifespan. Best long-term investment for high-value properties where wiring during construction is possible.",
  },
  {
    profile: "Ultra-Luxury / Celebrity Home",
    recommendation: "Crestron",
    reason:
      "Deep customization, premium AV distribution, custom touch-panel interfaces. For clients who want the highest level of personalization and premium brand appeal.",
  },
  {
    profile: "Premium Apartment (Retrofit)",
    recommendation: "Control4",
    reason:
      "Excellent wireless support (ZigBee), great user interface, broad device compatibility. Best balance of power and retrofit-friendliness.",
  },
  {
    profile: "Lighting-Focused Design",
    recommendation: "Lutron",
    reason:
      "Best dimming quality in the industry, beautiful keypads, excellent shading. Perfect as a standalone lighting layer or paired with KNX/Crestron.",
  },
  {
    profile: "Builder / Bulk Deployment",
    recommendation: "KNX or Control4",
    reason:
      "KNX for premium projects (wired reliability at scale), Control4 for mid-premium (faster deployment with wireless). Both offer bulk pricing advantages.",
  },
];

const FAQS = [
  {
    question: "Which is the best home automation system in India?",
    answer:
      "The best system depends on your property, budget, and priorities. KNX is best for new construction with a long-term view. Crestron is best for ultra-luxury with heavy AV needs. Control4 offers the best balance of features and price. Lutron is the industry benchmark for architectural lighting control. As certified partners for all four, we recommend based on your specific needs.",
  },
  {
    question: "Can I mix different brands in one home?",
    answer:
      "Yes, and it's common in high-end installations. For example, KNX for core building automation + Lutron for precision lighting + Sonos for audio. Or Crestron for AV + Lutron for lighting. Our team designs hybrid systems that leverage each brand's strengths.",
  },
  {
    question: "Which system is most reliable?",
    answer:
      "KNX is the most reliable due to its wired, decentralized architecture. Each device operates independently — no single point of failure. Crestron and Lutron (wired) are also highly reliable. Control4's wireless devices are slightly less reliable in RF-congested environments but perform well in most homes.",
  },
  {
    question: "What's the maintenance cost for these systems?",
    answer:
      "KNX has near-zero maintenance (no batteries, no wireless interference). Crestron and Control4 may need occasional firmware updates and programming adjustments (₹10,000–30,000/year). Lutron wired systems are very low maintenance. All systems benefit from an annual checkup.",
  },
];

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Compare", url: "/compare" },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Compare Systems</span>
          </nav>

          {/* Header */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            KNX vs Crestron vs Control4 vs Lutron —{" "}
            <span className="text-gradient-gold">India Comparison Guide</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-3xl mb-4">
            Choosing the right home automation system is one of the most
            important decisions for your smart home. We&apos;re certified
            partners for all four major brands — here&apos;s an honest,
            experience-based comparison.
          </p>
          <p className="text-sm text-navy-400 mb-12">
            Based on {COMPANY.experience} years and {COMPANY.projectsCompleted}{" "}
            projects across KNX, Crestron, Control4, and Lutron installations in
            India.
          </p>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-navy-700">
                    <th className="text-left py-3 px-3 text-navy-400 font-medium min-w-[140px]">
                      Feature
                    </th>
                    <th className="text-left py-3 px-3 min-w-[130px]">
                      <Link
                        href="/brands/knx"
                        className="text-gold-500 hover:text-gold-400 font-bold"
                      >
                        KNX
                      </Link>
                    </th>
                    <th className="text-left py-3 px-3 min-w-[130px]">
                      <Link
                        href="/brands/crestron"
                        className="text-gold-500 hover:text-gold-400 font-bold"
                      >
                        Crestron
                      </Link>
                    </th>
                    <th className="text-left py-3 px-3 min-w-[130px]">
                      <Link
                        href="/brands/control4"
                        className="text-gold-500 hover:text-gold-400 font-bold"
                      >
                        Control4
                      </Link>
                    </th>
                    <th className="text-left py-3 px-3 min-w-[130px]">
                      <Link
                        href="/brands/lutron"
                        className="text-gold-500 hover:text-gold-400 font-bold"
                      >
                        Lutron
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-navy-800 hover:bg-navy-900/50"
                    >
                      <td className="py-3 px-3 text-navy-300 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3 text-navy-300">{row.knx}</td>
                      <td className="py-3 px-3 text-navy-300">
                        {row.crestron}
                      </td>
                      <td className="py-3 px-3 text-navy-300">
                        {row.control4}
                      </td>
                      <td className="py-3 px-3 text-navy-300">{row.lutron}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feature Matrix */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Feature Support Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-navy-700">
                    <th className="text-left py-3 px-3 text-navy-400 font-medium min-w-[180px]">
                      Feature
                    </th>
                    <th className="py-3 px-3 text-center font-bold text-white min-w-[80px]">
                      KNX
                    </th>
                    <th className="py-3 px-3 text-center font-bold text-white min-w-[80px]">
                      Crestron
                    </th>
                    <th className="py-3 px-3 text-center font-bold text-white min-w-[80px]">
                      Control4
                    </th>
                    <th className="py-3 px-3 text-center font-bold text-white min-w-[80px]">
                      Lutron
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_MATRIX.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-navy-800 hover:bg-navy-900/50"
                    >
                      <td className="py-3 px-3 text-navy-300">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3">
                        <SupportIcon value={row.knx} />
                      </td>
                      <td className="py-3 px-3">
                        <SupportIcon value={row.crestron} />
                      </td>
                      <td className="py-3 px-3">
                        <SupportIcon value={row.control4} />
                      </td>
                      <td className="py-3 px-3">
                        <SupportIcon value={row.lutron} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-navy-500 mt-3 flex items-center gap-4">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" /> Full
                support
              </span>
              <span className="flex items-center gap-1">
                <Minus className="w-3 h-3 text-yellow-500" /> Via integration
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-500/60" /> Not supported
              </span>
            </p>
          </div>

          {/* Recommendations */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Our Recommendations
            </h2>
            <div className="space-y-4">
              {RECOMMENDATIONS.map((rec) => (
                <div key={rec.profile} className="glass-card rounded-xl p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="font-semibold text-white">{rec.profile}</h3>
                    <span className="text-xs bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded-full w-fit">
                      {rec.recommendation}
                    </span>
                  </div>
                  <p className="text-sm text-navy-300">{rec.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Deep Dive Into Each Brand
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { slug: "knx", name: "KNX", tag: "Open Standard" },
                { slug: "crestron", name: "Crestron", tag: "Ultra Luxury" },
                { slug: "control4", name: "Control4", tag: "Best Balance" },
                { slug: "lutron", name: "Lutron", tag: "Lighting Leader" },
              ].map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="group glass-card rounded-xl p-5 text-center hover:border-gold-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-gold-500">
                      {brand.name[0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-gold-500 transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs text-navy-400">{brand.tag}</span>
                  <p className="text-xs text-gold-500 mt-2">
                    View Full Guide →
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="glass-card rounded-lg p-5">
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
          <div className="glass-card rounded-xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Not Sure Which System Is Right for You?
            </h2>
            <p className="text-navy-300 max-w-lg mx-auto mb-6">
              Book a free consultation. We&apos;ll assess your property,
              understand your priorities, and recommend the best system — with
              transparent pricing and no brand bias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
