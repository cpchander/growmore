"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";

const ROLES = ["Homeowner", "Architect / Designer", "Builder / Developer", "Other"];

export default function ResourcesForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErr("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/resources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          role: fd.get("role"),
          website: fd.get("website"),
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
        <Mail className="w-12 h-12 text-gold-500 mx-auto" />
        <h3 className="mt-4 text-xl font-bold text-white">Check your inbox</h3>
        <p className="mt-2 text-sm text-navy-300">
          We&apos;ve emailed you a private link to your resource library — the
          Company Profile, Cost Guide, Pre-Wiring Checklist &amp; Project Lookbook.
          (Check spam if it doesn&apos;t arrive in a couple of minutes.)
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-lg bg-navy-900 border border-navy-700/60 text-white text-sm px-3.5 py-2.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/15 transition";
  const label = "block text-sm font-semibold text-navy-200 mb-1.5";

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-2xl p-7 sm:p-8">
      <h3 className="text-xl font-bold text-white">Get instant access</h3>
      <p className="text-sm text-navy-300 mt-1 mb-6">
        Enter your details and we&apos;ll email you a private link to the full library.
      </p>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-0 h-0 opacity-0" />
      <div className="space-y-5">
        <div>
          <label className={label} htmlFor="r-name">Your name</label>
          <input id="r-name" name="name" required placeholder="Full name" className={input} />
        </div>
        <div>
          <label className={label} htmlFor="r-email">Email <span className="text-navy-500 font-normal">(we send the link here)</span></label>
          <input id="r-email" name="email" type="email" required placeholder="you@email.com" className={input} />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="r-phone">Phone <span className="text-navy-500 font-normal">(optional)</span></label>
            <input id="r-phone" name="phone" placeholder="+91…" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="r-role">I am a…</label>
            <select id="r-role" name="role" defaultValue={ROLES[0]} className={input}>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
      </div>
      {status === "error" && <p className="mt-4 text-sm text-red-400">{err}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 py-3.5 rounded-xl font-semibold transition-colors"
      >
        {status === "submitting" ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending link…</>) : (<>Email Me the Library <ArrowRight className="w-5 h-5" /></>)}
      </button>
      <p className="text-xs text-navy-500 mt-3 text-center">No spam — just the resources. Unsubscribe anytime.</p>
    </form>
  );
}
