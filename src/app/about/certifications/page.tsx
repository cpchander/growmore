import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, ExternalLink, Shield, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Certifications & Brand Partnerships`,
  description: `${COMPANY.name} is a certified partner of KNX, Crestron, Control4, Lutron, and Sonos. ${COMPANY.experience} years as India's trusted home automation integrator with international certifications and brand partnerships.`,
  alternates: { canonical: "https://growmoresolutions.com/about/certifications" },
};

const CERTIFICATIONS = [
  {
    brand: "KNX",
    type: "KNX Certified Partner",
    since: "2004",
    description:
      "KNX is the worldwide standard for home and building automation (ISO/IEC 14543). As one of India's earliest KNX-certified integrators, we design and install open-protocol automation systems that are future-proof, manufacturer-independent, and scalable.",
    benefits: [
      "Open protocol — no vendor lock-in",
      "10,000+ compatible products from 500+ manufacturers",
      "Wired reliability — no Wi-Fi dependency",
      "ISO-certified global standard",
    ],
    url: "https://www.knx.org",
  },
  {
    brand: "Crestron",
    type: "Crestron Certified Dealer",
    since: "2012",
    description:
      "Crestron is the world leader in enterprise-grade automation and AV control. Our certified programmers deliver custom Crestron solutions for ultra-luxury homes, boardrooms, and hospitality — with rock-solid reliability and unmatched integration depth.",
    benefits: [
      "Enterprise-grade reliability",
      "Custom programming for any scenario",
      "Premium AV and conferencing integration",
      "24/7 remote management capabilities",
    ],
    url: "https://www.crestron.com",
  },
  {
    brand: "Control4",
    type: "Control4 Authorized Dealer",
    since: "2012",
    description:
      "Control4 delivers elegant whole-home automation with an intuitive interface. We are authorized to design, install, and program Control4 systems — offering homeowners unified control of lighting, audio, video, security, and climate from one app.",
    benefits: [
      "Award-winning user interface",
      "Whole-home automation in one platform",
      "Works with 35,000+ third-party devices",
      "Scalable from 1 room to entire estate",
    ],
    url: "https://www.control4.com",
  },
  {
    brand: "Lutron",
    type: "Lutron Certified Installer",
    since: "2014",
    description:
      "Lutron is the global leader in smart lighting control. Our certified team designs and installs Lutron systems for precise dimming, shade control, and human-centric lighting that enhances comfort while reducing energy consumption by up to 60%.",
    benefits: [
      "Industry-leading dimming technology",
      "Motorized shade integration",
      "Up to 60% energy savings",
      "Works with Alexa, Google, Apple HomeKit",
    ],
    url: "https://www.lutron.com",
  },
  {
    brand: "Sonos",
    type: "Sonos Certified Installer",
    since: "2016",
    description:
      "Sonos delivers premium multi-room audio that fills every corner of your home with brilliant sound. As certified installers, we design Sonos architectures that integrate seamlessly with your automation system for music in every room.",
    benefits: [
      "Multi-room audio with perfect sync",
      "Works with 100+ streaming services",
      "Architectural speakers for invisible audio",
      "Integrates with KNX, Crestron, Control4",
    ],
    url: "https://www.sonos.com",
  },
];

const INDUSTRY_MEMBERSHIPS = [
  "ISHRAE — Indian Society of Heating, Refrigerating and Air Conditioning Engineers",
  "IIA — Indian Institute of Architects (Associate)",
  "CEDIA — Custom Electronic Design & Installation Association",
  "BIS — Bureau of Indian Standards (Compliant)",
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
              { name: "Certifications", url: "/about/certifications" },
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
            <span className="text-white">Certifications</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-10 h-10 text-gold-500 shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Certified by the{" "}
                <span className="text-gradient-gold">World&apos;s Best</span>
              </h1>
              <p className="mt-4 text-lg text-navy-300 max-w-2xl">
                We don&apos;t just sell brands — we&apos;re certified by them. Our
                engineers undergo rigorous training and certification programs
                to deliver solutions that meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Cards */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.brand}
              className="glass-card rounded-xl p-8 hover:border-gold-500/20 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Brand badge */}
                <div className="w-20 h-20 rounded-xl bg-navy-800 border border-navy-600 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-gold-500">
                    {cert.brand}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-white">
                      {cert.type}
                    </h2>
                    <span className="text-xs bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded">
                      Since {cert.since}
                    </span>
                  </div>
                  <p className="text-navy-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-4">
                    {cert.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-navy-200">{b}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-electric-400 hover:text-electric-500 transition-colors"
                  >
                    Learn more about {cert.brand}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Memberships */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-gold-500" />
            <h2 className="text-2xl font-bold text-white">
              Industry Memberships
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {INDUSTRY_MEMBERSHIPS.map((m) => (
              <div key={m} className="glass-card rounded-lg px-5 py-4">
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
            Work With <span className="text-gradient-gold">Certified Experts</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Your smart home deserves professionals who are trained and certified
            by the world&apos;s leading automation brands. Book a free consultation.
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
