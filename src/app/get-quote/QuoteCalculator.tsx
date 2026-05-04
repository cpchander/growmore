"use client";

import { useState } from "react";
import { CITIES, COMPANY } from "@/lib/constants";
import {
  Lightbulb, Shield, Thermometer, PanelTop,
  Tv, Mic, Music, ArrowRight, CheckCircle,
  Plus, Minus, Phone,
  type LucideIcon,
} from "lucide-react";

type RoomConfig = {
  name: string;
  count: number;
};

type Feature = {
  id: string;
  label: string;
  icon: LucideIcon;
  pricePerRoom: number;
  priceFlat: number;
  isFlat: boolean;
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

const FEATURES: Feature[] = [
  { id: "lighting", label: "Smart Lighting", icon: Lightbulb, pricePerRoom: 25000, priceFlat: 0, isFlat: false, description: "Scene control, dimming, scheduling" },
  { id: "security", label: "Security & CCTV", icon: Shield, pricePerRoom: 0, priceFlat: 75000, isFlat: true, description: "Cameras, smart locks, motion sensors" },
  { id: "climate", label: "Climate Control", icon: Thermometer, pricePerRoom: 20000, priceFlat: 0, isFlat: false, description: "AC automation, temperature zones" },
  { id: "curtains", label: "Motorized Curtains", icon: PanelTop, pricePerRoom: 35000, priceFlat: 0, isFlat: false, description: "Motorized tracks, roller blinds" },
  { id: "theater", label: "Home Theater", icon: Tv, pricePerRoom: 0, priceFlat: 200000, isFlat: true, description: "Dolby Atmos, 4K projection, seating" },
  { id: "voice", label: "Voice Control Hub", icon: Mic, pricePerRoom: 0, priceFlat: 30000, isFlat: true, description: "Alexa, Google Home, Siri integration" },
  { id: "audio", label: "Multi-Room Audio", icon: Music, pricePerRoom: 18000, priceFlat: 0, isFlat: false, description: "Sonos or in-ceiling speaker system" },
];

const TIERS = [
  { id: "standard", label: "Standard", multiplier: 1, description: "Quality wireless brands" },
  { id: "premium", label: "Premium", multiplier: 1.8, description: "KNX / Lutron wired" },
  { id: "luxury", label: "Luxury", multiplier: 3, description: "Crestron / Custom" },
];

function formatPrice(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} Lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function QuoteCalculator() {
  const [rooms, setRooms] = useState<RoomConfig[]>([...ROOM_TYPES]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [tier, setTier] = useState("standard");
  const [showResult, setShowResult] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [contact, setContact] = useState({ name: "", phone: "", email: "", city: "" });

  const totalRooms = rooms.reduce((sum, r) => sum + r.count, 0);
  const multiplier = TIERS.find((t) => t.id === tier)?.multiplier || 1;

  const rawTotal = FEATURES.reduce((sum, f) => {
    if (!selectedFeatures.includes(f.id)) return sum;
    return sum + (f.isFlat ? f.priceFlat : f.pricePerRoom * totalRooms);
  }, 0);

  const estimatedLow = Math.round(rawTotal * multiplier * 0.85);
  const estimatedHigh = Math.round(rawTotal * multiplier * 1.15);

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

  const handleGetQuote = () => {
    setShowResult(true);
  };

  const [sendingQuote, setSendingQuote] = useState(false);

  const handleSubmitLead = async () => {
    setSendingQuote(true);
    try {
      const totalRooms = rooms.reduce((s, r) => s + r.count, 0);
      const featureNames = selectedFeatures.map((id) => {
        const f = FEATURES.find((af) => af.id === id);
        return f ? f.label : id;
      });
      await fetch("/api/contact", {
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
      setLeadCaptured(true);
    } catch {
      // Silently fail — still show success to user, log in background
      setLeadCaptured(true);
      // GA4 conversion event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "quote_calculator",
          event_label: `${tier} tier`,
          value: 1,
        });
      }
    } finally {
      setSendingQuote(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Left — Configuration */}
      <div className="lg:col-span-2 space-y-8">
        {/* Rooms */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            1. How many rooms?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {rooms.map((room, i) => (
              <div
                key={room.name}
                className="flex items-center justify-between bg-navy-800 rounded-lg px-4 py-3"
              >
                <span className="text-sm text-navy-200">{room.name}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateRoomCount(i, -1)}
                    className="w-7 h-7 rounded bg-navy-700 hover:bg-navy-600 text-navy-300 flex items-center justify-center"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white font-semibold w-5 text-center">
                    {room.count}
                  </span>
                  <button
                    onClick={() => updateRoomCount(i, 1)}
                    className="w-7 h-7 rounded bg-navy-700 hover:bg-navy-600 text-navy-300 flex items-center justify-center"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            2. What do you want to automate?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              const selected = selectedFeatures.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all ${
                    selected
                      ? "border-gold-500 bg-gold-500/10"
                      : "border-navy-700 hover:border-navy-500"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${selected ? "text-gold-500" : "text-navy-400"}`} />
                  <div>
                    <span className={`text-sm font-medium ${selected ? "text-white" : "text-navy-200"}`}>
                      {f.label}
                    </span>
                    <p className="text-xs text-navy-400 mt-0.5">{f.description}</p>
                    <p className="text-xs text-navy-500 mt-1">
                      {f.isFlat
                        ? `From ${formatPrice(f.priceFlat)}`
                        : `~${formatPrice(f.pricePerRoom)}/room`}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">
            3. Quality tier
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  tier === t.id
                    ? "border-gold-500 bg-gold-500/10"
                    : "border-navy-700 hover:border-navy-500"
                }`}
              >
                <span className={`text-sm font-semibold ${tier === t.id ? "text-white" : "text-navy-200"}`}>
                  {t.label}
                </span>
                <p className="text-xs text-navy-400 mt-1">{t.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Price Summary (sticky) */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 glass-card rounded-xl p-6 space-y-6">
          <h3 className="text-lg font-semibold text-white">Estimated Cost</h3>

          {totalRooms === 0 || selectedFeatures.length === 0 ? (
            <p className="text-sm text-navy-400">
              Select at least one room and one feature to see your estimate.
            </p>
          ) : (
            <>
              <div className="text-center py-4">
                <p className="text-sm text-navy-400 mb-1">Price Range</p>
                <p className="text-3xl font-bold text-gradient-gold">
                  {formatPrice(estimatedLow)} — {formatPrice(estimatedHigh)}
                </p>
                <p className="text-xs text-navy-500 mt-2">
                  Based on {totalRooms} room{totalRooms > 1 ? "s" : ""},{" "}
                  {selectedFeatures.length} feature{selectedFeatures.length > 1 ? "s" : ""},{" "}
                  {TIERS.find((t) => t.id === tier)?.label} tier
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-2 text-sm">
                {selectedFeatures.map((fId) => {
                  const f = FEATURES.find((x) => x.id === fId);
                  if (!f) return null;
                  const cost = f.isFlat ? f.priceFlat : f.pricePerRoom * totalRooms;
                  return (
                    <div key={fId} className="flex justify-between text-navy-300">
                      <span>{f.label}</span>
                      <span>{formatPrice(Math.round(cost * multiplier))}</span>
                    </div>
                  );
                })}
                <hr className="border-navy-700" />
                <div className="flex justify-between font-semibold text-white">
                  <span>Estimated Total</span>
                  <span>{formatPrice(Math.round(rawTotal * multiplier))}</span>
                </div>
              </div>

              {!showResult ? (
                <button
                  onClick={handleGetQuote}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Detailed Quote
                </button>
              ) : !leadCaptured ? (
                <div className="space-y-3">
                  <p className="text-sm text-navy-300">
                    Enter your details for a detailed, accurate quote from our experts.
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contact.name}
                    onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contact.phone}
                    onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
                  />
                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    value={contact.email}
                    onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
                  />
                  <select
                    value={contact.city}
                    onChange={(e) => setContact((p) => ({ ...p, city: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none"
                  >
                    <option value="">Select City</option>
                    {CITIES.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  <button
                    onClick={handleSubmitLead}
                    disabled={!contact.name || !contact.phone || sendingQuote}
                    className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {sendingQuote ? "Sending..." : "Get Expert Quote"} {!sendingQuote && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-white font-semibold">Quote Request Received!</p>
                  <p className="text-sm text-navy-300 mt-1">
                    Our expert will call you within 2 hours with a detailed quote.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="inline-flex items-center gap-2 mt-4 text-sm text-gold-500 hover:text-gold-400"
                  >
                    <Phone className="w-4 h-4" />
                    Or call us now
                  </a>
                </div>
              )}
            </>
          )}

          <p className="text-xs text-navy-500 text-center">
            Prices are indicative. Final quote after site visit.
          </p>
        </div>
      </div>
    </div>
  );
}
