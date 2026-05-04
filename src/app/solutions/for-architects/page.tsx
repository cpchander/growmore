import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight, Ruler, FileText, Palette,
  CheckCircle, Cpu, Lightbulb, MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Home Automation for Architects & Interior Designers`,
  description: `Seamlessly integrate smart home automation into your designs. We provide wiring specs, product selection, and full installation support. ${COMPANY.experience} years of collaboration with India's top architects.`,
  alternates: { canonical: "https://growmoresolutions.com/solutions/for-architects" },
};

const WHAT_WE_PROVIDE = [
  { icon: FileText, title: "Wiring Specifications", desc: "Complete conduit layouts, cable schedules, and point-to-point wiring diagrams that integrate with your electrical drawings." },
  { icon: Palette, title: "Product Selection", desc: "We match keypads, switches, and touchpanels to your design language — from minimalist European to ornate Indian aesthetics." },
  { icon: Cpu, title: "System Architecture", desc: "Detailed automation architecture documents covering protocols (KNX, Crestron), device counts, and network requirements." },
  { icon: Lightbulb, title: "Lighting Design Support", desc: "Collaborate on lighting scenes, color temperatures, dimming curves, and circadian rhythm programming for human-centric spaces." },
  { icon: MessageCircle, title: "Client Presentations", desc: "We join your client meetings to present the automation layer, answer technical questions, and help close the deal." },
  { icon: Ruler, title: "Coordination with Contractors", desc: "Our engineers coordinate directly with your MEP and electrical contractors — zero extra work for your team." },
];

const COLLABORATION_MODEL = [
  { step: "You Design", desc: "Create your architectural and interior concept as usual. Share floor plans when ready." },
  { step: "We Layer In Automation", desc: "We overlay automation specs onto your drawings — wiring, device placement, control panel locations." },
  { step: "Joint Client Pitch", desc: "We present the automation plan alongside your design — making your proposal more compelling." },
  { step: "Coordinated Execution", desc: "During construction, our engineers work with your contractors. You focus on design, we handle automation." },
];

const faqs = [
  {
    question: "Do you charge architects for consultation?",
    answer: "No. Initial project consultation and wiring specs are provided free of charge. We earn from the automation hardware and installation — your services remain your revenue stream.",
  },
  {
    question: "Can you match automation hardware to our design aesthetic?",
    answer: "Absolutely. We work with brands offering 200+ finish options — from brushed brass and matte black to glass and wood veneer. We ensure every switch, keypad, and sensor complements your interior design.",
  },
  {
    question: "At what stage should we involve you in the project?",
    answer: "Ideally during the design development phase — before electrical drawings are finalized. This ensures automation wiring is planned from the start, avoiding costly retrofits. However, we also handle retrofit projects for existing homes.",
  },
  {
    question: "Do you offer a referral program for architects?",
    answer: "Yes. We offer a structured referral program with project-based commissions for architects and interior designers who recommend our services. Contact us for details on our partnership terms.",
  },
];

export default function ForArchitectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: "For Architects", url: "/solutions/for-architects" },
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
            <span className="text-white">For Architects</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.solutions.architects} alt="Smart home automation for architects" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <div className="flex items-start gap-4">
            <Ruler className="w-10 h-10 text-gold-500 shrink-0 mt-1 hidden sm:block" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Your Design Vision +{" "}
                <span className="text-gradient-gold">Our Automation Expertise</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-2xl">
                We make home automation invisible in your designs and powerful in
                execution. No extra work for your team — we handle specs, wiring,
                and installation while you focus on creating beautiful spaces.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Start a Collaboration <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            What We Bring to <span className="text-gradient-gold">Your Projects</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHAT_WE_PROVIDE.map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6">
                <item.icon className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Collaboration <span className="text-gradient-gold">Model</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {COLLABORATION_MODEL.map((item, i) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-gold-500">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.step}</h3>
                  <p className="text-sm text-navy-300 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Compatibility */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Design <span className="text-gradient-gold">Compatibility</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { style: "Contemporary / Minimalist", desc: "Flush-mount glass keypads, hidden sensors, clean lines" },
              { style: "Classical / Traditional", desc: "Brass and chrome finishes, decorative plates, ornate frames" },
              { style: "Industrial / Modern", desc: "Matte black hardware, exposed smart panels, raw finishes" },
            ].map((s) => (
              <div key={s.style} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{s.style}</h3>
                <p className="text-sm text-navy-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Architect <span className="text-gradient-gold">FAQs</span>
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
            Let&apos;s <span className="text-gradient-gold">Collaborate</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Share your upcoming project and we&apos;ll prepare automation
            specs within 5 working days — free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Discuss a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
