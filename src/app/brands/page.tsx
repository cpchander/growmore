import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { BRAND_DETAILS } from "@/lib/brands-data";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight,
  Shield,
  Globe,
  IndianRupee,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: `Our Automation Brands — KNX, Crestron, Control4, Lutron & Sonos`,
  description: `Compare the top home automation brands — KNX, Crestron, Control4, Lutron & Sonos — designed, installed and integrated across India by ${COMPANY.name}.`,
  path: "/brands",
});

const faqs = [
  {
    question: "Which home automation brands does Grow More Solutions install?",
    answer:
      `${COMPANY.name} designs and installs on open standards like KNX (KNX-certified) and integrates the leading platforms — including Crestron, Control4, Lutron and Sonos — into a unified system. We're vendor-neutral, so we specify the right platform per project rather than pushing one brand, and we have dedicated comparison pages for each.`,
  },
  {
    question: "KNX vs Crestron vs Control4 — which is best for my home?",
    answer:
      "It depends on budget, scale and whether the home is wired or retrofit. KNX is the open, ultra-reliable wired standard ideal for large villas; Crestron is ultra-premium custom automation; Control4 is excellent mid-premium with strong AV and wireless options; Lutron leads on lighting and shading. We often combine them — e.g. a KNX backbone with Lutron lighting — and recommend based on your needs, not commissions.",
  },
  {
    question: "How do you work with these brands?",
    answer:
      "We're a vendor-neutral integrator: we install on open standards like KNX with in-house KNX programming (ETS) — no outsourced programming — and integrate the major platforms into one system. We source genuine, warranty-backed hardware through authorized channels rather than grey-market imports.",
  },
  {
    question: "Can different brands work together in one home?",
    answer:
      "Absolutely — multi-brand integration is one of our core strengths. A typical luxury build might use a KNX wired backbone for lighting and climate, Lutron for premium shading, a dedicated AV platform for the home theater, and Sonos for casual audio, all unified under one touch-panel and app interface.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Brands", url: "/brands" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Brands</span>
          </nav>

          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              World-Class Brands,{" "}
              <span className="text-gradient-gold">Independent Expertise</span>
            </h1>
            <p className="text-lg text-navy-300">
              We design, install and integrate the world&apos;s leading home
              automation brands — building on open standards so your system lasts
              decades, not just years. {COMPANY.experience} years of hands-on
              experience across {COMPANY.projectsCompleted} projects, recommending
              technology on merit, not commissions.
            </p>
          </div>

          {/* Brand Cards */}
          <div className="space-y-8">
            {BRAND_DETAILS.map((brand) => (
              <div
                key={brand.slug}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-gold-500/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Brand Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold text-white">
                        {brand.name}
                      </h2>
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-navy-400 hover:text-gold-500 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {brand.website.replace("https://www.", "")}
                      </a>
                    </div>
                    <p className="text-gold-500 text-sm font-medium mb-2">
                      {brand.tagline}
                    </p>
                    <p className="text-navy-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {brand.overview}
                    </p>

                    {/* Quick details */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-navy-400">
                        <Shield className="w-3.5 h-3.5 text-gold-500" />
                        {brand.protocol.split("(")[0].trim()}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-navy-400">
                        <Globe className="w-3.5 h-3.5 text-gold-500" />
                        {brand.origin.split("(")[0].trim()}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-navy-400">
                        <IndianRupee className="w-3.5 h-3.5 text-gold-500" />
                        {brand.priceRange.split("depending")[0].trim()}
                      </div>
                    </div>

                    {/* Pros preview */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {brand.pros.slice(0, 3).map((pro) => (
                        <span
                          key={pro}
                          className="flex items-center gap-1 text-xs text-navy-300 bg-navy-800/50 px-2.5 py-1 rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {pro.length > 40 ? pro.slice(0, 40) + "…" : pro}
                        </span>
                      ))}
                    </div>

                    {/* Action links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={`/brands/${brand.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
                      >
                        View {brand.name} Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-navy-700">|</span>
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-navy-400 hover:text-white transition-colors"
                      >
                        Official {brand.name} Website
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compare CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-300 mb-4">
              Not sure which brand is right for your home?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/compare"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Compare All Brands Side-by-Side
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Expert Advice <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Brands <span className="text-gradient-gold">FAQs</span>
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
    </>
  );
}
