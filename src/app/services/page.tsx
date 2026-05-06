import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Smart Home Automation Services — ${SERVICES.length} Solutions`,
  description: `Explore ${COMPANY.name}'s ${SERVICES.length} smart home automation services: lighting, security, home theater, HVAC, and whole-home integration. ${COMPANY.experience}+ years experience across India.`,
  alternates: { canonical: "https://growmoresolutions.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Smart Home Automation{" "}
            <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            {COMPANY.name} delivers end-to-end smart home solutions — from initial consultation
            and design through installation, programming, and lifetime support. {COMPANY.experience}+ years,{" "}
            {COMPANY.projectsCompleted} projects, {COMPANY.citiesServed} cities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="glass-card rounded-xl p-6 hover:border-gold-500/20 transition-colors group"
              >
                <h2 className="text-lg font-semibold text-white group-hover:text-gold-500 transition-colors mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-navy-400 mb-4">
                  {service.shortDesc}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-navy-300">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-xs text-gold-500 font-medium">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/blog/home-automation-cost-2026" className="glass-card rounded-xl p-5 hover:border-gold-500/20 transition-colors">
              <p className="text-sm font-medium text-white mb-1">Cost Guide 2026</p>
              <p className="text-xs text-navy-400">Real pricing from 300+ installations</p>
            </Link>
            <Link href="/blog/knx-vs-crestron-vs-control4-india" className="glass-card rounded-xl p-5 hover:border-gold-500/20 transition-colors">
              <p className="text-sm font-medium text-white mb-1">Brand Comparison</p>
              <p className="text-xs text-navy-400">KNX vs Crestron vs Control4</p>
            </Link>
            <Link href="/smart-home-planner" className="glass-card rounded-xl p-5 hover:border-gold-500/20 transition-colors">
              <p className="text-sm font-medium text-white mb-1">Smart Home Planner</p>
              <p className="text-xs text-navy-400">Design your setup room by room</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-navy-300 mb-8">
            Book a free consultation — our experts will assess your property and recommend
            the right automation scope for your budget and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 border border-gold-500/30 hover:bg-gold-500/10 text-gold-500 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
