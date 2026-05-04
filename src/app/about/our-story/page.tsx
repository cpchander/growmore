import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import Timeline from "./Timeline";
import MilestoneStats from "./MilestoneStats";
import { SocialLinks, VideoGallery } from "@/components/ui/SocialProof";

export const metadata: Metadata = {
  title: `Our Story — ${COMPANY.experience} Years of Home Automation Excellence`,
  description: `Discover the ${COMPANY.experience}-year journey of ${COMPANY.name} — from pioneering home automation in India in ${COMPANY.foundedYear} to becoming the nation's most trusted smart home company. ${COMPANY.projectsCompleted} projects across ${COMPANY.citiesServed} cities.`,
  alternates: { canonical: "https://growmoresolutions.com/about/our-story" },
};

const MILESTONES = [
  {
    year: 2009,
    title: "The Beginning",
    description:
      "Grow More Hitech Solutions Pvt. Ltd. was founded in New Delhi by Anupam Mahajan, bringing 10+ years of industry experience from leadership roles at GE Consumer and KLG Systel. The vision: deliver comprehensive Single Window Solutions for home automation, lighting, and energy systems.",
    highlight: "Company incorporated (CIN: U51101DL2009PTC194853)",
  },
  {
    year: 2011,
    title: "First Major Projects",
    description:
      "Completed initial residential and corporate automation projects in Delhi NCR. Established expertise in conceptual lighting design and home automation systems, building a reputation for quality execution.",
    highlight: "25+ projects across residential & corporate",
  },
  {
    year: 2013,
    title: "Service Expansion",
    description:
      "Expanded the service portfolio to include central vacuum systems, clean air solutions, and wiring accessories. Became a one-stop solution for architects, interior designers, and homeowners.",
    highlight: "Single Window Solutions for architects & designers",
  },
  {
    year: 2015,
    title: "Brand Partnerships",
    description:
      "Became certified dealers for KNX, Crestron, Control4, Lutron, and Sonos. Positioned as a premium integrator for luxury residential and hospitality projects in the NCR region.",
    highlight: "KNX, Crestron & Control4 certified",
  },
  {
    year: 2017,
    title: "Green Energy Division",
    description:
      "Launched solar power systems division, adding rooftop solar installations to the service portfolio. Focus on green products and energy optimization aligned with India's sustainability goals.",
    highlight: "Solar power + energy optimization",
  },
  {
    year: 2019,
    title: "Hospitality & Commercial Growth",
    description:
      "Expanded into hospitality automation for hotels and resorts. Completed 100+ projects milestone across residential, corporate, and hospitality sectors. Integrated voice control and IoT solutions.",
    highlight: "100+ projects, hospitality division launched",
  },
  {
    year: 2021,
    title: "Stretch Ceiling & Home Theater",
    description:
      "Added stretch ceiling solutions and premium home theater installations. Deepened the Single Window Solutions approach — clients get everything from lighting to acoustics under one roof.",
    highlight: "Complete interior automation solutions",
  },
  {
    year: 2023,
    title: "Pan-India Reach",
    description:
      "Expanded service reach beyond Delhi NCR to cover 15+ cities across India. Crossed 200+ completed projects. Strengthened partnerships with leading builders and architects.",
    highlight: "15+ cities, 200+ projects",
  },
  {
    year: 2025,
    title: "Digital-First Future",
    description:
      "Launched growmoresolutions.com — a digital-first platform for smart home planning, product comparison, and instant quotes. Pioneering AI-powered home automation with predictive climate and adaptive lighting.",
    highlight: "300+ projects, digital transformation",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Our Story", url: "/about/our-story" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-gold-500">About</Link>
            <span>/</span>
            <span className="text-white">Our Story</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.about.story} alt="Grow More Solutions company story and history" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            <span className="text-gradient-gold">{COMPANY.experience} Years</span> of
            <br />Making Homes Intelligent
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
            Founded in {COMPANY.foundedYear} by industry veteran Anupam Mahajan,
            Grow More Hitech Solutions has grown from a Delhi-based startup to
            India&apos;s trusted Single Window Solution for smart homes — delivering
            automation, lighting, and energy solutions across {COMPANY.citiesServed} cities.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-12 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-gold-500/30">
              <Image
                src="/images/team/anupam-mahajan.webp"
                alt="Anupam Mahajan — Co-Founder & Managing Director"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <blockquote className="text-navy-200 italic leading-relaxed mb-3">
                &ldquo;Our vision has always been simple — deliver a Single Window Solution so homeowners never have to juggle multiple vendors for automation, lighting, and energy. One team, one responsibility, one experience.&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-white">Anupam Mahajan</p>
              <p className="text-xs text-gold-500">Co-Founder & Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Stats */}
      <MilestoneStats />

      {/* Timeline */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Our <span className="text-gradient-gold">Journey</span>
          </h2>
          <Timeline milestones={MILESTONES} />
        </div>
      </section>

      {/* Social Media & Videos */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            See Our Work <span className="text-gradient-gold">In Action</span>
          </h2>
          <p className="text-navy-300 text-center mb-10 max-w-2xl mx-auto">
            Watch automation demos from our completed projects and follow us on
            social media for the latest installations and smart home tips.
          </p>
          <VideoGallery />
          <div className="mt-10">
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Vision</span>
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed mb-8">
            To make every Indian home intelligent, energy-efficient, and
            secure — regardless of size or budget. We believe smart living
            shouldn&apos;t be a luxury. With {COMPANY.experience} years of
            experience, we&apos;re building the future where technology serves
            your lifestyle seamlessly and invisibly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Start Your Smart Home Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
