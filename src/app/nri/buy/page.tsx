import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, Search, FileSearch, BadgeCheck, ScrollText, Landmark, Video, CheckCircle } from "lucide-react";
import NriLeadForm from "../NriLeadForm";

export const metadata: Metadata = createMetadata({
  title: "Buy Property in India as an NRI — Verified, Without Flying Down",
  description: `NRIs: buy in India safely from abroad — shortlisting, video walkthroughs, title & encumbrance verification, RERA checks, safe Power-of-Attorney and FEMA/home-loan guidance. A neutral, trusted advisor by ${COMPANY.name}.`,
  path: "/nri/buy",
});

const STEPS = [
  { icon: Search, title: "Shortlist & video walkthroughs", desc: "We curate options to your brief and send live video walkthroughs and neighbourhood tours — you evaluate without flying down." },
  { icon: FileSearch, title: "Title & encumbrance check", desc: "We pull the Encumbrance Certificate, trace the title chain and flag any dispute, mortgage or defect — the #1 thing you can't verify from abroad." },
  { icon: BadgeCheck, title: "RERA & builder verification", desc: "We verify RERA registration, builder track record and approvals — RERA alone doesn't guarantee clean title, so we go further." },
  { icon: ScrollText, title: "Safe Power-of-Attorney", desc: "A registered, scope-limited, time-bound special PoA — not a risky general PoA — so the transaction is done correctly and can't be misused." },
  { icon: Landmark, title: "FEMA & home-loan guidance", desc: "We keep you FEMA-compliant (no agricultural land/farmhouses), route funds via NRE/NRO correctly, and connect you to NRI home-loan lenders." },
  { icon: Video, title: "Registration & handover", desc: "We manage due diligence, agreement, registration and possession — and can roll straight into automating and managing your new home." },
];

const faqs = [
  { question: "How do I avoid fraud buying remotely?", answer: "Most NRI property fraud comes from unverified title, fake authority to sell, or misused Power-of-Attorney. We verify the Encumbrance Certificate and full title chain, confirm the seller's authority, check RERA, and use a registered scope-limited special PoA — so you're protected at every step." },
  { question: "Can NRIs buy any property in India?", answer: "NRIs can freely buy residential and commercial property, but FEMA prohibits buying agricultural land, farmhouses and plantations. We make sure what you buy is permitted and that all payments route correctly through NRE/NRO accounts." },
  { question: "Do you represent me or the builder?", answer: "You. Unlike a developer's NRI desk that only sells its own inventory, we're a neutral advisor working for the buyer — we'll tell you when a deal isn't right." },
  { question: "Can you help with the home loan?", answer: "Yes. NRI home loans typically fund 80–85% of value and must route through NRE/NRO accounts; we help structure the application and connect you with NRI-friendly lenders to reduce rejections." },
];

export default function NriBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "NRI Property Services", url: "/nri" }, { name: "Buy a Property", url: "/nri/buy" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <Link href="/nri" className="hover:text-gold-500">NRI</Link><span>/</span>
            <span className="text-white">Buy a Property</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Buy in India, <span className="text-gradient-gold">Verified</span> — Without Flying Down
              </h1>
              <p className="mt-5 text-lg text-navy-300">
                A neutral advisor on your side — verifying title, RERA and authority so you never become
                an NRI property-fraud statistic. And once you own it, we can build, automate and manage it too.
              </p>
              <div className="mt-8 space-y-4">
                {STEPS.map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <s.icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                      <p className="text-sm text-navy-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24"><NriLeadForm defaultService="Buy a Property" /></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Buying <span className="text-gradient-gold">FAQs</span></h2>
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
              Start Buying Safely <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
