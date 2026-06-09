// ============================================================
// HOME JOURNEY ESTIMATOR — deterministic rules engine (Phase 1)
// Pure functions. No AI touches any number. Construction stages from
// researched 2026 rate-cards; AUTOMATION BOQ replicates GMHS's real
// proposal templates (Schneider KNX + Digilux wireless) — sectioned
// device line-items with list → 30% discount → +18% GST → + install.
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

const INTERIOR_RATES: Record<Tier, number> = { basic: 1000, standard: 1200, premium: 1400, luxury: 2000 };

const DURATIONS: Record<StageId, { villa: [number, number]; apartment: [number, number] }> = {
  design: { villa: [3, 6], apartment: [0.5, 1] },
  approvals: { villa: [1, 3], apartment: [0, 0] },
  construction: { villa: [8, 14], apartment: [0, 0] },
  interiors: { villa: [3, 5], apartment: [2.5, 4] },
  automation: { villa: [1, 2], apartment: [0.5, 1.5] },
};

// ---- Real product prices (from the GMHS proposal templates) ----
const KNX = {
  powerSupply: 52000, output8Master: 35000, output8Ext: 27000, dimmer3ch: 41000, smartSwitch: 5000, knxWire: 200,
  elanProcessor: 200000, viewerLicense: 31000, gateway: 55000, acControl: 150000, globalCache: 30000, emitter: 3500,
  backBox: 500, unica4: 30000, unicaBedside: 20000, unica6: 35000, dlp8: 50000, screen: 70000,
};
const DIGI = {
  ecoModule: { basic: 11000, standard: 14000 }, proModule: { premium: 26000, luxury: 31000 },
  curtainModule: 11000, sceneModule: 11000, wifiGateway: 44000, bridge: 12000, rangeExtender: 5000,
  rgbw: 9000, irController: 9000, sensor: 5000, contactor: 3000,
};
const DISCOUNT = 0.30, GST = 0.18, INSTALL = 0.12; // from the proposal sheets

export type BoqLine = { item: string; make?: string; qty: number; unit: string; rateINR: number; amountINR: number };
export type BoqSection = {
  name: string; lines: BoqLine[];
  listINR: number; discountINR: number; nettINR: number; gstINR: number; installINR: number; totalINR: number;
};
export type StageResult = {
  id: StageId; label: string;
  lines?: BoqLine[]; sections?: BoqSection[];
  subtotalINR: number; durationMin: number; durationMax: number;
};
export type EstimateResult = { stages: StageResult[]; totalINR: number; lowINR: number; highINR: number };

export type EstimatorInput = {
  propertyType: PropertyType; areaSqft: number; city: string; tier: Tier;
  stages: Record<StageId, boolean>; automationSystem: AutomationSystem; rooms: number;
};

const round = (n: number, to = 1000) => Math.round(n / to) * to;
const ceil = Math.ceil;

function priceSection(name: string, lines: BoqLine[]): BoqSection {
  const listINR = lines.reduce((s, l) => s + l.amountINR, 0);
  const discountINR = Math.round(listINR * DISCOUNT);
  const nettINR = listINR - discountINR;
  const gstINR = Math.round(nettINR * GST);
  const installINR = Math.round(nettINR * INSTALL);
  return { name, lines, listINR, discountINR, nettINR, gstINR, installINR, totalINR: nettINR + gstINR + installINR };
}
const L = (item: string, make: string, qty: number, unit: string, rateINR: number): BoqLine =>
  ({ item, make, qty, unit, rateINR, amountINR: qty * rateINR });

// Derive device counts per room (calibrated to the sample proposals)
function deviceCounts(rooms: number, tier: Tier) {
  const f = {
    sw: { basic: 4, standard: 5, premium: 6, luxury: 7 }[tier],
    fan: 0.5,
    dim: { basic: 0, standard: 0.5, premium: 1, luxury: 1.5 }[tier],
    shut: { basic: 0.3, standard: 0.6, premium: 1, luxury: 1.3 }[tier],
    hvac: 0.8,
    keypad: { basic: 0.5, standard: 0.8, premium: 1, luxury: 1.3 }[tier],
    smart: 0.5,
  };
  const n = (x: number) => Math.max(0, Math.round(x * rooms));
  return { sw: n(f.sw), fan: n(f.fan), dim: n(f.dim), shut: n(f.shut), hvac: n(f.hvac), keypad: Math.max(1, n(f.keypad)), smart: n(f.smart) };
}

