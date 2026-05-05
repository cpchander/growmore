import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Home Automation Across India — ${COMPANY.citiesServed} Cities Served`,
  description: `${COMPANY.name} provides smart home automation services across ${COMPANY.citiesServed} cities in India. Find your city for local consultation, installation, and support.`,
  alternates: { canonical: "https://growmoresolutions.com/cities" },
};

export default function CitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Cities", url: "/cities" },
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
            <span className="text-white">Cities</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Smart Home Automation Across{" "}
            <span className="text-gradient-gold">India</span>
          </h1>
          <p className="mt-4 text-lg text-navy-300 max-w-2xl">
            {COMPANY.name} delivers end-to-end home automation services in{" "}
            {COMPANY.citiesServed} cities. Select your city for local
            consultation, installation, and after-sales support.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="section-padding bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="glass-card rounded-xl p-6 hover:border-gold-500/20 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  <h2 className="text-lg font-semibold text-white group-hover:text-gold-500 transition-colors">
                    {city.name}
                  </h2>
                </div>
                <p className="text-sm text-navy-400 mb-3">
                  Serving {city.areas.slice(0, 4).join(", ")}
                  {city.areas.length > 4 && ` + ${city.areas.length - 4} more`}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-gold-500 font-medium">
                  View services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-navy-300 mb-8">
            We serve projects pan-India. Contact us for a consultation
            regardless of your location.
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
