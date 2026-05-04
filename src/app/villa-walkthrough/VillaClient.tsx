"use client";

import dynamic from "next/dynamic";

const VillaWalkthrough = dynamic(
  () => import("@/components/three/VillaWalkthrough"),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-video rounded-2xl bg-navy-800/50 border border-navy-700 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gold-500 animate-pulse" />
          </div>
          <p className="text-navy-300 text-sm">Loading 3D Villa Walkthrough...</p>
          <p className="text-navy-500 text-xs mt-1">Preparing 8 immersive zones</p>
        </div>
      </div>
    ),
  }
);

export default function VillaClient() {
  return <VillaWalkthrough />;
}
