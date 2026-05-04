import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight, Building2, TrendingUp, Users,
  CheckCircle, Handshake, Layers, IndianRupee, Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Smart Home Automation for Builders & Developers`,
  description: `Partner with India's most experienced home automation company for bulk smart home installations. Smart-home-ready apartments at scale. ${COMPANY.experience} years. 50-500+ units per project.`,
  alternates: { canonical: "https://growmoresolutions.com/solutions/for-builders" },
};

const VALUE_PROPS = [
  { icon: TrendingUp, title: "Higher Selling Price", desc: "Smart-home-ready apartments command 8-15% premium pricing vs. standard units in the same location." },
  { icon: Users, title: "Faster Sales Velocity", desc: "Smart home features are now a top-3 buyer decision factor in premium segment. Close deals faster." },
  { icon: Star, title: "Brand Differentiation", desc: "Stand out in a crowded market. 'Smart Home by [Brand]' becomes your competitive moat." },
  { icon: IndianRupee, title: "Bulk Pricing Advantage", desc: "Per-unit automation cost drops 30-50% at scale. We pass the savings to your project economics." },
];

const PROCESS = [
  { step: 1, title: "Project Assessment", desc: "Our team reviews your floor plans, electrical layouts, and project timeline. We identify automation opportunities at the design stage." },
  { step: 2, title: "Custom Package Design", desc: "We design 2-3 tiered automation packages (Essential, Premium, Luxury) that your buyers can choose from — maximizing upsell revenue." },
  { step: 3, title: "Wiring & Infrastructure", desc: "Our engineers work alongside your electrical contractor to lay automation wiring during construction — zero added delays." },
  { step: 4, title: "Unit-by-Unit Installation", desc: "As units near completion, we install devices, program scenes, test systems, and commission each apartment individually." },
  { step: 5, title: "Buyer Handover Support", desc: "We train each buyer on their smart home, hand over the app, and provide dedicated after-sales support — reflecting well on your brand." },
];

const faqs = [
  {
    question: "What is the minimum number of units for a builder partnership?",
    answer: "We work with projects starting from 20 units. Our sweet spot is 50-500+ unit projects where economies of scale deliver the best per-unit pricing for both parties.",
  },
  {
    question: "Do you handle the wiring during construction?",
    answer: "Yes. Our engineers coordinate with your electrical contractor to lay automation cabling during the construction phase. This is the most cost-effective approach and avoids any retrofit costs later.",
  },
  {
    question: "Can buyers customize their automation package?",
    answer: "Absolutely. We design tiered packages (Basic, Premium, Luxury) that buyers can choose from. This creates an upsell opportunity for your sales team while giving buyers flexibility.",
  },
  {
    question: "Who handles after-sales support for buyers?",
    answer: `${COMPANY.name} provides direct support to each homeowner. This takes the burden off your customer service team while ensuring professional automation support from certified engineers.`,
  },
];

export default function ForBuildersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: "For Builders", url: "/solutions/for-builders" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-gold-500">Solutions</Link>
            <span>/</span>
            <span className="text-white">For Builders</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.solutions.builders} alt="Smart home automation for builders and developers" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <div className="flex items-start gap-4">
            <Building2 className="w-10 h-10 text-gold-500 shrink-0 mt-1 hidden sm:block" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Smart Home Automation for{" "}
                <span className="text-gradient-gold">Builders & Developers</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-2xl">
                Differentiate your projects, command premium pricing, and close
                deals faster with smart-home-ready apartments. We handle
                everything — from design-stage wiring to buyer handover.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Discuss Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Builders <span className="text-gradient-gold">Partner With Us</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUE_PROPS.map((v) => (
              <div key={v.title} className="glass-card rounded-xl p-6">
                <v.icon className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-gold-500" />
            <h2 className="text-3xl font-bold text-white">
              Partnership <span className="text-gradient-gold">Model</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Standard Model</h3>
              <p className="text-sm text-navy-300 mb-3">
                You include automation in your base price. We provide bulk pricing.
                Every unit ships smart-home-ready.
              </p>
              <p className="text-xs text-gold-500">Best for: Premium & luxury segment</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Upsell Model</h3>
              <p className="text-sm text-navy-300 mb-3">
                We lay infrastructure during construction. Buyers choose their
                package at booking. You earn a referral margin on every conversion.
              </p>
              <p className="text-xs text-gold-500">Best for: Mid-premium segment with mixed demand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <div className="space-y-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-gold-500">{p.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-navy-300 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing Table */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Indicative <span className="text-gradient-gold">Bulk Pricing</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-700">
                  <th className="text-left py-3 px-4 text-navy-400 font-medium">Package</th>
                  <th className="text-left py-3 px-4 text-navy-400 font-medium">Includes</th>
                  <th className="text-left py-3 px-4 text-navy-400 font-medium">Per Unit (50+ units)</th>
                  <th className="text-left py-3 px-4 text-navy-400 font-medium">Per Unit (200+ units)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-800">
                  <td className="py-3 px-4 text-white font-medium">Essential</td>
                  <td className="py-3 px-4 text-navy-300">Lighting + Security + App</td>
                  <td className="py-3 px-4 text-navy-200">₹1.2-1.8 Lakh</td>
                  <td className="py-3 px-4 text-gold-500 font-medium">₹80K-1.2 Lakh</td>
                </tr>
                <tr className="border-b border-navy-800">
                  <td className="py-3 px-4 text-white font-medium">Premium</td>
                  <td className="py-3 px-4 text-navy-300">+ Climate + Curtains + Audio</td>
                  <td className="py-3 px-4 text-navy-200">₹3-5 Lakh</td>
                  <td className="py-3 px-4 text-gold-500 font-medium">₹2-3.5 Lakh</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Luxury</td>
                  <td className="py-3 px-4 text-navy-300">+ KNX/Crestron + Theater + Custom</td>
                  <td className="py-3 px-4 text-navy-200">₹8-15 Lakh</td>
                  <td className="py-3 px-4 text-gold-500 font-medium">₹6-12 Lakh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-navy-500 mt-4 text-center">
            Prices depend on unit size, feature set, and brand selection. Final pricing after project assessment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Builder <span className="text-gradient-gold">FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Discuss <span className="text-gradient-gold">Your Project</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Share your project details and we&apos;ll prepare a custom
            proposal within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Schedule a Meeting <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
