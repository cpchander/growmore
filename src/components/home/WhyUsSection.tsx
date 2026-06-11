import { COMPANY } from "@/lib/constants";
import { Layers, Clock, Wrench, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: `${COMPANY.experience} Years of Expertise`,
    description:
      "One of India's longest-serving home automation companies. We've seen technologies come and go — and we know what actually lasts.",
  },
  {
    icon: Layers,
    title: "Open Standards, No Lock-In",
    description:
      "We build on open standards like KNX, so your home stays upgradeable for years and you're never trapped in one brand. We recommend technology, not commissions.",
  },
  {
    icon: Wrench,
    title: "In-House, End-to-End",
    description:
      "From consultation and design to installation and commissioning — our own certified engineers handle everything. No subcontracting, no finger-pointing.",
  },
  {
    icon: HeadphonesIcon,
    title: "AMC & Lifetime Support",
    description:
      "1-year comprehensive warranty, Annual Maintenance Contracts, remote diagnostics, firmware updates, and 24/7 emergency support. We maintain your system for decades.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why <span className="text-gradient-gold">{COMPANY.experience} Years</span> Matters
            </h2>
            <p className="mt-4 text-navy-300 leading-relaxed">
              Home automation is a long-term investment. You need a partner
              who&apos;ll be there — not just for installation, but for decades
              of support, upgrades, and evolution. That&apos;s exactly what
              {COMPANY.experience} years of track record guarantees.
            </p>
            <div className="mt-8 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <p className="text-gold-500 text-sm font-medium">
                &ldquo;We don&apos;t just install smart homes. We build relationships
                that last as long as the homes we automate.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass-card rounded-xl p-5 hover:border-gold-500/20 transition-colors"
              >
                <reason.icon className="w-8 h-8 text-gold-500 mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
