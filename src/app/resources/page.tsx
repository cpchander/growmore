import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { BookOpen, IndianRupee, Plug, Building2, Sparkles, Lock } from "lucide-react";
import ResourcesForm from "./ResourcesForm";

export const metadata: Metadata = createMetadata({
  title: "Free Smart Home Resources — Guides, Checklists & Company Profile",
  description: `Free home automation resources from ${COMPANY.name}: company profile, India cost guide, pre-wiring checklist for new construction & a project lookbook. Get the library link by email.`,
  path: "/resources",
});

const RESOURCES = [
  { icon: BookOpen, title: "Company Profile", desc: "Our full portfolio — 600+ projects, every capability and partner brand.", tag: "PDF" },
  { icon: IndianRupee, title: "Smart Home Cost Guide", desc: "Real India price bands by home size & tier, brand-by-brand.", tag: "Guide" },
  { icon: Plug, title: "Pre-Wiring Checklist", desc: "For under-construction villas — room-by-room conduit & cabling.", tag: "Checklist" },
  { icon: Building2, title: "Project Lookbook", desc: "Flagship villas & penthouses — scope and brands used.", tag: "PDF" },
];

const faqs = [
  {
    question: "How do I get the resources?",
    answer: "Enter your name and email and we'll instantly email you a private link to the resource library, where you can view or download the Company Profile, Cost Guide, Pre-Wiring Checklist and Project Lookbook. The link is yours for 7 days.",
  },
  {
    question: "Is it really free?",
    answer: "Yes — all resources are free. We just ask for your email so we can send the link and, if you'd like, follow up to answer questions about your project. No spam.",
  },
  {
    question: "Why isn't there a direct download button?",
    answer: "The library is private rather than publicly listed, so we email you a personal link. This keeps our detailed project data and pricing out of public scrapers while still being one click away for you.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* Hero + form */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span><span className="text-white">Resources</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
                <Sparkles className="w-4 h-4" /> Free Resources
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Everything You Need to <span className="text-gradient-gold">Decide with Confidence</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-xl">
                Free guides, checklists and our full company profile — view or download
                them all from one private library. We&apos;ll email you the link.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {RESOURCES.map((r) => (
                  <div key={r.title} className="glass-card rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <r.icon className="w-7 h-7 text-gold-500" />
                      <span className="text-[10px] uppercase tracking-wide text-navy-400 border border-navy-700 rounded px-2 py-0.5">{r.tag}</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm">{r.title}</h3>
                    <p className="text-xs text-navy-400 mt-1">{r.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-xs text-navy-500">
                <Lock className="w-3.5 h-3.5" /> Private library — link sent to your email, valid 7 days.
              </p>
            </div>
            <div className="lg:sticky lg:top-24">
              <ResourcesForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Resource <span className="text-gradient-gold">FAQs</span>
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
    </>
  );
}
