import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: `Smart Home Automation Services — ${SERVICES.length} Solutions`,
  description: `Explore ${COMPANY.name}'s smart home services — lighting, security, home theater, HVAC & whole-home integration, ${COMPANY.experience} years across India.`,
  path: "/services",
});

const faqs = [
  {
    question: "What home automation services does Grow More Solutions offer?",
    answer:
      `${COMPANY.name} provides end-to-end smart home services: complete home automation, conceptual lighting, home theater & AV, smart security & CCTV, HVAC automation, motorized curtains & gate motors, smart locks & access, home networking, smart switches, central vacuum, clean-air systems, solar power, and commercial/building automation (BMS) — all designed, installed, programmed and supported in-house.`,
  },
  {
    question: "How much does home automation cost in India?",
    answer:
      "It depends on scope and property size. As a guide from 600+ installations: a 3BHK apartment runs roughly ₹5–10 Lakh, a 4BHK villa ₹10–20 Lakh, a 5BHK villa ₹18–30 Lakh, and a 6BHK+ farmhouse ₹28–50 Lakh+. Pre-wiring during construction is far cheaper than retrofit. We always provide an honest, tiered quote after a free assessment.",
  },
  {
    question: "Which automation brands do you work with?",
    answer:
      "We're certified across KNX, Crestron, Control4 and Lutron, plus Sonos for audio — and we're vendor-neutral, so we recommend the right platform for your home rather than pushing one product line. For a large villa that often means a KNX wired backbone with Lutron lighting and a dedicated AV platform.",
  },
  {
    question: "Can you automate an existing, already-built home?",
    answer:
      "Yes. For finished homes we use wireless retrofit (Lutron RA3, KNX RF, Control4 wireless) to reach 85–90% of full functionality without breaking walls. For homes under construction or renovation we plan a wired KNX/Crestron backbone, which is more reliable and scalable. We assess your build stage and recommend the right approach.",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
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
            and design through installation, programming, and lifetime support. {COMPANY.experience} years,{" "}
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
              <p className="text-xs text-navy-400">Real pricing from 600+ installations</p>
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

      {/* FAQ */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Services <span className="text-gradient-gold">FAQs</span>
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
