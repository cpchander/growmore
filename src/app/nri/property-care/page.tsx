import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, Camera, ClipboardCheck, Wallet, ShieldAlert, Home, Bell, CheckCircle } from "lucide-react";
import NriLeadForm from "../NriLeadForm";

export const metadata: Metadata = createMetadata({
  title: "NRI Property Management & Monitoring in India",
  description: `Look after your property in India from abroad — inspections with geo-tagged photo/video proof, rent & bill management, encroachment monitoring and live smart cameras. Transparent retainers, on-ground team, by ${COMPANY.name}.`,
  path: "/nri/property-care",
});

const INCLUDED = [
  { icon: ClipboardCheck, title: "Scheduled inspections", desc: "Regular physical visits with geo-tagged, time-stamped photos, video and a written report — so you always know your property was actually checked." },
  { icon: Camera, title: "Live smart monitoring", desc: "We install CCTV, video doorbells and leak/intrusion sensors you can watch from your phone, anytime — our 40-year automation edge no broker can match." },
  { icon: Wallet, title: "Rent, bills & dues", desc: "Tenant management, rent collection to your account, plus society dues, property tax and utility bills paid on time with receipts." },
  { icon: ShieldAlert, title: "Encroachment watch", desc: "Boundary and title monitoring for vacant land and homes — early alerts on any encroachment or unauthorised use, before it becomes a dispute." },
  { icon: Home, title: "Vacant-home care", desc: "Ventilation, leak & seepage checks, dusting, key-holding and security liaison for empty homes between tenants — the assets most others ignore." },
  { icon: Bell, title: "One point of contact", desc: "A dedicated relationship manager in your timezone, with transparent reporting — not a caretaker you can't verify." },
];

const faqs = [
  { question: "How is this different from a local caretaker or broker?", answer: "The #1 NRI complaint is a caretaker or broker who can't be verified — or who rents the property out and pockets the money. We replace that with documented, geo-tagged proof of every visit, optional live smart cameras, transparent reporting and a 40-year brand standing behind the service." },
  { question: "What does it cost?", answer: "Pricing is transparent and tiered. Vacant-home / land care starts from a flat annual retainer; tenanted properties are typically a small percentage of monthly rent. We'll confirm an exact, written price after a quick scoping call — no opaque quotes." },
  { question: "Can you handle rent, society dues and property tax?", answer: "Yes — rent collection to your account with receipts, plus society maintenance, property tax and utility bills paid on time, all documented. We can also handle TDS-on-rent paperwork (Form 16C) so you stay compliant." },
  { question: "Do I have to install cameras?", answer: "No — physical inspections with photo/video proof are the baseline. Smart cameras and sensors are an optional upgrade (and a strong one) given our home-automation roots, so you can literally see your property live, anytime." },
];

export default function NriPropertyCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: "/" }, { name: "NRI Property Services", url: "/nri" }, { name: "Property Care", url: "/nri/property-care" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
            <Link href="/nri" className="hover:text-gold-500">NRI</Link><span>/</span>
            <span className="text-white">Property Care</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Property Care &amp; <span className="text-gradient-gold">Monitoring</span>
              </h1>
              <p className="mt-5 text-lg text-navy-300">
                Your property in India, watched over like it&apos;s next door — with proof of every
                visit and the option to see it live from your phone. No more relying on a caretaker
                you can&apos;t verify.
              </p>
              <div className="mt-8 space-y-4">
                {INCLUDED.map((i) => (
                  <div key={i.title} className="flex items-start gap-3">
                    <i.icon className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{i.title}</h3>
                      <p className="text-sm text-navy-400 mt-0.5">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24"><NriLeadForm defaultService="Property Care & Monitoring" /></div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Property Care <span className="text-gradient-gold">FAQs</span></h2>
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
              Get a Care Plan <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
