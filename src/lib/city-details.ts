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

// ─── Delhi NCR ───────────────────────────────────────────────────────────
CITY_DETAILS.delhi = {
  slug: "delhi",
  intro:
    "Delhi NCR is Grow More Solutions' home market — our Experience Center in Ghitorni (MG Road) has hosted 1,200+ client demonstrations across South Delhi, Gurgaon, Noida, Faridabad, Greater Noida, and Dwarka. Our Delhi installs split roughly 45% farmhouses (Chattarpur, Mehrauli, Sultanpur), 30% gated villas (DLF Camellias, Magnolias, ATS One Hamlet, Westend Heights), and 25% apartment retrofits. Clean-air integration is mandatory in every Delhi build due to AQI conditions, and we now treat fresh-air ventilation (ERV/HRV) as a default scope item rather than an upsell.",
  marketNotes: [
    "Delhi NCR is India's largest premium home automation market — projects in Chattarpur farmhouses regularly exceed ₹50 Lakh, with Magnolias and Camellias villas averaging ₹18–28 Lakh",
    "AQI conditions (200+ for 4 months/year) make whole-home HEPA + ERV the default scope — every villa above ₹15 Lakh budget includes integrated AQI sensing and automated purifier ramp-up",
    "Winter fog (Nov–Feb) demands IR-flood camera coverage and thermal-imaging at perimeter gates for high-value farmhouses",
    "Voltage fluctuation (sub-200V at peaks) requires servo stabilizers on automation panels and online UPS for control servers — standard inclusion on all GMHS Delhi builds",
    "DLF Phase 5, Golf Course Road, and Aerocity command the highest per-sq-ft automation spends; Dwarka and Faridabad are growing mid-premium segments",
  ],
  projectExamples: [
    { area: "Chattarpur Farms", type: "10,000 sq ft farmhouse", budget: "₹62 Lakh", scope: "Full Crestron + 9.1.6 cinema + perimeter thermal cameras + 5-zone clean-air + pool/garden automation" },
    { area: "DLF Camellias, Gurgaon", type: "6BHK 8,500 sq ft villa", budget: "₹38 Lakh", scope: "KNX backbone + Lutron HomeWorks + 7.1.4 home theater + integrated VRV + AQI dashboard" },
    { area: "Sainik Farms", type: "5BHK independent house", budget: "₹22 Lakh", scope: "Control4 + access control + 4BHK + servant quarter automation + DG/UPS handover + water automation" },
    { area: "Sector 50, Noida (ATS)", type: "4BHK 2,800 sq ft apartment", budget: "₹11 Lakh", scope: "KNX retrofit + Lutron Caseta + 5.1.4 Atmos + 2-zone clean air + smart locks" },
  ],
  extraFaqs: [
    {
      question: "Is fresh-air ventilation worth the cost in Delhi NCR home automation?",
      answer:
        "It's not optional in any GMHS premium Delhi build. PM2.5 in Delhi outdoor air regularly exceeds 200 µg/m³ (WHO limit: 15). Without ERV (Energy Recovery Ventilator) fresh-air supply, even a sealed HEPA-purified home accumulates CO2 to 1,400+ ppm within 2–3 hours of family occupancy, producing the cognitive fog and morning fatigue that most Delhi homeowners assume is normal. We integrate Stadler Form, Zehnder ComfoAir, or Mitsubishi Lossnay units that pre-filter outdoor air through HEPA + activated carbon, recover 70–80% of the indoor temperature, and tie speed to CO2 + AQI sensors via the KNX or Control4 bus. Typical added cost: ₹4–12 Lakh for a 4–5BHK villa.",
    },
    {
      question: "How do you handle farmhouse security in remote Delhi NCR locations like Chattarpur or Sultanpur?",
      answer:
        "Farmhouses in Chattarpur, Sultanpur, Bandh Road, and Mandi Road need a different security architecture than gated villas. Standard GMHS spec: perimeter thermal cameras (Axis Q1942-E or Hikvision DeepinView with thermal) covering boundary walls, IR-flood normal cameras every 30 ft, beam-break sensors on outer compound, redundant 4G + fiber connectivity with automatic failover, on-site security monitoring station tied to the central GMHS NOC for AMC clients, and integrated panic-room access with automated lockdown sequencing. Typical perimeter spec adds ₹8–18 Lakh on top of standard automation scope.",
    },
    {
      question: "Can your Delhi team coordinate with my architect and interior designer during construction?",
      answer:
        "Yes — this is standard for our Delhi NCR builds. Our project managers attend weekly site meetings with your architect, MEP consultant, and interior designer from concrete-shuttering stage onward. We provide marked-up architectural drawings showing conduit routes, sensor locations, panel positions, and false-ceiling cutouts. For Chattarpur farmhouses and Gurgaon luxury villas where build cycles run 18–30 months, our PM is on-site every 7–10 days. This coordination is included in projects above ₹15 Lakh.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Pre-wiring for Delhi farmhouses and villas" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Cinema configs for Delhi/Gurgaon luxury homes" },
  ],
};

// ─── Hyderabad ───────────────────────────────────────────────────────────
CITY_DETAILS.hyderabad = {
  slug: "hyderabad",
  intro:
    "Hyderabad is Grow More Solutions' fastest-growing southern market — driven by Microsoft, Amazon, Google, and Apple senior engineering leadership building first or second luxury homes in Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, and Hitech City. Our 45+ Hyderabad installations skew toward 5BHK villas in My Home Group, Aparna Sarovar, Prestige Lakeside, and Lodha Bellezza developments. The Hyderabad buyer profile mirrors Bangalore in tech fluency but with significantly higher per-project budgets (average ₹22 Lakh vs. Bangalore's ₹14 Lakh).",
  marketNotes: [
    "Tech-leadership HNI buyers (Microsoft, Amazon, Apple, Google directors and VPs) drive 60% of GMHS Hyderabad demand — KNX and Crestron are nearly always requested by name",
    "Builder pre-wiring partnerships are normalized — My Home Group, Aparna, Lodha, and Prestige routinely include automation conduit specs in apartment fit-out scope",
    "Hot dry summers (42°C+) with humid monsoon require sealed outdoor enclosures for cameras and motorized exterior shading — both standard scope",
    "Strong demand for US-style smart home aesthetic — KNX/Crestron + Sonos + Lutron is the most-requested triple stack",
    "Jubilee Hills bungalows and ITC-style Banjara Hills heritage homes form a second segment — restoration-aware retrofit work with concealed wiring through teak panelling and Italian marble",
  ],
  projectExamples: [
    { area: "Jubilee Hills", type: "6BHK 12,000 sq ft villa", budget: "₹48 Lakh", scope: "Full Crestron whole-home + 7.1.4 cinema + outdoor pool/garden + 4-zone clean air + heritage furniture-integrated touch panels" },
    { area: "Gachibowli (My Home Avatar)", type: "5BHK 4,500 sq ft apartment", budget: "₹18 Lakh", scope: "KNX backbone + Lutron HomeWorks + 5.1.4 Atmos + integrated VRV + Home Assistant bridge" },
    { area: "Banjara Hills", type: "4BHK independent house", budget: "₹14 Lakh", scope: "Control4 + Sonos 6-zone + smart locks + study/library lighting + access control" },
    { area: "Kondapur (Prestige Lakeside)", type: "4BHK 3,200 sq ft apartment", budget: "₹9 Lakh", scope: "Wireless retrofit — Lutron Caseta + Schlage + 5.1.2 Atmos + Alexa + Apple HomeKit" },
  ],
  extraFaqs: [
    {
      question: "Do Hyderabad builders typically pre-wire apartments for home automation?",
      answer:
        "Yes — increasingly so in premium projects. My Home Group, Aparna Constructions, Lodha (in Bellezza), and Prestige Lakeside routinely include automation-ready conduit specifications in their 3BHK+ apartment fit-outs as of 2025–2026. The GMHS Hyderabad team works directly with their MEP consultants to specify Cat6A, KNX bus, speaker wire, and HDMI conduit during construction, so apartment buyers receive a smart-home-ready shell at handover. For unpartnered projects, we offer a free pre-handover wiring audit when you're booking — we identify whether retrofit will need civil work and what it'll cost.",
    },
    {
      question: "What's the typical budget range for Hyderabad villa automation?",
      answer:
        "Based on 45+ Hyderabad installations: 4BHK gated apartments range ₹7–18 Lakh, 5BHK villas in Aparna/Prestige range ₹14–28 Lakh, and Jubilee/Banjara Hills luxury villas (8,000+ sq ft) range ₹32–60 Lakh. The Hyderabad average (₹22 Lakh) is higher than the national average (₹14.8 Lakh) because tech-HNI buyers typically opt for KNX + Crestron stacks rather than entry-tier wireless. For a tailored estimate, our Hyderabad team conducts free on-site assessments within 7 working days.",
    },
    {
      question: "Can I integrate Apple HomeKit and Google Home with a professional Hyderabad install?",
      answer:
        "Yes — and this is one of the most-requested integrations from our Hyderabad client base. Our standard architecture uses KNX, Control4, or Crestron as the primary professional controller (for warranty and reliability) and bridges to HomeKit, Google Home, and optionally Home Assistant via certified bridges (Control4 Hub for HomeKit, Crestron Home for Google, KNX IoT gateways). The professional system remains the source of truth; voice assistants and consumer ecosystems become read/write clients. Setup typically adds ₹40K–1.2 Lakh depending on the bridge architecture chosen.",
    },
  ],
  recommendedReading: [
    { title: "KNX vs Crestron vs Control4", href: "/blog/knx-vs-crestron-vs-control4-india", description: "Brand selection for Hyderabad tech-HNI builds" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Cinema design for Jubilee/Banjara villas" },
  ],
};

// ─── Pune ────────────────────────────────────────────────────────────────
CITY_DETAILS.pune = {
  slug: "pune",
  intro:
    "Pune's home automation market is shaped by three distinct buyer segments — IT-sector senior leadership in Hinjewadi, Kharadi, and Wakad; manufacturing and automotive industry families in Kalyani Nagar, Koregaon Park, and Baner; and NRI returnees building second homes across Lavasa, Lonavala (weekend villas), and Aundh. Grow More Solutions has completed 35+ Pune installations, with strong representation in Kolte-Patil, Godrej Properties, and Embassy gated communities. Pune's milder climate redirects HVAC spend toward lighting, AV, and security — making it our highest per-project home-theater segment outside Delhi NCR.",
  marketNotes: [
    "Pune's pleasant climate (rarely exceeds 38°C, mild monsoon) means HVAC automation is a smaller line item — typically 8–12% of project budget vs. 18–25% in Delhi or Chennai",
    "Strong concentration of NRI returnees building villas in Lavasa, Lonavala, and Mulshi — many request remote-monitoring scope for unoccupied periods",
    "Manufacturing/automotive industry families in Kalyani Nagar and Koregaon Park favor traditional Italian and German hardware (Vimar, Hager, Gira) over American (Crestron/Control4)",
    "Builder partnerships strong with Kolte-Patil, Godrej Properties, and Lodha — pre-wired apartment availability rising",
    "High demand for outdoor entertainment automation — pool decks, terrace bars, garden lighting — driven by Pune's outdoor-living climate",
  ],
  projectExamples: [
    { area: "Koregaon Park", type: "5BHK bungalow", budget: "₹28 Lakh", scope: "KNX + Lutron HomeWorks + 7.1.4 cinema + outdoor pool/bar automation + Gira touch panels" },
    { area: "Kalyani Nagar", type: "4BHK 3,600 sq ft apartment", budget: "₹16 Lakh", scope: "Vimar lighting + Lutron blinds + 5.1.4 Atmos + smart locks + integrated VRV" },
    { area: "Lavasa", type: "4BHK weekend villa", budget: "₹19 Lakh", scope: "Control4 + remote-monitoring scope + perimeter cameras + DG/solar + occupancy simulation" },
    { area: "Hinjewadi (Megapolis)", type: "3BHK 2,400 sq ft apartment", budget: "₹7.5 Lakh", scope: "Wireless KNX RF + Lutron Caseta + 5.1.2 Atmos + smart locks + Sonos 3-zone" },
  ],
  extraFaqs: [
    {
      question: "How do you handle automation for Lavasa or Lonavala weekend homes that sit unoccupied for weeks?",
      answer:
        "Unoccupied villas are a specialized segment of our Pune practice. Standard scope adds: occupancy simulation (lights and blinds cycle on realistic schedules), leak sensors with auto-shutoff valves on incoming water lines, freeze sensors and frost-protection HVAC schedules (winter Lavasa drops to 7°C), perimeter intrusion alerts with 24/7 GMHS NOC monitoring, redundant 4G failover for primary fiber connectivity, and pre-arrival activation scenes that warm the home, fill the pool heater, and verify all systems 4 hours before owner ETA. This unoccupied-home package adds ₹3–8 Lakh on top of base automation scope.",
    },
    {
      question: "Why do some Pune clients prefer Italian/German hardware over American Crestron and Control4?",
      answer:
        "Pune's manufacturing and automotive industry families have long-standing relationships with German and Italian engineering aesthetics — they own European cars, drink European wine, and prefer European switch and panel finishes (Vimar Eikon, Gira E2, Hager Tehalit) over American plastic touch panels. Functionally, KNX as the underlying protocol gives identical capability; the visible hardware just changes. We are certified installers for Vimar, Gira, Hager, and Schneider Electric KNX product lines and routinely deliver Pune projects with these aesthetics at the front end and Crestron or Control4 driving AV behind the scenes.",
    },
    {
      question: "Do you provide on-site service for Lonavala/Lavasa locations?",
      answer:
        "Yes. Our Pune team services Lonavala, Lavasa, Mulshi, Pawna, and Kamshet within standard SLAs — typically same-day for emergencies and 48-hour for non-urgent calls. For AMC clients with unoccupied weekend homes, we conduct quarterly preventive maintenance visits (filter changes, firmware updates, calibration verification) tied to your travel schedule. This avoids the frustration of arriving at a weekend home to find a non-functional system.",
    },
  ],
  recommendedReading: [
    { title: "KNX vs Crestron vs Control4", href: "/blog/knx-vs-crestron-vs-control4-india", description: "European vs American hardware decision framework" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos design for Pune outdoor-living homes" },
  ],
};

// ─── Chennai ─────────────────────────────────────────────────────────────
CITY_DETAILS.chennai = {
  slug: "chennai",
  intro:
    "Chennai's home automation market is one of India's most conservative — buyers research extensively, prefer wired professional systems over wireless DIY, and value long-term reliability and after-sales relationships over feature breadth. Grow More Solutions services HNI families across Anna Nagar, T. Nagar, Adyar, Boat Club, Poes Garden, ECR beach houses, and OMR tech-corridor apartments. Chennai's coastal humidity, traditional joint-family living patterns, and strong adherence to Vastu Shastra all shape automation design in ways unique to the city.",
  marketNotes: [
    "ECR beach houses face India's harshest residential corrosion environment — salt spray, 80%+ year-round humidity, and tropical UV — requiring IP66+ outdoor enclosures, conformal-coated PCBs, and marine-grade motorized blind hardware",
    "North-east monsoon (Oct–Dec) brings flooding risk — first-floor electrical and AV racks need elevation, sump-pump automation, and water-ingress sensors on lower levels",
    "Traditional joint-family residences (3 generations under one roof) require multi-zone audio, multi-pooja-room automation, and granular per-room access control",
    "Strong Vastu adherence — north-east, south-west, and pooja-room positioning constrains where central racks, panels, and inverters can be located",
    "Chennai HNI buyers prefer wired KNX over wireless retrofits — 70% of our Chennai installs are during major renovation or new construction, vs. 50% nationally",
  ],
  projectExamples: [
    { area: "Boat Club Road", type: "6BHK 9,000 sq ft heritage bungalow", budget: "₹42 Lakh", scope: "KNX backbone + Crestron AV + 7.1.4 cinema + integrated VRV + pooja-room lighting scenes + 3-floor zoned access" },
    { area: "ECR (Akkarai)", type: "5BHK beach villa", budget: "₹26 Lakh", scope: "Marine-grade Control4 + corrosion-resistant outdoor + flood sensors + remote occupancy automation + Sonos 5-zone" },
    { area: "Poes Garden", type: "5BHK independent house", budget: "₹19 Lakh", scope: "KNX + Lutron HomeWorks + 5.1.4 Atmos + pooja-room automation + joint-family zoned audio" },
    { area: "OMR (Sholinganallur, Olympia)", type: "3BHK 2,200 sq ft apartment", budget: "₹8 Lakh", scope: "Wireless retrofit + smart locks + 5.1.2 Atmos + clean air + smart locks + family-wide app access" },
  ],
  extraFaqs: [
    {
      question: "How does Chennai's coastal climate affect ECR home automation installations?",
      answer:
        "ECR (East Coast Road) homes face India's most aggressive residential corrosion environment — salt spray combined with 80%+ year-round humidity attacks unprotected electronics, switchgear, and motorized hardware. Our ECR builds use a hardened spec: IP66 outdoor cameras with marine-grade housings (Axis Q-series, Hikvision M-series marine variants), conformal-coated control PCBs, stainless-steel enclosure hardware, sealed motorized blind motors (Somfy Glydea Ultra Marine, Lutron Sivoia QS), and quarterly preventive maintenance visits to inspect for corrosion onset. Indoor systems are largely unaffected if the home maintains AC-conditioned humidity below 60%.",
    },
    {
      question: "Can home automation accommodate Vastu Shastra requirements?",
      answer:
        "Yes — and this is a standard part of our Chennai design conversations. Vastu typically governs where central racks, inverters, panel locations, pooja rooms, and main electrical distribution can be placed. Our Chennai design team works with the client's Vastu consultant from drawing stage onward to identify the correct quadrants (commonly south-east for electricals, north-east for pooja, south-west for master) and routes cabling to comply. We've completed 12+ projects with active Vastu consultant collaboration without compromising automation reliability.",
    },
    {
      question: "Do you handle multi-generational joint-family automation?",
      answer:
        "Yes — joint-family residences are a significant Chennai segment. Standard scope includes: per-zone audio (so grandparents can have classical, parents have news, children have movies in different rooms simultaneously), granular per-floor access control (older generation can lock down service entrances independently), multi-pooja-room scene management (separate lamps and lights for each family unit's worship space), and family-wide mobile app access with role-based permissions (head of family has master, others have scope-limited views). We've designed Chennai homes for up to 14-person joint families.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Security Guide", href: "/blog/smart-home-security-systems-india", description: "Marine-grade CCTV for ECR beach properties" },
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Pre-wiring for Chennai joint-family residences" },
  ],
};

// ─── Kolkata ─────────────────────────────────────────────────────────────
CITY_DETAILS.kolkata = {
  slug: "kolkata",
  intro:
    "Kolkata's home automation market is shaped by two contrasting segments — heritage retrofits of pre-Independence Alipore and Ballygunge bungalows (often family-owned for 4+ generations), and new-build penthouses in Rajarhat, New Town, and Salt Lake. Grow More Solutions has completed 20+ Kolkata installations, with strong specialization in heritage-sensitive retrofits where concealed wiring through 18-inch brick walls and pressed-iron staircases requires careful routing. Year-round high humidity (60–85%) and chronic load-shedding (improving but not eliminated) drive design choices unique to the city.",
  marketNotes: [
    "Heritage bungalow retrofits in Alipore, Ballygunge, Sunny Park, and Park Street — 18-inch brick walls, pressed-iron staircases, teak ceilings — require wireless KNX RF and surface-mounted conduits painted to match wall finish",
    "Year-round high humidity (60–85%) creates condensation on outdoor switchboards — we specify sealed IP65 enclosures with internal silica desiccant, replaced quarterly under AMC",
    "Load-shedding still common in older areas — every Kolkata install includes 4–8 hour UPS backup for control servers, network rack, and security systems",
    "Penthouse market in Rajarhat (DLF, Acropolis, PS Group) and New Town (Eden Group, Greenfield) growing rapidly — apartment automation budgets ₹6–18 Lakh",
    "Bengali aesthetic prefers warm-tone lighting (2700K–3000K) over the cool-white (4000K+) common in Delhi/Mumbai — affects Lutron scene programming and fixture selection",
  ],
  projectExamples: [
    { area: "Alipore", type: "Pre-Independence 6,500 sq ft heritage bungalow", budget: "₹26 Lakh", scope: "Wireless KNX RF + heritage-matched surface conduits + Lutron RA3 + 5.1.4 Atmos + restored brass switchgear + 8-hour UPS" },
    { area: "Ballygunge", type: "4BHK 3,800 sq ft apartment in heritage building", budget: "₹14 Lakh", scope: "KNX RF + Lutron Caseta + 5.1.2 Atmos + smart locks + integrated split AC control" },
    { area: "New Town (DLF Galleria)", type: "5BHK 4,200 sq ft penthouse", budget: "₹18 Lakh", scope: "Control4 + KNX lighting + 7.1.2 cinema + 4-zone Sonos + access control + DG/UPS handover" },
    { area: "Salt Lake (Sector V)", type: "3BHK 2,400 sq ft apartment", budget: "₹7 Lakh", scope: "Wireless retrofit + Lutron Caseta + 5.1.2 Atmos + smart locks + 4-hour UPS" },
  ],
  extraFaqs: [
    {
      question: "Can you install automation in heritage Kolkata bungalows without damaging original architecture?",
      answer:
        "Yes — this is a specialized practice area for our Kolkata team. Standard heritage retrofit scope uses: KNX RF wireless (no wall-cutting required), surface-mounted conduits painted to match wall finish (lime wash, distemper, fabric paneling), restored period switchgear fitted with modern dimmers behind the original brass plates, retained original ceiling fans wired through KNX dimming relays, and concealed sensor placement (PIRs hidden behind cornice moulding, AQI sensors in air-grills). We've completed retrofits in 80–120 year-old bungalows in Alipore, Ballygunge, and Park Street without disturbing original woodwork, fresco ceilings, or pressed-iron staircases.",
    },
    {
      question: "How do you handle Kolkata's load-shedding and power reliability in automation design?",
      answer:
        "Every GMHS Kolkata build includes a layered power architecture: 4–8 hour online UPS for the automation control server, network rack, security systems (NVR, cameras, access control), and at least one circuit per floor for emergency lighting; servo voltage stabilizers on all automation panels (Kolkata voltage commonly fluctuates 180–250V); and DG/inverter automated changeover for properties with backup generators. During load-shedding, the automation system gracefully degrades — non-essential loads (HVAC, decorative lighting) shed automatically, while security and core lighting remain operational. AMC clients receive quarterly UPS battery health audits.",
    },
    {
      question: "What's the difference between automation pricing in South Kolkata vs Rajarhat/New Town?",
      answer:
        "South Kolkata heritage retrofits (Alipore, Ballygunge, Hindusthan Park) are typically 25–40% more expensive than equivalent Rajarhat/New Town apartments because of: wireless RF hardware premium, careful conduit routing through period architecture, restored period switchgear costs, and slower install timelines (12–18 weeks vs. 6–10 for new builds). Rajarhat and New Town penthouses are typically pre-wirable during fit-out, making them comparable to national averages. A 4,000 sq ft Alipore bungalow runs ₹18–28 Lakh; an equivalent New Town penthouse runs ₹14–22 Lakh.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Wired vs wireless decisions for Kolkata heritage homes" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos in heritage rooms and Kolkata penthouses" },
  ],
};

// ─── Ahmedabad ───────────────────────────────────────────────────────────
CITY_DETAILS.ahmedabad = {
  slug: "ahmedabad",
  intro:
    "Ahmedabad's home automation market is uniquely defined by Gujarati joint-family business families building large bungalows in SG Highway, Prahlad Nagar, Satellite, Bodakdev, Thaltej, and the emerging South Bopal corridor. Grow More Solutions has completed 25+ Ahmedabad installations, with average project budgets among the highest in India (₹19 Lakh average) driven by 7,000–15,000 sq ft bungalow scope and multi-floor automation requirements for joint families with 8–15 occupants. The diamond, textile, pharmaceutical, and chemicals industry HNI segment drives this market.",
  marketNotes: [
    "Bungalow-heavy market — 80% of GMHS Ahmedabad installations are 5,000+ sq ft independent houses, with very limited high-rise penetration vs. national average",
    "Multi-family joint living patterns mean 3–4 floors per bungalow each housing a separate family unit — requiring zoned audio, per-floor access control, and shared common-area automation",
    "Extreme summer heat (45°C+ in May–June) drives HVAC automation as the largest line item (25–30% of budget) with VRV systems and motorized exterior shading",
    "Strong demand for compound and gate-level security — multi-family residences typically have 4–6 entry points requiring intercom integration, video doorphones, and access cards for extended family + staff",
    "Diamond, textile, and chemicals industry HNI buyers favor discrete wealth aesthetics — wood-and-stone finishes, hidden technology, no exposed AV equipment",
  ],
  projectExamples: [
    { area: "Bodakdev", type: "4-floor 14,000 sq ft joint-family bungalow", budget: "₹48 Lakh", scope: "KNX whole-home + per-floor zoning + 6-zone Sonos + 4 video doorphones + biometric multi-family access + 7.1.4 cinema + Crestron AV" },
    { area: "Thaltej", type: "3-floor 9,000 sq ft bungalow", budget: "₹26 Lakh", scope: "Control4 + Lutron HomeWorks + 5.1.4 Atmos + 4-zone audio + integrated VRV + compound camera coverage" },
    { area: "SG Highway (Prerna Tirth)", type: "5BHK 4,500 sq ft apartment", budget: "₹13 Lakh", scope: "KNX + Lutron + 5.1.2 Atmos + smart locks + clean air + access control" },
    { area: "South Bopal", type: "5BHK 6,200 sq ft villa", budget: "₹17 Lakh", scope: "Control4 + Sonos 3-zone + smart locks + 5.1.4 Atmos + integrated VRV + outdoor pool/garden" },
  ],
  extraFaqs: [
    {
      question: "How do you design automation for Ahmedabad joint-family bungalows with 3–4 floors and multiple family units?",
      answer:
        "Joint-family bungalows are a specialized Ahmedabad practice area. Our standard architecture treats each floor as a separate occupancy zone with its own automation profile: independent lighting and HVAC control, separate audio zones (so grandparents can have devotional music while another family unit watches TV), per-family-unit access control on stairwells and lifts (biometric or RFID), shared common-area automation (drawing room, garden, dining hall) controlled by the family head, and a master override for the patriarch/matriarch on all systems. Mobile app access is role-based — each adult family member sees only their floor and shared areas, not other private zones. Project timelines run 14–20 weeks for buildings of this complexity.",
    },
    {
      question: "Can your system handle Ahmedabad's 45°C summer temperatures and HVAC requirements?",
      answer:
        "Yes — and HVAC automation is the largest line item in our Ahmedabad builds (typically 25–30% of total budget). For bungalows in Bodakdev, Thaltej, and SG Highway, we typically specify Daikin or Mitsubishi VRV with 4–8 zone automation tied to occupancy sensors, scheduled pre-cooling 30 minutes before usage patterns, motorized external shading on south and west elevations (essential — internal blinds don't help against 45°C radiated heat), and outdoor unit shading + condensate management. Integration runs through KNX BACnet gateways. Properly designed systems reduce HVAC running cost by 30–45% vs. always-on operation.",
    },
    {
      question: "Do you handle compound-level security for Ahmedabad multi-family residences?",
      answer:
        "Yes — multi-entry compound security is standard scope for our Ahmedabad bungalow projects. Typical specification: main gate video doorphone with intercom to all 3–4 family floors, separate service gate access (kitchen/utility) with delivery-only access codes, video doorphones at each floor's main entry, biometric access on stairwells between floors (configurable per family unit), perimeter cameras with AI analytics on compound walls, and 4–6 video intercoms distributed at strategic points. All feeds consolidate to a touch panel near the patriarch's drawing room or office. Total security scope for a 4-floor 12,000 sq ft bungalow typically runs ₹6–14 Lakh.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Security Guide", href: "/blog/smart-home-security-systems-india", description: "Compound and gate-level security for Ahmedabad bungalows" },
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Pre-wiring multi-floor joint-family residences" },
  ],
};

// ─── Goa ─────────────────────────────────────────────────────────────────
CITY_DETAILS.goa = {
  slug: "goa",
  intro:
    "Goa's home automation market is distinct from every other Indian market — driven primarily by second-home buyers (Mumbai, Delhi, Bangalore HNIs), NRIs, and expat residents in Panjim, Calangute, Candolim, Dona Paula, Porvorim, Assagao, Anjuna, and Siolim. Grow More Solutions has completed 18+ Goa installations, with 70% being holiday villas occupied only 60–90 days per year. The combination of harsh coastal salt-air corrosion, lower power grid reliability, intermittent occupancy, and Portuguese-style heritage architecture creates a unique design discipline.",
  marketNotes: [
    "Salt-air corrosion is the most aggressive in India — coastal Goa villas require IP66+ outdoor enclosures, marine-grade motorized hardware, conformal-coated PCBs, and quarterly preventive maintenance",
    "70% of GMHS Goa installations are second homes occupied 60–90 days/year — remote monitoring, occupancy simulation, and pre-arrival automation are default scope items, not upsells",
    "Power grid reliability is lower than tier-1 cities — solar-plus-battery integration and DG automated changeover are standard in 80% of our Goa villa builds",
    "Portuguese-style villas have thick laterite stone walls (18–30 inches) that block wireless signals — we use KNX TP (twisted pair) wired backbone whenever possible, with strategic Wi-Fi access point placement",
    "Pool, garden, and outdoor entertainment automation form a significantly larger share of Goa project scope (often 25–35% of budget) than in inland markets",
  ],
  projectExamples: [
    { area: "Assagao", type: "4BHK Portuguese-style heritage villa", budget: "₹22 Lakh", scope: "KNX TP + Lutron Sivoia QS marine motors + 5.1.4 Atmos + pool/deck automation + DG/solar handover + remote occupancy" },
    { area: "Siolim", type: "5BHK new-build villa with pool", budget: "₹28 Lakh", scope: "Crestron whole-home + 7.1.2 cinema + automated pool + perimeter cameras + 4G failover + 24/7 GMHS NOC monitoring" },
    { area: "Dona Paula", type: "4BHK 3,200 sq ft apartment", budget: "₹12 Lakh", scope: "Control4 + Sonos 4-zone + smart locks + 5.1.2 Atmos + Apple HomeKit bridge for owner remote control" },
    { area: "Candolim", type: "3BHK weekend villa", budget: "₹10 Lakh", scope: "KNX RF wireless retrofit + occupancy simulation + leak sensors + 5.1.2 Atmos + perimeter cameras + 4-hour UPS" },
  ],
  extraFaqs: [
    {
      question: "How do you handle Goa salt-air corrosion in automation hardware?",
      answer:
        "Coastal Goa villas face the most aggressive corrosion environment in residential India. Our hardened spec for Goa builds: IP66 outdoor cameras with marine-grade housings (Axis Q1942-LE marine, Hanwha Wisenet X marine), conformal-coated control PCBs (silicone or acrylic coating on KNX modules and AV processors), stainless-steel screws and enclosure hardware throughout (galvanized steel rusts within 18 months), marine-grade motorized blind motors (Somfy Glydea Ultra Marine, Lutron Sivoia QS Marine), sealed splice points on all outdoor cable terminations with corrosion-inhibitor compound, and quarterly preventive maintenance visits under AMC to detect early corrosion onset. AMC for Goa villas is priced 30–40% higher than national average to fund this maintenance cadence.",
    },
    {
      question: "Can you monitor my Goa villa remotely while I'm in Mumbai or Delhi?",
      answer:
        "Yes — this is the default architecture for our Goa second-home installations. Standard remote-monitoring scope: 24/7 GMHS NOC monitoring of perimeter sensors, smoke detectors, leak sensors, and HVAC fault alarms; mobile app push notifications for any threshold breach; remote camera viewing with talk-down capability via app; weekly automated health report (system status, occupancy log, energy use, sensor activity); occupancy simulation that cycles lights and music on realistic schedules to deter break-ins; pre-arrival activation triggered when owner is 4 hours out (warms pool, activates AC, runs water lines, verifies all systems). AMC tier for remote-monitored Goa villas runs ₹80,000–2.5 Lakh per year depending on scope.",
    },
    {
      question: "How do you handle the slower power grid and frequent outages in coastal Goa?",
      answer:
        "Goa's power grid is improving but outages of 2–8 hours remain common during monsoon. Standard GMHS Goa power architecture: solar PV with battery storage (typically 5–10 kW solar + 10–20 kWh battery) sized to run essential loads through outages, DG with automated changeover for properties with backup generators, online UPS for the automation server and network rack (8-hour minimum capacity), and load-shedding programming — non-essential loads (decorative outdoor lighting, infinity pool pump, HVAC) drop automatically during DG/battery operation while security and core lighting remain active. For unoccupied villas, all this runs invisibly in the background while owners are away.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Security Guide", href: "/blog/smart-home-security-systems-india", description: "Remote monitoring for Goa holiday villas" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos design for Goa villa media rooms" },
  ],
};

// ─── Jaipur ──────────────────────────────────────────────────────────────
CITY_DETAILS.jaipur = {
  slug: "jaipur",
  intro:
    "Jaipur's home automation market spans three distinct segments — heritage haveli restorations (Walled City, Civil Lines, Bani Park), new luxury construction in C-Scheme, Vaishali Nagar, Mansarovar, and Malviya Nagar, and the rapidly-growing boutique hospitality sector along Tonk Road and Amer Road. Grow More Solutions has completed 15+ Jaipur installations, with strong specialization in heritage haveli retrofits where preservation rules limit visible modern intervention. Jaipur's extreme desert climate (45°C+ summers, 5°C winters, frequent dust storms) drives unique HVAC and filtration design.",
  marketNotes: [
    "Heritage haveli retrofits in Walled City, Bani Park, and Civil Lines — preservation rules require all modern technology to be invisible behind original frescoes, jharokhas, and stone latticework",
    "Desert climate (45°C summers, 5°C winters, 30°C+ diurnal swings) requires HVAC systems with wide temperature range and heavy thermal mass programming — pre-cooling and pre-heating cycles common",
    "Frequent dust storms (April–June) require sealed outdoor enclosures, filtered air intakes for fresh-air systems, and quarterly filter replacement schedules — every Jaipur build includes integrated AQI sensing",
    "Strong boutique hotel and wedding-venue crossover demand — many private homes also function as occasional event spaces, requiring scene programming for 200+ guest occupancy patterns",
    "Royal aesthetic preferences — buyers prefer brass-finished switchgear, hand-carved wood panel-integrated touch screens, and warm-tone lighting (2700K) over modern white plastic",
  ],
  projectExamples: [
    { area: "Walled City (City Palace area)", type: "Heritage haveli 8,000 sq ft", budget: "₹32 Lakh", scope: "KNX RF wireless + concealed conduits behind frescoes + restored brass switchgear + 5.1.4 Atmos + integrated dust-filtered fresh air + heritage matched touch panels" },
    { area: "C-Scheme", type: "5BHK 5,500 sq ft bungalow", budget: "₹22 Lakh", scope: "KNX TP + Lutron HomeWorks + 7.1.2 cinema + integrated VRV + Sonos 4-zone + wedding/event mode scenes" },
    { area: "Vaishali Nagar", type: "4BHK 3,200 sq ft villa", budget: "₹13 Lakh", scope: "Control4 + Lutron + 5.1.2 Atmos + smart locks + AQI sensing + dust-filter automation" },
    { area: "Malviya Nagar (gated community)", type: "3BHK 2,400 sq ft apartment", budget: "₹7 Lakh", scope: "Wireless retrofit + Lutron Caseta + 5.1.2 Atmos + smart locks + clean air" },
  ],
  extraFaqs: [
    {
      question: "Can you install automation in a Jaipur heritage haveli without damaging original frescoes or stonework?",
      answer:
        "Yes — heritage haveli retrofits are a specialized practice area for our Jaipur team. Standard preservation-aware scope: KNX RF wireless (no wall-cutting required), conduits routed behind existing wood panelling, jharokha frames, or stone latticework, restored period brass switchgear fitted with modern KNX dimmers behind original plates, all touch panels integrated into hand-carved wood frames matched to existing furniture, sensors concealed in air-grills and decorative ceiling cornices, and quarterly inspections by our heritage liaison for any thermal or moisture impact on adjacent paintwork. We work directly with heritage architects and Rajasthan tourism conservation authorities where required.",
    },
    {
      question: "How do you handle dust storms and Jaipur's desert climate in fresh-air systems?",
      answer:
        "Jaipur's dust storms (April–June) bring PM10 surges to 800–1,200 µg/m³ — significantly worse than Delhi NCR. Our standard Jaipur fresh-air spec: ERV intakes equipped with pre-filter (G4) + HEPA H13 + activated carbon stages, automated intake dampers that close when AQI exceeds 600 (system switches to internal recirculation mode), quarterly G4 filter replacement (vs. annual elsewhere), and HEPA replacement every 6–8 months (vs. 12 months elsewhere). The system maintains indoor PM2.5 below 30 µg/m³ even during peak dust storm conditions, but operating costs are 40–60% higher than equivalent Bangalore or Pune builds due to filter replacement cadence.",
    },
    {
      question: "Can the system handle 200-guest weddings or events at our Jaipur home?",
      answer:
        "Yes — wedding and event mode scene programming is standard scope for Jaipur premium builds. Typical event scope: pre-programmed Welcome / Arrival / Dinner / Performance / Late-night scene sequences that adjust lighting, audio, HVAC, and outdoor automation in coordinated transitions; high-capacity sound zones (typically 6–10 zones for sangeet, mandap, dining, and outdoor) integrated through Crestron NVX or Sonos; valet-parking-mode access control unlocking specific gate and ground-floor entries for staff and guests; and a wedding-day handover mode that lets the event coordinator control core systems via dedicated tablet without compromising private-area security. This event-mode scope typically adds ₹3–8 Lakh to the base automation budget.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Wired vs wireless for heritage Jaipur homes" },
    { title: "Smart Lighting Guide", href: "/blog/smart-lighting-guide-indian-homes", description: "Warm-tone scene programming for Jaipur royal aesthetics" },
  ],
};

// ─── Chandigarh ──────────────────────────────────────────────────────────
CITY_DETAILS.chandigarh = {
  slug: "chandigarh",
  intro:
    "Chandigarh's home automation market is distinct because of Le Corbusier's master plan — strict municipal architectural rules limit external facade modification, sector-based residential planning constrains visible exterior changes, and the sector dwellings have specific structural patterns that affect how automation can be deployed. Grow More Solutions services Chandigarh, Mohali (Punjab), Panchkula (Haryana), and Zirakpur, with strong representation among Punjab and Haryana NRI returnees, agricultural HNI families, and senior bureaucratic households. The market is smaller in volume but high in per-project value.",
  marketNotes: [
    "Strict UT Chandigarh architectural rules — no external facade modifications, no visible exterior wiring or cameras without permission — drive concealed install practices and discrete camera placement",
    "Sector-based residential planning means most homes are similar in structural layout (Type 7, Type 14, Kothi types) — we have standardized wiring templates per sector type for efficient retrofit",
    "Mohali (Punjab) and Panchkula (Haryana) have looser rules and more new-build luxury — most of our recent installations are in Mohali Sector 76+, Panchkula Sector 5+, and Zirakpur",
    "Wide annual temperature range (45°C summer to near-freezing winter) requires HVAC systems with both deep cooling and heating modes — usually VRV with reverse-cycle heat pump",
    "Strong NRI returnee buyer segment — Punjab and Haryana families returning from UK, Canada, and US frequently build first or second homes with high automation expectations",
  ],
  projectExamples: [
    { area: "Sector 7 (Chandigarh)", type: "4BHK Type 7 kothi", budget: "₹15 Lakh", scope: "KNX + Lutron + 5.1.4 Atmos + concealed exterior cameras + VRV with reverse-cycle heat + integrated solar handover" },
    { area: "Mohali (Sector 76)", type: "5BHK 5,800 sq ft villa", budget: "₹26 Lakh", scope: "Crestron whole-home + 7.1.2 cinema + outdoor pool + perimeter security + Lutron HomeWorks + NRI-friendly remote management" },
    { area: "Panchkula (Sector 5)", type: "4BHK 3,800 sq ft bungalow", budget: "₹14 Lakh", scope: "Control4 + Sonos 4-zone + smart locks + 5.1.2 Atmos + integrated VRV + clean air" },
    { area: "Zirakpur (Highway Heights)", type: "4BHK 2,800 sq ft apartment", budget: "₹8 Lakh", scope: "Wireless KNX RF + Lutron Caseta + 5.1.2 Atmos + smart locks + access control" },
  ],
  extraFaqs: [
    {
      question: "How do you handle UT Chandigarh's strict external modification rules?",
      answer:
        "Chandigarh's master-plan rules require that no visible exterior modification occur without municipal approval — this affects camera placement, motorized exterior shading, antenna mounting, and visible wiring. Our standard Chandigarh practice: cameras placed at building-recess points where they're not visible from public roads, all external cabling routed through existing services trenches (no surface conduit on facades), motorized exterior shading replaced with internal Lutron blinds in heritage sectors, antenna and dish equipment relocated to roof-internal positions, and municipal liaison handled by our local PM before any visible work commences. Mohali (Punjab), Panchkula (Haryana), and Zirakpur have looser rules — we offer pre-purchase consultation on which jurisdiction's rules will apply to your build.",
    },
    {
      question: "Do you serve Mohali, Panchkula, and Zirakpur from Chandigarh, or do they need separate teams?",
      answer:
        "We service all four jurisdictions (UT Chandigarh, Mohali in Punjab, Panchkula in Haryana, Zirakpur) from a single regional team. Site visit response is within 2 working days across all four; AMC service visits within 48 hours. Project execution does account for the different jurisdictional rules — Mohali Sector 76+ and Panchkula Sector 5+ have the most new-build luxury and represent ~55% of our regional volume, with UT Chandigarh at ~25% (constrained by municipal rules) and Zirakpur at ~20%.",
    },
    {
      question: "Do you support NRI clients who are building Chandigarh homes remotely?",
      answer:
        "Yes — Punjab and Haryana NRI returnees are a significant segment of our Chandigarh-region practice. Standard NRI-friendly scope: weekly video site-walk during construction phase (project manager walks the site with phone camera while owner watches remotely), digital handover with full system documentation in a private client portal, remote-monitored AMC during owner's UK/Canada/US absences with quarterly preventive maintenance, automated occupancy simulation during long unoccupied periods, and pre-arrival activation triggered 6 hours before owner ETA from abroad. NRI handover and ongoing remote management has become roughly 30% of our regional volume.",
    },
  ],
  recommendedReading: [
    { title: "Smart Home Wiring Guide", href: "/blog/smart-home-wiring-new-construction-india", description: "Pre-wiring for Chandigarh/Mohali sector homes" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Cinema design within UT architectural constraints" },
  ],
};

// ─── Lucknow ─────────────────────────────────────────────────────────────
CITY_DETAILS.lucknow = {
  slug: "lucknow",
  intro:
    "Lucknow's home automation market is among India's fastest-emerging — growing from a near-zero base in 2020 to a meaningful segment driven by UP state HNI families, political households, business owners in pharmaceuticals and agriculture, and growing high-rise development in Gomti Nagar, Hazratganj, Aliganj, Indira Nagar, and Mahanagar. Grow More Solutions has completed 10+ Lucknow installations, with significant Awadhi aesthetic crossover — clients frequently request integration with carved teak panelling, jaali screens, and traditional chandeliers. Buyer decision cycles are longer (often 4–8 months) but project values are competitive with tier-1 cities.",
  marketNotes: [
    "Awadhi aesthetic preferences — clients frequently specify integration with carved teak panelling, traditional chandeliers, jaali screen wood-carving, and warm-tone lighting (2700K)",
    "Longer buyer decision cycles (4–8 months vs. 2–4 months tier-1 average) — Lucknow HNI families take time to evaluate technology, often consulting multiple advisors before committing",
    "Power infrastructure has improved significantly post-2022 but DG/inverter backup remains essential — every Lucknow build includes automated changeover and battery-backed control servers",
    "Gomti Nagar Extension and Hazratganj have the most active premium high-rise development — projects in Eldeco, Omaxe, and CMS gated communities form 60% of recent installs",
    "Wedding and political-event use cases are common — many residences host 200+ guests for political receptions and weddings, requiring event-mode scene programming",
  ],
  projectExamples: [
    { area: "Hazratganj", type: "5BHK 6,500 sq ft heritage-aesthetic bungalow", budget: "₹24 Lakh", scope: "KNX + carved teak-integrated touch panels + Lutron HomeWorks + traditional chandelier dimming + 7.1.2 cinema + event-mode scenes" },
    { area: "Gomti Nagar (Eldeco)", type: "4BHK 3,800 sq ft apartment", budget: "₹14 Lakh", scope: "Control4 + Lutron + 5.1.4 Atmos + integrated VRV + Sonos 4-zone + smart locks" },
    { area: "Aliganj", type: "4BHK 4,200 sq ft villa", budget: "₹13 Lakh", scope: "KNX + Lutron + 5.1.2 Atmos + smart locks + perimeter cameras + access control + DG/UPS" },
    { area: "Mahanagar", type: "3BHK 2,400 sq ft apartment", budget: "₹6.5 Lakh", scope: "Wireless retrofit + Lutron Caseta + 5.1.2 Atmos + smart locks + clean air" },
  ],
  extraFaqs: [
    {
      question: "Can your automation system integrate with traditional Awadhi aesthetic elements like carved teak and traditional chandeliers?",
      answer:
        "Yes — Awadhi aesthetic integration is a specialized practice area for our Lucknow team. Common requests include: touch panels custom-mounted into hand-carved teak panels matched to existing furniture, dimmer programming for traditional crystal/brass chandeliers (requires careful current-rating analysis to avoid filament damage), warm-tone scene programming favoring 2700K throughout (vs. cool-white common in modern builds), jaali screen integration where motion sensors and AQI monitors are concealed behind carved wood lattices, and concealed speaker placement behind silk fabric panels in formal drawing rooms. Our Lucknow team works directly with the client's interior designer and carpenter throughout the build.",
    },
    {
      question: "What's the realistic project timeline for a Lucknow installation?",
      answer:
        "Based on 10+ completed Lucknow projects: apartment retrofits in Gomti Nagar take 6–10 weeks, villa builds in Hazratganj or Aliganj take 14–22 weeks, and complex heritage-aesthetic bungalows can run 18–28 weeks because of custom panel fabrication and interior designer coordination. Buyer decision cycles before kickoff average 4–8 months — Lucknow HNI families typically meet our team 3–5 times across multiple consultations, consult their architect and interior designer, visit our Delhi Experience Center, and sometimes consult other Lucknow GMHS clients before committing. We allocate this engagement time at no charge.",
    },
    {
      question: "Do you handle event-mode automation for political receptions and weddings at Lucknow homes?",
      answer:
        "Yes — event-mode scene programming is a frequently-requested addon for Lucknow premium builds. Typical event scope: pre-programmed Arrival / Reception / Dinner / Late-night scene sequences with coordinated lighting, audio zones, and HVAC transitions; expanded sound coverage (6–10 zones for reception lawn, drawing room, dining hall, and outdoor garden) integrated through Crestron or Sonos; staff-mode access control unlocking specific service entries and ground-floor zones for event staff while keeping private upper-floor zones locked; and event-coordinator handover via dedicated tablet that controls core systems without compromising household security. Event-mode programming typically adds ₹2–6 Lakh to base automation scope.",
    },
  ],
  recommendedReading: [
    { title: "Smart Lighting Guide", href: "/blog/smart-lighting-guide-indian-homes", description: "Warm-tone scene design for Awadhi aesthetics" },
    { title: "Home Theater Cost Guide", href: "/blog/home-theater-av-automation-india", description: "Atmos design for Lucknow villa media rooms" },
  ],
};

export function getCityDetail(slug: string): CityDetail | undefined {
  return CITY_DETAILS[slug];
}
