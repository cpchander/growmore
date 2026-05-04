import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, ExternalLink, Globe, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: `Our Ventures & Partnerships — Global Expansion Beyond Home Automation | ${COMPANY.name}`,
  description: `${COMPANY.name} expands into global remote staffing through Zedtreeo and knowledge publishing via Remote Staffing Wiki. Leveraging ${COMPANY.experience} years of operational expertise.`,
  alternates: { canonical: "https://growmoresolutions.com/ventures" },
};

const VENTURES = [
  {
    name: "Zedtreeo",
    url: "https://zedtreeo.com",
    tagline: "Global Remote Staffing — Built on Indian Talent",
    description:
      "A US-headquartered remote staffing company that connects businesses worldwide with pre-vetted, dedicated employees from India. Leveraging Grow More's 17+ years of workforce management and operational infrastructure, Zedtreeo delivers enterprise-grade remote talent starting from $5/hour.",
    highlights: [
      "US-headquartered with India delivery operations",
      "Pre-vetted, dedicated full-time employees",
      "Enterprise-grade remote talent from $5/hour",
      "Built on Grow More's 17+ years of operational infrastructure",
    ],
    icon: Users,
    color: "electric",
  },
  {
    name: "Remote Staffing Wiki",
    url: "https://remotestaffingwiki.com",
    tagline: "The Industry Knowledge Base for Remote Hiring",
    description:
      "An industry knowledge base covering remote hiring, outsourcing best practices, and distributed team management. Published by the Zedtreeo team to help businesses navigate the global remote staffing landscape with confidence.",
    highlights: [
      "Comprehensive remote hiring guides",
      "Outsourcing best practices & frameworks",
      "Distributed team management playbooks",
      "Free industry research & insights",
    ],
    icon: BookOpen,
    color: "gold",
  },
];

export default function VenturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Ventures & Partnerships", url: "/ventures" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Ventures & Partnerships</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Our <span className="text-gradient-gold">Ventures</span> &{" "}
            Partnerships
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl leading-relaxed">
            {COMPANY.name} has expanded its expertise beyond home automation into
            global remote staffing and industry knowledge publishing — powered by
            the same operational excellence that drives our {COMPANY.experience}{" "}
            years of smart home delivery.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {VENTURES.map((venture) => {
              const Icon = venture.icon;
              return (
                <div
                  key={venture.name}
                  className="glass-card rounded-2xl p-8 hover:border-gold-500/20 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                        venture.color === "gold"
                          ? "bg-gold-500/10"
                          : "bg-electric-500/10"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${
                          venture.color === "gold"
                            ? "text-gold-500"
                            : "text-electric-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {venture.name}
                      </h2>
                      <p className="text-sm text-gold-500 font-medium mb-4">
                        {venture.tagline}
                      </p>
                      <p className="text-navy-200 leading-relaxed mb-6">
                        {venture.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {venture.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-sm text-navy-300"
                          >
                            <span className="text-gold-500 mt-0.5">•</span>
                            {item}
                          </div>
                        ))}
                      </div>

                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-xl font-semibold transition-colors text-sm"
                      >
                        Visit {venture.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connection Story */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            From Smart Homes to{" "}
            <span className="text-gradient-gold">Global Talent</span>
          </h2>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-navy-200 leading-relaxed mb-4">
              What started as India&apos;s leading home automation company has
              evolved into a multi-vertical technology group. The same
              operational discipline that powers {COMPANY.projectsCompleted}+
              smart home projects — project management, quality control, and
              client-first delivery — now drives{" "}
              <a
                href="https://zedtreeo.com"
                target="_blank"
                rel="noopener"
                className="text-gold-500 hover:text-gold-400 font-medium transition-colors"
              >
                Zedtreeo
              </a>
              &apos;s global remote staffing operations.
            </p>
            <p className="text-navy-200 leading-relaxed">
              Meanwhile,{" "}
              <a
                href="https://remotestaffingwiki.com"
                target="_blank"
                rel="noopener"
                className="text-gold-500 hover:text-gold-400 font-medium transition-colors"
              >
                Remote Staffing Wiki
              </a>{" "}
              serves as an open knowledge base helping businesses worldwide
              navigate remote hiring, outsourcing best practices, and
              distributed team management — drawing on real operational
              experience, not theory.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our <span className="text-gradient-gold">Ecosystem</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Whether you need a smart home or a smart team — our group of
            companies has you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Smart Home Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://zedtreeo.com"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Hire Remote Talent
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
