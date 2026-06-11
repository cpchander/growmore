import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, ExternalLink, Shield, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: `Our Standards & Expertise — Open-Standard Automation`,
  description: `${COMPANY.name} is a KNX-certified, vendor-neutral home automation integrator — open standards, genuine warranty-backed hardware and in-house engineers. ${COMPANY.experience} years across India.`,
  path: "/about/certifications",
});

// The one formal product certification we hold is KNX. For every other
// platform we are an independent integrator — we design, install and unify
// them, but we do not claim to be a "certified dealer" of brands we don't
// formally represent.
const EXPERTISE = [
  {
    brand: "KNX",
    type: "KNX-Certified Integrator",
    description:
      "KNX is the worldwide open standard for home and building automation (ISO/IEC 14543). We are KNX-certified, and design and install open-protocol systems that are future-proof, manufacturer-independent, and scalable across 500+ KNX-compatible brands.",
    benefits: [
      "Open protocol — no vendor lock-in",
      "10,000+ compatible products from 500+ manufacturers",
      "Wired reliability — no Wi-Fi dependency",
      "ISO-certified global standard",
    ],
    url: "https://www.knx.org",
  },
  {
    brand: "Schneider / Vimar / Hager",
    type: "KNX & Wiring Devices We Install",
    description:
      "On the KNX backbone we build with proven KNX hardware — Schneider Electric, Vimar and Hager keypads, actuators and power supplies — sourced genuine through authorized channels for full warranty cover.",
    benefits: [
      "Genuine, warranty-backed hardware",
      "Designer keypads & touch panels",
      "Robust DIN-rail backend",
      "Long-term spares availability",
    ],
    url: "https://www.se.com",
  },
  {
    brand: "ELAN / Crestron / Control4",
    type: "Whole-Home Control We Integrate",
    description:
      "For whole-home control and AV we work with ELAN, and we integrate Crestron or Control4 where a client specifies or already owns them — unifying lighting, climate, security and AV under one app and keypad.",
    benefits: [
      "One app for the whole home",
      "Premium AV distribution",
      "Works alongside a KNX backbone",
      "Custom scenes & interfaces",
    ],
    url: "https://www.elancontrolsystems.com",
  },
  {
    brand: "Lutron / Ajax / Digilux",
    type: "Lighting, Security & Wireless",
    description:
      "We specify and integrate best-in-class layers — Lutron for precision lighting and shading, Ajax for wireless security, and Digilux for retrofit-friendly wireless automation — into a single, coherent system.",
    benefits: [
      "Precision dimming & motorized shades",
      "Wireless intrusion security",
      "Retrofit-friendly options",
      "Energy savings of 20–40%",
    ],
    url: "https://www.lutron.com",
  },
];

// Genuine practices that back the work — not unverifiable third-party badges.
const QUALITY_PRACTICES = [
  "Our own KNX-certified, in-house engineers — no subcontracting",
  "In-house programming (KNX ETS) — no outsourced code",
  "Genuine, warranty-backed hardware through authorized channels",
  "As-built documentation handed over on every project",
  "1-year comprehensive warranty + optional AMC",
  "Vendor-neutral — we recommend technology on merit, not commissions",
];

export default function CertificationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Standards & Expertise", url: "/about/certifications" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-gold-500">About</Link>
            <span>/</span>
            <span className="text-white">Standards & Expertise</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-10 h-10 text-gold-500 shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Built on{" "}
                <span className="text-gradient-gold">Open Standards</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-2xl">
                We&apos;re a KNX-certified, vendor-neutral integrator. We design and
                install on open standards and integrate the world&apos;s leading
                platforms — recommending technology on merit, not commissions, so
                your system stays reliable, upgradeable and truly yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {EXPERTISE.map((item) => (
            <div
              key={item.brand}
              className="glass-card rounded-xl p-8 hover:border-gold-500/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Brand badge */}
                <div className="w-28 h-20 rounded-xl bg-navy-800 border border-navy-600 flex items-center justify-center shrink-0 px-2 text-center">
                  <span className="text-sm font-bold text-gold-500 leading-tight">
                    {item.brand}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-white">
                      {item.type}
                    </h2>
                  </div>
                  <p className="text-navy-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-4">
                    {item.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-200">{b}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-electric-400 hover:text-electric-500 transition-colors"
                  >
                    Learn more
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Practices */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-gold-500" />
            <h2 className="text-2xl font-bold text-white">
              How We Guarantee Quality
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {QUALITY_PRACTICES.map((m) => (
              <div key={m} className="glass-card rounded-lg px-5 py-4 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <p className="text-sm text-navy-200">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work With <span className="text-gradient-gold">Independent Experts</span>
          </h2>
          <p className="text-navy-300 mb-8">
            KNX-certified, vendor-neutral, and accountable long after handover.
            Book a free consultation and we&apos;ll recommend what genuinely fits
            your home — not what pays the highest commission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
