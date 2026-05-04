"use client";

import { useState, useEffect, lazy, Suspense } from "react";

// Lazy-load the 3D scene so it doesn't block LCP
const SmartHomeScene = lazy(() => import("./SmartHomeScene"));

/**
 * Progressive loader: shows a static placeholder immediately (good for LCP),
 * then hydrates the full 3D scene after the page has loaded.
 * On mobile (< 768px), stays on the static fallback for performance.
 */
export default function SmartHomeSceneLoader({
  className = "",
}: {
  className?: string;
}) {
  const [showScene, setShowScene] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (!mobile) {
      // Delay 3D load until after main content paints
      const timer = setTimeout(() => setShowScene(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Mobile fallback — animated static visual
  if (isMobile) {
    return (
      <div
        className={`relative w-full aspect-square rounded-2xl bg-navy-800/50 border border-[#3b5a8a]/40 overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold-500/30 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gold-500 animate-pulse" />
              </div>
            </div>
            <p className="text-white text-sm font-medium">
              Smart Home Preview
            </p>
            <p className="text-navy-400 text-xs mt-1">
              Best experienced on desktop
            </p>
          </div>
        </div>

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Floating info cards */}
        <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-sm border border-navy-700 rounded-lg px-3 py-1.5 text-xs">
          <span className="text-gold-500 font-semibold">Smart Lighting</span>
          <span className="text-navy-400 ml-1">Active</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-navy-900/80 backdrop-blur-sm border border-navy-700 rounded-lg px-3 py-1.5 text-xs">
          <span className="text-gold-500 font-semibold">Climate</span>
          <span className="text-navy-400 ml-1">24°C</span>
        </div>
      </div>
    );
  }

  // Desktop — show static placeholder, then fade to 3D
  return (
    <div
      className={`relative w-full aspect-square rounded-2xl overflow-hidden ${className}`}
    >
      {/* Static placeholder (shows immediately, good for LCP) */}
      {!showScene && (
        <div className="absolute inset-0 bg-navy-800/50 border border-[#3b5a8a]/40 rounded-2xl flex items-center justify-center z-10">
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold-500/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold-500/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gold-500 animate-pulse" />
              </div>
            </div>
            <p className="text-navy-300 text-sm">Loading 3D Scene...</p>
            <p className="text-navy-500 text-xs mt-1">
              Click and explore automation in action
            </p>
          </div>
        </div>
      )}

      {/* 3D scene (lazy loaded) */}
      {showScene && (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gold-500 animate-pulse" />
            </div>
          }
        >
          <SmartHomeScene className="w-full h-full" />
        </Suspense>
      )}

      {/* Floating info cards (always visible) */}
      <div className="absolute top-6 right-6 bg-navy-900/80 backdrop-blur-sm border border-navy-700 rounded-lg px-3 py-2 text-xs z-20 pointer-events-none">
        <span className="text-gold-500 font-semibold">Smart Lighting</span>
        <span className="text-navy-400 ml-1">Active</span>
      </div>
      <div className="absolute bottom-6 left-6 bg-navy-900/80 backdrop-blur-sm border border-navy-700 rounded-lg px-3 py-2 text-xs z-20 pointer-events-none">
        <span className="text-gold-500 font-semibold">Climate</span>
        <span className="text-navy-400 ml-1">24°C</span>
      </div>
    </div>
  );
}
