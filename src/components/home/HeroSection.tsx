"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { COMPANY, BRANDS } from "@/lib/constants";
import { ArrowRight, Play, MapPin, CheckCircle2 } from "lucide-react";

const HERO_PROOFS = [
  "In-house certified engineers — no subcontracting",
  "1-yr warranty + AMC & 24/7 support",
  `${COMPANY.referralRate} of clients refer us`,
  "Works offline — even in a power cut",
];

const SmartHomeSceneLoader = dynamic(
  () => import("@/components/three/SmartHomeSceneLoader"),
  { ssr: false }
);

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-500 text-sm font-medium">
                Pioneers Since {COMPANY.foundedYear}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Smart Home That{" "}
              <span className="text-gradient-gold">Understands You</span>
            </h1>

            <p className="mt-6 text-lg text-navy-300 leading-relaxed max-w-lg">
              For {COMPANY.experience} years, {COMPANY.name} has designed, installed
              and <span className="text-navy-100 font-medium">maintained</span> some of
              India&apos;s finest smart homes — whole-home control that simply works,
              backed by engineers who never leave your side.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#experience-center"
                className="inline-flex items-center gap-2 bg-gold-500/15 border-2 border-gold-500 hover:bg-gold-500/25 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors"
              >
                <MapPin className="w-5 h-5 text-gold-500" />
                Visit the Experience Center
              </Link>
            </div>

            <Link href="/experience" className="mt-4 inline-flex items-center gap-2 text-sm text-navy-400 hover:text-gold-500 transition-colors">
              <Play className="w-4 h-4" /> Or explore a smart home in 3D
            </Link>

            {/* After-sales proof bar */}
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {HERO_PROOFS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-navy-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Technology we build on */}
            <div className="mt-10">
              <p className="text-xs text-navy-400 uppercase tracking-wider mb-4">
                Technology We Build On
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {BRANDS.slice(0, 8).map((brand) => {
                  const inner = brand.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={brand.logo} alt={brand.name} className="h-5 w-auto max-w-[80px] object-contain" />
                  ) : (
                    <span className="text-xs font-semibold text-white/80 whitespace-nowrap">{brand.name}</span>
                  );
                  return brand.url ? (
                    <a key={brand.slug} href={brand.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-9 px-2.5 rounded-md bg-white/10 hover:bg-white/20 transition-all" title={brand.name}>
                      {inner}
                    </a>
                  ) : (
                    <span key={brand.slug} className="flex items-center justify-center h-9 px-2.5 rounded-md bg-white/10" title={brand.name}>
                      {inner}
                    </span>
                  );
                })}
                <Link href="/brands" className="text-xs text-navy-500 hover:text-gold-500 font-medium transition-colors">+{BRANDS.length - 8} more</Link>
              </div>
            </div>
          </div>

          {/* Right — 3D Smart Home Scene */}
          <div className="relative">
            <SmartHomeSceneLoader />
          </div>
        </div>
      </div>
    </section>
  );
}
