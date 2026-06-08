"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Upload } from "lucide-react";

const STAGES = ["Concept", "Design development", "Under construction", "Renovation"];

export default function ArchitectForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/architect", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-gold-500 mx-auto" />
        <h3 className="mt-4 text-xl font-bold text-white">Request received</h3>
        <p className="mt-2 text-sm text-navy-300">
          Our design team will respond within 1 working day. Your floor plans stay
          confidential — and we never contact your clients.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg bg-navy-900 border border-navy-700/60 text-white text-sm px-3.5 py-2.5 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/15 transition";
  const labelCls = "block text-sm font-semibold text-navy-200 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 sm:p-8">
      <h3 className="text-xl font-bold text-white">Request Project Drawings</h3>
      <p className="text-sm text-navy-300 mt-1 mb-6">
        A few quick details — we reply within 1 working day.
      </p>

      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] w-0 h-0 opacity-0"
        aria-hidden="true"
      />

      <div className="space-y-5">
        <div>
          <label className={labelCls} htmlFor="ar-name">Your name &amp; firm</label>
          <input id="ar-name" name="name" required placeholder="Name & studio" className={inputCls} />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="ar-phone">Phone / WhatsApp</label>
            <input id="ar-phone" name="phone" required placeholder="+91…" className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="ar-email">Email <span className="text-navy-500 font-normal">(optional)</span></label>
            <input id="ar-email" name="email" type="email" placeholder="you@studio.com" className={inputCls} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelCls} htmlFor="ar-stage">Project stage</label>
            <select id="ar-stage" name="stage" defaultValue={STAGES[0]} className={inputCls}>
              {STAGES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="ar-city">City <span className="text-navy-500 font-normal">(optional)</span></label>
            <input id="ar-city" name="city" placeholder="e.g. Mumbai" className={inputCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Floor plan <span className="text-navy-500 font-normal">(optional — PDF, DWG, JPG; max 10 MB)</span></label>
          <label
            htmlFor="ar-file"
            className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-gold-500/35 bg-gold-500/[0.03] hover:bg-gold-500/[0.07] hover:border-gold-500 cursor-pointer py-6 transition text-center"
          >
            <Upload className="w-5 h-5 text-gold-500" />
            <span className="text-sm text-navy-200">
              {fileName || (<>Drag &amp; drop or <span className="text-gold-500 font-semibold">browse</span></>)}
            </span>
            <input
              id="ar-file"
              name="floorPlan"
              type="file"
              accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            />
          </label>
        </div>
        <div>
          <label className={labelCls} htmlFor="ar-msg">Anything else <span className="text-navy-500 font-normal">(optional)</span></label>
          <textarea id="ar-msg" name="message" rows={2} placeholder="Notes for our design team…" className={inputCls} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 py-3.5 rounded-xl font-semibold transition-colors"
      >
        {status === "submitting" ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
        ) : (
          <>Send to Design Team <ArrowRight className="w-5 h-5" /></>
        )}
      </button>
      <p className="text-xs text-navy-500 mt-3 text-center">
        No client poaching, ever. Floor plans kept confidential.
      </p>
    </form>
  );
}
