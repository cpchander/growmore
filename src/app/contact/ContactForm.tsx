"use client";

import { useState } from "react";
import { CITIES } from "@/lib/constants";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

type FormData = {
  propertyType: string;
  city: string;
  budget: string;
  features: string[];
  name: string;
  phone: string;
  email: string;
  message: string;
};

const PROPERTY_TYPES = ["Villa / Bungalow", "Apartment", "Penthouse", "Commercial / Office", "Hotel / Resort"];
const BUDGETS = ["₹2-5 Lakh", "₹5-10 Lakh", "₹10-25 Lakh", "₹25-50 Lakh", "₹50 Lakh+"];
const FEATURES = [
  "Smart Lighting",
  "Security & CCTV",
  "Climate Control (AC/HVAC)",
  "Motorized Curtains",
  "Home Theater",
  "Voice Control (Alexa/Google)",
  "Multi-Room Audio",
  "Whole Home Automation",
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    propertyType: "",
    city: "",
    budget: "",
    features: [],
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const toggleFeature = (f: string) => {
    setData((prev) => ({
      ...prev,
      features: prev.features.includes(f)
        ? prev.features.filter((x) => x !== f)
        : [...prev.features, f],
    }));
  };

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong");
      }
      setSubmitted(true);
      // GA4 conversion event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "contact_form",
          event_label: `${data.propertyType} — ${data.city}`,
          value: 1,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please call us directly.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-xl p-12 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-navy-300">
          Our smart home expert will call you within 2 hours. Meanwhile, feel
          free to explore our 3D smart home experience.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-8">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex-1 h-1.5 rounded-full bg-navy-700 overflow-hidden">
            <div
              className="h-full bg-gold-500 transition-all duration-500"
              style={{ width: step >= s ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>

      {/* Step 1: Property Type */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            What type of property?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setData((p) => ({ ...p, propertyType: type }));
                  setStep(2);
                }}
                className={`p-4 rounded-lg border text-left transition-colors ${
                  data.propertyType === type
                    ? "border-gold-500 bg-gold-500/10 text-white"
                    : "border-navy-700 hover:border-navy-500 text-navy-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: City + Budget */}
      {step === 2 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            City and budget range?
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-navy-300 mb-2">City</label>
              <select
                value={data.city}
                onChange={(e) => setData((p) => ({ ...p, city: e.target.value }))}
                className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-3 focus:border-gold-500 focus:outline-none"
              >
                <option value="">Select your city</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-navy-300 mb-2">Budget Range</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setData((p) => ({ ...p, budget: b }))}
                    className={`px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                      data.budget === b
                        ? "border-gold-500 bg-gold-500/10 text-white"
                        : "border-navy-700 hover:border-navy-500 text-navy-300"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={() => setStep(1)} className="flex items-center gap-1 text-navy-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!data.city || !data.budget}
              className="flex items-center gap-1 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 px-6 py-2 rounded-lg font-semibold"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Features */}
      {step === 3 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            What do you want to automate?
          </h3>
          <p className="text-sm text-navy-400 mb-6">Select all that apply</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {FEATURES.map((f) => (
              <button
                key={f}
                onClick={() => toggleFeature(f)}
                className={`px-4 py-3 rounded-lg border text-sm text-left transition-colors ${
                  data.features.includes(f)
                    ? "border-gold-500 bg-gold-500/10 text-white"
                    : "border-navy-700 hover:border-navy-500 text-navy-300"
                }`}
              >
                {data.features.includes(f) ? "✓ " : ""}{f}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={() => setStep(2)} className="flex items-center gap-1 text-navy-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(4)}
              disabled={data.features.length === 0}
              className="flex items-center gap-1 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 px-6 py-2 rounded-lg font-semibold"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Contact Details */}
      {step === 4 && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Your contact details
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
              className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-3 focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={data.phone}
              onChange={(e) => setData((p) => ({ ...p, phone: e.target.value }))}
              className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-3 focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={data.email}
              onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
              className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-3 focus:border-gold-500 focus:outline-none placeholder:text-navy-500"
            />
            <textarea
              placeholder="Any specific requirements? (Optional)"
              value={data.message}
              onChange={(e) => setData((p) => ({ ...p, message: e.target.value }))}
              rows={3}
              className="w-full bg-navy-800 border border-navy-700 text-white rounded-lg px-4 py-3 focus:border-gold-500 focus:outline-none placeholder:text-navy-500 resize-none"
            />
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={() => setStep(3)} className="flex items-center gap-1 text-navy-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!data.name || !data.phone || sending}
              className="flex items-center gap-1 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 px-8 py-3 rounded-lg font-semibold"
            >
              {sending ? "Sending..." : "Book Free Consultation"} {!sending && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
          {error && (
            <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
