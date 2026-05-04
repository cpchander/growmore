import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Our Team — Meet the Home Automation Experts`,
  description: `Meet the leadership and engineering team at ${COMPANY.name}. ${COMPANY.experience} years of combined home automation expertise. Certified KNX, Crestron, and Control4 professionals delivering smart homes across India.`,
  alternates: { canonical: "https://growmoresolutions.com/about/team" },
};

const LEADERSHIP = [
  {
    name: "Anupam Mahajan",
    role: "Co-Founder & Managing Director",
    image: "/images/team/anupam-mahajan.webp",
    bio: "25+ years of industry experience spanning electrical, lighting, and building materials. Former VP Sales & Marketing at KLG Systel and GM Business Development at GE Consumer. Leads Grow More's vision of delivering Single Window Solutions for smart home automation across residential, corporate, and hospitality sectors.",
    certifications: ["KNX Partner", "Electrical & Lighting Expert"],
    linkedin: "https://linkedin.com/in/anupam-mahajan-3882ba14",
  },
  {
    name: "Technical Director",
    role: "Director — Engineering",
    image: null,
    bio: "Leads the engineering team across 300+ completed projects. Deep expertise in KNX, Crestron, and Control4 systems integration, conceptual lighting design, and clean air solutions for residential and commercial spaces.",
    certifications: ["KNX Certified", "Crestron Certified"],
    linkedin: "#",
  },
  {
    name: "Operations Head",
    role: "Head of Operations",
    image: null,
    bio: "Manages end-to-end project delivery across Delhi NCR and pan-India. Coordinates multi-system installations including home automation, central vacuum, solar power, and clean air systems.",
    certifications: ["Project Management", "Control4 Dealer"],
    linkedin: "#",
  },
  {
    name: "Design Lead",
    role: "Head of Design & Lighting",
    image: null,
    bio: "Specializes in conceptual lighting design and smart home experience architecture. Creates custom automation blueprints that blend aesthetics with functionality for luxury residential and hospitality projects.",
    certifications: ["Lighting Design Certified", "CEDIA Member"],
    linkedin: "#",
  },
];

const DEPARTMENTS = [
  {
    name: "Engineering & Installation",
    count: "25+",
    description: "Certified automation engineers, electricians, and commissioning specialists who handle every installation end-to-end.",
  },
  {
    name: "Design & Consultation",
    count: "8+",
    description: "Smart home designers who create custom automation plans based on your lifestyle, property layout, and budget.",
  },
  {
    name: "After-Sales & Support",
    count: "10+",
    description: "Dedicated support team for remote diagnostics, firmware updates, on-site maintenance, and system upgrades.",
  },
  {
    name: "Project Management",
    count: "6+",
    description: "Experienced project managers coordinating multi-system installations across residential and commercial projects.",
  },
];

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Team", url: "/about/team" },
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
            <span className="text-white">Team</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.about.team} alt="Grow More Solutions engineering team" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            The People Behind{" "}
            <span className="text-gradient-gold">Your Smart Home</span>
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            {COMPANY.experience} years of expertise backed by our founder&apos;s {COMPANY.founderExperience} years
            in the industry — our team of 25+ engineers, designers, and support
            professionals live and breathe home automation.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">
            <span className="text-gradient-gold">Leadership</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="glass-card rounded-xl p-6 hover:border-gold-500/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  {person.image ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-navy-700 flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-gold-500">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gold-500 mb-2">{person.role}</p>
                    <p className="text-sm text-navy-300 leading-relaxed mb-3">
                      {person.bio}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {person.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-navy-400 hover:text-electric-400 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">
            Our <span className="text-gradient-gold">Departments</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.name}
                className="glass-card rounded-xl p-6 text-center"
              >
                <span className="text-3xl font-bold text-gradient-gold">
                  {dept.count}
                </span>
                <h3 className="text-white font-semibold mt-2 mb-2">
                  {dept.name}
                </h3>
                <p className="text-xs text-navy-400 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-navy-300 mb-8">
            We&apos;re always looking for passionate automation engineers,
            designers, and project managers. If you love technology and want
            to shape how India lives, we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${COMPANY.email}?subject=Career%20Inquiry`}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Your Resume
          </a>
        </div>
      </section>
    </>
  );
}
