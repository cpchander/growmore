import Link from "next/link";
import { Home, Lightbulb, Shield, Tv, Phone, Search, Zap, Building2, Users, MapPin } from "lucide-react";
import NotFoundScene from "./NotFoundScene";

export default function NotFound() {
  const quickLinks = [
    { label: "Smart Lighting", href: "/services/conceptual-lighting", icon: Lightbulb },
    { label: "Home Security", href: "/services/home-security", icon: Shield },
    { label: "Home Theater", href: "/services/home-theater", icon: Tv },
    { label: "Get a Quote", href: "/get-quote", icon: Zap },
    { label: "For Builders", href: "/solutions/for-builders", icon: Building2 },
    { label: "Our Projects", href: "/projects", icon: Users },
    { label: "Cities We Serve", href: "/cities/delhi", icon: MapPin },
    { label: "Cost Guide", href: "/blog/home-automation-cost-india-complete-guide", icon: Search },
  ];

  return (
    <section className="section-padding flex items-center justify-center min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Animated Scene */}
        <NotFoundScene />

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3 mt-8">
          Room <span className="text-gradient-gold">Not Found</span>
        </h1>
        <p className="text-navy-300 text-lg mb-8 max-w-lg mx-auto">
          Looks like this room isn&apos;t wired yet. Tell us what you&apos;re looking for — we&apos;ll get you connected.
        </p>

        {/* Primary CTAs */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-6 py-3 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4" /> Contact Us
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <p className="text-sm text-navy-400 mb-5 font-medium uppercase tracking-wider">
            What are you looking for?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-navy-800/50 hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 transition-all"
                >
                  <Icon className="w-5 h-5 text-navy-400 group-hover:text-gold-500 transition-colors" />
                  <span className="text-xs sm:text-sm text-navy-300 group-hover:text-white transition-colors text-center">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
