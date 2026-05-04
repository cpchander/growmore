import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight, Hotel, DoorOpen, Thermometer,
  Lightbulb, Shield, Zap, CheckCircle, Users, BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Hotel & Hospitality Automation Solutions`,
  description: `Smart guest room automation, energy management, and building control for hotels and resorts. Enhance guest experience, cut energy costs 30-50%. ${COMPANY.experience} years expertise.`,
  alternates: { canonical: "https://growmoresolutions.com/solutions/for-hotels" },
};

const SOLUTIONS = [
  { icon: DoorOpen, title: "Guest Room Automation", desc: "Keycard-activated scenes, auto climate control, motorized curtains, bedside panels, and 'Do Not Disturb' automation." },
  { icon: Lightbulb, title: "Lobby & Common Areas", desc: "Automated lighting schedules, event-based scene changes, circadian lighting for wellness, and facade lighting control." },
  { icon: Thermometer, title: "HVAC Optimization", desc: "Occupancy-based climate control that reduces energy consumption by 30-50%. Auto-off when rooms are unoccupied." },
  { icon: Shield, title: "Security & Access", desc: "Centralized CCTV, keycard access control, emergency lighting, fire alarm integration, and perimeter monitoring." },
  { icon: BarChart3, title: "Energy Management (BMS)", desc: "Real-time energy dashboards, predictive maintenance alerts, equipment scheduling, and utility cost optimization." },
  { icon: Users, title: "Conference & Banquet", desc: "One-touch room presets, motorized partitions, integrated AV systems, and automated lighting for events." },
];

const RESULTS = [
  { metric: "30-50%", label: "Energy Cost Reduction" },
  { metric: "15-25%", label: "Higher Guest Satisfaction Scores" },
  { metric: "40%", label: "Faster Housekeeping Response" },
  { metric: "5-Star", label: "Guest Experience Rating" },
];

const faqs = [
  {
    question: "What hotel management systems do you integrate with?",
    answer: "We integrate with major PMS platforms including Opera (Oracle), Protel, Hotelogix, and others. Our systems communicate via API or dry contact interfaces to sync room status, guest preferences, and occupancy data.",
  },
  {
    question: "Can you retrofit an existing hotel?",
    answer: "Yes. We offer wireless retrofit solutions that can be installed room-by-room during renovation cycles with minimal guest disruption. Wired solutions are recommended for new construction or major renovations.",
  },
  {
    question: "What is the ROI timeline for hotel automation?",
    answer: "Most hotels see ROI within 18-36 months through energy savings alone. Additional revenue from higher room rates (smart rooms command premium pricing) and improved guest satisfaction further accelerate payback.",
  },
  {
    question: "Do you provide maintenance contracts?",
    answer: `Yes. ${COMPANY.name} offers annual maintenance contracts (AMC) with 24/7 remote monitoring, preventive maintenance visits, firmware updates, and emergency on-site support within 4-12 hours depending on location.`,
  },
];

export default function ForHotelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: "For Hotels", url: "/solutions/for-hotels" },
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
            <span className="text-white">For Hotels</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.solutions.hotels} alt="Smart automation for hotels and hospitality" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <div className="flex items-start gap-4">
            <Hotel className="w-10 h-10 text-gold-500 shrink-0 mt-1 hidden sm:block" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Hotel & Hospitality{" "}
                <span className="text-gradient-gold">Automation</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-2xl">
                Deliver a 5-star guest experience while cutting energy costs
                by 30-50%. From smart guest rooms to centralized building
                management — we automate every touchpoint of your property.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Request a Property Assessment <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-navy-900/50 border-y border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {RESULTS.map((r) => (
              <div key={r.label}>
                <span className="text-3xl sm:text-4xl font-bold text-gradient-gold">{r.metric}</span>
                <p className="text-sm text-navy-400 mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Hospitality <span className="text-gradient-gold">Solutions</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="glass-card rounded-xl p-6">
                <s.icon className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Room Flow */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Smart Guest Room <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="space-y-4">
            {[
              { trigger: "Guest inserts keycard", action: "Lights turn on to 'Welcome' scene, AC starts at preferred temperature, curtains open." },
              { trigger: "Guest presses 'Night' button", action: "Lights dim to warm glow, curtains close, AC adjusts to sleep temperature, DND activates." },
              { trigger: "Guest leaves room", action: "All lights off within 30 seconds, AC enters energy-saving mode, housekeeping notified." },
              { trigger: "Guest checks out", action: "Full system reset, lights and AC off, room status updated in PMS for housekeeping." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 glass-card rounded-lg p-4">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-gold-500">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{item.trigger}</p>
                  <p className="text-sm text-navy-300 mt-0.5">{item.action}</p>
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
            Hospitality <span className="text-gradient-gold">FAQs</span>
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
            Upgrade Your <span className="text-gradient-gold">Property</span>
          </h2>
          <p className="text-navy-300 mb-8">
            We&apos;ll conduct a free property assessment and deliver a
            custom proposal with ROI projections within 7 working days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Request Property Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
