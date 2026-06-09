import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, Receipt, FileMinus, Landmark, ScrollText, Banknote, CheckCircle } from "lucide-react";
import NriLeadForm from "../NriLeadForm";

export const metadata: Metadata = createMetadata({
  title: "Sell Your India Property as an NRI & Repatriate the Money",
  description: `NRIs: sell from abroad and keep more. We cut your TDS with a Lower-Deduction Certificate, handle 15CA/CB, capital-gains and repatriation end-to-end, and manage the sale via safe Power-of-Attorney. By ${COMPANY.name}.`,
  path: "/nri/sell",
});

const STEPS = [
  { icon: Receipt, title: "The TDS problem, solved", desc: "On an NRI sale, the buyer must deduct TDS on the FULL sale value (not just your profit) — often ~13–15% locked up. We fix this before you sell." },
  { icon: FileMinus, title: "Lower-Deduction Certificate", desc: "We file Form 13 (Sec 197) with the tax officer to bring TDS down to your actual gain — or NIL if you reinvest — so your cash isn't trapped." },
  { icon: Landmark, title: "Capital gains & 15CA/CB", desc: "We compute your capital gains and get the CA-certified Form 15CB + file Form 15CA — the mandatory paperwork for moving money abroad." },
  { icon: Banknote, title: "Repatriation handled", desc: "We route proceeds through your NRO account and manage repatriation within the USD 1M/year FEMA limit — with all documentation in order." },
  { icon: ScrollText, title: "Sale via safe PoA", desc: "Valuation, buyer sourcing, negotiation, registration and possession handover — managed remotely through a registered, scope-limited Power-of-Attorney." },
];

const faqs = [
  { question: "Why is so much of my sale money withheld as TDS?", answer: "For an NRI seller, the buyer is required (Section 195) to deduct TDS on the entire sale consideration — not just the gain — at roughly 13–15% for long-term holdings (incl. surcharge & cess). If your actual taxable gain is small, this traps far more cash than you owe, until you reclaim it." },
  { question: "How do you reduce the TDS?", answer: "We file a Lower-Deduction Certificate (Form 13 under Section 197) with your Assessing Officer before the sale, with a capital-gains computation. It brings TDS down to your real liability — and to NIL if you qualify for reinvestment exemptions. This is the single biggest money-saver and is hard to do remotely yourself." },
  { question: "How do I get the money out of India?", answer: "Sale proceeds go to your NRO account; you can repatriate up to USD 1 million per financial year under FEMA. We prepare the CA-certified Form 15CB and file Form 15CA, and ensure the documentation (sale deed, tax-paid proof, returns) is complete so your bank releases the funds." },
  { question: "Can you sell it for me while I'm abroad?", answer: "Yes — valuation, marketing, negotiation, registration and handover are managed through a registered, scope-limited special Power-of-Attorney, with empanelled lawyers and chartered accountants, so you needn't fly down." },
];

export default function NriSellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "NRI Property Services", url: "/nri" }, { name: "Sell & Repatriate", url: "/nri/sell" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <Link href="/nri" className="hover:text-gold-500">NRI</Link><span>/</span>
            <span className="text-white">Sell &amp; Repatriate</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Sell &amp; Repatriate — <span className="text-gradient-gold">Keep More, Stress Less</span>
              </h1>
              <p className="mt-5 text-lg text-navy-300">
                Selling Indian property as an NRI means punishing TDS, capital-gains maths and FEMA
                repatriation rules. We handle the entire chain — the part no broker touches and most
                NRIs dread.
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
            <div className="lg:sticky lg:top-24"><NriLeadForm defaultService="Sell + Repatriate" /></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Selling &amp; Repatriation <span className="text-gradient-gold">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy-500 text-center mt-6">Tax &amp; FEMA rules summarised for guidance; your transaction is handled with empanelled CAs &amp; lawyers and confirmed to current law.</p>
          <div className="text-center mt-8">
            <Link href="/nri#enquire" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors">
              Plan My Sale &amp; Repatriation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
