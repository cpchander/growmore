// ============================================================
// SMART HOME PRODUCT CATALOG
// Used by /smart-home-planner configurator tool
// ============================================================

export type ProductCategory =
  | "lighting"
  | "security"
  | "climate"
  | "curtains"
  | "theater"
  | "audio"
  | "voice"
  | "network"
  | "airpurifier"
  | "waterpurifier"
  | "evcharging"
  | "energy";

export type BrandKey =
  | "knx" | "crestron" | "control4" | "lutron" | "sonos" | "generic"
  | "dyson" | "tata" | "havells" | "schneider" | "philips" | "samsung"
  | "daikin" | "honeywell" | "aosmith" | "bluestar";

export type ProductTier = "standard" | "premium" | "luxury";

export type AutomationProduct = {
  id: string;
  name: string;
  brand: BrandKey;
  brandLabel: string;
  category: ProductCategory;
  priceINR: number;
  unit: string; // "per point", "per room", "per unit", "per zone", "flat"
  tier: ProductTier;
  features: string[];
  description: string;
  popular?: boolean;
};

export const CATEGORY_META: Record<
  ProductCategory,
  { label: string; icon: string; description: string }
> = {
  lighting: {
    label: "Smart Lighting",
    icon: "Lightbulb",
    description: "Switches, dimmers, scene controllers, LED strips",
  },
  security: {
    label: "Security & CCTV",
    icon: "Shield",
    description: "Cameras, smart locks, motion sensors, video doorbells",
  },
  climate: {
    label: "Climate Control",
    icon: "Thermometer",
    description: "AC controllers, thermostats, temperature sensors",
  },
  curtains: {
    label: "Motorized Curtains",
    icon: "PanelTop",
    description: "Motorized tracks, roller blinds, skylight openers",
  },
  theater: {
    label: "Home Theater",
    icon: "Tv",
    description: "Projectors, screens, AV receivers, seating",
  },
  audio: {
    label: "Multi-Room Audio",
    icon: "Music",
    description: "In-ceiling speakers, sound bars, streaming amplifiers",
  },
  voice: {
    label: "Voice & Control",
    icon: "Mic",
    description: "Touch panels, voice assistants, remote controls",
  },
  network: {
    label: "Network & Hubs",
    icon: "Wifi",
    description: "Automation processors, gateways, networking gear",
  },
  airpurifier: {
    label: "Air Purifiers",
    icon: "Wind",
    description: "HEPA purifiers, smart air quality monitors, whole-home filtration",
  },
  waterpurifier: {
    label: "Water Purifiers",
    icon: "Droplets",
    description: "RO+UV purifiers, smart water quality monitors, whole-house filtration",
  },
  evcharging: {
    label: "EV Charging",
    icon: "Zap",
    description: "Smart EV chargers, load balancers, solar-integrated charging",
  },
  energy: {
    label: "Energy Management",
    icon: "BatteryCharging",
    description: "Smart meters, solar inverters, battery storage, energy monitors",
  },
};

export const BRAND_META: Record<BrandKey, { label: string; origin: string; tier: ProductTier }> = {
  generic:   { label: "Smart (Wi-Fi)", origin: "Various",      tier: "standard" },
  lutron:    { label: "Lutron",        origin: "USA",          tier: "premium" },
  control4:  { label: "Control4",      origin: "USA",          tier: "premium" },
  knx:       { label: "KNX",           origin: "Europe",       tier: "premium" },
  sonos:     { label: "Sonos",         origin: "USA",          tier: "premium" },
  crestron:  { label: "Crestron",      origin: "USA",          tier: "luxury" },
  dyson:     { label: "Dyson",         origin: "UK",           tier: "luxury" },
  tata:      { label: "Tata",          origin: "India",        tier: "standard" },
  havells:   { label: "Havells",       origin: "India",        tier: "standard" },
  schneider: { label: "Schneider",     origin: "France",       tier: "premium" },
  philips:   { label: "Philips Hue",   origin: "Netherlands",  tier: "premium" },
  samsung:   { label: "Samsung",       origin: "South Korea",  tier: "premium" },
  daikin:    { label: "Daikin",        origin: "Japan",        tier: "premium" },
  honeywell: { label: "Honeywell",     origin: "USA",          tier: "premium" },
  aosmith:   { label: "A.O. Smith",    origin: "USA",          tier: "premium" },
  bluestar:  { label: "Blue Star",     origin: "India",        tier: "standard" },
};

// ────────────────────────────────────────────────────────────
// PRODUCT CATALOG — 60+ items across 8 categories × 5 brands
// ────────────────────────────────────────────────────────────

