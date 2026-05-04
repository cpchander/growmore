import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Home, Shield, Lightbulb, Thermometer, Music } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/metadata";
import VillaClient from "./VillaClient";

export const metadata: Metadata = {
  title: `3D Villa Walkthrough — Smart Home Automation Experience`,
  description: `Walk through a fully automated luxury villa in 3D. Experience gate entry, garage automation, smart lighting, home theater, climate control & security — all 8 zones by ${COMPANY.name}.`,
  alternates: { canonical: "https://growmoresolutions.com/villa-walkthrough" },
};

export default function VillaWalkthroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Villa Walkthrough", url: "/villa-walkthrough" },
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
            <span className="text-white">Villa Walkthrough</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              3D Smart Villa{" "}
              <span className="text-gradient-gold">Walkthrough</span>
            </h1>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Step inside a fully automated luxury villa. From the moment the
              gate opens to the terrace pool lighting up at night — experience
              8 zones of intelligent home automation in real time.
            </p>
            <p className="mt-2 text-sm text-navy-400">
              Use the playback controls or click any zone to explore. Watch
              automation events trigger as you move through each space.
            </p>
          </div>

          {/* 3D Villa Walkthrough (client component) */}
          <VillaClient />

          {/* What You're Seeing */}
          <div className="mt-16 glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              What You&apos;re Experiencing
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Home className="w-4 h-4 text-gold-500" />
                  <h3 className="font-semibold text-gold-500">Gate &amp; Entry</h3>
                </div>
                <p className="text-navy-300">
                  Automatic gate opens via ANPR or geofencing. Garage shutter
                  rolls up, driveway lights illuminate, and CCTV begins
                  recording — all before you step out of your car.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-gold-500" />
                  <h3 className="font-semibold text-gold-500">Smart Lighting</h3>
                </div>
                <p className="text-navy-300">
                  Each room has pre-programmed scenes — welcome mode, dinner
                  mode, movie mode, goodnight mode. Occupancy sensors adjust
                  brightness automatically as you move through the villa.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-gold-500" />
                  <h3 className="font-semibold text-gold-500">Climate &amp; HVAC</h3>
                </div>
                <p className="text-navy-300">
                  Zone-based climate control maintains different temperatures
                  in each room. HVAC pre-cools before you arrive and adjusts
                  based on occupancy and time of day.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <h3 className="font-semibold text-gold-500">Security &amp; AV</h3>
                </div>
                <p className="text-navy-300">
                  Smart locks, motion sensors, IP cameras, and panic buttons
                  secure every zone. The home theater activates with one tap —
                  screen descends, lights dim, audio calibrates.
                </p>
              </div>
            </div>
          </div>

          {/* Automation Zones Summary */}
          <div className="mt-12 glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              8 Zones of Intelligent Automation
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">1</span>
                <div>
                  <p className="text-white font-semibold">Entry Gate</p>
                  <p className="text-navy-400">ANPR recognition, auto-open, perimeter lights, CCTV alert</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">2</span>
                <div>
                  <p className="text-white font-semibold">Car Garage</p>
                  <p className="text-navy-400">Motorized shutter, bay lights, EV charging indicator, pathway lights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">3</span>
                <div>
                  <p className="text-white font-semibold">Grand Foyer</p>
                  <p className="text-navy-400">Chandelier scene, welcome music, HVAC pre-cool, smart lock</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">4</span>
                <div>
                  <p className="text-white font-semibold">Living Room</p>
                  <p className="text-navy-400">Scene modes, motorized curtains, multi-room audio, ambient lighting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">5</span>
                <div>
                  <p className="text-white font-semibold">Kitchen &amp; Dining</p>
                  <p className="text-navy-400">Task lighting, dinner scene, gas leak sensor, exhaust auto-on</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">6</span>
                <div>
                  <p className="text-white font-semibold">Home Theater</p>
                  <p className="text-navy-400">Motorized screen, Dolby Atmos, aisle LEDs, lights dim to 5%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">7</span>
                <div>
                  <p className="text-white font-semibold">Master Bedroom</p>
                  <p className="text-navy-400">Goodnight scene, blackout curtains, AC schedule, wake-up light</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shrink-0 text-xs font-bold text-navy-900">8</span>
                <div>
                  <p className="text-white font-semibold">Terrace &amp; Pool</p>
                  <p className="text-navy-400">RGB pool lights, garden uplights, stargazing mode, party scene</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-300 mb-4">
              Want this level of automation in your villa?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Book Free Villa Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Music className="w-5 h-5" />
                Try Room Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
