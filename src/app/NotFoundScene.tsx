"use client";

import { useEffect, useState } from "react";

export default function NotFoundScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-64 h-48 mx-auto select-none" aria-hidden="true">
      {/* House body */}
      <svg
        viewBox="0 0 260 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof */}
        <polygon
          points="130,20 30,85 230,85"
          fill="none"
          stroke="#D4A843"
          strokeWidth="3"
          className={`transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        {/* Chimney */}
        <rect
          x="175" y="35" width="18" height="45"
          fill="none" stroke="#1A2744" strokeWidth="2"
          className={`transition-all duration-1000 delay-200 ${mounted ? "opacity-60" : "opacity-0"}`}
        />
        {/* House walls */}
        <rect
          x="50" y="85" width="160" height="100" rx="4"
          fill="#111D35"
          stroke="#1A2744"
          strokeWidth="2"
          className={`transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        {/* Door */}
        <rect
          x="110" y="125" width="40" height="60" rx="3"
          fill="#0A1628"
          stroke="#1A2744"
          strokeWidth="2"
          className={`transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        {/* Door knob */}
        <circle
          cx="142" cy="158" r="3"
          fill="#D4A843"
          className={`transition-all duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        {/* Left window — flickering */}
        <rect
          x="65" y="100" width="30" height="25" rx="2"
          fill="#D4A843"
          className={`transition-all duration-500 delay-400 ${mounted ? "animate-flicker opacity-30" : "opacity-0"}`}
        />
        <line x1="80" y1="100" x2="80" y2="125" stroke="#1A2744" strokeWidth="1.5" />
        <line x1="65" y1="112.5" x2="95" y2="112.5" stroke="#1A2744" strokeWidth="1.5" />

        {/* Right window — off */}
        <rect
          x="165" y="100" width="30" height="25" rx="2"
          fill="#0A1628"
          stroke="#1A2744"
          strokeWidth="2"
          className={`transition-all duration-500 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <line x1="180" y1="100" x2="180" y2="125" stroke="#1A2744" strokeWidth="1.5" />
        <line x1="165" y1="112.5" x2="195" y2="112.5" stroke="#1A2744" strokeWidth="1.5" />

        {/* "Disconnected" Wi-Fi icon above house */}
        <g
          className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}
          transform="translate(115, 0)"
        >
          {/* Wi-Fi arcs — with slash */}
          <path d="M15,12 Q15,6 21,3" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <path d="M15,12 Q15,8 19,6" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <circle cx="15" cy="14" r="1.5" fill="#D4A843" />
          {/* Slash through */}
          <line x1="8" y1="2" x2="22" y2="16" stroke="#FF4444" strokeWidth="2" strokeLinecap="round">
            {mounted && (
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            )}
          </line>
        </g>

        {/* 404 text on the door */}
        <text
          x="130" y="155"
          textAnchor="middle"
          fill="#D4A843"
          fontSize="16"
          fontWeight="700"
          fontFamily="monospace"
          className={`transition-all duration-700 delay-600 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          404
        </text>

        {/* Ground line */}
        <line
          x1="20" y1="185" x2="240" y2="185"
          stroke="#1A2744"
          strokeWidth="1"
          strokeDasharray="6,4"
          className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />

        {/* Floating particles — smart home vibes */}
        {mounted && (
          <>
            <circle cx="35" cy="70" r="2" fill="#D4A843" opacity="0.3">
              <animate attributeName="cy" values="70;60;70" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="225" cy="65" r="1.5" fill="#3B82F6" opacity="0.3">
              <animate attributeName="cy" values="65;55;65" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="45" cy="140" r="1.5" fill="#D4A843" opacity="0.2">
              <animate attributeName="cy" values="140;130;140" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="215" cy="150" r="2" fill="#3B82F6" opacity="0.2">
              <animate attributeName="cy" values="150;140;150" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2.8s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}
