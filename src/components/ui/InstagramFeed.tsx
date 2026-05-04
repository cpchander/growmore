"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

// Best Instagram post shortcodes from @conceptual_homeautomation
const INSTAGRAM_POSTS = [
  { shortcode: "DGz9IrzSBmg", caption: "Smart Home Automation Showroom" },
  { shortcode: "DGkdKojSes-", caption: "Elevate Your Lifestyle with Smart Home" },
  { shortcode: "DGh0LV1SyZh", caption: "Motorized Curtain Automation" },
  { shortcode: "DGNdyjQy0Wm", caption: "Complete Home Automation Control" },
  { shortcode: "DGLE0wwyW8t", caption: "Why Choose GMHS Smart Home" },
  { shortcode: "Ccw-BxJs2XK", caption: "Standard Automation Solutions" },
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed({ count = 6 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load Instagram embed script once
    if (!scriptLoaded.current && !document.querySelector('script[src*="instagram.com/embed"]')) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        window.instgrm?.Embeds.process();
      };
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  const posts = INSTAGRAM_POSTS.slice(0, count);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Follow Us on{" "}
              <span className="text-gradient-gold">Instagram</span>
            </h2>
            <p className="mt-2 text-navy-300 text-sm">
              See our latest projects, installations, and smart home tips
            </p>
          </div>
          <a
            href="https://www.instagram.com/conceptual_homeautomation/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            @conceptual_homeautomation
          </a>
        </div>

        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {posts.map((post) => (
            <div key={post.shortcode} className="rounded-xl overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/p/${post.shortcode}/`}
                data-instgrm-version="14"
                style={{
                  background: "#0a1628",
                  border: "1px solid rgba(212, 168, 67, 0.2)",
                  borderRadius: "12px",
                  margin: 0,
                  maxWidth: "100%",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              >
                <a
                  href={`https://www.instagram.com/p/${post.shortcode}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 text-center text-navy-400 text-sm hover:text-gold-500 transition-colors"
                >
                  Loading: {post.caption}...
                </a>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 text-center sm:hidden">
          <a
            href="https://www.instagram.com/conceptual_homeautomation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
          >
            <Instagram className="w-4 h-4" />
            Follow @conceptual_homeautomation
          </a>
        </div>
      </div>
    </section>
  );
}
