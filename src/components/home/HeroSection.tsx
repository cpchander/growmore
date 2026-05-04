"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { COMPANY, BRANDS } from "@/lib/constants";
import { ArrowRight, Play } from "lucide-react";

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
              India&apos;s Most{" "}
              <span className="text-gradient-gold">Experienced</span>
              <br />
              Smart Home Company
            </h1>

            <p className="mt-6 text-lg text-navy-300 leading-relaxed max-w-lg">
              {COMPANY.experience} years of transforming Indian homes with
              intelligent automation. From smart lighting to whole-home control —
              we design, install, and support your dream smart home.
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
                href="/experience"
                className="inline-flex items-center gap-2 border border-navy-600 hover:border-navy-400 text-white px-8 py-4 rounded-xl text-base font-medium transition-colors"
              >
                <Play className="w-5 h-5" />
                Explore in 3D
              </Link>
            </div>

            {/* Trust Logos */}
            <div className="mt-12">
              <p className="text-xs text-navy-400 uppercase tracking-wider mb-4">
                Certified Partners
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                {BRANDS.slice(0, 8).map((brand) => (
                  <a
                    key={brand.slug}
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                    title={brand.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-8 w-auto max-w-[100px] object-contain brightness-0 invert"
                    />
                  </a>
                ))}
                <span className="text-xs text-navy-500 font-medium">+{BRANDS.length - 8} more</span>
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
