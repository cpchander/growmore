// ============================================================
// HOME JOURNEY ESTIMATOR — deterministic rules engine (Phase 1)
// Pure functions. No AI touches any number. Seeded from researched
// 2026 India rate-cards + GMHS's real Digilux (wireless) & Schneider
// (KNX wired) price lists. All figures INDICATIVE; GST extra.
// ============================================================

export type Tier = "basic" | "standard" | "premium" | "luxury";
export type PropertyType = "apartment" | "villa" | "independent";
export type AutomationSystem = "wireless" | "knx";
export type StageId = "design" | "approvals" | "construction" | "interiors" | "automation";

export const TIERS: { id: Tier; label: string; note: string }[] = [
  { id: "basic", label: "Basic", note: "Functional, value finishes" },
  { id: "standard", label: "Standard", note: "Quality mid-range" },
  { id: "premium", label: "Premium", note: "Marble, joinery, branded" },
  { id: "luxury", label: "Luxury", note: "Bespoke, imported, designer" },
];

export const PROPERTY_TYPES: { id: PropertyType; label: string; note: string }[] = [
  { id: "apartment", label: "Apartment (fit-out)", note: "Builder gives the shell — interiors + automation" },
  { id: "villa", label: "Villa / Bungalow", note: "Full build: design → structure → finish → automate" },
  { id: "independent", label: "Independent House", note: "Full ground-up build on your plot" },
];

// Turnkey civil ₹/sq ft (incl. structure + finishing + MEP), 2026 — sourced.
export const CIVIL_RATES: Record<string, Record<Tier, number>> = {
  "Delhi NCR": { basic: 2080, standard: 2700, premium: 3600, luxury: 5050 },
  Gurgaon: { basic: 2080, standard: 2700, premium: 3600, luxury: 5050 },
  Noida: { basic: 2000, standard: 2600, premium: 3500, luxury: 4900 },
  Mumbai: { basic: 2457, standard: 3150, premium: 4253, luxury: 5828 },
  Pune: { basic: 2007, standard: 2573, premium: 3474, luxury: 4760 },
  Bangalore: { basic: 1966, standard: 2520, premium: 3402, luxury: 4662 },
  Hyderabad: { basic: 1720, standard: 2205, premium: 2977, luxury: 4079 },
  Chennai: { basic: 1843, standard: 2363, premium: 3190, luxury: 4372 },
  Goa: { basic: 1794, standard: 2300, premium: 3105, luxury: 4255 },
  Chandigarh: { basic: 1761, standard: 2258, premium: 3048, luxury: 4177 },
  Ahmedabad: { basic: 1679, standard: 2153, premium: 2907, luxury: 3983 },
  Kolkata: { basic: 1700, standard: 2150, premium: 2900, luxury: 3950 },
  Other: { basic: 1850, standard: 2400, premium: 3200, luxury: 4400 },
};
export const ESTIMATOR_CITIES = Object.keys(CIVIL_RATES);
const METRO_PREMIUM = ["Delhi NCR", "Gurgaon", "Mumbai", "Bangalore"];

// Interior fit-out ₹/sq ft (furnishing/woodwork/modular beyond civil finish)
const INTERIOR_RATES: Record<Tier, number> = { basic: 1000, standard: 1200, premium: 1400, luxury: 2000 };

// Home automation — seeded from the real price lists
const AUTOMATION = {
  wireless: { // Digilux Zigbee/IoT
    base: 56000, // WiFi gateway ₹44k + bridge ₹12k
    perRoom: { basic: 15000, standard: 19000, premium: 25000, luxury: 32000 } as Record<Tier, number>,
    baseLabel: "Zigbee WiFi gateway, bridge & network base",
    roomLabel: "Smart switch modules, dimmers, scene keypads & controls (per room)",
  },
  knx: { // Schneider KNX (wired) + ELAN processor
    base: 400000, // ELAN processor + AC control + gateways + power supply
    perRoom: { basic: 55000, standard: 70000, premium: 100000, luxury: 140000 } as Record<Tier, number>,
    baseLabel: "ELAN processor, power supply, AC control & gateways",
    roomLabel: "KNX actuators, dimmers, designer keypads & bus wiring (per room)",
  },
};

// Stage durations (months) {min,max}
const DURATIONS: Record<StageId, { villa: [number, number]; apartment: [number, number] }> = {
  design: { villa: [3, 6], apartment: [0.5, 1] },
  approvals: { villa: [1, 3], apartment: [0, 0] },
  construction: { villa: [8, 14], apartment: [0, 0] },
  interiors: { villa: [3, 5], apartment: [2.5, 4] },
  automation: { villa: [1, 2], apartment: [0.5, 1.5] },
};

