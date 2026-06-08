"use client";

import { useState } from "react";
import Link from "next/link";
import { CITIES, COMPANY } from "@/lib/constants";
import { PRODUCTS, type AutomationProduct, type ProductCategory, type ProductTier } from "@/lib/products-data";
import {
  Lightbulb, Shield, Thermometer, PanelTop,
  Tv, Mic, Music, ArrowRight, CheckCircle,
  Plus, Minus, Phone, Package,
  type LucideIcon,
} from "lucide-react";

type RoomConfig = { name: string; count: number };

// scope: how the feature scales.
//  perRoom    → every room (lighting, climate)
//  perPrimary → living/bedroom/office/dining only (curtains, audio — not baths/kitchens)
//  flat       → one cost per home (security, theater, voice)
type Feature = {
  id: string;
  label: string;
  icon: LucideIcon;
  category: ProductCategory;
  scope: "perRoom" | "perPrimary" | "flat";
  price: Record<ProductTier, number>; // realistic INR, derived from the product catalog
  description: string;
};

const ROOM_TYPES: RoomConfig[] = [
  { name: "Living Room", count: 0 },
  { name: "Bedroom", count: 0 },
  { name: "Kitchen", count: 0 },
  { name: "Bathroom", count: 0 },
  { name: "Home Office", count: 0 },
  { name: "Dining Room", count: 0 },
];

const PRIMARY_ROOMS = ["Living Room", "Bedroom", "Home Office", "Dining Room"];

const FEATURES: Feature[] = [
  { id: "lighting", label: "Smart Lighting", icon: Lightbulb, category: "lighting", scope: "perRoom",
    price: { standard: 15000, premium: 45000, luxury: 110000 }, description: "Switches, dimmers, scenes & keypads" },
  { id: "climate", label: "Climate Control", icon: Thermometer, category: "climate", scope: "perRoom",
    price: { standard: 6000, premium: 22000, luxury: 45000 }, description: "AC automation, thermostats, zones" },
  { id: "curtains", label: "Motorized Curtains", icon: PanelTop, category: "curtains", scope: "perPrimary",
    price: { standard: 14000, premium: 50000, luxury: 85000 }, description: "Motorized tracks & roller blinds" },
  { id: "security", label: "Security & CCTV", icon: Shield, category: "security", scope: "flat",
    price: { standard: 55000, premium: 150000, luxury: 300000 }, description: "Cameras, smart locks, sensors" },
  { id: "audio", label: "Multi-Room Audio", icon: Music, category: "audio", scope: "perPrimary",
    price: { standard: 20000, premium: 75000, luxury: 130000 }, description: "In-ceiling & streaming audio" },
  { id: "theater", label: "Home Theater", icon: Tv, category: "theater", scope: "flat",
    price: { standard: 200000, premium: 350000, luxury: 800000 }, description: "Projector, Dolby Atmos, seating" },
  { id: "voice", label: "Voice & Control", icon: Mic, category: "voice", scope: "flat",
    price: { standard: 20000, premium: 90000, luxury: 200000 }, description: "Touch panels & voice assistants" },
];

const TIERS: { id: ProductTier; label: string; description: string }[] = [
  { id: "standard", label: "Standard", description: "Quality Wi-Fi brands" },
  { id: "premium", label: "Premium", description: "KNX / Lutron / Control4" },
  { id: "luxury", label: "Luxury", description: "Crestron / custom" },
];

