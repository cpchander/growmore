import Link from "next/link";
import { CITIES } from "@/lib/constants";
import { MapPin } from "lucide-react";

export default function CitiesSection() {
  return (
    <section className="section-padding bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Cities We <span className="text-gradient-gold">Serve</span>
          </h2>
          <p className="mt-4 text-navy-300">
            On-ground teams across India&apos;s top metros. Local expertise,
            national standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group flex items-center gap-3 glass-card rounded-lg px-4 py-3 hover:border-gold-500/30 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-sm text-navy-200 group-hover:text-white transition-colors">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
