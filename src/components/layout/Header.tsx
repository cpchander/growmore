"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, SERVICES } from "@/lib/constants";
import {
  Menu, X, ChevronDown, Phone,
  Briefcase, Building2, PenTool, Hotel,
  FolderOpen, Award, GitCompare,
  BookOpen, Users, BadgeCheck, Cpu, Calculator,
  Sparkles, Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SOLUTION_LINKS = [
  { href: "/solutions/for-homeowners", label: "For Homeowners", desc: "Smart home packages for apartments & villas", icon: Briefcase },
  { href: "/solutions/for-builders", label: "For Builders & Developers", desc: "Bulk automation for residential projects", icon: Building2 },
  { href: "/solutions/for-architects", label: "For Architects & Designers", desc: "Specification & integration support", icon: PenTool },
  { href: "/solutions/for-hotels", label: "For Hotels & Hospitality", desc: "Guest room automation & energy savings", icon: Hotel },
];

const PROJECT_LINKS = [
  { href: "/projects", label: "Project Gallery", desc: "300+ completed smart home projects", icon: FolderOpen },
  { href: "/brands", label: "Our Brands", desc: "KNX, Crestron, Lutron, Control4 & more", icon: Award },
  { href: "/compare", label: "Brand Comparison", desc: "Compare automation brands side-by-side", icon: GitCompare },
];

const RESOURCE_LINKS = [
  { href: "/blog", label: "Blog & Guides", desc: "Smart home tips, trends & how-tos", icon: BookOpen },
  { href: "/smart-home-planner", label: "Smart Home Planner", desc: "Build & price your automation system", icon: Calculator, highlight: true },
  { href: "/experience", label: "3D Experience", desc: "Interactive smart home walkthrough", icon: Sparkles },
  { href: "/villa-walkthrough", label: "Villa Walkthrough", desc: "8-zone luxury villa in 3D", icon: Sparkles },
  { href: "/about/our-story", label: "Our Story", desc: "15+ years of home automation expertise", icon: Users },
  { href: "/about/team", label: "Our Team", desc: "Meet our engineers & leadership", icon: Users },
  { href: "/about/certifications", label: "Certifications", desc: "Brand partnerships & accreditations", icon: BadgeCheck },
  { href: "/get-quote", label: "Get Instant Quote", desc: "Online quote calculator", icon: Cpu },
  { href: "/ventures", label: "Ventures & Partnerships", desc: "Zedtreeo remote staffing & more", icon: Globe },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-navy-900 backdrop-blur-xl border-b-2 border-gold-500/40 shadow-lg shadow-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <Image
              src="/images/company/gmhs.png"
              alt="GMHS - Grow More Hitech Solutions"
              width={200}
              height={52}
              className="h-11 w-auto"
              priority
            />
            <span className="text-[10px] font-semibold text-gold-500 mt-1" style={{ letterSpacing: "0.45em" }}>
              SINCE {COMPANY.foundedYear}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* ─── Services Dropdown ─── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-navy-100 hover:text-white transition-colors">
                Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "services" && "rotate-180")} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-[520px] bg-navy-900 border border-navy-700 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-800 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-gold-500 transition-colors">
                          {service.title}
                        </p>
                        <p className="text-xs text-navy-400 mt-0.5 line-clamp-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ─── Solutions Dropdown ─── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-navy-100 hover:text-white transition-colors">
                Solutions
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "solutions" && "rotate-180")} />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-[380px] bg-navy-900 border border-navy-700 rounded-xl shadow-2xl p-3">
                  {SOLUTION_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-800 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-gold-500 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-navy-400 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ─── Projects Dropdown ─── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("projects")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-navy-100 hover:text-white transition-colors">
                Projects
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "projects" && "rotate-180")} />
              </button>
              {activeDropdown === "projects" && (
                <div className="absolute top-full left-0 w-[340px] bg-navy-900 border border-navy-700 rounded-xl shadow-2xl p-3">
                  {PROJECT_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-800 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-gold-500 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-xs text-navy-400 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ─── Resources Dropdown ─── */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-navy-100 hover:text-white transition-colors">
                Resources
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === "resources" && "rotate-180")} />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full right-0 w-[420px] bg-navy-900 border border-navy-700 rounded-xl shadow-2xl p-3">
                  {RESOURCE_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg hover:bg-navy-800 transition-colors group",
                        item.highlight && "bg-gold-500/5 border border-gold-500/20"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5 shrink-0 mt-0.5", item.highlight ? "text-gold-500" : "text-navy-400 group-hover:text-gold-500")} />
                      <div>
                        <p className={cn(
                          "text-sm font-medium transition-colors",
                          item.highlight ? "text-gold-500" : "text-white group-hover:text-gold-500"
                        )}>
                          {item.label}
                        </p>
                        <p className="text-xs text-navy-400 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm text-navy-200 hover:text-gold-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ═══════════ Mobile Menu ═══════════ */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-20 h-[calc(100dvh-5rem)] bg-navy-900 border-t border-navy-700 overflow-y-auto z-50">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">

            {/* ─── Services ─── */}
            <button
              onClick={() => toggleMobileSection("services")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white"
            >
              Services
              <ChevronDown className={cn("w-4 h-4 text-navy-400 transition-transform", mobileExpanded === "services" && "rotate-180")} />
            </button>
            {mobileExpanded === "services" && (
              <div className="pl-3 space-y-0.5">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-navy-200 hover:text-white hover:bg-navy-800 rounded-lg"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <hr className="border-navy-700/50 my-2" />

            {/* ─── Solutions ─── */}
            <button
              onClick={() => toggleMobileSection("solutions")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white"
            >
              Solutions
              <ChevronDown className={cn("w-4 h-4 text-navy-400 transition-transform", mobileExpanded === "solutions" && "rotate-180")} />
            </button>
            {mobileExpanded === "solutions" && (
              <div className="pl-3 space-y-0.5">
                {SOLUTION_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-navy-200 hover:text-white hover:bg-navy-800 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <hr className="border-navy-700/50 my-2" />

            {/* ─── Projects ─── */}
            <button
              onClick={() => toggleMobileSection("projects")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white"
            >
              Projects
              <ChevronDown className={cn("w-4 h-4 text-navy-400 transition-transform", mobileExpanded === "projects" && "rotate-180")} />
            </button>
            {mobileExpanded === "projects" && (
              <div className="pl-3 space-y-0.5">
                {PROJECT_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-navy-200 hover:text-white hover:bg-navy-800 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <hr className="border-navy-700/50 my-2" />

            {/* ─── Resources ─── */}
            <button
              onClick={() => toggleMobileSection("resources")}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white"
            >
              Resources
              <ChevronDown className={cn("w-4 h-4 text-navy-400 transition-transform", mobileExpanded === "resources" && "rotate-180")} />
            </button>
            {mobileExpanded === "resources" && (
              <div className="pl-3 space-y-0.5">
                {RESOURCE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-3 py-2 text-sm hover:bg-navy-800 rounded-lg",
                      item.highlight ? "text-gold-500 font-medium" : "text-navy-200 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <hr className="border-navy-700/50 my-3" />

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-gold-500 text-navy-900 px-6 py-3 rounded-lg font-semibold"
            >
              Book Free Consultation
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="block w-full text-center text-navy-200 py-2 text-sm"
            >
              Call: {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
