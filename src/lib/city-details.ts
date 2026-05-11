// City-specific unique content — replaces templated paragraphs on /cities/[slug].
// Each city should have rich local content: climate, project examples, locality
// notes, and city-specific FAQs. Rolled out 3 cities per weekly content cycle.

export type CityDetail = {
  slug: string;
  // Local intro override — replaces the generic paragraph
  intro: string;
  // Local market specifics (climate, building stock, dominant property types)
  marketNotes: string[];
  // Anonymized project references
  projectExamples: { area: string; type: string; budget: string; scope: string }[];
  // City-specific extra FAQs (appended to the standard set)
  extraFaqs: { question: string; answer: string }[];
  // Locality-specific blog cross-references (in addition to standard ones)
  recommendedReading: { title: string; href: string; description: string }[];
};

export const CITY_DETAILS: Record<string, CityDetail> = {
  mumbai: {
    slug: "mumbai",
    intro:
      "Mumbai's home automation market is shaped by three local realities — vertical living in 3–6BHK sky residences, monsoon-driven humidity and corrosion challenges, and ceiling-height constraints that change Atmos and HVAC design. Grow More Solutions has installed across Bandra, Juhu, Worli, Lower Parel high-rises, Powai apartment towers, and standalone South Mumbai bungalows. Our Mumbai work skews heavily wireless-retrofit and KNX-bus for high-rise penthouses, with marine-grade enclosures and dehumidification integration on every coastal project.",
    marketNotes: [
      "Most installations are 3–5BHK high-rise apartments in Bandra-Worli-Lower Parel-Powai corridor",
      "Monsoon and salt air require IP65+ outdoor cameras, marine-grade outdoor enclosures, and corrosion-resistant motorized blind hardware",
      "9–10 ft ceilings in most high-rises constrain Atmos to 5.1.4 with in-ceiling height speakers",
      "Society approvals for false-ceiling work and external camera placement add 2–4 weeks to typical project timeline",
      "VRV/VRF HVAC dominates premium high-rises — Daikin and Mitsubishi integrate cleanly via BACnet to KNX",
    ],
    projectExamples: [
      { area: "Bandra West", type: "4BHK sea-facing apartment", budget: "₹18 Lakh", scope: "KNX lighting + Lutron blinds + 5.1.4 home theater + smart locks" },
      { area: "Worli", type: "5BHK sky-deck penthouse", budget: "₹42 Lakh", scope: "Crestron whole-home + 7.1.4 cinema + integrated VRV control + access management" },
      { area: "Juhu", type: "Standalone 4BHK bungalow", budget: "₹28 Lakh", scope: "Control4 backbone + perimeter security + Sonos multi-room + dehumidified wine cellar" },
      { area: "Powai", type: "3BHK family residence", budget: "₹9 Lakh", scope: "Wireless retrofit — Lutron Caseta + smart locks + 5.1.2 Atmos media room" },
    ],
    extraFaqs: [
      {
        question: "How does Mumbai's monsoon affect home automation installations?",
        answer:
          "Mumbai's monsoon and proximity to the sea create three practical constraints: outdoor cameras must be minimum IP66 with marine-grade housings (we specify Axis Q-series or CP Plus marine-grade for coastal projects), all outdoor power and data terminations need silica desiccant and corrosion-inhibiting compound, and motorized blind motors should be from brands with humidity-rated coastal warranties (Somfy Glydea Ultra, Lutron Sivoia QS). Indoor units rarely need special treatment, but air-purifier and dehumidifier integration is standard in our Mumbai builds — typically tied to a moisture/AQI sensor that triggers the fresh-air system automatically.",
      },
      {
        question: "Can I install home automation in a Mumbai high-rise without breaking walls?",
        answer:
          "Yes — over 70% of our Mumbai installations are wireless retrofits using Lutron RA3, Control4 wireless, or KNX RF in finished apartments. We avoid wall-cutting wherever possible by routing through false ceilings, behind switchboards, and through existing conduits. For premium clients in Worli, Lower Parel, and Bandra, we typically reach 90% of automation functionality without civil work. Wired KNX or Crestron is recommended only for under-construction units or during major renovations.",
      },
      {
        question: "Do Mumbai building societies typically approve smart home installations?",
        answer:
          "Yes for interior work — society approval is not required for internal lighting, AV, or HVAC automation. Approvals are typically required for: outdoor cameras with external mounting, external smart locks visible from common areas, motorized awnings or pergolas, and any changes to facade or balcony lighting visible externally. Our Mumbai team handles society NOC paperwork on the client's behalf and budgets 2–4 weeks for approvals on builds that include any external work.",
      },
    ],
    recommendedReading: [
      { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos configs for Mumbai high-rise ceilings" },
      { title: "Smart Home Security Guide", href: "/blog/smart-home-security-systems-india", description: "Marine-grade CCTV for coastal projects" },
    ],
  },

  bangalore: {
    slug: "bangalore",
    intro:
      "Bangalore is GMHS's fastest-growing market — driven by tech-sector HNIs in their 30s-40s building first or second luxury homes in Whitefield, Sarjapur, Indiranagar, and the gated communities around HSR and Koramangala. Our Bangalore installations skew younger and more tech-fluent than the national average — clients arrive with comparison spreadsheets, want voice control and Home Assistant integration, and ask harder questions about open standards. We have 60+ completed Bangalore projects across villas in Prestige, Sobha, Total Environment, and Embassy gated communities, plus apartment retrofits across the city.",
    marketNotes: [
      "Bangalore clients are the most platform-aware in India — KNX (open standard) is requested by name in 45% of consultations vs. national average of 15%",
      "Strong demand for Home Assistant / Hubitat integration alongside professional platforms — we routinely bridge KNX and Control4 to local-network Home Assistant for tech-fluent clients",
      "Gated community standards (Prestige, Sobha, Total Environment, Embassy) often pre-install structured cabling — pre-wiring discussions happen at apartment booking stage",
      "Bangalore's milder climate reduces HVAC automation spend; spend redirects to lighting, AV, and security",
      "Frequent power cuts and water shortages push integrated UPS, generator-changeover automation, and tank-level/water-pump automation into 60% of our local installs",
    ],
    projectExamples: [
      { area: "Whitefield (Prestige Lakeside Habitat)", type: "4BHK apartment", budget: "₹14 Lakh", scope: "KNX lighting + Lutron blinds + 7.1.2 home theater + Home Assistant bridge" },
      { area: "Sarjapur (Total Environment)", type: "5BHK villa", budget: "₹36 Lakh", scope: "Full Crestron + dedicated home cinema + outdoor pool automation + DG/UPS integration" },
      { area: "Indiranagar", type: "3BHK independent house", budget: "₹11 Lakh", scope: "Control4 + Sonos multi-room + smart locks + water-tank automation + Solar/UPS handover" },
      { area: "HSR Layout (Brigade)", type: "3BHK gated community", budget: "₹7.5 Lakh", scope: "Wireless retrofit — Lutron Caseta + Schlage smart locks + 5.1.4 Atmos + Alexa voice" },
    ],
    extraFaqs: [
      {
        question: "Why do Bangalore clients prefer KNX over Crestron or Control4?",
        answer:
          "KNX is an open international standard — any KNX-certified product from 500+ manufacturers works on the same bus, regardless of vendor. Bangalore's tech-sector clientele values this for the same reason they value open-source software: no vendor lock-in, no single-point-of-failure on programming, and the ability to add third-party devices over time. Our data from 60+ Bangalore projects shows 45% choose KNX vs. 20% Crestron and 25% Control4, compared to a 30/35/30 split nationally. For projects above ₹15 Lakh, we typically recommend KNX as the lighting backbone and overlay Control4 or Crestron only for AV-heavy front-end UX.",
      },
      {
        question: "Can home automation handle Bangalore's frequent power cuts?",
        answer:
          "Yes, and this is a standard part of every GMHS Bangalore build. We integrate UPS-backed power for the automation server, network rack, and security systems (cameras + NVR + DVR + access control) on a dedicated 4–8 hour UPS line. For DG-equipped villas, we program seamless changeover — the automation system detects mains failure, signals the DG to start, holds critical loads, and re-syncs to mains on restoration. Water-pump automation, tank-level sensing, and bore-pump scheduling are also standard add-ons in Bangalore due to municipal water rationing.",
      },
      {
        question: "Do you integrate with Home Assistant for Bangalore tech-sector clients?",
        answer:
          "Yes — we routinely bridge professional platforms (KNX, Control4, Lutron) to Home Assistant or Hubitat for clients who want local-network voice control, custom dashboards, and integration with personal IoT devices (custom Zigbee sensors, ESPHome devices, scripts). Our standard architecture keeps the professional platform as the primary controller (for warranty and reliability) and exposes a read/write bridge to Home Assistant. This appeals to engineering and product-leadership clients who want both vendor-supported reliability and personal hackability.",
      },
    ],
    recommendedReading: [
      { title: "KNX vs Crestron vs Control4", href: "/blog/knx-vs-crestron-vs-control4-india", description: "Why KNX dominates Bangalore HNI installs" },
      { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos and AV automation in Bangalore villas" },
    ],
  },
};

export function getCityDetail(slug: string): CityDetail | undefined {
  return CITY_DETAILS[slug];
}