function formatPrice(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} Lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function QuoteCalculator() {
  const [rooms, setRooms] = useState<RoomConfig[]>([...ROOM_TYPES]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [tier, setTier] = useState<ProductTier>("standard");
  const [showResult, setShowResult] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [contact, setContact] = useState({ name: "", phone: "", email: "", city: "" });

  const totalRooms = rooms.reduce((sum, r) => sum + r.count, 0);
  const primaryRooms = rooms
    .filter((r) => PRIMARY_ROOMS.includes(r.name))
    .reduce((sum, r) => sum + r.count, 0);

  const featureCost = (f: Feature): number => {
    const p = f.price[tier];
    if (f.scope === "flat") return p;
    const n = f.scope === "perPrimary" ? primaryRooms || totalRooms : totalRooms;
    return p * n;
  };

  const rawTotal = FEATURES.reduce(
    (sum, f) => (selectedFeatures.includes(f.id) ? sum + featureCost(f) : sum),
    0
  );
  const estimatedLow = Math.round(rawTotal * 0.9);
  const estimatedHigh = Math.round(rawTotal * 1.15);

  // Example real products from the catalog for a selected feature at the chosen tier
  const exampleProducts = (f: Feature): AutomationProduct[] =>
    PRODUCTS.filter((p) => p.category === f.category && p.tier === tier)
      .sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
      .slice(0, 2);

  const updateRoomCount = (index: number, delta: number) => {
    setRooms((prev) =>
      prev.map((r, i) =>
        i === index ? { ...r, count: Math.max(0, Math.min(10, r.count + delta)) } : r
      )
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleGetQuote = () => setShowResult(true);

  const [sendingQuote, setSendingQuote] = useState(false);
  const [quoteError, setQuoteError] = useState(false);

  const handleSubmitLead = async () => {
    setSendingQuote(true);
    setQuoteError(false);
    try {
      const featureNames = selectedFeatures.map((id) => {
        const f = FEATURES.find((af) => af.id === id);
        return f ? f.label : id;
      });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          propertyType: `Quote Calculator — ${totalRooms} rooms, ${tier} tier`,
          city: contact.city,
          budget: `₹${(estimatedLow / 100000).toFixed(1)}–${(estimatedHigh / 100000).toFixed(1)} Lakh (estimated)`,
          features: featureNames,
          message: `Rooms: ${rooms.filter((r) => r.count > 0).map((r) => `${r.name}: ${r.count}`).join(", ")}. Tier: ${tier}.`,
        }),
      });
      if (!res.ok) throw new Error("Request rejected");
      setLeadCaptured(true);
      // GA4 conversion event — on SUCCESS
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "quote_calculator",
          event_label: `${tier} tier`,
          value: 1,
        });
      }
    } catch {
      setQuoteError(true);
    } finally {
      setSendingQuote(false);
    }
  };

  const selected = FEATURES.filter((f) => selectedFeatures.includes(f.id));

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left — Configuration */}
      <div className="lg:col-span-2 space-y-8">
        {/* Rooms */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">1. How many rooms?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {rooms.map((room, i) => (
              <div key={room.name} className="flex items-center justify-between bg-navy-800 rounded-lg px-4 py-3">
                <span className="text-sm text-navy-200">{room.name}</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateRoomCount(i, -1)} aria-label={`Remove ${room.name}`} className="w-7 h-7 rounded bg-navy-700 hover:bg-navy-600 text-navy-300 flex items-center justify-center">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white font-semibold w-5 text-center">{room.count}</span>
                  <button onClick={() => updateRoomCount(i, 1)} aria-label={`Add ${room.name}`} className="w-7 h-7 rounded bg-navy-700 hover:bg-navy-600 text-navy-300 flex items-center justify-center">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier — moved up so feature prices reflect the choice */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">2. Quality tier</h2>
          <div className="grid grid-cols-3 gap-3">
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  tier === t.id ? "border-gold-500 bg-gold-500/10" : "border-navy-700 hover:border-navy-500"
                }`}
              >
                <span className={`text-sm font-semibold ${tier === t.id ? "text-white" : "text-navy-200"}`}>{t.label}</span>
                <p className="text-xs text-navy-400 mt-1">{t.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">3. What do you want to automate?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              const isSel = selectedFeatures.includes(f.id);
              const unit = f.scope === "flat" ? "" : f.scope === "perPrimary" ? "/room" : "/room";
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all ${
                    isSel ? "border-gold-500 bg-gold-500/10" : "border-navy-700 hover:border-navy-500"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSel ? "text-gold-500" : "text-navy-400"}`} />
                  <div>
                    <span className={`text-sm font-medium ${isSel ? "text-white" : "text-navy-200"}`}>{f.label}</span>
                    <p className="text-xs text-navy-400 mt-0.5">{f.description}</p>
                    <p className="text-xs text-navy-500 mt-1">
                      {f.scope === "flat" ? "From " : "~"}
                      {formatPrice(f.price[tier])}
                      {unit}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products in your build */}
        {selected.length > 0 && (
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-1">
              <Package className="w-5 h-5 text-gold-500" />
              <h2 className="text-lg font-semibold text-white">Example products in your build</h2>
            </div>
            <p className="text-xs text-navy-400 mb-4">
              Representative {TIERS.find((t) => t.id === tier)?.label} products for your selection. Want to pick exact models &amp; brands?{" "}
              <Link href="/smart-home-planner" className="text-gold-500 hover:underline">Open the Smart Home Planner →</Link>
            </p>
            <div className="space-y-4">
              {selected.map((f) => {
                const prods = exampleProducts(f);
                if (prods.length === 0) return null;
                return (
                  <div key={f.id}>
                    <p className="text-xs font-semibold text-navy-200 mb-1.5">{f.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {prods.map((p) => (
                        <span key={p.id} className="inline-flex items-center gap-1.5 text-xs bg-navy-800 border border-navy-700 rounded-lg px-2.5 py-1.5">
                          <span className="text-gold-500 font-medium">{p.brandLabel}</span>
                          <span className="text-navy-300">{p.name}</span>
                          <span className="text-navy-500">·</span>
                          <span className="text-white">{formatPrice(p.priceINR)}<span className="text-navy-500"> {p.unit}</span></span>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Right — Price Summary (sticky) */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 glass-card rounded-xl p-6 space-y-6">
          <h3 className="text-lg font-semibold text-white">Estimated Cost</h3>

          {totalRooms === 0 || selectedFeatures.length === 0 ? (
            <p className="text-sm text-navy-400">Select at least one room and one feature to see your estimate.</p>
          ) : (
            <>
              <div className="text-center py-4">
                <p className="text-sm text-navy-400 mb-1">Price Range</p>
                <p className="text-3xl font-bold text-gradient-gold">
                  {formatPrice(estimatedLow)} — {formatPrice(estimatedHigh)}
                </p>
                <p className="text-xs text-navy-500 mt-2">
                  {totalRooms} room{totalRooms > 1 ? "s" : ""}, {selectedFeatures.length} feature
                  {selectedFeatures.length > 1 ? "s" : ""}, {TIERS.find((t) => t.id === tier)?.label} tier
                </p>
              </div>

              <div className="space-y-2 text-sm">
                {selected.map((f) => (
                  <div key={f.id} className="flex justify-between text-navy-300">
                    <span>{f.label}</span>
                    <span>{formatPrice(featureCost(f))}</span>
                  </div>
                ))}
                <hr className="border-navy-700" />
                <div className="flex justify-between font-semibold text-white">
                  <span>Hardware + Install (est.)</span>
                  <span>{formatPrice(rawTotal)}</span>
                </div>
              </div>

              {!showResult ? (
                <button onClick={handleGetQuote} className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 py-3 rounded-lg font-semibold transition-colors">
                  Get Detailed Quote
                </button>
              ) : !leadCaptured ? (
                <div className="space-y-3">
                  <p className="text-sm text-navy-300">Enter your details for a detailed, accurate quote from our experts.</p>
                  <input type="text" placeholder="Full Name" value={contact.name} onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))} className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500" />
                  <input type="tel" placeholder="Phone Number" value={contact.phone} onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))} className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500" />
                  <input type="email" placeholder="Email (Optional)" value={contact.email} onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))} className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500" />
                  <select value={contact.city} onChange={(e) => setContact((p) => ({ ...p, city: e.target.value }))} className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none">
                    <option value="">Select City</option>
                    {CITIES.map((c) => (<option key={c.slug} value={c.name}>{c.name}</option>))}
                    <option value="Other">Other</option>
                  </select>
                  <button onClick={handleSubmitLead} disabled={!contact.name || !contact.phone || sendingQuote} className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    {sendingQuote ? "Sending..." : "Get Expert Quote"} {!sendingQuote && <ArrowRight className="w-4 h-4" />}
                  </button>
                  {quoteError && (
                    <p className="text-xs text-red-400 text-center">
                      Couldn&apos;t send — please check your name &amp; phone, or{" "}
                      <a href={`tel:${COMPANY.phone}`} className="text-gold-500 underline">call us directly</a>.
                    </p>
                  )}
                </div>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-white font-semibold">Quote Request Received!</p>
                  <p className="text-sm text-navy-300 mt-1">Our expert will call you within 2 hours with a detailed quote.</p>
                  <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 mt-4 text-sm text-gold-500 hover:text-gold-400">
                    <Phone className="w-4 h-4" /> Or call us now
                  </a>
                </div>
              )}
            </>
          )}

          <p className="text-xs text-navy-500 text-center">Prices are indicative. Final quote after site visit.</p>
        </div>
      </div>
    </div>
  );
}
