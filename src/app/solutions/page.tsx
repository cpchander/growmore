import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight, Home, Building2, Compass, Hotel,
  CheckCircle, Sparkles,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Smart Home Automation Solutions — By Audience",
  description: `Home automation solutions for homeowners, builders, architects & hotels — ${COMPANY.experience} years, 300+ installations across India. Free consultation.`,
  path: "/solutions",
});

const SOLUTIONS = [
  {
    href: "/solutions/for-homeowners",
    icon: Home,
    title: "For Homeowners",
    tagline: "Custom smart homes from ₹2 Lakh to ₹50 Lakh+",
    desc: "Whole-home automation designed around your lifestyle — lighting, security, climate, curtains, home theater and voice control. Wired, wireless, or hybrid.",
    points: ["Essential / Premium / Luxury packages", "New construction & retrofit", "Lifetime support"],
  },
  {
    href: "/solutions/for-builders",
    icon: Building2,
    title: "For Builders & Developers",
    tagline: "Command 8–18% premium pricing",
    desc: "Smart-home-ready apartments that sell faster and differentiate your project. Tiered buyer packages, bulk pricing, and wiring during construction with zero timeline impact.",
    points: ["Faster sales velocity", "Per-unit cost drops at scale", "Buyer handover support"],
  },
  {
    href: "/solutions/for-architects",
    icon: Compass,
    title: "For Architects & Designers",
    tagline: "Automation that fits your design language",
    desc: "Full wiring specifications, system architecture, and product selection that integrate cleanly with your drawings. We coordinate with MEP and electrical contractors — zero extra work for your team.",
    points: ["Wiring & conduit specs", "Lighting design support", "Client presentation support"],
  },
  {
    href: "/solutions/for-hotels",
    icon: Hotel,
    title: "For Hotels & Hospitality",
    tagline: "Cut HVAC energy use 30–50%",
    desc: "Guest-room automation, BMS energy management, and centralized control across lobbies, common areas, and banquet spaces — built for reliability and measurable operating savings.",
    points: ["Keycard-activated room scenes", "Occupancy-based HVAC", "Real-time energy dashboards"],
  },
];

const faqs = [
  {
    question: "Which home automation solution is right for me?",
    answer:
      "It depends on who you are and what you're building. Homeowners get lifestyle-driven whole-home automation; builders get buyer-ready packages that lift sales price and velocity; architects get wiring specs and design integration; hotels get guest-room automation and energy-saving BMS. Each path above is tailored to that audience's priorities, budget, and decision process.",
  },
  {
    question: "Do you work on both new construction and existing homes?",
    answer:
      `Yes. ${COMPANY.name} designs wired systems (KNX, Crestron, Lutron HomeWorks) for new construction and major renovations, and wireless retrofit systems (Zigbee, Z-Wave, Wi-Fi, Matter) for existing homes. For most premium projects we recommend a hybrid — a wired backbone with wireless edge devices.`,
  },
  {
    question: "Are you tied to a single brand?",
    answer:
      "No. We are certified across KNX, Crestron, Control4, and Lutron, so recommendations are based on your needs rather than brand commissions. KNX alone is an open standard supported by 500+ manufacturers, so you're never locked into one vendor.",
  },
  {
    question: "How do I get a price estimate?",
    answer:
      "Use our Smart Home Planner to configure a system and see indicative pricing, or request a Get Quote estimate for your property. Final pricing follows a free site visit where our engineers assess layout, brand selection, and scope.",
  },
];

export default function SolutionsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Solutions</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">
            <Sparkles className="w-4 h-4" /> Tailored by audience
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Home Automation{" "}
            <span className="text-gradient-gold">Solutions</span>
          </h1>

          {/* Featured-snippet definition (40–60 words) */}
          <p className="mt-4 text-lg text-navy-300 max-w-3xl">
            Home automation solutions are systems that centralize control of
            lighting, climate, security, shading, and entertainment to fit a
            specific user's needs. {COMPANY.name} designs distinct solutions for
            homeowners, builders, architects, and hotels — backed by{" "}
            {COMPANY.experience} years and 300+ installations across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/smart-home-planner"
              className="inline-flex items-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-8 py-4 rounded-xl transition-colors"
            >
              Try the Smart Home Planner
            </Link>
          </div>
        </div>
      </section>

      {/* Solution cards */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Choose Your <span className="text-gradient-gold">Path</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glass-card rounded-xl p-6 group hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-8 h-8 text-gold-500" />
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-gradient-gold font-semibold mb-3">{s.tagline}</p>
                <p className="text-sm text-navy-300 mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-navy-200">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-gold-500 text-sm font-semibold group-hover:gap-3 transition-all">
                  Explore {s.title} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Solutions <span className="text-gradient-gold">FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Related reading (cross-linking) */}
          <div className="mt-10 text-center text-sm text-navy-400">
            Related reading:{" "}
            <Link href="/blog/wired-vs-wireless-home-automation-india" className="text-gold-500 hover:underline">
              Wired vs Wireless Home Automation
            </Link>{" "}
            ·{" "}
            <Link href="/blog/home-automation-cost-2026" className="text-gold-500 hover:underline">
              Home Automation Cost Guide
            </Link>{" "}
            ·{" "}
            <Link href="/get-quote" className="text-gold-500 hover:underline">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Where to <span className="text-gradient-gold">Start?</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Tell us about your project and our team will point you to the right
            solution — with a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
