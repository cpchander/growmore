import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight, ShieldCheck, Eye, Clock, Building2, Home, ShoppingBag,
  IndianRupee, Hammer, Globe, Sparkles, CheckCircle,
} from "lucide-react";
import NriLeadForm from "./NriLeadForm";

export const metadata: Metadata = createMetadata({
  title: "NRI Property Services in India — Care, Build, Buy & Sell",
  description: `End-to-end NRI property concierge by ${COMPANY.name}: look after your property, build & automate your home, and buy or sell with full title, FEMA & tax handling. 40-year name, on-ground in Delhi-NCR, a team in your timezone.`,
  path: "/nri",
});

const SERVICES = [
  { icon: Home, title: "Property Care & Monitoring", href: "/nri/property-care",
    desc: "Inspections with geo-tagged photo/video proof, rent & bills, encroachment watch, and smart cameras you can check anytime.", tag: "Manage" },
  { icon: Hammer, title: "Build & Automate", href: "/nri/build",
    desc: "Build your India home remotely — escrow-style milestone payments, live CCTV, and automation engineered in from the slab up.", tag: "Build" },
  { icon: ShoppingBag, title: "Buy a Property", href: "/nri/buy",
    desc: "Verified buying — title & encumbrance checks, RERA verification, safe Power-of-Attorney, and video walkthroughs.", tag: "Buy" },
  { icon: IndianRupee, title: "Sell & Repatriate", href: "/nri/sell",
    desc: "Sell from abroad and keep more — Lower-Deduction Certificate to cut TDS, plus 15CA/CB and repatriation handled end-to-end.", tag: "Sell" },
];

const TRUST = [
  { icon: ShieldCheck, title: "A 40-year name", desc: "Backed by Grow More Solutions — 15+ years of premium home projects, not a faceless broker." },
  { icon: Eye, title: "Proof, not promises", desc: "Geo-tagged, time-stamped photo/video of every visit + smart cameras you can watch live." },
  { icon: Clock, title: "Your timezone", desc: "A relationship manager you can actually reach — US, UK, Gulf or Singapore hours." },
  { icon: Building2, title: "Feet on the ground", desc: "An on-ground team in Delhi-NCR & across 25+ cities — we show up, in person." },
];

const PAINS = [
  "Caretakers or brokers who rent out your property and pocket the money",
  "No way to confirm a visit or inspection actually happened",
  "Encroachment (“kabza”) on vacant land while you're abroad",
  "Contractors or relatives misusing construction funds",
  "Power-of-Attorney misuse and unclear property titles",
  "Punishing TDS on sale + the maze of repatriating your money",
];

const faqs = [
  { question: "What exactly does the NRI desk do?", answer: "We cover the full lifecycle of your property in India from abroad: looking after it (inspections, rent, bills, encroachment monitoring), building or renovating and automating it, and buying or selling — including the title, RERA, FEMA, tax (TDS) and repatriation paperwork. You get one accountable point of contact instead of juggling a broker, lawyer, CA, contractor and caretaker." },
  { question: "How do I know my property is actually being looked after?", answer: "Every visit comes with geo-tagged, time-stamped photos and video, plus a written report. For homes we can install smart cameras, video doorbells and leak/intrusion sensors so you can check on your property live, anytime, from your phone — proof, not promises." },
  { question: "Can you really manage everything while I'm overseas?", answer: "Yes. Our team is on the ground in Delhi-NCR and across 25+ cities, and your relationship manager works to your timezone. We handle physical tasks in India and keep you updated wherever you are — the way our 40-year parent company has served clients across India." },
  { question: "Is my money safe?", answer: "We use transparent, milestone-based payments and segregated handling for construction and transactions, with documented reporting at every step. For buying/selling we work with empanelled property lawyers and chartered accountants so title, Power-of-Attorney, FEMA and tax are done correctly." },
  { question: "Which cities do you cover?", answer: "We're strongest in the Delhi-NCR / Gurgaon corridor — the #1 NRI luxury-property market — and serve 25+ cities across India. Tell us where your property is and we'll confirm coverage." },
];

export default function NriHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "NRI Property Services", url: "/nri" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[30rem] h-[30rem] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <span className="text-white">NRI Property Services</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
                <Globe className="w-4 h-4" /> For Non-Resident Indians
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Your Home in India,{" "}
                <span className="text-gradient-gold">Run Like It&apos;s Next Door</span>
              </h1>
              <p className="mt-5 text-lg text-navy-300 max-w-xl">
                Care for it, build &amp; automate it, or buy and sell it — handled end-to-end by a
                40-year name with feet on the ground in Delhi-NCR and a team you can call in your
                own timezone. Verified. Transparent. Accountable.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {TRUST.map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <t.icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                      <p className="text-xs text-navy-400 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <NriLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">One Desk for Your <span className="text-gradient-gold">Whole Property Journey</span></h2>
            <p className="mt-4 text-navy-300">Most NRIs stitch together a broker, a lawyer, a CA, a contractor and a caretaker — none accountable to each other. We bring it under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="glass-card rounded-2xl p-6 hover:border-gold-500/30 hover:-translate-y-1 transition-all group">
                <div className="flex items-center justify-between mb-3">
                  <s.icon className="w-8 h-8 text-gold-500" />
                  <span className="text-[10px] uppercase tracking-wide text-navy-400 border border-navy-700 rounded px-2 py-0.5">{s.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">{s.title}</h3>
                <p className="text-sm text-navy-300 mt-2">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-gold-500 font-semibold mt-4">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-white">The NRI Property Headaches <span className="text-gradient-gold">We Remove</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAINS.map((p) => (
              <div key={p} className="glass-card rounded-xl p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <p className="text-sm text-navy-200">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">NRI <span className="text-gradient-gold">FAQs</span></h2>
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
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s look after your property in India</h2>
          <p className="text-navy-300 mb-8">Tell us what you need — care, build, buy or sell — and we&apos;ll call you back in your timezone.</p>
          <Link href="#enquire" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors">
            Talk to Our NRI Desk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
