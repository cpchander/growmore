import type { Metadata } from "next";
import Link from "next/link";
import { verifyResourceToken } from "@/lib/resourceToken";
import { BookOpen, IndianRupee, Plug, Building2, Download, Eye, ArrowRight, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Resource Library",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ k?: string }> };

export default async function ResourceLibraryPage({ searchParams }: Props) {
  const { k } = await searchParams;
  const auth = verifyResourceToken(k);

  if (!auth.ok) {
    return (
      <section className="section-padding">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="w-12 h-12 text-gold-500 mx-auto" />
          <h1 className="mt-4 text-3xl font-bold text-white">Link expired or invalid</h1>
          <p className="mt-3 text-navy-300">
            This private library link has expired or isn&apos;t valid. Request a fresh
            link — it only takes a few seconds.
          </p>
          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Get a New Link <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    );
  }

  const token = encodeURIComponent(k as string);
  const dl = (file: string) => `/api/download?file=${file}&k=${token}`;

  const downloads = [
    { icon: BookOpen, title: "Company Profile", desc: "Our full 61-page portfolio — 600+ projects, capabilities & partner brands.", file: "company-profile" },
    { icon: Building2, title: "Project Lookbook", desc: "Flagship villas, penthouses & lighting showcases.", file: "lookbook" },
    { icon: IndianRupee, title: "Smart Home Cost Guide — India 2026", desc: "Real price bands by home size, tier & feature.", file: "cost-guide" },
    { icon: Plug, title: "Pre-Wiring Checklist", desc: "Room-by-room cabling for under-construction homes.", file: "prewiring-checklist" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-4">
          <Lock className="w-4 h-4" /> Your private library
        </span>
        <h1 className="text-4xl font-bold text-white">
          Your <span className="text-gradient-gold">Resource Library</span>
        </h1>
        <p className="mt-3 text-navy-300">
          View or download below. This link is private to you and valid for 7 days.
        </p>

        {/* Downloadable PDFs */}
        <div className="mt-10 space-y-4">
          {downloads.map((d) => (
            <div key={d.file} className="glass-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <d.icon className="w-9 h-9 text-gold-500 shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{d.title}</h3>
                <p className="text-sm text-navy-400 mt-0.5">{d.desc}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a href={`${dl(d.file)}&mode=view`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 border border-gold-500/30 text-gold-500 hover:bg-gold-500/10 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                  <Eye className="w-4 h-4" /> View
                </a>
                <a href={dl(d.file)}
                   className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 glass-card rounded-2xl p-7 text-center">
          <h3 className="text-xl font-bold text-white">Ready to plan your project?</h3>
          <p className="text-sm text-navy-300 mt-2">Book a free consultation — no obligation.</p>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-xl font-semibold transition-colors">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
