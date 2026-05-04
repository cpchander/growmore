import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import {
  ArrowRight, Lightbulb, Shield, Thermometer,
  Tv, PanelTop, Mic, CheckCircle, Zap, Home, IndianRupee,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Smart Home Automation for Homeowners — Complete Guide`,
  description: `Transform your home with intelligent automation. Smart lighting, security, climate control & more. Packages from ₹2 Lakh. ${COMPANY.experience} years experience. Free consultation.`,
  alternates: { canonical: "https://growmoresolutions.com/solutions/for-homeowners" },
};

const PACKAGES = [
  {
    name: "Essential",
    price: "₹2-5 Lakh",
    ideal: "2-3 BHK Apartments",
    features: [
      "Smart lighting (all rooms)",
      "4-8 CCTV cameras",
      "Smart door lock",
      "AC automation",
      "Voice control (Alexa/Google)",
      "Mobile app control",
    ],
  },
  {
    name: "Premium",
    price: "₹5-15 Lakh",
    ideal: "4 BHK+ / Villas",
    popular: true,
    features: [
      "Everything in Essential",
      "Motorized curtains",
      "Multi-room audio (Sonos)",
      "Scene automation",
      "Energy monitoring",
      "Intercom & video doorbell",
      "Dedicated control panel",
    ],
  },
  {
    name: "Luxury",
    price: "₹15-50 Lakh+",
    ideal: "Luxury Villas / Penthouses",
    features: [
      "Everything in Premium",
      "KNX / Crestron wired system",
      "Home theater (Dolby Atmos)",
      "Pool & garden automation",
      "Biometric access control",
      "Custom lighting design",
      "Lifetime priority support",
    ],
  },
];

const BENEFITS = [
  { icon: Zap, title: "Save 20-40% on Energy", desc: "Smart scheduling and occupancy-based control cut your electricity bill dramatically." },
  { icon: Shield, title: "24/7 Security", desc: "Smart cameras, locks, and alerts — monitor and control your home from anywhere." },
  { icon: Home, title: "Effortless Living", desc: "One tap to set the perfect mood — lights, temperature, curtains, music, all at once." },
  { icon: IndianRupee, title: "Increase Property Value", desc: "Smart homes command 5-15% higher resale value in Indian real estate markets." },
];

const faqs = [
  {
    question: "Can I automate my existing home or only new construction?",
    answer:
      "Both! We offer wired solutions ideal for new construction and wireless retrofit solutions for existing homes. Our engineers assess your property and recommend the best approach — often a hybrid of both for optimal results.",
  },
  {
    question: "Will I be locked into one brand?",
    answer:
      "No. We specialize in open-protocol systems like KNX that work with 500+ manufacturers. Even with Crestron or Control4, we integrate multiple brands for the best result. You're never locked into a single vendor.",
  },
  {
    question: "What happens if something stops working?",
    answer:
      `${COMPANY.name} provides lifetime support. Our team can remotely diagnose and fix most issues. For hardware problems, our local city team is dispatched within 24-48 hours. We've been supporting clients for ${COMPANY.experience} years.`,
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical 3BHK apartment takes 3-5 days for installation and commissioning. Larger villas take 1-3 weeks. For new construction projects, we work alongside your contractor with zero delay to your timeline.",
  },
];

export default function ForHomeownersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: "For Homeowners", url: "/solutions/for-homeowners" },
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
            <Link href="/solutions" className="hover:text-gold-500">Solutions</Link>
            <span>/</span>
            <span className="text-white">For Homeowners</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={IMAGES.solutions.homeowners}
              alt="Smart home automation for homeowners"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Make Your Home{" "}
            <span className="text-gradient-gold">Brilliantly Smart</span>
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            From a single smart light to a fully automated villa — we design
            and install custom smart home solutions that fit your lifestyle and
            budget. Backed by {COMPANY.experience} years of expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Home Visit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 border border-navy-600 hover:border-navy-400 text-white px-8 py-4 rounded-xl transition-colors"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Homeowners Choose <span className="text-gradient-gold">Smart Homes</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="glass-card rounded-xl p-6 text-center">
                <b.icon className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-navy-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">
              Smart Home <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="mt-2 text-navy-300">Transparent pricing. No hidden costs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass-card rounded-xl p-6 relative ${
                  pkg.popular ? "border-gold-500/50 ring-1 ring-gold-500/20" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-2xl font-bold text-gradient-gold mb-1">{pkg.price}</p>
                <p className="text-xs text-navy-400 mb-4">Ideal for {pkg.ideal}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy-200">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-gold-500 hover:bg-gold-600 text-navy-900"
                      : "border border-navy-600 hover:border-gold-500 text-white"
                  }`}
                >
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-navy-500 mt-4">
            Prices vary based on property size and brand selection. Final quote after free site visit.
          </p>
        </div>
      </section>

      {/* What Can Be Automated */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            What Can You <span className="text-gradient-gold">Automate?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Lightbulb, title: "Lighting", desc: "Scene control, dimming, color, scheduling, daylight harvesting" },
              { icon: Shield, title: "Security", desc: "CCTV, smart locks, motion sensors, panic alerts, remote monitoring" },
              { icon: Thermometer, title: "Climate", desc: "AC automation, temperature zones, fan speed, energy optimization" },
              { icon: PanelTop, title: "Curtains", desc: "Motorized tracks, roller blinds, timed operation, scene integration" },
              { icon: Tv, title: "Home Theater", desc: "4K/8K projection, Dolby Atmos, one-touch movie mode" },
              { icon: Mic, title: "Voice Control", desc: "Alexa, Google, Siri — control everything by voice or app" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 glass-card rounded-lg p-4">
                <item.icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-navy-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Homeowner <span className="text-gradient-gold">FAQs</span>
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
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get <span className="text-gradient-gold">Started?</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Book a free home visit. Our expert will assess your property,
            understand your lifestyle, and design a custom automation plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Book Free Home Visit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