export type BoqLine = { item: string; qty: number; unit: string; rateINR: number; amountINR: number };
export type StageResult = {
  id: StageId;
  label: string;
  lines: BoqLine[];
  subtotalINR: number;
  durationMin: number;
  durationMax: number;
};
export type EstimateResult = {
  stages: StageResult[];
  totalINR: number;
  lowINR: number;
  highINR: number;
};

export type EstimatorInput = {
  propertyType: PropertyType;
  areaSqft: number;
  city: string;
  tier: Tier;
  stages: Record<StageId, boolean>;
  automationSystem: AutomationSystem;
  rooms: number;
};

const round = (n: number, to = 1000) => Math.round(n / to) * to;

export function estimate(input: EstimatorInput): EstimateResult {
  const { propertyType, areaSqft, city, tier, stages, automationSystem, rooms } = input;
  const isVilla = propertyType !== "apartment";
  const dKey = isVilla ? "villa" : "apartment";
  const civil = (CIVIL_RATES[city] || CIVIL_RATES.Other)[tier];
  const out: StageResult[] = [];

  const constructionCost = areaSqft * civil;

  if (isVilla && stages.construction) {
    out.push({
      id: "construction", label: "Civil Construction (turnkey)",
      lines: [{ item: `Turnkey construction — structure, finishing & MEP (${tier})`, qty: areaSqft, unit: "sq ft", rateINR: civil, amountINR: constructionCost }],
      subtotalINR: constructionCost, durationMin: DURATIONS.construction[dKey][0], durationMax: DURATIONS.construction[dKey][1],
    });
  }

  if (isVilla && stages.design) {
    const floor = areaSqft < 2000 ? 120 : areaSqft <= 5000 ? 90 : 60;
    const fee = Math.max(constructionCost * 0.075, floor * areaSqft);
    out.push({
      id: "design", label: "Architecture & Design",
      lines: [{ item: "Architectural & interior design fees (drawings, 3D, BOQ)", qty: areaSqft, unit: "sq ft", rateINR: Math.round(fee / areaSqft), amountINR: round(fee) }],
      subtotalINR: round(fee), durationMin: DURATIONS.design[dKey][0], durationMax: DURATIONS.design[dKey][1],
    });
  }

  if (isVilla && stages.approvals) {
    const fee = METRO_PREMIUM.includes(city) ? 150000 : 60000;
    out.push({
      id: "approvals", label: "Approvals & Sanctions",
      lines: [{ item: "Building plan sanction, NOCs & regulatory liaison", qty: 1, unit: "lump", rateINR: fee, amountINR: fee }],
      subtotalINR: fee, durationMin: DURATIONS.approvals[dKey][0], durationMax: DURATIONS.approvals[dKey][1],
    });
  }

  if (stages.interiors) {
    let rate = INTERIOR_RATES[tier];
    if (METRO_PREMIUM.includes(city)) rate = Math.round(rate * 1.25);
    const cost = areaSqft * rate;
    out.push({
      id: "interiors", label: "Interiors & Fit-out",
      lines: [{ item: `Modular kitchen, wardrobes, woodwork, false ceiling & furnishing (${tier})`, qty: areaSqft, unit: "sq ft", rateINR: rate, amountINR: cost }],
      subtotalINR: cost, durationMin: DURATIONS.interiors[dKey][0], durationMax: DURATIONS.interiors[dKey][1],
    });
  }

  if (stages.automation) {
    const a = AUTOMATION[automationSystem];
    const r = Math.max(1, rooms);
    const perRoomCost = a.perRoom[tier] * r;
    out.push({
      id: "automation", label: `Home Automation (${automationSystem === "knx" ? "KNX wired" : "wireless / IoT"})`,
      lines: [
        { item: a.baseLabel, qty: 1, unit: "system", rateINR: a.base, amountINR: a.base },
        { item: a.roomLabel, qty: r, unit: "room", rateINR: a.perRoom[tier], amountINR: perRoomCost },
      ],
      subtotalINR: a.base + perRoomCost, durationMin: DURATIONS.automation[dKey][0], durationMax: DURATIONS.automation[dKey][1],
    });
  }

  const totalINR = out.reduce((s, st) => s + st.subtotalINR, 0);
  return { stages: out, totalINR, lowINR: round(totalINR * 0.9), highINR: round(totalINR * 1.15) };
}

// Currency formatting
export function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}
export function formatUSD(inr: number, rate: number): string {
  const usd = inr / rate;
  if (usd >= 1000000) return `$${(usd / 1000000).toFixed(2)}M`;
  if (usd >= 1000) return `$${Math.round(usd / 1000)}k`;
  return `$${Math.round(usd)}`;
}
