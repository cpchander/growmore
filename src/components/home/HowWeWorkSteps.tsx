"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function HowWeWorkSteps() {
  return (
    <div className="relative mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {/* Connecting track (desktop) — gold gradient draws left→right on view */}
      <div className="hidden lg:block absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-navy-700/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#B8902F,#E0BC63)" }}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
      </div>

      {PROCESS_STEPS.map((s, i) => (
        <motion.div
          key={s.step}
          className="group relative glass-card rounded-2xl p-6 text-center transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-gold-500/45 hover:shadow-[0_18px_50px_-20px_rgba(212,168,67,0.35)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="gmhs-num relative z-10 mx-auto w-16 h-16 rounded-full bg-navy-900 border-2 border-gold-500/35 flex items-center justify-center text-2xl font-bold text-gold-500 transition-transform duration-500 group-hover:scale-110 group-hover:border-gold-500">
            {s.step}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
          <p className="mt-2 text-sm text-navy-300 leading-relaxed">{s.description}</p>
          <div className="mt-4 pt-3 border-t border-navy-700/50">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-500">
              You receive
            </span>
            <p className="mt-1 text-xs text-navy-200">{s.deliverable}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
