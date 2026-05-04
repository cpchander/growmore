import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Make Your Home{" "}
          <span className="text-gradient-gold">Intelligent?</span>
        </h2>
        <p className="mt-4 text-lg text-navy-300">
          Book a free consultation with our smart home experts. We&apos;ll
          visit your property, understand your needs, and design a custom
          automation plan — no obligation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold-500/25"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex items-center gap-2 border border-navy-600 hover:border-navy-400 text-white px-8 py-4 rounded-xl text-base transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {COMPANY.phone}
          </a>
        </div>

        <p className="mt-6 text-sm text-navy-400">
          Trusted by {COMPANY.projectsCompleted} homeowners, builders, and
          architects across {COMPANY.citiesServed} cities.
        </p>
      </div>
    </section>
  );
}
