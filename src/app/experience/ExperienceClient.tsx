"use client";

import dynamic from "next/dynamic";

const RoomWalkthrough = dynamic(
  () => import("@/components/three/RoomWalkthrough"),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-video rounded-2xl bg-navy-800/50 border border-navy-700 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gold-500 animate-pulse" />
          </div>
          <p className="text-navy-300 text-sm">Loading 3D Experience...</p>
        </div>
      </div>
    ),
  }
);

export default function ExperienceClient() {
  return <RoomWalkthrough />;
}
