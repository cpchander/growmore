import { WifiOff, ShieldCheck, ClipboardCheck, RefreshCw } from "lucide-react";

const PROMISES = [
  {
    icon: WifiOff,
    title: "Works Even Offline",
    description:
      "Your keypads, lights and curtains keep working without internet — and during a power cut. We design wired, locally-controlled systems so your home never freezes because the Wi-Fi did.",
  },
  {
    icon: ShieldCheck,
    title: "Your Data Stays Yours",
    description:
      "Local control by default — no cloud watching your living room. Cameras and access logs stay in your home, on your network, under your control. Privacy isn't an add-on; it's the architecture.",
  },
  {
    icon: RefreshCw,
    title: "Open & Future-Ready",
    description:
      "Built on open standards like KNX, your system is expandable and upgradeable for years — no rip-and-replace when one brand changes its app. You're never locked in or left behind.",
  },
  {
    icon: ClipboardCheck,
    title: "We Stay Accountable",
    description:
      "We don't vanish at handover. You get full as-built documentation, optional post-installation performance checks, and an AMC with a real team on the phone — long after the invoice is paid.",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Worries{" "}
            <span className="text-gradient-gold">Nobody Else Answers</span>
          </h2>
          <p className="mt-4 text-navy-300 leading-relaxed">
            Most buyers fear the same things: it&apos;ll break and they&apos;ll vanish,
            it&apos;ll stop working when the internet drops, it&apos;ll be obsolete in three
            years, someone&apos;s watching. Here&apos;s how we&apos;ve engineered each one away.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className="glass-card rounded-xl p-6 hover:border-gold-500/20 transition-colors"
            >
              <p.icon className="w-8 h-8 text-gold-500 mb-4" />
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-navy-300 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
