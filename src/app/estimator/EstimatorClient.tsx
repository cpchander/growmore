"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  estimate, formatINR, formatUSD, TIERS, PROPERTY_TYPES, ESTIMATOR_CITIES,
  type Tier, type PropertyType, type AutomationSystem, type StageId, type EstimatorInput,
} from "@/lib/estimator";
import { Home, Building2, Hammer, Plus, Minus, Download, ArrowRight, Clock, Loader2, CheckCircle2, FileText, Lock } from "lucide-react";
import { GMHS_LOGO_DATA_URI } from "@/lib/gmhs-logo";

const STAGE_OPTIONS: { id: StageId; label: string; villaOnly?: boolean }[] = [
  { id: "design", label: "Architecture & Design", villaOnly: true },
  { id: "approvals", label: "Approvals & Sanctions", villaOnly: true },
  { id: "construction", label: "Civil Construction", villaOnly: true },
  { id: "interiors", label: "Interiors & Fit-out" },
  { id: "automation", label: "Home Automation" },
];

export default function EstimatorClient({ fxRate, fxDate }: { fxRate: number; fxDate: string }) {
  const [propertyType, setPropertyType] = useState<PropertyType>("villa");
  const [areaSqft, setAreaSqft] = useState(3000);
  const [city, setCity] = useState("Gurgaon");
  const [tier, setTier] = useState<Tier>("premium");
  const [automationSystem, setAutomationSystem] = useState<AutomationSystem>("knx");
  const [rooms, setRooms] = useState(8);
  const [stages, setStages] = useState<Record<StageId, boolean>>({ design: true, approvals: true, construction: true, interiors: true, automation: true });

  const isVilla = propertyType !== "apartment";
  const input: EstimatorInput = { propertyType, areaSqft, city, tier, stages, automationSystem, rooms };
  const result = useMemo(() => estimate(input), [propertyType, areaSqft, city, tier, automationSystem, rooms, stages]);
  const usd = (inr: number) => formatUSD(inr, fxRate);

  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [revealed, setRevealed] = useState(false); // lead-gate: scope + range + download unlock only after submit
  const [err, setErr] = useState("");

  async function submitLead() {
    setSending(true); setErr("");
    try {
      const res = await fetch("/api/estimator", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          summary: `${PROPERTY_TYPES.find(p => p.id === propertyType)?.label}, ${areaSqft} sqft, ${city}, ${tier} tier, ${automationSystem} automation (${rooms} rooms). Stages: ${Object.entries(stages).filter(([, v]) => v).map(([k]) => k).join(", ")}.`,
          totalRange: `${formatINR(result.lowINR)}–${formatINR(result.highINR)} (~${usd(result.lowINR)}–${usd(result.highINR)})`,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Something went wrong.");
      setRevealed(true);
    } catch (e) { setErr(e instanceof Error ? e.message : "Failed."); } finally { setSending(false); }
  }

  // ---- Scope BOQ document (scope only — no itemised pricing, single indicative range) ----
  function downloadBOQ() {
    const stageBlocks = result.stages.map((s) => {
      if (s.lines) {
        const rows = s.lines.map((l) => `<tr><td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.item}</td><td style="text-align:right;padding:7px 10px;border-bottom:1px solid #eee;">${l.qty.toLocaleString("en-IN")} ${l.unit}</td></tr>`).join("");
        return `<h3 style="margin:18px 0 6px;color:#0a1424;">${s.label}</h3>
          <table style="width:100%;border-collapse:collapse;font-size:12px;"><tr style="background:#0a1424;color:#fff;"><th style="text-align:left;padding:6px 10px;">Item</th><th style="text-align:right;padding:6px 10px;">Qty</th></tr>${rows}</table>`;
      }
      // automation sections (scope only)
      const secHtml = (s.sections || []).map((sec) => {
        const rows = sec.lines.map((l, i) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${i + 1}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${l.make || ""}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;">${l.item}</td><td style="text-align:right;padding:6px 10px;border-bottom:1px solid #eee;">${l.qty}</td></tr>`).join("");
        return `<h4 style="margin:14px 0 4px;color:#B8902F;">${sec.name}</h4>
          <table style="width:100%;border-collapse:collapse;font-size:12px;"><tr style="background:#0a1424;color:#fff;"><th style="text-align:left;padding:6px 10px;">#</th><th style="text-align:left;padding:6px 10px;">Make</th><th style="text-align:left;padding:6px 10px;">Description</th><th style="text-align:right;padding:6px 10px;">Qty</th></tr>${rows}</table>`;
      }).join("");
      return `<h3 style="margin:20px 0 4px;color:#0a1424;">${s.label}</h3>${secHtml}`;
    }).join("");

    const summaryRows = result.stages.map((s) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;">${s.label}</td><td style="text-align:right;padding:6px 10px;border-bottom:1px solid #eee;">${s.durationMin}–${s.durationMax} mo</td></tr>`).join("");

    const html = `<!doctype html><html><head><meta charset="utf-8"><title>GMHS Estimate & Scope (BOQ)</title></head>
    <body style="font-family:Arial,sans-serif;max-width:880px;margin:24px auto;color:#1a2744;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #D4A843;padding-bottom:12px;">
        <div>
          <img src="${GMHS_LOGO_DATA_URI}" alt="Grow More Solutions" style="height:46px;display:block;margin-bottom:8px;" />
          <h1 style="margin:0;color:#0a1424;font-size:22px;">Indicative Estimate &amp; Scope (BOQ)</h1>
          <p style="margin:3px 0 0;color:#666;">Grow More Hitech Solutions · growmoresolutions.com</p>
        </div>
        <div style="text-align:right;font-size:13px;color:#666;">${PROPERTY_TYPES.find(p => p.id === propertyType)?.label}<br>${areaSqft.toLocaleString("en-IN")} sq ft · ${city} · ${tier} tier · ${automationSystem === "knx" ? "KNX" : "Wireless"}</div>
      </div>
      <div style="background:#f7f3e8;border:1px solid #e7dcc0;border-radius:8px;padding:12px 16px;margin:16px 0;">
        <div style="font-size:12px;color:#666;">Indicative budget range</div>
        <div style="font-size:20px;font-weight:700;color:#0a1424;">${formatINR(result.lowINR)} – ${formatINR(result.highINR)} <span style="font-size:13px;font-weight:400;color:#666;">(~${usd(result.lowINR)}–${usd(result.highINR)})</span></div>
      </div>
      <h2 style="margin:18px 0 6px;color:#0a1424;">Stage Summary &amp; Timeline</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;"><tr style="background:#0a1424;color:#fff;"><th style="text-align:left;padding:7px 10px;">Stage</th><th style="text-align:right;padding:7px 10px;">Duration</th></tr>${summaryRows}</table>
      <h2 style="margin:22px 0 6px;color:#0a1424;">Scope of Work (Bill of Quantities)</h2>
      ${stageBlocks}
      <p style="font-size:11px;color:#888;margin-top:18px;line-height:1.5;"><strong>Conditions:</strong> This document is an indicative scope of work and budget range only — it is <strong>not a binding quote</strong>. Item-level pricing is intentionally not shown; final pricing depends on site conditions, product selection and detailed design. A binding, itemised quotation follows a site visit and engineer review. USD converted at ₹${fxRate}/$ on ${fxDate}, indicative. GST applicable as per law. E&amp;OE. © Grow More Solutions.</p>
      <script>window.onload=function(){window.print()}</script>
    </body></html>`;
    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); }
  }

  const label = "block text-sm font-semibold text-navy-200 mb-2";
  const card = (active: boolean) => `p-4 rounded-lg border text-left transition-all ${active ? "border-gold-500 bg-gold-500/10" : "border-navy-700 hover:border-navy-500"}`;
  const inputCls = "w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none";

  const leadForm = (
    <>
      <div className="space-y-3">
        <input placeholder="Full name" value={contact.name} onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))} className={inputCls} />
        <input type="email" placeholder="Email" value={contact.email} onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))} className={inputCls} />
        <input placeholder="Phone / WhatsApp" value={contact.phone} onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))} className={inputCls} />
      </div>
      {err && <p className="text-xs text-red-400 mt-2">{err}</p>}
      <button onClick={submitLead} disabled={!contact.name || !contact.email || !contact.phone || sending || result.stages.length === 0} className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors">
        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Revealing…</> : <>Reveal my estimate &amp; scope <ArrowRight className="w-4 h-4" /></>}
      </button>
    </>
  );

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        {/* 1 property */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">1. Your property</h2>
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {PROPERTY_TYPES.map((p) => {
              const Icon = p.id === "apartment" ? Building2 : p.id === "villa" ? Home : Hammer;
              return (
                <button key={p.id} onClick={() => setPropertyType(p.id)} className={card(propertyType === p.id)}>
                  <Icon className={`w-5 h-5 mb-2 ${propertyType === p.id ? "text-gold-500" : "text-navy-400"}`} />
                  <span className={`block text-sm font-medium ${propertyType === p.id ? "text-white" : "text-navy-200"}`}>{p.label}</span>
                  <span className="block text-xs text-navy-400 mt-0.5">{p.note}</span>
                </button>
              );
            })}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={label}>{isVilla ? "Built-up area" : "Carpet area"} (sq ft)</label>
              <input type="number" min={300} max={50000} value={areaSqft} onChange={(e) => setAreaSqft(Math.max(0, +e.target.value))} className="w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none" />
            </div>
            <div>
              <label className={label}>City</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-4 py-2.5 text-sm focus:border-gold-500 focus:outline-none">
                {ESTIMATOR_CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* 2 tier */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">2. Quality tier</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TIERS.map((t) => (
              <button key={t.id} onClick={() => setTier(t.id)} className={card(tier === t.id)}>
                <span className={`block text-sm font-semibold ${tier === t.id ? "text-white" : "text-navy-200"}`}>{t.label}</span>
                <span className="block text-xs text-navy-400 mt-1">{t.note}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3 stages */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-1">3. Your journey — what do you need?</h2>
          <p className="text-xs text-navy-400 mb-4">Tick the stages to estimate. {isVilla ? "Building fresh? Keep them all." : "Apartment fit-out covers interiors + automation."}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {STAGE_OPTIONS.filter((s) => !s.villaOnly || isVilla).map((s) => (
              <button key={s.id} onClick={() => setStages((p) => ({ ...p, [s.id]: !p[s.id] }))} className={card(stages[s.id])}>
                <span className={`flex items-center gap-2 text-sm font-medium ${stages[s.id] ? "text-white" : "text-navy-200"}`}>
                  <span className={`w-4 h-4 rounded border flex items-center justify-center ${stages[s.id] ? "bg-gold-500 border-gold-500" : "border-navy-500"}`}>{stages[s.id] && <CheckCircle2 className="w-3 h-3 text-navy-900" />}</span>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
          {stages.automation && (
            <div className="mt-5 pt-5 border-t border-navy-700/50 grid sm:grid-cols-2 gap-5">
              <div>
                <label className={label}>Automation system</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["knx", "wireless"] as AutomationSystem[]).map((s) => (
                    <button key={s} onClick={() => setAutomationSystem(s)} className={card(automationSystem === s) + " text-center"}>
                      <span className={`text-sm font-medium ${automationSystem === s ? "text-white" : "text-navy-200"}`}>{s === "knx" ? "KNX (wired)" : "Wireless / IoT"}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={label}>Automatable rooms</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setRooms((r) => Math.max(1, r - 1))} className="w-9 h-9 rounded bg-navy-700 hover:bg-navy-600 text-navy-200 flex items-center justify-center"><Minus className="w-4 h-4" /></button>
                  <span className="text-white font-semibold w-8 text-center text-lg">{rooms}</span>
                  <button onClick={() => setRooms((r) => Math.min(40, r + 1))} className="w-9 h-9 rounded bg-navy-700 hover:bg-navy-600 text-navy-200 flex items-center justify-center"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scope of Work (BOQ) — scope only, lead-gated */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4"><FileText className="w-5 h-5 text-gold-500" /><h2 className="text-lg font-semibold text-white">Scope of Work (BOQ)</h2></div>
          {!revealed ? (
            <div className="text-center py-10 border border-dashed border-navy-700 rounded-lg">
              <Lock className="w-8 h-8 text-navy-500 mx-auto mb-3" />
              <p className="text-sm text-navy-200 font-medium">Your full scope of work is ready</p>
              <p className="text-xs text-navy-400 mt-1 max-w-xs mx-auto">Enter your details on the right to reveal the itemised scope (devices &amp; quantities) and download your BOQ.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {result.stages.map((s) => (
                <div key={s.id}>
                  <div className="flex justify-between items-center mb-1.5">
                    <h3 className="text-sm font-semibold text-gold-500">{s.label}</h3>
                    <span className="text-xs text-navy-400 inline-flex items-center gap-1"><Clock className="w-3 h-3" />{s.durationMin}–{s.durationMax} mo</span>
                  </div>
                  {s.lines?.map((l, i) => (
                    <div key={i} className="flex justify-between text-xs text-navy-300 py-1 border-b border-navy-800">
                      <span className="pr-3">{l.item}</span>
                      <span className="whitespace-nowrap text-navy-400">{l.qty.toLocaleString("en-IN")} {l.unit}</span>
                    </div>
                  ))}
                  {s.sections?.map((sec) => (
                    <div key={sec.name} className="mt-2 mb-3">
                      <p className="text-xs font-semibold text-navy-200 mt-2 mb-1">{sec.name}</p>
                      {sec.lines.map((l, i) => (
                        <div key={i} className="flex justify-between text-xs text-navy-300 py-1 border-b border-navy-800/60">
                          <span className="pr-3">{l.make && <span className="text-navy-500">{l.make} · </span>}{l.item}</span>
                          <span className="whitespace-nowrap text-navy-400">× {l.qty}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              {result.stages.length === 0 && <p className="text-sm text-navy-400">Select at least one stage to see your scope.</p>}
            </div>
          )}
          <p className="text-[11px] text-navy-500 mt-4">Scope of work only — item-level pricing is shared in your formal quote after a site visit &amp; engineer review. Construction/interiors quantities are indicative; GST applicable as per law.</p>
        </div>
      </div>

      {/* RIGHT — sticky results / lead gate */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-5">
          {!revealed ? (
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-white">See your indicative estimate</h3>
              <p className="text-xs text-navy-400 mt-1 mb-4">Enter your details to reveal your budget range, full scope of work &amp; a downloadable BOQ. An expert reviews it and sends an accurate quote. NRI? We reply in your timezone.</p>
              {leadForm}
              <p className="text-[11px] text-navy-500 mt-3">No spam. We use your details only to prepare and discuss your estimate.</p>
            </div>
          ) : (
            <>
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-sm text-navy-400">Estimated total</h3>
                <p className="text-3xl font-bold text-gradient-gold mt-1">{formatINR(result.lowINR)} – {formatINR(result.highINR)}</p>
                <p className="text-sm text-navy-300 mt-1">~{usd(result.lowINR)} – {usd(result.highINR)}</p>
                <p className="text-[11px] text-navy-500 mt-2">Indicative range · not a binding quote · ₹{fxRate}/$ on {fxDate}</p>
                <div className="mt-5 space-y-2.5">
                  {result.stages.map((s) => (
                    <div key={s.id} className="border-l-2 border-gold-500/50 pl-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-navy-200">{s.label}</span>
                        <span className="text-navy-400 inline-flex items-center gap-1"><Clock className="w-3 h-3" />{s.durationMin}–{s.durationMax} mo</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={downloadBOQ} disabled={result.stages.length === 0} className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors">
                  <Download className="w-4 h-4" /> Download Scope BOQ (PDF)
                </button>
              </div>

              <div className="glass-card rounded-xl p-6 text-center py-5">
                <CheckCircle2 className="w-10 h-10 text-gold-500 mx-auto" />
                <p className="text-white font-semibold mt-2">Your estimate is on its way ✨</p>
                <p className="text-sm text-navy-300 mt-1">We&apos;ve emailed your scope &amp; budget range to you — do check your inbox. A GMHS automation expert will personally review it and reach out within <span className="text-gold-500 font-medium">1 working day</span> with a precise, no-obligation quote, in your timezone.</p>
              </div>
            </>
          )}
          <p className="text-xs text-navy-500 text-center">Want exact products &amp; brands? <Link href="/smart-home-planner" className="text-gold-500 hover:underline">Smart Home Planner →</Link></p>
        </div>
      </div>
    </div>
  );
}
