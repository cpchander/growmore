"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  estimate, formatINR, formatUSD, TIERS, PROPERTY_TYPES, ESTIMATOR_CITIES,
  type Tier, type PropertyType, type AutomationSystem, type StageId, type EstimatorInput,
} from "@/lib/estimator";
import { Home, Building2, Hammer, Plus, Minus, Download, ArrowRight, Clock, Loader2, CheckCircle2, FileText } from "lucide-react";

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
  const [stages, setStages] = useState<Record<StageId, boolean>>({
    design: true, approvals: true, construction: true, interiors: true, automation: true,
  });

  const isVilla = propertyType !== "apartment";

  const input: EstimatorInput = { propertyType, areaSqft, city, tier, stages, automationSystem, rooms };
  const result = useMemo(() => estimate(input), [propertyType, areaSqft, city, tier, automationSystem, rooms, stages]);

  const usd = (inr: number) => formatUSD(inr, fxRate);

  // ---- lead form ----
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
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
      setSent(true);
    } catch (e) { setErr(e instanceof Error ? e.message : "Failed."); } finally { setSending(false); }
  }

  // ---- BOQ document (opens a printable tab) ----
  function downloadBOQ() {
    const rows = result.stages.map((s) => {
      const head = `<tr><td colspan="4" style="background:#111d33;color:#E0BC63;font-weight:700;padding:8px 10px;">${s.label} — ${formatINR(s.subtotalINR)} (~${usd(s.subtotalINR)}) · ${s.durationMin}–${s.durationMax} mo</td></tr>`;
      const lines = s.lines.map((l) => `<tr><td style="padding:7px 10px;border-bottom:1px solid #eee;">${l.item}</td><td style="text-align:right;padding:7px 10px;border-bottom:1px solid #eee;">${l.qty.toLocaleString("en-IN")} ${l.unit}</td><td style="text-align:right;padding:7px 10px;border-bottom:1px solid #eee;">₹${l.rateINR.toLocaleString("en-IN")}</td><td style="text-align:right;padding:7px 10px;border-bottom:1px solid #eee;">${formatINR(l.amountINR)}</td></tr>`).join("");
      return head + lines;
    }).join("");
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>GMHS Estimate BOQ</title></head>
    <body style="font-family:Arial,sans-serif;max-width:820px;margin:24px auto;color:#1a2744;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;border-bottom:3px solid #D4A843;padding-bottom:10px;">
        <div><h1 style="margin:0;color:#0a1424;">Indicative Estimate &amp; BOQ</h1><p style="margin:4px 0 0;color:#666;">Grow More Solutions · growmoresolutions.com</p></div>
        <div style="text-align:right;font-size:13px;color:#666;">${PROPERTY_TYPES.find(p => p.id === propertyType)?.label}<br>${areaSqft.toLocaleString("en-IN")} sq ft · ${city} · ${tier} tier</div>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:13px;">
        <tr style="background:#0a1424;color:#fff;"><th style="text-align:left;padding:8px 10px;">Item</th><th style="text-align:right;padding:8px 10px;">Qty</th><th style="text-align:right;padding:8px 10px;">Rate</th><th style="text-align:right;padding:8px 10px;">Amount</th></tr>
        ${rows}
      </table>
      <div style="margin-top:18px;padding:14px;background:#f7f3e8;border:1px solid #D4A843;border-radius:8px;">
        <div style="font-size:15px;"><b>Estimated total: ${formatINR(result.lowINR)} – ${formatINR(result.highINR)}</b> &nbsp; (~${usd(result.lowINR)} – ${usd(result.highINR)})</div>
      </div>
      <p style="font-size:11px;color:#888;margin-top:16px;line-height:1.5;">Figures are <b>indicative</b> and exclude GST (18% applicable). USD converted at ₹${fxRate}/$ on ${fxDate}, indicative only. Final binding quote follows a site visit &amp; engineer review. © Grow More Solutions.</p>
      <script>window.onload=function(){window.print()}</script>
    </body></html>`;
    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); }
  }

  const label = "block text-sm font-semibold text-navy-200 mb-2";
  const card = (active: boolean) => `p-4 rounded-lg border text-left transition-all ${active ? "border-gold-500 bg-gold-500/10" : "border-navy-700 hover:border-navy-500"}`;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* LEFT — config */}
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
          <p className="text-xs text-navy-400 mb-4">Tick the stages you want estimated. {isVilla ? "Building fresh? Keep them all." : "Apartment fit-out covers interiors + automation."}</p>
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

        {/* itemized BOQ */}
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4"><FileText className="w-5 h-5 text-gold-500" /><h2 className="text-lg font-semibold text-white">Itemized BOQ</h2></div>
          <div className="space-y-4">
            {result.stages.map((s) => (
              <div key={s.id}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-gold-500">{s.label}</h3>
                  <span className="text-sm text-white">{formatINR(s.subtotalINR)} <span className="text-navy-400 text-xs">(~{usd(s.subtotalINR)})</span></span>
                </div>
                {s.lines.map((l, i) => (
                  <div key={i} className="flex justify-between text-xs text-navy-300 py-1 border-b border-navy-800">
                    <span className="pr-3">{l.item} <span className="text-navy-500">· {l.qty.toLocaleString("en-IN")} {l.unit}</span></span>
                    <span className="whitespace-nowrap">{formatINR(l.amountINR)}</span>
                  </div>
                ))}
              </div>
            ))}
            {result.stages.length === 0 && <p className="text-sm text-navy-400">Select at least one stage to see your estimate.</p>}
          </div>
        </div>
      </div>

      {/* RIGHT — results (sticky) */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-5">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm text-navy-400">Estimated total</h3>
            <p className="text-3xl font-bold text-gradient-gold mt-1">{formatINR(result.lowINR)} – {formatINR(result.highINR)}</p>
            <p className="text-sm text-navy-300 mt-1">~{usd(result.lowINR)} – {usd(result.highINR)}</p>
            <p className="text-[11px] text-navy-500 mt-2">Indicative · GST extra · ₹{fxRate}/$ on {fxDate}</p>

            {/* journey timeline */}
            <div className="mt-5 space-y-2.5">
              {result.stages.map((s) => (
                <div key={s.id} className="border-l-2 border-gold-500/50 pl-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-navy-200">{s.label}</span>
                    <span className="text-navy-400 inline-flex items-center gap-1"><Clock className="w-3 h-3" />{s.durationMin}–{s.durationMax} mo</span>
                  </div>
                  <span className="text-xs text-gold-500">{formatINR(s.subtotalINR)}</span>
                </div>
              ))}
            </div>

            <button onClick={downloadBOQ} disabled={result.stages.length === 0} className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors">
              <Download className="w-4 h-4" /> Download BOQ (PDF)
            </button>
          </div>

          {/* lead form */}
          <div className="glass-card rounded-xl p-6">
            {sent ? (
              <div className="text-center py-2">
                <CheckCircle2 className="w-10 h-10 text-gold-500 mx-auto" />
                <p className="text-white font-semibold mt-2">Sent!</p>
                <p className="text-sm text-navy-300 mt-1">Our team will review your BOQ and send a detailed, accurate quote within 1 working day.</p>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-white">Get an expert to review this BOQ</h3>
                <p className="text-xs text-navy-400 mt-1 mb-4">A real quote after a quick scoping call. NRI? We reply in your timezone.</p>
                <div className="space-y-3">
                  <input placeholder="Full name" value={contact.name} onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))} className="w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none" />
                  <input type="email" placeholder="Email" value={contact.email} onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))} className="w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none" />
                  <input placeholder="Phone / WhatsApp" value={contact.phone} onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))} className="w-full bg-navy-900 border border-navy-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:border-gold-500 focus:outline-none" />
                </div>
                {err && <p className="text-xs text-red-400 mt-2">{err}</p>}
                <button onClick={submitLead} disabled={!contact.name || !contact.email || !contact.phone || sending} className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-40 text-navy-900 py-3 rounded-lg font-semibold transition-colors">
                  {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <>Request Expert Review <ArrowRight className="w-4 h-4" /></>}
                </button>
              </>
            )}
          </div>

          <p className="text-xs text-navy-500 text-center">
            Want exact products &amp; brands?{" "}
            <Link href="/smart-home-planner" className="text-gold-500 hover:underline">Smart Home Planner →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
