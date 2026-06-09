import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { Sparkles } from "lucide-react";
import EstimatorClient from "./EstimatorClient";

export const metadata: Metadata = createMetadata({
  title: "Home Construction & Automation Cost Estimator + BOQ Generator",
  description: `Build-to-automation cost estimator for India — design, construction, interiors & smart-home automation with a downloadable itemized BOQ, in ₹ and US$. By ${COMPANY.name}.`,
  path: "/estimator",
});

async function getFxRate(): Promise<{ rate: number; date: string }> {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR", {
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error("fx");
    const j = await res.json();
    const rate = j?.rates?.INR;
    if (typeof rate === "number" && rate > 50 && rate < 120) return { rate: Math.round(rate * 10) / 10, date: j.date };
    throw new Error("bad rate");
  } catch {
    return { rate: 86, date: "indicative" };
  }
}

const faqs = [
  { question: "How accurate is this home cost estimate?", answer: "It's an indicative estimate built from real 2026 India rate-cards (city- and tier-specific ₹/sq ft for construction and interiors) and Grow More Solutions' actual automation price lists. It's designed to get you a realistic budget range and a downloadable BOQ in minutes. The final, binding quote follows a site visit and an engineer review — book that and we'll firm up every line." },
  { question: "What does the estimate include — and exclude?", answer: "It covers the stages you select: architecture & design, approvals, civil construction (structure, finishing and MEP), interiors/fit-out, and home automation (KNX wired or wireless/IoT). It excludes land cost and is shown before GST (18% applicable). USD figures are indicative, converted at the day's rate." },
  { question: "Can I get the prices in US dollars?", answer: "Yes — every total is shown in both ₹ (lakh/crore) and an indicative US$ figure, converted at the day's exchange rate. It's built for NRIs planning or budgeting a home in India from abroad." },
  { question: "What's the difference between this and the Smart Home Planner?", answer: "This estimator covers the whole home journey — build → interiors → automation — and outputs a BOQ with a cost-and-timeline per stage. The Smart Home Planner is for picking exact automation products and brands. Use the estimator to budget the project, the planner to choose the kit." },
];

export default async function EstimatorPage() {
  const { rate, date } = await getFxRate();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "Cost Estimator", url: "/estimator" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-6">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <span className="text-white">Cost Estimator</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-3">
              <Sparkles className="w-4 h-4" /> Home Journey Estimator
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              From Plot to <span className="text-gradient-gold">Smart Home</span> — Costed
            </h1>
            <p className="mt-4 text-lg text-navy-300">
              Estimate your whole home journey — design, construction, interiors and automation —
              with a downloadable itemized BOQ, in ₹ and US$.
            </p>
          </div>

          <EstimatorClient fxRate={rate} fxDate={date} />
        </div>
      </section>

      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Estimator <span className="text-gradient-gold">FAQs</span></h2>
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
    </>
  );
}
