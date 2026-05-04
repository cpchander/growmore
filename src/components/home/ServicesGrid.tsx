import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import {
  Lightbulb, Shield, Thermometer, PanelTop,
  Tv, Mic, Home, Building2,
  Wind, Fan, Sun,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, Shield, Thermometer, PanelTop,
  Tv, Mic, Home, Building2,
  Wind, Fan, Sun,
};

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What We <span className="text-gradient-gold">Automate</span>
          </h2>
          <p className="mt-4 text-navy-300">
            End-to-end smart home solutions — from individual systems to
            complete whole-home automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group glass-card rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {service.shortDesc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-navy-800 text-navy-300 px-2 py-0.5 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
