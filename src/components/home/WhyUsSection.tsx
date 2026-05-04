import { COMPANY } from "@/lib/constants";
import { Award, Clock, Wrench, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: `${COMPANY.experience} Years of Expertise`,
    description:
      "India's longest-serving home automation company. We've seen technologies come and go — and we know what works.",
  },
  {
    icon: Award,
    title: "Certified Brand Partners",
    description:
      "Official KNX, Crestron, Control4, and Lutron partners. Your system is designed and installed by certified professionals.",
  },
  {
    icon: Wrench,
    title: "End-to-End Execution",
    description:
      "From consultation and design to installation and commissioning — one team handles everything. No subcontracting.",
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