function knxSections(rooms: number, tier: Tier): BoqSection[] {
  const d = deviceCounts(rooms, tier);
  // Backend
  const channels = d.sw + d.fan + d.shut * 2;
  const modules = Math.max(1, ceil(channels / 8));
  const ext = Math.max(0, modules - 1);
  const ps = Math.max(1, ceil(modules / 4));
  const dimmers = ceil(d.dim / 3);
  const wire = rooms * 40;
  const backend: BoqLine[] = [
    L("Power supply 30V DC 640mA", "Schneider", ps, "no", KNX.powerSupply),
    L("Output 8-ch Master", "Schneider", 1, "no", KNX.output8Master),
  ];
  if (ext > 0) backend.push(L("Output 8-ch Extension", "Schneider", ext, "no", KNX.output8Ext));
  if (dimmers > 0) backend.push(L("3-Channel 1-10V Dimmer", "Schneider", dimmers, "no", KNX.dimmer3ch));
  if (d.smart > 0) backend.push(L("Smart Switch", "Schneider", d.smart, "no", KNX.smartSwitch));
  backend.push(L("KNX bus wire", "KNX", wire, "m", KNX.knxWire));

  // Processor
  const proc: BoqLine[] = [
    L("Processor", "ELAN", 1, "no", KNX.elanProcessor),
    L("Viewer License", "ELAN", 1, "no", KNX.viewerLicense),
    L("Gateway / Converter", "Gateway", 1, "no", KNX.gateway),
  ];
  if (d.hvac > 0) {
    proc.push(L("AC control system", "Intellisys", 1, "no", KNX.acControl));
    proc.push(L("Global Cache", "Global Cache", Math.max(1, ceil(d.hvac / 8)), "no", KNX.globalCache));
    proc.push(L("Emitters (AC control)", "Xtralink", d.hvac, "no", KNX.emitter));
  }

  // Keypads / Frontend
  const lux = tier === "premium" || tier === "luxury";
  const u4 = Math.max(1, Math.round(d.keypad * 0.4));
  const u6 = Math.round(d.keypad * 0.3);
  const bedside = Math.round(rooms * 0.25);
  const dlp = lux ? Math.round(d.keypad * 0.15) : 0;
  const screens = lux ? 1 : 0;
  const totalKeypads = u4 + u6 + bedside + dlp;
  const keypads: BoqLine[] = [
    L("Back Box + Connector", "Schneider", totalKeypads, "no", KNX.backBox),
    L("Unica 4-button keypad", "Schneider", u4, "no", KNX.unica4),
  ];
  if (u6 > 0) keypads.push(L("Unica 6-button keypad", "Schneider", u6, "no", KNX.unica6));
  if (bedside > 0) keypads.push(L("Unica ELV bedside keypad", "Schneider", bedside, "no", KNX.unicaBedside));
  if (dlp > 0) keypads.push(L("DLP 8-button keypad", "Schneider", dlp, "no", KNX.dlp8));
  if (screens > 0) keypads.push(L('Touch Screen 4"', "Schneider", screens, "no", KNX.screen));

  return [priceSection("Backend — Automation Devices", backend), priceSection("Processor", proc), priceSection("Frontend — Keypads & Screens", keypads)];
}

