"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Globe } from "lucide-react";

const COUNTRIES = ["USA", "UAE / Gulf", "United Kingdom", "Canada", "Singapore", "Australia", "Other"];
const SERVICES = ["Property Care & Monitoring", "Build / Renovate + Automate", "Buy a Property", "Sell + Repatriate", "Not sure yet"];

export default function NriLeadForm({ defaultService = "Not sure yet" }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErr("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/nri", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"), email: fd.get("email"), phone: fd.get("phone"),
          country: fd.get("country"), service: fd.get("service"),
          propertyCity: fd.get("propertyCity"), message: fd.get("message"), website: fd.get("website"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
    } catch (e2) {
      setStatus("error");
      setErr(e2 instanceof Error ? e2.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-gold-500 mx-auto" />
        <h3 className="mt-4 text-xl font-bold text-white">Enquiry received</h3>
        <p className="mt-2 text-sm text-navy-300">
          Our NRI desk will reach out within 1 working day, at a time that suits your timezone.
        </p>
      </div>
    );
  }

  const input = "w-full rounded-lg bg-navy-900 border border-navy-700/60 text-white text-sm px-3.5 py-2.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/15 transition";
  const label = "block text-sm font-semibold text-navy-200 mb-1.5";

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-2xl p-7 sm:p-8" id="enquire">
      <div className="flex items-center gap-2 mb-1">
        <Globe className="w-5 h-5 text-gold-500" />
        <h3 className="text-xl font-bold text-white">Talk to our NRI desk</h3>
      </div>
      <p className="text-sm text-navy-300 mt-1 mb-6">We reply within 1 working day, in your timezone.</p>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-0 h-0 opacity-0" />
      <div className="space-y-5">
        <div>
          <label className={label} htmlFor="n-name">Your name</label>
          <input id="n-name" name="name" required placeholder="Full name" className={input} />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="n-email">Email</label>
            <input id="n-email" name="email" type="email" required placeholder="you@email.com" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="n-phone">Phone / WhatsApp</label>
            <input id="n-phone" name="phone" required placeholder="+1…" className={input} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="n-country">You live in</label>
            <select id="n-country" name="country" defaultValue={COUNTRIES[0]} className={input}>
              {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="n-city">Property city (India)</label>
            <input id="n-city" name="propertyCity" placeholder="e.g. Gurgaon" className={input} />
          </div>
        </div>
        <div>
          <label className={label} htmlFor="n-service">I need help to…</label>
          <select id="n-service" name="service" defaultValue={defaultService} className={input}>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="n-msg">Anything else <span className="text-navy-500 font-normal">(optional)</span></label>
          <textarea id="n-msg" name="message" rows={2} placeholder="Tell us about your property or goal…" className={input} />
        </div>
      </div>
      {status === "error" && <p className="mt-4 text-sm text-red-400">{err}</p>}
      <button type="submit" disabled={status === "submitting"} className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 py-3.5 rounded-xl font-semibold transition-colors">
        {status === "submitting" ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>) : (<>Request a Callback <ArrowRight className="w-5 h-5" /></>)}
      </button>
      <p className="text-xs text-navy-500 mt-3 text-center">Confidential. No spam. A real person, in your timezone.</p>
    </form>
  );
}
