import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

// Curated posts from @conceptual_homeautomation. We link to the real posts and
// show on-brand images locally — Instagram's own embed.js + iframes are blocked
// by our Content-Security-Policy (by design), so live embeds never render.
const INSTAGRAM_POSTS = [
  { shortcode: "DGz9IrzSBmg", caption: "Smart Home Automation Showroom", image: "/images/services/gmhs-home-automation.webp" },
  { shortcode: "DGh0LV1SyZh", caption: "Motorized Curtain Automation", image: "/images/services/smart-blinds-control.webp" },
  { shortcode: "DGkdKojSes-", caption: "Elevate Your Lifestyle with Smart Home", image: "/images/services/luxury-villa-exterior.webp" },
  { shortcode: "DGNdyjQy0Wm", caption: "Complete Home Automation Control", image: "/images/services/home-automation-panel.webp" },
  { shortcode: "DGLE0wwyW8t", caption: "Why Choose GMHS Smart Home", image: "/images/services/voice-control-tablet.webp" },
  { shortcode: "Ccw-BxJs2XK", caption: "Smart Lighting & Scenes", image: "/images/services/smart-lighting-control.webp" },
];

const INSTAGRAM_URL = "https://www.instagram.com/conceptual_homeautomation/";

export default function InstagramFeed({ count = 3 }: { count?: number }) {
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
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            @conceptual_homeautomation
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.shortcode}
              href={`https://www.instagram.com/p/${post.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-xl overflow-hidden border border-gold-500/15 hover:border-gold-500/40 transition-colors"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient + caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <Instagram className="w-5 h-5 text-white/90 self-end drop-shadow" />
                <p className="text-sm font-medium text-white drop-shadow">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 text-center sm:hidden">
          <a
            href={INSTAGRAM_URL}
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
