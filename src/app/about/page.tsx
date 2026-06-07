import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import { ArrowRight, BookOpen, Users, Award, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About Grow More Solutions",
  description: `Grow More Solutions — India's most experienced home automation company. ${COMPANY.experience} years, ${COMPANY.projectsCompleted} projects across ${COMPANY.citiesServed} cities. Meet our story, team & certifications.`,
  path: "/about",
});

const SECTIONS = [
  {
    href: "/about/our-story",
    icon: BookOpen,
    title: "Our Story",
    tagline: `${COMPANY.experience} years of home automation`,
    desc: `From pioneering home automation in India in ${COMPANY.foundedYear} to ${COMPANY.projectsCompleted} projects across ${COMPANY.citiesServed} cities — the milestones that built India's most experienced smart home company.`,
  },
  {
    href: "/about/team",
    icon: Users,
    title: "Leadership & Team",
    tagline: "The people behind the projects",
    desc: "Meet the leadership and engineering team designing and delivering luxury home automation across India — in-house, no subcontracting.",
  },
  {
    href: "/about/certifications",
    icon: Award,
    title: "Certifications & Partnerships",
    tagline: "KNX, Crestron, Control4 & Lutron certified",
    desc: "Our brand partnerships and certifications — the credentials that let us recommend the right technology for your home rather than a single product line.",
  },
];

const faqs = [
  {
    question: "Who is Grow More Solutions?",
    answer:
      `Grow More Solutions (legally ${COMPANY.legalName}) is India's most experienced home automation company, founded in ${COMPANY.foundedYear} and based in Ghitorni, New Delhi. With ${COMPANY.experience} years of experience and ${COMPANY.projectsCompleted} completed projects across ${COMPANY.citiesServed} cities, we are certified partners of KNX, Crestron, Control4, and Lutron.`,
  },
  {
    question: "What makes Grow More Solutions different?",
    answer:
      "An end-to-end in-house team (no subcontracting), multi-brand certification so recommendations aren't tied to one product line, a live Experience Center in Delhi where you can see automation working before you invest, and a 15+ year track record across residential, commercial, and hospitality projects.",
  },
];

export default function AboutHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gold-500 uppercase mb-4">
            <Sparkles className="w-4 h-4" /> About the company
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About <span className="text-gradient-gold">Grow More Solutions</span>
          </h1>

          {/* Featured-snippet definition (40–60 words) */}
          <p className="mt-4 text-lg text-navy-300 max-w-3xl">
            Grow More Solutions is India&apos;s most experienced home automation
            company — {COMPANY.experience} years, {COMPANY.projectsCompleted}{" "}
            projects across {COMPANY.citiesServed} cities, and certified across
            KNX, Crestron, Control4, and Lutron. We design, install, and support
            luxury smart homes end-to-end, with an in-house team and a live
            Experience Center in New Delhi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-8 py-4 rounded-xl transition-colors"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Explore <span className="text-gradient-gold">About</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glass-card rounded-xl p-6 group hover:border-gold-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-8 h-8 text-gold-500" />
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-gradient-gold font-semibold mb-3">{s.tagline}</p>
                <p className="text-sm text-navy-300 mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-gold-500 text-sm font-semibold group-hover:gap-3 transition-all">
                  {s.title} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            About <span className="text-gradient-gold">FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              `${COMPANY.experience} Years Experience`,
              `${COMPANY.projectsCompleted} Projects Delivered`,
              `${COMPANY.citiesServed}+ Cities Across India`,
            ].map((item) => (
              <div key={item} className="glass-card rounded-lg p-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-sm text-navy-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work With <span className="text-gradient-gold">India&apos;s Most Experienced Team</span>
          </h2>
          <p className="text-navy-300 mb-8">
            Book a free, no-obligation consultation and see a working automation
            system at our New Delhi Experience Center.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
