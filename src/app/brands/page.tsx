import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { BRAND_DETAILS } from "@/lib/brands-data";
import { breadcrumbJsonLd } from "@/lib/metadata";
import {
  ArrowRight,
  Shield,
  Globe,
  IndianRupee,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Our Automation Brands — KNX, Crestron, Control4, Lutron & Sonos`,
  description: `Certified partner of the world's top home automation brands. Compare KNX, Crestron, Control4, Lutron & Sonos — installed by ${COMPANY.name} with ${COMPANY.experience} years of expertise across India.`,
  alternates: { canonical: "https://growmoresolutions.com/brands" },
};

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
              <span className="text-gradient-gold">Certified Expertise</span>
            </h1>
            <p className="text-lg text-navy-300">
              As certified partners of the world&apos;s leading home automation
              brands, we design, install, and support systems that last decades —
              not just years. {COMPANY.experience} years of hands-on experience
              across {COMPANY.projectsCompleted} projects.
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
                      <span className="text-xs bg-gold-500/10 text-gold-500 px-2.5 py-0.5 rounded-full">
                        Partner Since {brand.certifiedSince}
                      </span>
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
    </>
  );
}