function wirelessSections(rooms: number, tier: Tier): BoqSection[] {
  const d = deviceCounts(rooms, tier);
  const isPro = tier === "premium" || tier === "luxury";
  const modulePrice = isPro ? DIGI.proModule[tier as "premium" | "luxury"] : DIGI.ecoModule[tier as "basic" | "standard"];
  const devices: BoqLine[] = [
    L(`Crystal ${isPro ? "PRO" : "ECO"} smart switch module (per room)`, "Digilux", rooms, "no", modulePrice),
  ];
  if (d.shut > 0) devices.push(L("Crystal curtain/blind module", "Digilux", d.shut, "no", DIGI.curtainModule));
  if (d.keypad > 0) devices.push(L("Crystal scene keypad", "Digilux", d.keypad, "no", DIGI.sceneModule));
  if (d.hvac > 0) { devices.push(L("IR controller (AC)", "Digilux", d.hvac, "no", DIGI.irController)); devices.push(L("Contactor (AC)", "Digilux", d.hvac, "no", DIGI.contactor)); }
  devices.push(L("Occupancy / motion sensor", "Digilux", Math.max(1, Math.round(rooms * 0.5)), "no", DIGI.sensor));
  if (tier === "luxury") devices.push(L("RGBW controller", "Digilux", Math.round(rooms * 0.3), "no", DIGI.rgbw));

  const network: BoqLine[] = [
    L("Zigbee WiFi Gateway", "Digilux", 1, "no", DIGI.wifiGateway),
    L("Zigbee Bridge", "Digilux", Math.max(1, ceil(rooms / 6)), "no", DIGI.bridge),
  ];
  if (rooms > 6) network.push(L("Range Extender", "Digilux", ceil(rooms / 8), "no", DIGI.rangeExtender));

  return [priceSection("Smart Modules & Controls", devices), priceSection("Network & Gateways", network)];
}

export function estimate(input: EstimatorInput): EstimateResult {
  const { propertyType, areaSqft, city, tier, stages, automationSystem, rooms } = input;
  const isVilla = propertyType !== "apartment";
  const dKey = isVilla ? "villa" : "apartment";
  const civil = (CIVIL_RATES[city] || CIVIL_RATES.Other)[tier];
  const out: StageResult[] = [];
  const dur = (id: StageId): [number, number] => DURATIONS[id][dKey];

  if (isVilla && stages.construction) {
    const cost = areaSqft * civil;
    out.push({ id: "construction", label: "Civil Construction (turnkey)", lines: [{ item: `Turnkey construction — structure, finishing & MEP (${tier})`, qty: areaSqft, unit: "sq ft", rateINR: civil, amountINR: cost }], subtotalINR: cost, durationMin: dur("construction")[0], durationMax: dur("construction")[1] });
  }
  if (isVilla && stages.design) {
    const floor = areaSqft < 2000 ? 120 : areaSqft <= 5000 ? 90 : 60;
    const fee = round(Math.max(areaSqft * civil * 0.075, floor * areaSqft));
    out.push({ id: "design", label: "Architecture & Design", lines: [{ item: "Architectural & interior design fees (drawings, 3D, BOQ)", qty: areaSqft, unit: "sq ft", rateINR: Math.round(fee / areaSqft), amountINR: fee }], subtotalINR: fee, durationMin: dur("design")[0], durationMax: dur("design")[1] });
  }
  if (isVilla && stages.approvals) {
    const fee = METRO_PREMIUM.includes(city) ? 150000 : 60000;
    out.push({ id: "approvals", label: "Approvals & Sanctions", lines: [{ item: "Building plan sanction, NOCs & regulatory liaison", qty: 1, unit: "lump", rateINR: fee, amountINR: fee }], subtotalINR: fee, durationMin: dur("approvals")[0], durationMax: dur("approvals")[1] });
  }
  if (stages.interiors) {
    let rate = INTERIOR_RATES[tier];
    if (METRO_PREMIUM.includes(city)) rate = Math.round(rate * 1.25);
    const cost = areaSqft * rate;
    out.push({ id: "interiors", label: "Interiors & Fit-out", lines: [{ item: `Modular kitchen, wardrobes, woodwork, false ceiling & furnishing (${tier})`, qty: areaSqft, unit: "sq ft", rateINR: rate, amountINR: cost }], subtotalINR: cost, durationMin: dur("interiors")[0], durationMax: dur("interiors")[1] });
  }
  if (stages.automation) {
    const sections = automationSystem === "knx" ? knxSections(Math.max(1, rooms), tier) : wirelessSections(Math.max(1, rooms), tier);
    const subtotal = sections.reduce((s, sec) => s + sec.totalINR, 0);
    out.push({ id: "automation", label: `Home Automation — ${automationSystem === "knx" ? "KNX (wired)" : "Wireless / IoT"}`, sections, subtotalINR: subtotal, durationMin: dur("automation")[0], durationMax: dur("automation")[1] });
  }

  const totalINR = out.reduce((s, st) => s + st.subtotalINR, 0);
  return { stages: out, totalINR, lowINR: round(totalINR * 0.92), highINR: round(totalINR * 1.12) };
}

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
