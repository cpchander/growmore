import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, UserCheck, CheckCircle2, Video, FileText, Wallet, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "NRI Owner Dashboard — Sample",
  robots: { index: false, follow: false },
};

const VISITS = [
  { img: "/images/nri-demo/visit-4.webp", date: "16 Oct 2025 · 11:42 IST", gps: "28.4946°N, 77.1456°E", area: "DLF Phase 2, Gurgaon", tech: "R. Kumar", note: "Quarterly inspection — KNX panel & distribution board checked, no faults. Society maintenance dues paid; receipt uploaded.", status: "Completed" },
  { img: "/images/nri-demo/visit-1.webp", date: "21 Jun 2025 · 10:18 IST", gps: "28.4951°N, 77.1463°E", area: "DLF Phase 2, Gurgaon", tech: "S. Verma", note: "Tenant move-in inspection. Meter readings logged, fixtures photographed, keys handed over against signed inventory.", status: "Completed" },
  { img: "/images/nri-demo/visit-5.webp", date: "19 Aug 2025 · 09:05 IST", gps: "28.4949°N, 77.1459°E", area: "DLF Phase 2, Gurgaon", tech: "R. Kumar", note: "Monsoon leak & seepage check — terrace waterproofing intact, no dampness. Drainage cleared.", status: "Completed" },
  { img: "/images/nri-demo/visit-2.webp", date: "14 May 2025 · 16:30 IST", gps: "28.4946°N, 77.1456°E", area: "DLF Phase 2, Gurgaon", tech: "A. Singh", note: "Smart-home health check — cameras, sensors and automation hub online; firmware updated; remote access verified.", status: "Completed" },
];

const DOCS = [
  { name: "Rental Agreement 2025–27.pdf", meta: "Signed · 12 Jun 2025" },
  { name: "Inspection Report — Oct 2025.pdf", meta: "Uploaded · 16 Oct 2025" },
  { name: "Property Tax Receipt 2025–26.pdf", meta: "Paid · 03 Sep 2025" },
];

const PAYMENTS = [
  { label: "Rent received — October", amount: "+ ₹85,000", good: true },
  { label: "Society maintenance paid", amount: "− ₹9,400", good: false },
  { label: "Property tax paid", amount: "− ₹14,200", good: false },
];

function Stamp({ gps, date }: { gps: string; date: string }) {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-navy-950/85 px-3 py-2 text-[11px] text-navy-200 flex flex-wrap items-center gap-x-3 gap-y-0.5">
      <span className="inline-flex items-center gap-1 text-gold-500"><MapPin className="w-3 h-3" /> {gps}</span>
      <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {date}</span>
    </div>
  );
}

export default function NriDashboardDemoPage() {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Demo banner */}
        <div className="flex items-center justify-between gap-3 flex-wrap mb-6 rounded-xl border border-gold-500/30 bg-gold-500/5 px-4 py-3">
          <p className="text-sm text-gold-500 font-semibold inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Sample owner dashboard — illustrative demo
          </p>
          <Link href="/nri#enquire" className="text-sm text-gold-500 hover:underline inline-flex items-center gap-1">
            Get this for your property <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <nav className="flex items-center gap-2 text-sm text-navy-400 mb-6">
          <Link href="/" className="hover:text-gold-500">Home</Link><span>/</span>
          <Link href="/nri" className="hover:text-gold-500">NRI</Link><span>/</span>
          <span className="text-white">Owner Dashboard</span>
        </nav>

        {/* Property header */}
        <div className="glass-card rounded-2xl p-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">3BHK · DLF Phase 2, Gurgaon</h1>
            <p className="text-sm text-navy-400 mt-1 inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-500" /> Tenanted · Care plan active · Owner: NRI (New Jersey, USA)</p>
          </div>
          <div className="flex gap-6">
            <div className="text-center"><div className="text-2xl font-bold text-gradient-gold">4</div><div className="text-xs text-navy-400">Visits YTD</div></div>
            <div className="text-center"><div className="text-2xl font-bold text-gradient-gold">2</div><div className="text-xs text-navy-400">Live cameras</div></div>
            <div className="text-center"><div className="text-2xl font-bold text-gradient-gold">100%</div><div className="text-xs text-navy-400">On-time reports</div></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Visit timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-white mb-4">Visit timeline — geo-tagged proof</h2>
            <div className="space-y-5">
              {VISITS.map((v, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden grid sm:grid-cols-[200px_1fr]">
                  <div className="relative aspect-[4/3] sm:aspect-auto bg-navy-800">
                    <Image src={v.img} alt={`Site visit ${v.date}`} fill sizes="200px" className="object-cover" />
                    <Stamp gps={v.gps} date={v.date} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400"><CheckCircle2 className="w-4 h-4" /> {v.status}</span>
                      <span className="text-xs text-navy-400 inline-flex items-center gap-1"><UserCheck className="w-3.5 h-3.5" /> {v.tech}</span>
                    </div>
                    <p className="text-sm text-navy-200 mt-2 leading-relaxed">{v.note}</p>
                    <p className="text-xs text-navy-500 mt-3 inline-flex items-center gap-1"><MapPin className="w-3 h-3 text-gold-500" /> {v.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Live cameras */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 inline-flex items-center gap-2"><Video className="w-5 h-5 text-gold-500" /> Live cameras</h2>
              <div className="space-y-3">
                {[{ img: "/images/nri-demo/visit-3.webp", name: "Main entrance" }, { img: "/images/nri-demo/visit-2.webp", name: "Utility / panel room" }].map((c) => (
                  <div key={c.name} className="relative rounded-xl overflow-hidden aspect-video bg-navy-800">
                    <Image src={c.img} alt={c.name} fill sizes="360px" className="object-cover" />
                    <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-red-600/90 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                    </span>
                    <span className="absolute bottom-2 left-2 text-[11px] text-white bg-navy-950/80 px-2 py-0.5 rounded">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 inline-flex items-center gap-2"><FileText className="w-5 h-5 text-gold-500" /> Documents</h2>
              <div className="space-y-2">
                {DOCS.map((d) => (
                  <div key={d.name} className="glass-card rounded-lg p-3 flex items-center gap-3">
                    <FileText className="w-5 h-5 text-navy-400 shrink-0" />
                    <div className="min-w-0"><p className="text-sm text-white truncate">{d.name}</p><p className="text-xs text-navy-500">{d.meta}</p></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payments */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4 inline-flex items-center gap-2"><Wallet className="w-5 h-5 text-gold-500" /> Recent payments</h2>
              <div className="glass-card rounded-xl p-4 space-y-2">
                {PAYMENTS.map((p) => (
                  <div key={p.label} className="flex justify-between text-sm">
                    <span className="text-navy-300">{p.label}</span>
                    <span className={p.good ? "text-green-400" : "text-navy-200"}>{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-navy-500 text-center mt-10 max-w-2xl mx-auto">
          This is an illustrative sample. Real dashboards show your property&apos;s actual geo-tagged visit
          photos, live camera feeds, reports and payments — private to you, accessible from anywhere.
        </p>
      </div>
    </section>
  );
}
