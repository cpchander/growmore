import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { COMPANY, SERVICES, CITIES } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-flex flex-col items-center mb-4">
              <Image
                src="/images/company/gmhs.png"
                alt="GMHS - Grow More Hitech Solutions"
                width={200}
                height={52}
                className="h-11 w-auto"
              />
              <span className="text-[10px] font-semibold text-gold-500 mt-1" style={{ letterSpacing: "0.45em" }}>
                SINCE {COMPANY.foundedYear}
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              {COMPANY.tagline}. Transforming Indian homes with intelligent
              automation since {COMPANY.foundedYear}.
            </p>
            <div className="flex gap-3">
              {Object.entries(COMPANY.socialLinks)
                .filter(([, url]) => url && url.length > 0)
                .map(([platform, url]) => {
                  const Icon = SOCIAL_ICONS[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                      aria-label={`Follow us on ${platform}`}
                    >
                      {Icon ? <Icon className="w-4 h-4" /> : platform[0].toUpperCase()}
                    </a>
                  );
                })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-semibold mb-4">Cities We Serve</h3>
            <ul className="space-y-2">
              {CITIES.slice(0, 9).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-sm text-navy-300 hover:text-gold-500 transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cities" className="text-sm text-gold-500 hover:text-gold-400">
                  All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-navy-300">
              <p>{COMPANY.address}</p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="block hover:text-gold-500 transition-colors"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="block hover:text-gold-500 transition-colors"
              >
                {COMPANY.email}
              </a>
              <Link
                href="/ventures"
                className="block text-gold-500 hover:text-gold-400 transition-colors mt-4 font-medium"
              >
                Ventures & Partnerships →
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-gold-500 hover:bg-gold-600 text-navy-900 px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.{" "}
            {COMPANY.experience} years of home automation excellence.
          </p>
          <div className="flex gap-6 text-xs text-navy-400">
            <Link href="/privacy" className="hover:text-navy-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-navy-200">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-navy-200">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
