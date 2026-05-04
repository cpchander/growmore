"use client";

import { Instagram, Facebook, Linkedin, ExternalLink, Play, Video } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@conceptual_homeautomation",
    url: COMPANY.socialLinks.instagram,
    icon: Instagram,
    color: "from-purple-500 to-pink-500",
    followers: "212",
    posts: "49",
    description: "Project photos, automation demos, and smart home tips",
  },
  {
    name: "Facebook",
    handle: "GMHTS",
    url: COMPANY.socialLinks.facebook,
    icon: Facebook,
    color: "from-blue-600 to-blue-500",
    followers: "185",
    posts: "50+",
    description: "Company updates, product showcases, and client testimonials",
  },
  {
    name: "LinkedIn",
    handle: "Grow More Hitech Solutions",
    url: COMPANY.socialLinks.linkedin,
    icon: Linkedin,
    color: "from-blue-700 to-blue-600",
    followers: "",
    posts: "",
    description: "Industry insights, company milestones, and career opportunities",
  },
];

// Featured video demos — link to Facebook directly (iframes unreliable)
const FEATURED_VIDEOS = [
  {
    url: "https://www.facebook.com/GMHTS/videos/1993706974135285/",
    title: "Smart Home Automation Demo",
    description: "Watch a complete walkthrough of our smart lighting, curtain automation, and climate control system installed in a luxury Delhi villa.",
    icon: Play,
  },
  {
    url: "https://www.facebook.com/GMHTS/videos/388751606140019/",
    title: "Home Automation Installation",
    description: "See how our certified engineers install KNX-based whole-home automation — from wiring to final commissioning and handover.",
    icon: Video,
  },
];

export function SocialLinks() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 hover:border-gold-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm group-hover:text-gold-500 transition-colors">
                  {social.name}
                </p>
                <p className="text-navy-400 text-xs">{social.handle}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-navy-500 ml-auto group-hover:text-gold-500 transition-colors" />
            </div>
            <p className="text-navy-300 text-xs leading-relaxed">
              {social.description}
            </p>
            {social.followers && (
              <div className="mt-3 flex gap-4 text-xs">
                <span className="text-gold-500 font-semibold">
                  {social.followers} followers
                </span>
                <span className="text-navy-400">{social.posts} posts</span>
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}

export function VideoGallery() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {FEATURED_VIDEOS.map((video) => {
        const Icon = video.icon;
        return (
          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-6 hover:border-gold-500/30 transition-all group"
          >
            {/* Video Thumbnail Placeholder */}
            <div className="aspect-video bg-navy-800 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-navy-700 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
              <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                <Icon className="w-8 h-8 text-gold-500" />
              </div>
              <span className="absolute bottom-3 right-3 text-xs bg-navy-900/80 text-navy-300 px-2 py-1 rounded">
                Watch on Facebook
              </span>
            </div>
            <h3 className="text-white font-semibold group-hover:text-gold-500 transition-colors mb-2">
              {video.title}
            </h3>
            <p className="text-navy-300 text-sm leading-relaxed">
              {video.description}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-3 text-gold-500 text-sm font-medium group-hover:gap-2.5 transition-all">
              <Play className="w-4 h-4" /> Watch Video
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
