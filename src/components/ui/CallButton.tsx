"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

// Floating click-to-call button (replaced the WhatsApp button, 2026-09-17).
const PHONE_DISPLAY = COMPANY.phone; // "+91-96678-95926"
const PHONE_TEL = COMPANY.phone.replace(/[^\d+]/g, ""); // "+919667895926"

export default function CallButton() {
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (typeof w.gtag === "function") {
      w.gtag("event", "phone_click", {
        event_category: "engagement",
        event_label: "floating_button",
        value: 1,
      });
    }
  };

  return (
    <a
      href={`tel:${PHONE_TEL}`}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gold-500 hover:bg-gold-400
                 text-navy-950 p-4 rounded-full shadow-2xl transition-all duration-300
                 hover:scale-110 group"
      aria-label={`Call us at ${PHONE_DISPLAY}`}
    >
      <Phone className="w-7 h-7" strokeWidth={2.25} aria-hidden="true" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900
                        px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg
                        opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call {PHONE_DISPLAY}
      </span>
    </a>
  );
}