export const PRODUCTS: AutomationProduct[] = [
  // ═══════════════ LIGHTING ═══════════════
  // Generic / Standard
  { id: "light-gen-switch", name: "Wi-Fi Smart Switch", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "lighting", priceINR: 1800, unit: "per point", tier: "standard", popular: true, features: ["App control", "Scheduling", "Voice compatible"], description: "Basic Wi-Fi smart switch with app and voice control" },
  { id: "light-gen-dimmer", name: "Wi-Fi Smart Dimmer", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "lighting", priceINR: 2500, unit: "per point", tier: "standard", features: ["0-100% dimming", "Scheduling", "Scene support"], description: "Wi-Fi dimmer switch with smooth dimming" },
  { id: "light-gen-strip", name: "RGBW LED Strip (5m)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "lighting", priceINR: 3500, unit: "per unit", tier: "standard", features: ["16M colors", "Music sync", "App control"], description: "5-meter addressable RGB LED strip" },
  { id: "light-gen-scene", name: "4-Scene Touch Panel", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "lighting", priceINR: 4500, unit: "per unit", tier: "standard", features: ["4 scenes", "Capacitive touch", "LED backlit"], description: "Wall-mounted scene controller with 4 presets" },

  // Lutron
  { id: "light-lut-caseta", name: "Lutron Caseta Dimmer", brand: "lutron", brandLabel: "Lutron", category: "lighting", priceINR: 8500, unit: "per point", tier: "premium", popular: true, features: ["Clear Connect RF", "Pico remote", "250W LED"], description: "Reliable RF dimmer with Pico companion remote" },
  { id: "light-lut-ra3", name: "Lutron RA3 Dimmer", brand: "lutron", brandLabel: "Lutron", category: "lighting", priceINR: 16000, unit: "per point", tier: "premium", features: ["450W LED capacity", "Whole-home scenes", "Satin Colors"], description: "Premium whole-home RadioRA 3 dimmer" },
  { id: "light-lut-keypad", name: "Lutron seeTouch Keypad", brand: "lutron", brandLabel: "Lutron", category: "lighting", priceINR: 22000, unit: "per unit", tier: "premium", features: ["6-button keypad", "Engraved labels", "LED feedback"], description: "Designer keypad for scene control" },
  { id: "light-lut-strip", name: "Lutron Ketra LED Strip", brand: "lutron", brandLabel: "Lutron", category: "lighting", priceINR: 18000, unit: "per meter", tier: "luxury", features: ["Tunable white", "Natural spectrum", "Ketra technology"], description: "Natural-spectrum tunable LED with Ketra color" },

  // KNX
  { id: "light-knx-switch", name: "KNX Push-button 4-gang", brand: "knx", brandLabel: "KNX", category: "lighting", priceINR: 12000, unit: "per unit", tier: "premium", features: ["EIB/KNX bus", "Status LEDs", "Scene capable"], description: "4-gang KNX bus-coupled push-button switch" },
  { id: "light-knx-dimmer", name: "KNX Universal Dimmer", brand: "knx", brandLabel: "KNX", category: "lighting", priceINR: 14000, unit: "per channel", tier: "premium", features: ["500W per channel", "Leading/trailing edge", "KNX bus"], description: "Universal dimming actuator for KNX installations" },
  { id: "light-knx-dali", name: "KNX-DALI Gateway", brand: "knx", brandLabel: "KNX", category: "lighting", priceINR: 28000, unit: "per unit", tier: "premium", features: ["64 DALI devices", "Colour control", "Diagnostics"], description: "Bridge between KNX bus and DALI lighting" },

  // Crestron
  { id: "light-cre-clx", name: "Crestron CLX Dimmer", brand: "crestron", brandLabel: "Crestron", category: "lighting", priceINR: 32000, unit: "per point", tier: "luxury", features: ["infiNET EX wireless", "0.1% dimming", "Color tuning"], description: "Ultra-precise dimming with infiNET EX mesh" },
  { id: "light-cre-keypad", name: "Crestron Horizon Keypad", brand: "crestron", brandLabel: "Crestron", category: "lighting", priceINR: 45000, unit: "per unit", tier: "luxury", popular: true, features: ["Capacitive buttons", "Custom engraving", "RGB backlight"], description: "Designer keypad with fully customizable buttons" },
  { id: "light-cre-proc", name: "Crestron Lighting Processor", brand: "crestron", brandLabel: "Crestron", category: "lighting", priceINR: 85000, unit: "flat", tier: "luxury", features: ["Whole-home control", "Astronomic clock", "Occupancy logic"], description: "Central processor for all Crestron lighting" },

  // Control4
  { id: "light-c4-switch", name: "Control4 Adaptive Switch", brand: "control4", brandLabel: "Control4", category: "lighting", priceINR: 9500, unit: "per point", tier: "premium", features: ["ZigBee mesh", "Configurable LED", "Multi-tap scenes"], description: "Adaptive smart switch with configurable bar LED" },
  { id: "light-c4-dimmer", name: "Control4 Adaptive Dimmer", brand: "control4", brandLabel: "Control4", category: "lighting", priceINR: 12000, unit: "per point", tier: "premium", popular: true, features: ["ZigBee Pro", "600W LED", "Custom colors"], description: "Premium dimmer with programmable color LED bar" },
  { id: "light-c4-keypad", name: "Control4 Configurable Keypad", brand: "control4", brandLabel: "Control4", category: "lighting", priceINR: 15000, unit: "per unit", tier: "premium", features: ["6-button", "Custom labels", "Backlit"], description: "Wall keypad for scenes and device control" },

  // ═══════════════ SECURITY ═══════════════
  { id: "sec-gen-cam", name: "Wi-Fi PTZ Camera (4MP)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "security", priceINR: 4500, unit: "per unit", tier: "standard", popular: true, features: ["360° pan-tilt", "Night vision", "Two-way audio"], description: "Indoor/outdoor PTZ camera with cloud storage" },
  { id: "sec-gen-lock", name: "Smart Door Lock (Fingerprint)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "security", priceINR: 12000, unit: "per unit", tier: "standard", features: ["Fingerprint", "PIN code", "App unlock"], description: "Multi-mode smart lock with fingerprint scanner" },
  { id: "sec-gen-motion", name: "PIR Motion Sensor", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "security", priceINR: 1500, unit: "per unit", tier: "standard", features: ["120° detection", "Pet immune", "Battery powered"], description: "Wireless motion sensor with pet immunity" },
  { id: "sec-gen-doorbell", name: "Video Doorbell (2K)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "security", priceINR: 8000, unit: "per unit", tier: "standard", features: ["2K video", "Two-way talk", "Motion zones"], description: "Smart video doorbell with person detection" },

  { id: "sec-c4-cam", name: "Control4 Chime Camera", brand: "control4", brandLabel: "Control4", category: "security", priceINR: 28000, unit: "per unit", tier: "premium", features: ["Integration with C4 OS", "Person detection", "Analytics"], description: "Doorbell camera with native Control4 integration" },
  { id: "sec-c4-lock", name: "Control4 Smart Lock (Yale)", brand: "control4", brandLabel: "Control4", category: "security", priceINR: 35000, unit: "per unit", tier: "premium", features: ["Yale hardware", "Z-Wave", "Auto-lock", "C4 scenes"], description: "Yale smart lock with Control4 scene integration" },

  { id: "sec-cre-cam", name: "Crestron DM NVX Camera", brand: "crestron", brandLabel: "Crestron", category: "security", priceINR: 55000, unit: "per unit", tier: "luxury", features: ["4K streaming", "PoE", "ONVIF", "DM NVX encode"], description: "Enterprise-grade camera with Crestron DM NVX" },
  { id: "sec-cre-panel", name: "Crestron Security Panel", brand: "crestron", brandLabel: "Crestron", category: "security", priceINR: 120000, unit: "flat", tier: "luxury", features: ["32 zones", "Cellular backup", "Crestron Home UI"], description: "Integrated alarm panel for Crestron Home" },

  { id: "sec-knx-motion", name: "KNX Presence Detector", brand: "knx", brandLabel: "KNX", category: "security", priceINR: 16000, unit: "per unit", tier: "premium", features: ["360° ceiling mount", "Lux sensing", "HVAC trigger"], description: "Ceiling-mounted presence/absence detector" },
  { id: "sec-knx-sensor", name: "KNX Door/Window Sensor", brand: "knx", brandLabel: "KNX", category: "security", priceINR: 6500, unit: "per unit", tier: "premium", features: ["Magnetic reed", "Bus-powered", "Alarm integration"], description: "Flush-mount door/window contact sensor" },

  // ═══════════════ CLIMATE ═══════════════
  { id: "clim-gen-ir", name: "Wi-Fi IR AC Controller", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "climate", priceINR: 2800, unit: "per unit", tier: "standard", popular: true, features: ["Works with any AC", "IR blaster", "Scheduling"], description: "Universal IR blaster for AC automation" },
  { id: "clim-gen-thermo", name: "Smart Thermostat", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "climate", priceINR: 6000, unit: "per unit", tier: "standard", features: ["Learning schedule", "Humidity sensor", "Geofencing"], description: "Learning thermostat with energy saving" },
  { id: "clim-gen-sensor", name: "Temperature/Humidity Sensor", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "climate", priceINR: 1200, unit: "per unit", tier: "standard", features: ["±0.3°C accuracy", "Real-time", "Battery 1yr"], description: "Compact wireless temp & humidity sensor" },

  { id: "clim-knx-thermo", name: "KNX Room Thermostat", brand: "knx", brandLabel: "KNX", category: "climate", priceINR: 18000, unit: "per zone", tier: "premium", features: ["Bus-powered", "PI control", "Fan-coil support"], description: "KNX-native room thermostat with PI regulation" },
  { id: "clim-knx-valve", name: "KNX Valve Actuator (6ch)", brand: "knx", brandLabel: "KNX", category: "climate", priceINR: 22000, unit: "per unit", tier: "premium", features: ["6 valve outputs", "PWM control", "DIN rail"], description: "6-channel valve actuator for zone heating/cooling" },

  { id: "clim-c4-thermo", name: "Control4 Wireless Thermostat", brand: "control4", brandLabel: "Control4", category: "climate", priceINR: 24000, unit: "per zone", tier: "premium", features: ["ZigBee", "Multi-stage HVAC", "C4 scheduling"], description: "Control4 thermostat with multi-stage HVAC" },

  { id: "clim-cre-thermo", name: "Crestron Horizon Thermostat", brand: "crestron", brandLabel: "Crestron", category: "climate", priceINR: 48000, unit: "per zone", tier: "luxury", features: ["Touch display", "Humidity control", "BACnet/IP"], description: "Premium touch thermostat with BACnet integration" },

  // ═══════════════ CURTAINS ═══════════════
  { id: "curt-gen-motor", name: "Wi-Fi Curtain Motor", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "curtains", priceINR: 8000, unit: "per window", tier: "standard", popular: true, features: ["Quiet motor <35dB", "App control", "Works with track"], description: "Silent Wi-Fi motor for existing curtain tracks" },
  { id: "curt-gen-roller", name: "Smart Roller Blind Motor", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "curtains", priceINR: 6000, unit: "per window", tier: "standard", features: ["Rechargeable", "Solar panel option", "Zigbee"], description: "Battery-powered roller blind motor" },

  { id: "curt-lut-sivoia", name: "Lutron Sivoia QS Roller", brand: "lutron", brandLabel: "Lutron", category: "curtains", priceINR: 45000, unit: "per window", tier: "premium", popular: true, features: ["Ultra-quiet", "Precision positioning", "Whole-home sync"], description: "Lutron Sivoia QS with precision motor" },
  { id: "curt-lut-palladiom", name: "Lutron Palladiom Track", brand: "lutron", brandLabel: "Lutron", category: "curtains", priceINR: 65000, unit: "per window", tier: "luxury", features: ["Wire-free", "Designer fabric", "Whisper Drive"], description: "Ultra-premium motorized drapery track" },

  { id: "curt-knx-motor", name: "KNX Shutter Actuator (4ch)", brand: "knx", brandLabel: "KNX", category: "curtains", priceINR: 18000, unit: "per unit", tier: "premium", features: ["4 channels", "Position feedback", "Wind sensor input"], description: "4-channel shutter/blind actuator for KNX" },

  { id: "curt-cre-shade", name: "Crestron QMT Shade Motor", brand: "crestron", brandLabel: "Crestron", category: "curtains", priceINR: 75000, unit: "per window", tier: "luxury", features: ["Quiet motor tech", "infiNET EX", "Custom fabric"], description: "Crestron QMT with whisper-quiet motor" },

  // ═══════════════ HOME THEATER ═══════════════
  { id: "thea-gen-proj", name: "4K Laser Projector", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "theater", priceINR: 85000, unit: "per unit", tier: "standard", features: ["4K resolution", "3000 lumens", "Android TV"], description: "Budget 4K laser projector with smart OS" },
  { id: "thea-gen-screen", name: "Motorized Screen (120\")", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "theater", priceINR: 25000, unit: "per unit", tier: "standard", features: ["120-inch", "16:9 ratio", "Matte white"], description: "Motorized drop-down projection screen" },
  { id: "thea-gen-avr", name: "7.1 AV Receiver", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "theater", priceINR: 45000, unit: "per unit", tier: "standard", features: ["7.1 Dolby Atmos", "4K passthrough", "eARC"], description: "Mid-range AV receiver with Atmos decoding" },

  { id: "thea-c4-package", name: "Control4 Theater Package", brand: "control4", brandLabel: "Control4", category: "theater", priceINR: 350000, unit: "flat", tier: "premium", popular: true, features: ["Triad speakers", "C4 OS integration", "One-button scenes"], description: "Complete theater with Control4 automation" },

  { id: "thea-cre-package", name: "Crestron Theater System", brand: "crestron", brandLabel: "Crestron", category: "theater", priceINR: 800000, unit: "flat", tier: "luxury", features: ["DigitalMedia 4K", "Surround processing", "Custom UI"], description: "Reference-grade theater with DM switching" },

  // ═══════════════ AUDIO ═══════════════
  { id: "aud-gen-ceiling", name: "In-Ceiling Speaker (pair)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "audio", priceINR: 5000, unit: "per pair", tier: "standard", features: ["6.5\" driver", "Paintable grille", "70W RMS"], description: "Flush-mount in-ceiling speaker pair" },
  { id: "aud-gen-amp", name: "2-Zone Streaming Amplifier", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "audio", priceINR: 12000, unit: "per unit", tier: "standard", features: ["2 zones", "Wi-Fi/BT", "Airplay"], description: "2-zone streaming amplifier with Airplay" },

  { id: "aud-sonos-era", name: "Sonos Era 300", brand: "sonos", brandLabel: "Sonos", category: "audio", priceINR: 42000, unit: "per unit", tier: "premium", popular: true, features: ["Spatial Audio", "Dolby Atmos", "Wi-Fi 6"], description: "Flagship spatial audio speaker" },
  { id: "aud-sonos-arc", name: "Sonos Arc Soundbar", brand: "sonos", brandLabel: "Sonos", category: "audio", priceINR: 85000, unit: "per unit", tier: "premium", features: ["Dolby Atmos", "11 drivers", "TruePlay tuning"], description: "Premium Atmos soundbar for TV and music" },
  { id: "aud-sonos-amp", name: "Sonos Amp", brand: "sonos", brandLabel: "Sonos", category: "audio", priceINR: 62000, unit: "per zone", tier: "premium", features: ["125W/ch", "HDMI ARC", "Drives any speakers"], description: "Streaming amplifier for in-ceiling speakers" },
  { id: "aud-sonos-sub", name: "Sonos Sub (Gen 3)", brand: "sonos", brandLabel: "Sonos", category: "audio", priceINR: 72000, unit: "per unit", tier: "premium", features: ["Wireless sub", "Dual drivers", "TruePlay"], description: "Wireless subwoofer for deep bass" },

  { id: "aud-cre-ceiling", name: "Crestron Saros IC6T", brand: "crestron", brandLabel: "Crestron", category: "audio", priceINR: 28000, unit: "per pair", tier: "luxury", features: ["6.5\" 2-way", "70V/100V option", "Magnetic grille"], description: "Professional in-ceiling speaker pair" },
  { id: "aud-cre-amp", name: "Crestron AMP-3210T", brand: "crestron", brandLabel: "Crestron", category: "audio", priceINR: 95000, unit: "per unit", tier: "luxury", features: ["3×210W", "PoE powered", "Avia DSP"], description: "3-channel PoE amplifier with DSP" },

  // ═══════════════ VOICE & CONTROL ═══════════════
  { id: "voice-gen-alexa", name: "Amazon Echo (4th Gen)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "voice", priceINR: 10000, unit: "per unit", tier: "standard", popular: true, features: ["Alexa voice", "Zigbee hub", "Premium audio"], description: "Smart speaker with Alexa and built-in hub" },
  { id: "voice-gen-google", name: "Google Nest Hub Max", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "voice", priceINR: 22000, unit: "per unit", tier: "standard", features: ["10\" display", "Google Assistant", "Camera"], description: "Smart display with Google Assistant" },

  { id: "voice-c4-touch", name: "Control4 T4 Touch Screen (8\")", brand: "control4", brandLabel: "Control4", category: "voice", priceINR: 85000, unit: "per unit", tier: "premium", popular: true, features: ["8\" in-wall", "Full system UI", "Intercom"], description: "In-wall touch screen for whole-home control" },
  { id: "voice-c4-remote", name: "Control4 Halo Remote", brand: "control4", brandLabel: "Control4", category: "voice", priceINR: 32000, unit: "per unit", tier: "premium", features: ["Voice + buttons", "Custom layout", "Rechargeable"], description: "Universal handheld remote with voice" },

  { id: "voice-cre-panel", name: "Crestron TSW-1070 (10\")", brand: "crestron", brandLabel: "Crestron", category: "voice", priceINR: 180000, unit: "per unit", tier: "luxury", features: ["10.1\" capacitive", "PoE", "Custom UI", "Camera"], description: "Premium 10\" in-wall touch panel" },
  { id: "voice-cre-remote", name: "Crestron HR-310 Remote", brand: "crestron", brandLabel: "Crestron", category: "voice", priceINR: 65000, unit: "per unit", tier: "luxury", features: ["3\" touchscreen", "Hard buttons", "RF+IR"], description: "Handheld touch remote with RF and IR" },

  // ═══════════════ NETWORK & HUBS ═══════════════
  { id: "net-gen-hub", name: "Zigbee/Z-Wave Hub", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "network", priceINR: 5000, unit: "flat", tier: "standard", features: ["Zigbee 3.0", "Z-Wave Plus", "Local processing"], description: "Universal smart home hub" },
  { id: "net-gen-mesh", name: "Mesh Wi-Fi System (3-pack)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "network", priceINR: 12000, unit: "flat", tier: "standard", features: ["Wi-Fi 6E", "Covers 5000sqft", "160MHz channels"], description: "Whole-home mesh Wi-Fi for IoT devices" },

  { id: "net-c4-ea5", name: "Control4 EA-5 Controller", brand: "control4", brandLabel: "Control4", category: "network", priceINR: 150000, unit: "flat", tier: "premium", popular: true, features: ["Whole-home brain", "Up to 400 devices", "ZigBee Pro built-in"], description: "Enterprise controller for large homes" },
  { id: "net-c4-ea1", name: "Control4 EA-1 Controller", brand: "control4", brandLabel: "Control4", category: "network", priceINR: 45000, unit: "flat", tier: "premium", features: ["Single-room brain", "ZigBee Pro", "C4 OS"], description: "Entry-level automation controller" },

  { id: "net-knx-ip", name: "KNX IP Interface", brand: "knx", brandLabel: "KNX", category: "network", priceINR: 22000, unit: "flat", tier: "premium", features: ["KNX to IP bridge", "5 connections", "DIN rail"], description: "Connect KNX bus to IP network for remote control" },
  { id: "net-knx-power", name: "KNX Power Supply (640mA)", brand: "knx", brandLabel: "KNX", category: "network", priceINR: 14000, unit: "flat", tier: "premium", features: ["640mA output", "Bus choke", "DIN rail"], description: "Power supply for KNX bus system" },

  { id: "net-cre-cp4n", name: "Crestron CP4-N Processor", brand: "crestron", brandLabel: "Crestron", category: "network", priceINR: 350000, unit: "flat", tier: "luxury", popular: true, features: ["4-Series", "BACnet/IP", "Cresnet", "infiNET EX"], description: "Flagship 4-Series control processor" },
  { id: "net-cre-dm", name: "Crestron DM-NVX Network", brand: "crestron", brandLabel: "Crestron", category: "network", priceINR: 180000, unit: "flat", tier: "luxury", features: ["4K60 over IP", "Zero latency", "AV routing"], description: "DM NVX AV-over-IP distribution" },

  // ═══════════════ ADDITIONAL LIGHTING — Philips Hue, Havells, Schneider ═══════════════
  { id: "light-phi-starter", name: "Philips Hue Starter Kit (3 Bulbs)", brand: "philips", brandLabel: "Philips Hue", category: "lighting", priceINR: 12000, unit: "per kit", tier: "premium", popular: true, features: ["16M colors", "Zigbee", "Bridge included", "Voice ready"], description: "Starter kit with 3 color bulbs and Hue Bridge" },
  { id: "light-phi-lightstrip", name: "Philips Hue Lightstrip Plus (2m)", brand: "philips", brandLabel: "Philips Hue", category: "lighting", priceINR: 7500, unit: "per unit", tier: "premium", features: ["1600 lumens", "Gradient capable", "Cut & extend"], description: "Smart RGBW LED strip with gradient effects" },
  { id: "light-phi-dimswitch", name: "Philips Hue Dimmer Switch", brand: "philips", brandLabel: "Philips Hue", category: "lighting", priceINR: 2200, unit: "per unit", tier: "premium", features: ["Magnetic mount", "4 buttons", "Battery 3yr"], description: "Wireless dimmer switch for Hue lights" },
  { id: "light-phi-go", name: "Philips Hue Go (Portable)", brand: "philips", brandLabel: "Philips Hue", category: "lighting", priceINR: 8500, unit: "per unit", tier: "premium", features: ["Portable", "6hr battery", "USB-C", "BT+Zigbee"], description: "Portable smart light with 6-hour battery" },

  { id: "light-hav-switch", name: "Havells Smart Switch (4M)", brand: "havells", brandLabel: "Havells", category: "lighting", priceINR: 3500, unit: "per unit", tier: "standard", features: ["Wi-Fi", "Capacitive touch", "Havells app"], description: "4-module Wi-Fi smart touch switch" },
  { id: "light-hav-dimmer", name: "Havells Smart Dimmer", brand: "havells", brandLabel: "Havells", category: "lighting", priceINR: 4200, unit: "per point", tier: "standard", features: ["Touch dimmer", "Fan regulator", "Scheduling"], description: "Wi-Fi touch dimmer with fan speed control" },
  { id: "light-hav-panel", name: "Havells Smart LED Panel (15W)", brand: "havells", brandLabel: "Havells", category: "lighting", priceINR: 2800, unit: "per unit", tier: "standard", features: ["CCT tunable", "Wi-Fi", "3000K-6500K"], description: "Smart recessed panel with tunable white" },

  { id: "light-sch-unica", name: "Schneider Unica Smart Dimmer", brand: "schneider", brandLabel: "Schneider", category: "lighting", priceINR: 9500, unit: "per point", tier: "premium", features: ["Zigbee 3.0", "Wiser compatible", "Glass finish"], description: "Premium glass-face smart dimmer" },
  { id: "light-sch-avatar", name: "Schneider AvatarOn Smart Switch", brand: "schneider", brandLabel: "Schneider", category: "lighting", priceINR: 5500, unit: "per unit", tier: "premium", features: ["Wi-Fi+BT", "Touch", "Energy tracking"], description: "Modern smart switch with energy monitoring" },

  // ═══════════════ ADDITIONAL SECURITY — Samsung, Havells ═══════════════
  { id: "sec-sam-lock", name: "Samsung Smart Lock SHP-DP609", brand: "samsung", brandLabel: "Samsung", category: "security", priceINR: 32000, unit: "per unit", tier: "premium", popular: true, features: ["Push-pull design", "Fingerprint", "Wi-Fi", "Auto-lock"], description: "Push-pull digital door lock with Wi-Fi" },
  { id: "sec-sam-cam", name: "Samsung SmartThings Cam", brand: "samsung", brandLabel: "Samsung", category: "security", priceINR: 6500, unit: "per unit", tier: "premium", features: ["1080p", "Person detect", "2-way audio", "Cloud/local"], description: "Smart camera with SmartThings integration" },

  { id: "sec-hon-panel", name: "Honeywell Home Alarm Panel", brand: "honeywell", brandLabel: "Honeywell", category: "security", priceINR: 45000, unit: "flat", tier: "premium", features: ["32 zones", "GSM/IP", "App control", "Battery backup"], description: "Professional intrusion alarm panel" },
  { id: "sec-hon-smoke", name: "Honeywell Smart Smoke Detector", brand: "honeywell", brandLabel: "Honeywell", category: "security", priceINR: 5500, unit: "per unit", tier: "premium", features: ["Photoelectric", "App alerts", "10yr battery"], description: "Wi-Fi smoke detector with app alerts" },

  // ═══════════════ ADDITIONAL CLIMATE — Daikin, Tata, Honeywell, Blue Star ═══════════════
  { id: "clim-dai-wifi", name: "Daikin Wi-Fi Controller", brand: "daikin", brandLabel: "Daikin", category: "climate", priceINR: 8500, unit: "per unit", tier: "premium", features: ["Works with Daikin AC", "Scheduling", "Energy stats"], description: "Official Daikin Wi-Fi adapter for split ACs" },
  { id: "clim-dai-vrv", name: "Daikin VRV Centralized Controller", brand: "daikin", brandLabel: "Daikin", category: "climate", priceINR: 65000, unit: "per unit", tier: "premium", features: ["Up to 128 units", "BACnet/Modbus", "Touch panel"], description: "Centralized VRV control for large homes/villas" },

  { id: "clim-hon-thermo", name: "Honeywell Lyric T6 Thermostat", brand: "honeywell", brandLabel: "Honeywell", category: "climate", priceINR: 14000, unit: "per zone", tier: "premium", popular: true, features: ["Geofencing", "7-day schedule", "Alexa/Google"], description: "Smart thermostat with geofencing automation" },
  { id: "clim-hon-sensor", name: "Honeywell Air Quality Sensor", brand: "honeywell", brandLabel: "Honeywell", category: "climate", priceINR: 8000, unit: "per unit", tier: "premium", features: ["PM2.5", "CO2", "VOC", "Humidity", "App"], description: "Multi-parameter indoor air quality monitor" },

  { id: "clim-sch-wiser", name: "Schneider Wiser Smart Thermostat", brand: "schneider", brandLabel: "Schneider", category: "climate", priceINR: 12000, unit: "per zone", tier: "premium", features: ["Wiser ecosystem", "Multi-zone", "Energy insights"], description: "Connected thermostat with energy optimization" },

  { id: "clim-bs-smartac", name: "Blue Star Smart AC Controller", brand: "bluestar", brandLabel: "Blue Star", category: "climate", priceINR: 3500, unit: "per unit", tier: "standard", features: ["IR blaster", "All AC brands", "Wi-Fi"], description: "Universal smart AC controller for Blue Star and other ACs" },

  // ═══════════════ AIR PURIFIERS ═══════════════
  { id: "air-dys-bigquiet", name: "Dyson Purifier Big+Quiet", brand: "dyson", brandLabel: "Dyson", category: "airpurifier", priceINR: 65000, unit: "per unit", tier: "luxury", popular: true, features: ["HEPA H13", "Covers 1100sqft", "App control", "Auto mode"], description: "Formaldehyde-destroying purifier for large rooms" },
  { id: "air-dys-hotcool", name: "Dyson Purifier Hot+Cool (HP07)", brand: "dyson", brandLabel: "Dyson", category: "airpurifier", priceINR: 55000, unit: "per unit", tier: "luxury", features: ["Heater + purifier", "HEPA H13", "350° oscillation"], description: "3-in-1 purifier, heater, and fan with app control" },
  { id: "air-dys-humidify", name: "Dyson Purifier Humidify+Cool", brand: "dyson", brandLabel: "Dyson", category: "airpurifier", priceINR: 72000, unit: "per unit", tier: "luxury", features: ["Humidify + purify", "UV-C sterilization", "App + voice"], description: "Purifier with hygienic humidification" },

  { id: "air-sam-ax90", name: "Samsung AX90 Air Purifier", brand: "samsung", brandLabel: "Samsung", category: "airpurifier", priceINR: 42000, unit: "per unit", tier: "premium", features: ["PM2.5 sensor", "3-stage filter", "SmartThings app"], description: "Large-room purifier with SmartThings integration" },
  { id: "air-sam-ax46", name: "Samsung AX46 Air Purifier", brand: "samsung", brandLabel: "Samsung", category: "airpurifier", priceINR: 28000, unit: "per unit", tier: "premium", features: ["HEPA filter", "Deodorizing filter", "Auto mode"], description: "Mid-range smart purifier with Wi-Fi" },

  { id: "air-hon-move", name: "Honeywell Air Touch V4", brand: "honeywell", brandLabel: "Honeywell", category: "airpurifier", priceINR: 18000, unit: "per unit", tier: "premium", popular: true, features: ["HEPA + activated carbon", "PM2.5 display", "Wi-Fi"], description: "HEPA purifier with real-time AQI display" },
  { id: "air-hon-i9", name: "Honeywell Air Touch i11", brand: "honeywell", brandLabel: "Honeywell", category: "airpurifier", priceINR: 25000, unit: "per unit", tier: "premium", features: ["H13 HEPA", "Anti-bacterial", "App control", "1230sqft"], description: "Large-room HEPA purifier with app" },

  { id: "air-hav-freshia", name: "Havells Freshia AP-58", brand: "havells", brandLabel: "Havells", category: "airpurifier", priceINR: 14000, unit: "per unit", tier: "standard", features: ["HEPA + UV", "Ionizer", "Filter life indicator"], description: "HEPA purifier with UV sterilization" },

  { id: "air-phi-ac3858", name: "Philips Air Purifier AC3858", brand: "philips", brandLabel: "Philips Hue", category: "airpurifier", priceINR: 35000, unit: "per unit", tier: "premium", features: ["VitaShield", "NanoProtect HEPA", "App connect", "698sqft"], description: "Smart HEPA purifier with real-time AQI tracking" },

  { id: "air-dak-mc55", name: "Daikin MC55 Air Purifier", brand: "daikin", brandLabel: "Daikin", category: "airpurifier", priceINR: 32000, unit: "per unit", tier: "premium", features: ["Streamer tech", "Electrostatic HEPA", "Quiet 19dB"], description: "Ultra-quiet purifier with Daikin Streamer technology" },

  { id: "air-bs-ap490", name: "Blue Star AP490 Air Purifier", brand: "bluestar", brandLabel: "Blue Star", category: "airpurifier", priceINR: 12000, unit: "per unit", tier: "standard", features: ["HEPA filter", "Activated carbon", "3-speed"], description: "Affordable HEPA air purifier for bedrooms" },

  // ═══════════════ WATER PURIFIERS ═══════════════
  { id: "wat-tata-copper", name: "Tata Swach Copper+", brand: "tata", brandLabel: "Tata", category: "waterpurifier", priceINR: 8500, unit: "per unit", tier: "standard", features: ["RO+UV+Copper", "8L tank", "Smart indicators"], description: "RO+UV purifier with copper infusion" },
  { id: "wat-tata-ultima", name: "Tata Swach Ultima RO+UV+UF", brand: "tata", brandLabel: "Tata", category: "waterpurifier", priceINR: 14000, unit: "per unit", tier: "standard", features: ["RO+UV+UF", "Smart mineralizer", "Auto flush"], description: "Advanced 4-stage water purifier" },

  { id: "wat-aos-z9", name: "A.O. Smith Z9 Green RO", brand: "aosmith", brandLabel: "A.O. Smith", category: "waterpurifier", priceINR: 38000, unit: "per unit", tier: "premium", popular: true, features: ["8-stage purification", "Hot water on tap", "IoT enabled"], description: "Premium RO with hot water dispenser and app" },
  { id: "wat-aos-pro", name: "A.O. Smith ProPlanet P6", brand: "aosmith", brandLabel: "A.O. Smith", category: "waterpurifier", priceINR: 22000, unit: "per unit", tier: "premium", features: ["RO+SCMT", "MIN-TECH", "8L tank", "Smart filter alert"], description: "RO purifier with mineral balance technology" },

  { id: "wat-hav-max", name: "Havells Max Alkaline RO+UV", brand: "havells", brandLabel: "Havells", category: "waterpurifier", priceINR: 18000, unit: "per unit", tier: "standard", features: ["7-stage", "Alkaline boost", "UV disinfection"], description: "Alkaline water purifier with 7-stage filtration" },
  { id: "wat-hav-digi", name: "Havells Digitouch RO+UV+UF", brand: "havells", brandLabel: "Havells", category: "waterpurifier", priceINR: 16000, unit: "per unit", tier: "standard", features: ["Touch panel", "iProtect monitoring", "Auto shut-off"], description: "Smart touch panel water purifier with iProtect" },

  { id: "wat-bs-stella", name: "Blue Star Stella RO+UV+UF", brand: "bluestar", brandLabel: "Blue Star", category: "waterpurifier", priceINR: 15000, unit: "per unit", tier: "standard", features: ["Aqua Taste Booster", "6-stage", "8L storage"], description: "RO purifier with Aqua Taste Booster" },

  { id: "wat-dys-filter", name: "Dyson WashG1 Water System", brand: "dyson", brandLabel: "Dyson", category: "waterpurifier", priceINR: 48000, unit: "per unit", tier: "luxury", features: ["No chemicals", "Electrochemical", "Connected"], description: "Chemical-free water purification system" },

  { id: "wat-hon-whole", name: "Honeywell Whole House Filter", brand: "honeywell", brandLabel: "Honeywell", category: "waterpurifier", priceINR: 25000, unit: "flat", tier: "premium", features: ["Sediment+carbon", "Whole house", "10\" cartridge"], description: "Whole-house water filtration system" },

  // ═══════════════ EV CHARGING ═══════════════
  { id: "ev-tata-home", name: "Tata EZ Charge (7.4kW)", brand: "tata", brandLabel: "Tata", category: "evcharging", priceINR: 45000, unit: "per unit", tier: "standard", popular: true, features: ["7.4kW AC", "Type 2 connector", "App scheduling"], description: "Home AC charger for all EVs with scheduling" },
  { id: "ev-tata-fast", name: "Tata Power Fast Charger (22kW)", brand: "tata", brandLabel: "Tata", category: "evcharging", priceINR: 150000, unit: "per unit", tier: "premium", features: ["22kW 3-phase", "RFID", "Load balance", "OCPP"], description: "3-phase fast charger for homes and small offices" },

  { id: "ev-sch-evlink", name: "Schneider EVlink Home (7.4kW)", brand: "schneider", brandLabel: "Schneider", category: "evcharging", priceINR: 55000, unit: "per unit", tier: "premium", features: ["7.4kW", "Type 2", "RFID", "Energy meter"], description: "Smart home EV charger with energy monitoring" },
  { id: "ev-sch-evlink22", name: "Schneider EVlink Pro (22kW)", brand: "schneider", brandLabel: "Schneider", category: "evcharging", priceINR: 180000, unit: "per unit", tier: "premium", features: ["22kW 3-phase", "Load management", "OCPP 1.6J"], description: "Commercial-grade home charger with load management" },

  { id: "ev-hav-charger", name: "Havells EVSE Home Charger (3.3kW)", brand: "havells", brandLabel: "Havells", category: "evcharging", priceINR: 28000, unit: "per unit", tier: "standard", features: ["3.3kW AC", "Type 2", "Plug & play"], description: "Compact home EV charger for daily commuters" },

  { id: "ev-gen-smart", name: "Universal Smart EV Charger (7kW)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "evcharging", priceINR: 35000, unit: "per unit", tier: "standard", features: ["7kW", "App control", "Scheduling", "Solar compatible"], description: "Wi-Fi smart EV charger with solar priority mode" },

  // ═══════════════ ENERGY MANAGEMENT ═══════════════
  { id: "ene-sch-monitor", name: "Schneider Wiser Energy Monitor", brand: "schneider", brandLabel: "Schneider", category: "energy", priceINR: 15000, unit: "per unit", tier: "premium", popular: true, features: ["Real-time tracking", "Circuit-level", "App insights"], description: "Whole-home energy monitor with circuit-level tracking" },
  { id: "ene-sch-gateway", name: "Schneider Wiser Hub + CT Clamps", brand: "schneider", brandLabel: "Schneider", category: "energy", priceINR: 22000, unit: "flat", tier: "premium", features: ["16 CT inputs", "Solar monitoring", "Cloud dashboard"], description: "Energy gateway with solar production monitoring" },

  { id: "ene-hav-meter", name: "Havells Smart Meter (Wi-Fi)", brand: "havells", brandLabel: "Havells", category: "energy", priceINR: 6000, unit: "per unit", tier: "standard", features: ["kWh tracking", "App alerts", "Bill estimation"], description: "Smart energy meter with monthly bill estimation" },

  { id: "ene-gen-solar", name: "Smart Solar Inverter (5kW)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "energy", priceINR: 95000, unit: "per unit", tier: "standard", features: ["5kW hybrid", "Battery ready", "App monitoring"], description: "Hybrid solar inverter with battery support and app" },
  { id: "ene-gen-battery", name: "Home Battery Storage (5kWh)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "energy", priceINR: 175000, unit: "per unit", tier: "standard", features: ["5kWh LFP", "10yr warranty", "Solar compatible"], description: "Lithium iron phosphate home battery system" },
  { id: "ene-gen-monitor", name: "Wi-Fi Energy Monitor (Clamp)", brand: "generic", brandLabel: "Smart (Wi-Fi)", category: "energy", priceINR: 3500, unit: "per unit", tier: "standard", features: ["CT clamp", "Real-time", "Cost tracking"], description: "Affordable clamp-on energy monitor with app" },

  { id: "ene-tata-solar", name: "Tata Power Solar Inverter (3kW)", brand: "tata", brandLabel: "Tata", category: "energy", priceINR: 65000, unit: "per unit", tier: "standard", features: ["3kW on-grid", "App monitoring", "Net metering"], description: "On-grid solar inverter with Tata Power app" },

  { id: "ene-hon-ups", name: "Honeywell Smart UPS (3kVA)", brand: "honeywell", brandLabel: "Honeywell", category: "energy", priceINR: 28000, unit: "per unit", tier: "premium", features: ["3kVA", "Li-ion", "App monitoring", "Auto changeover"], description: "Smart UPS with lithium battery and app control" },

  // ═══════════════ ADDITIONAL CLIMATE — Samsung, Dyson ═══════════════
  { id: "clim-sam-wind", name: "Samsung WindFree Smart AC (1.5T)", brand: "samsung", brandLabel: "Samsung", category: "climate", priceINR: 55000, unit: "per unit", tier: "premium", features: ["WindFree cooling", "AI auto", "SmartThings", "Inverter"], description: "Smart inverter AC with WindFree cooling technology" },

  { id: "clim-dys-purify", name: "Dyson Pure Cool Tower (TP07)", brand: "dyson", brandLabel: "Dyson", category: "climate", priceINR: 45000, unit: "per unit", tier: "luxury", features: ["Purifier + fan", "HEPA H13", "Oscillation", "App control"], description: "Tower fan with HEPA purification and app" },

  // ═══════════════ ADDITIONAL AUDIO — Samsung, Havells ═══════════════
  { id: "aud-sam-soundbar", name: "Samsung HW-Q990D Soundbar", brand: "samsung", brandLabel: "Samsung", category: "audio", priceINR: 95000, unit: "per unit", tier: "premium", features: ["11.1.4 Atmos", "Wireless rear", "Q-Symphony"], description: "Flagship Dolby Atmos soundbar with wireless rears" },
  { id: "aud-sam-frame", name: "Samsung Music Frame Speaker", brand: "samsung", brandLabel: "Samsung", category: "audio", priceINR: 35000, unit: "per unit", tier: "premium", features: ["Wall-mountable", "Dolby Atmos", "SmartThings"], description: "Decorative wall speaker with Dolby Atmos" },
];

// ────────────────────────────────────────────────────────────
// HELPERS
// ────────────────────────────────────────────────────────────

export function getProductsByCategory(cat: ProductCategory): AutomationProduct[] {
  return PRODUCTS.filter((p) => p.category === cat);
}

export function getProductsByBrand(brand: BrandKey): AutomationProduct[] {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function getPopularProducts(): AutomationProduct[] {
  return PRODUCTS.filter((p) => p.popular);
}

export function formatPriceINR(n: number): string {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} Lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

// Get comparable products: same category, different brands
export function getComparableProducts(product: AutomationProduct): AutomationProduct[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.brand !== product.brand && p.id !== product.id
  );
}
