import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, MessageSquare, Home, ShieldCheck, Sparkles } from "lucide-react";
import HowWeWorkSteps from "@/components/home/HowWeWorkSteps";

export const metadata: Metadata = createMetadata({
  title: "How We Work — Our 5-Step Home Automation Process",
  description: `From consultation to lifelong support — Grow More Solutions' proven 5-step process. See exactly what you receive at each stage, including project drawings for your architect. ${COMPANY.experience} years, ${COMPANY.projectsCompleted} projects.`,
  path: "/how-we-work",
});

const faqs = [
  {
    question: "How long does a home automation project take?",
    answer:
      "It depends on scope and build stage. A wireless retrofit of a finished apartment can be completed in 1–3 weeks; a wired KNX/Crestron whole-home in an under-construction villa runs across the construction timeline with site visits at pre-wiring, installation and commissioning. After our free assessment we share a clear schedule with milestones.",
  },
  {
    question: "Do you work with my architect or interior designer?",
    answer:
      "Yes — that's Step 2 of our process. We work hand-in-hand with your architect or designer so automation disappears into the design, and we provide the technical drawings (device-placement layouts, single-line diagrams, conduit and back-box schedules) your build needs. We stay behind your design team and never approach your client directly.",
  },
  {
    question: "What do I actually receive at each stage?",
    answer:
      "Step 1 (Understand): a needs & lifestyle brief plus an indicative budget. Step 2 (Design): project drawings, device layouts, single-line diagrams and a BOQ. Step 3 (Execution): supervised installation, commissioning and as-built documentation. Step 4 (Live With It): hands-on handover and family training. Step 5 (Support): remote diagnostics, scalable upgrades and optional AMC.",
  },
  {
    question: "Do you handle installation in-house or subcontract it?",
    answer:
      "Everything is in-house — design, installation and programming (KNX ETS, Crestron SIMPL, Control4 Composer Pro) are handled by our own certified engineers, with no outsourced programming. That's how we keep quality consistent across 600+ projects.",
  },
];

const VALUE = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us about your home and goals — we design a custom scope with no obligation.",
    cta: "Book Free Consultation",
    href: "/contact",
    primary: true,
  },
  {
    icon: Home,
    title: "Private Experience-Center Demo",
    desc: "See KNX, Crestron, Control4 & Lutron working live at our Ghitorni, New Delhi centre.",
    cta: "Book a Private Demo",
    href: "/contact",
    primary: false,
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "How We Work", url: "/how-we-work" },
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
        <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">How We Work</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
            <Sparkles className="w-4 h-4" /> Our Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            How We Work — in{" "}
            <span className="text-gradient-gold">5 Simple Steps</span>
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-3xl">
            From the first conversation to lifelong support, every Grow More
            Solutions project follows a proven, designer-friendly process. You
            always know exactly what you receive at each stage — including the
            project drawings your architect needs.
          </p>
        </div>
      </section>

      {/* The 5 steps */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HowWeWorkSteps />
        </div>
      </section>

      {/* Consultation value-add */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Two Ways to <span className="text-gradient-gold">Get Started</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUE.map((v) => (
              <div key={v.title} className="glass-card rounded-2xl p-7">
                <v.icon className="w-8 h-8 text-gold-500" />
                <h3 className="mt-4 text-xl font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-navy-300">{v.desc}</p>
                <Link
                  href={v.href}
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors ${
                    v.primary
                      ? "bg-gold-500 hover:bg-gold-600 text-navy-900"
                      : "border border-gold-500/30 text-gold-500 hover:bg-gold-500/10"
                  }`}
                >
                  {v.cta}
                </Link>
              </div>
            ))}
            <div className="glass-card rounded-2xl p-7">
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <h3 className="mt-4 text-xl font-bold text-white">Warranty &amp; AMC, Made Clear</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-300">
                <li className="flex gap-2"><span className="text-gold-500">✓</span> Low-maintenance — no forced AMC</li>
                <li className="flex gap-2"><span className="text-gold-500">✓</span> Optional AMC + remote diagnostics</li>
                <li className="flex gap-2"><span className="text-gold-500">✓</span> Priority response &amp; on-site support</li>
                <li className="flex gap-2"><span className="text-gold-500">✓</span> Scalable — upgrade anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Process <span className="text-gradient-gold">FAQs</span>
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
            Ready to <span className="text-gradient-gold">Begin Step 1?</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Book a free, no-obligation consultation and we&apos;ll map your home
            automation journey end-to-end.
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
