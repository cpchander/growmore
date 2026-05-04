import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/metadata";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: `3D Smart Home Experience — Interactive Room Walkthrough`,
  description: `Explore a smart home in 3D. Click lights, open curtains, adjust temperature — experience home automation before you buy. Interactive walkthrough by ${COMPANY.name}.`,
  alternates: { canonical: "https://growmoresolutions.com/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "3D Experience", url: "/experience" },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">3D Experience</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              3D Smart Home{" "}
              <span className="text-gradient-gold">Experience</span>
            </h1>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              See what happens when you walk into a smart home. Watch lights
              turn on automatically, curtains open at sunrise, rooms transform
              for movie night, and security arm itself at bedtime.
            </p>
            <p className="mt-2 text-sm text-navy-400">
              Click each scenario below to watch automation respond in real time.
            </p>
          </div>

          {/* 3D Walkthrough (client component) */}
          <ExperienceClient />

          {/* What You're Seeing */}
          <div className="mt-16 glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              What You&apos;re Experiencing
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Scene Control
                </h3>
                <p className="text-navy-300">
                  Each room has pre-programmed scenes — movie mode, dinner mode,
                  goodnight mode. One button transforms the entire room.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Automation Logic
                </h3>
                <p className="text-navy-300">
                  Smart sensors detect occupancy, time of day, and ambient
                  conditions to automate lighting, HVAC, and security
                  automatically.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Unified Control
                </h3>
                <p className="text-navy-300">
                  All systems — lighting, audio, climate, curtains, security —
                  are managed from a single app, touch panel, or voice command.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-300 mb-4">
              Ready to experience this in your own home?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
