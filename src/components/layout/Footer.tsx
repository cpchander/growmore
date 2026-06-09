import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES, CITIES } from "@/lib/constants";

// Curated subsets for the footer (full lists live at /services and /cities)
const FOOTER_SERVICE_SLUGS = [
  "home-automation",
  "conceptual-lighting",
  "home-theater",
  "home-security",
  "smart-switches",
  "home-networking",
  "curtain-gate-motors",
  "hvac-automation",
];

const FOOTER_CITY_SLUGS = [
  "delhi",
  "gurgaon",
  "noida",
  "mumbai",
  "bangalore",
  "hyderabad",
  "pune",
  "chennai",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700/50">
      {/* Main Footer — 4 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_SERVICE_SLUGS.map((slug) => {
                const service = SERVICES.find((s) => s.slug === slug);
                if (!service) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gold-500 hover:text-gold-400 font-medium transition-colors"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Cities — curated subset + link to full list */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Cities We Serve
            </h3>
            <ul className="space-y-2">
              {FOOTER_CITY_SLUGS.map((slug) => {
                const city = CITIES.find((c) => c.slug === slug);
                if (!city) return null;
                return (
                  <li key={slug}>
                    <Link
                      href={`/cities/${slug}`}
                      className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                    >
                      {city.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/cities"
                  className="text-sm text-gold-500 hover:text-gold-400 font-medium transition-colors"
                >
                  View all cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/estimator"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Cost Estimator & BOQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/home-automation-cost-2026"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Cost Guide 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/smart-home-planner"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Smart Home Planner
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Compare Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/get-quote"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Get Instant Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  3D Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/villa-walkthrough"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  3D Villa Walkthrough
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nri"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  NRI Property Services
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about/our-story"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/certifications"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Ventures & Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NAP Strip — address, hours, social, CTA */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Logo + tagline */}
            <div>
              <Link href="/" className="inline-flex flex-col items-start mb-3">
                <Image
                  src="/images/company/gmhs.png"
                  alt="Grow More Solutions — India's Leading Home Automation Company"
                  width={200}
                  height={52}
                  className="h-10 w-auto"
                />
                <span
                  className="text-[10px] font-semibold text-gold-500 mt-1"
                  style={{ letterSpacing: "0.45em" }}
                >
                  SINCE {COMPANY.foundedYear}
                </span>
              </Link>
              <p className="text-navy-400 text-xs leading-relaxed">
                {COMPANY.tagline}
              </p>
            </div>

            {/* NAP block */}
            <div className="space-y-2 text-sm text-navy-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            {/* Hours + social */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-navy-300">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{COMPANY.demoCenter.hours}</span>
              </div>
              <div className="flex gap-2">
                {COMPANY.socialLinks.instagram && (
                  <a
                    href={COMPANY.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {COMPANY.socialLinks.facebook && (
                  <a
                    href={COMPANY.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {COMPANY.socialLinks.linkedin && (
                  <a
                    href={COMPANY.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-center"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center border border-gold-500/30 hover:border-gold-500 text-gold-500 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Get Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — copyright */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. CIN:{" "}
            {COMPANY.cin}. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            {COMPANY.experience} years of smart home automation excellence
            across India.
          </p>
        </div>
      </div>
    </footer>
  );
}
