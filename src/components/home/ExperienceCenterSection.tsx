import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import {
  MapPin, Clock, Sparkles, Shield, Wrench,
  CheckCircle2, Phone, ArrowRight,
} from "lucide-react";

export default function ExperienceCenterSection() {
  return (
    <section className="section-padding bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ─── Left: Experience Center ─── */}
          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
              Visit Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {COMPANY.demoCenter.name.split("Experience")[0]}
              <span className="text-gradient-gold">Experience Center</span>
            </h2>
            <p className="text-navy-300 leading-relaxed mb-6">
              See home automation in action before you invest. Our live showroom
              in Ghitorni, New Delhi features fully working smart home systems
              from all major brands — so you can touch, feel, and experience the
              difference.
            </p>

            <ul className="space-y-3 mb-8">
              {COMPANY.demoCenter.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-navy-200 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="glass-card rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <p className="text-sm text-navy-200">{COMPANY.demoCenter.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                <p className="text-sm text-navy-200">{COMPANY.demoCenter.hours}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-sm text-navy-200 hover:text-gold-500 transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Book a Demo Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ─── Right: After-Sales & AMC ─── */}
          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold uppercase tracking-wider mb-3">
              Post-Installation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              After-Sales <span className="text-gradient-gold">Support & AMC</span>
            </h2>
            <p className="text-navy-300 leading-relaxed mb-6">
              Your smart home investment is protected long after installation.
              We offer comprehensive warranty coverage, Annual Maintenance
              Contracts, and dedicated support — because great service
              doesn&apos;t end at commissioning.
            </p>

            {/* Warranty + AMC highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="glass-card rounded-xl p-4">
                <Shield className="w-7 h-7 text-gold-500 mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {COMPANY.afterSales.warranty}
                </h3>
                <p className="text-xs text-navy-400">
                  Full parts & labor coverage from day one.
                </p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <Wrench className="w-7 h-7 text-gold-500 mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">
                  {COMPANY.afterSales.amc}
                </h3>
                <p className="text-xs text-navy-400">
                  Preventive maintenance & priority support plans.
                </p>
              </div>
            </div>

            {/* Support services list */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <h3 className="text-white font-semibold">
                  {COMPANY.afterSales.support}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {COMPANY.afterSales.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-200">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
