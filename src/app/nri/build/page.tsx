import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, Lock, Camera, Smartphone, FileCheck, Cpu, ShieldAlert, CheckCircle } from "lucide-react";
import NriLeadForm from "../NriLeadForm";

export const metadata: Metadata = createMetadata({
  title: "Build & Automate Your India Home From Abroad — for NRIs",
  description: `NRIs: build or renovate your home in India remotely with escrow-style milestone payments, live CCTV, app updates and weekly video — with smart-home automation engineered in from the slab up. One accountable contract by ${COMPANY.name}.`,
  path: "/nri/build",
});

const TRUST = [
  { icon: Lock, title: "Milestone-linked payments", desc: "A small token to start, then funds released only against verified, completed work — so money can't be misused by a contractor or relative." },
  { icon: Camera, title: "Live site CCTV", desc: "Watch your construction site live, anytime, from your phone." },
  { icon: Smartphone, title: "App + weekly video", desc: "Stage-by-stage tracking, plus a weekly photo & video walkthrough so there are no surprises." },
  { icon: FileCheck, title: "Fixed-price contract", desc: "A locked BOQ and fixed price — no open-ended “extras” appearing later." },
  { icon: Cpu, title: "Build + automate, one contract", desc: "Wiring, conduiting and smart-home automation designed in from the foundation — not retrofitted. One party, one warranty. Our 40-year edge." },
  { icon: ShieldAlert, title: "Pre-build protection", desc: "Title & encumbrance verification, safe registered Power-of-Attorney, and plot/boundary watch so nobody encroaches while you build." },
];

const PRICING = [
  { tier: "Standard", band: "₹1,600 – ₹2,200 / sq ft", note: "Quality fittings, branded essentials, smart-ready wiring" },
  { tier: "Premium", band: "₹2,500 – ₹4,000 / sq ft", note: "Marble/teak finishes + KNX/Lutron/Control4 automation" },
  { tier: "Luxury", band: "₹4,000 – ₹6,000+ / sq ft", note: "Bespoke design + Crestron-grade whole-home automation" },
];

const faqs = [
  { question: "How do I make sure my money isn't misused?", answer: "Funds are released on a milestone basis against verified, completed work — not handed over upfront to a contractor or relative. Combined with a fixed-price locked BOQ, live CCTV and weekly video, you always see exactly what your money has built." },
  { question: "Can you really build my home while I'm abroad?", answer: "Yes. You select designs and materials remotely via lookbooks and video calls; we run the site with a dedicated project manager, live CCTV, an app and weekly video walkthroughs. NRIs complete entire homes with us without flying down — and visit only when they want to." },
  { question: "Why build with a home-automation company?", answer: "Because automation done well must be designed in from the slab — conduits, back-boxes, network and control wiring planned with the structure, not chased into finished walls later. We're the only ones who own both the build and the automation under one accountable contract and warranty." },
  { question: "Do you verify the land and handle approvals?", answer: "Yes — title & encumbrance verification, a safe registered special Power-of-Attorney, plan sanction and local-body liaison, plus boundary/encroachment protection during construction. We close the pre-build trust gaps most builders leave to you." },
  { question: "What does it cost?", answer: "Turnkey construction in India typically runs ₹1,600–₹6,000+ per sq ft depending on finish and automation level (see the bands above). We give a fixed, written price after design — indicative until then." },
];

export default function NriBuildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "NRI Property Services", url: "/nri" }, { name: "Build & Automate", url: "/nri/build" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <Link href="/nri" className="hover:text-gold-500">NRI</Link><span>/</span>
            <span className="text-white">Build &amp; Automate</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Build &amp; Automate Your Home —{" "}
                <span className="text-gradient-gold">From Abroad</span>
              </h1>
              <p className="mt-5 text-lg text-navy-300">
                The only NRI build service where the house and the smart-home are engineered together,
                under one accountable contract — with the trust stack that kills every remote-build fear.
              </p>
              <div className="mt-8 space-y-4">
                {TRUST.map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <t.icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                      <p className="text-sm text-navy-400 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24"><NriLeadForm defaultService="Build / Renovate + Automate" /></div>
          </div>
        </div>
      </section>

      {/* Pricing bands */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-3">Indicative <span className="text-gradient-gold">Turnkey Pricing</span></h2>
          <p className="text-center text-navy-400 text-sm mb-10">Fixed, written price confirmed after design. All-inclusive of build + smart-ready wiring.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICING.map((p) => (
              <div key={p.tier} className="glass-card rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-white">{p.tier}</h3>
                <p className="text-2xl font-bold text-gradient-gold mt-2">{p.band}</p>
                <p className="text-xs text-navy-400 mt-3">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Build &amp; Automate <span className="text-gradient-gold">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/nri#enquire" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors">
              Start Your Build <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
