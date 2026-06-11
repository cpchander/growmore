export type BrandDetail = {
  slug: string;
  name: string;
  tagline: string;
  protocol: string;
  origin: string;
  certifiedSince?: string; // legacy field — no longer rendered (kept on old entries)
  website: string;
  overview: string;
  bestFor: string;
  priceRange: string;
  features: { title: string; description: string }[];
  pros: string[];
  cons: string[];
  faqs: { question: string; answer: string }[];
};

export const BRAND_DETAILS: BrandDetail[] = [
  {
    slug: "knx",
    name: "KNX",
    tagline: "The Global Gold Standard in Building Automation",
    protocol: "Open Standard (ISO/IEC 14543)",
    origin: "Europe (KNX Association, Belgium)",
    certifiedSince: "2004",
    website: "https://www.knx.org",
    overview:
      "KNX is the world's only open standard for home and building automation, backed by 500+ manufacturers including Schneider Electric, ABB, Gira, and Jung. It uses a wired, decentralized bus system that's virtually maintenance-free and lasts 20+ years. As a long-serving, KNX-certified integrator in India, we've deployed KNX in luxury villas, penthouses, and commercial buildings across 25+ cities.",
    bestFor:
      "Luxury villas, penthouses, large residences, and commercial buildings where reliability and longevity matter most.",
    priceRange: "₹8–30 Lakh+ depending on property size and feature scope",
    features: [
      {
        title: "Decentralized Architecture",
        description:
          "No central server required. Each device has its own intelligence — if one fails, the rest continue working.",
      },
      {
        title: "500+ Manufacturer Ecosystem",
        description:
          "Zero vendor lock-in. Mix and match devices from Schneider, ABB, Gira, Jung, and hundreds more.",
      },
      {
        title: "20+ Year Lifespan",
        description:
          "KNX installations from the 1990s are still running. The wired bus system outlasts any wireless technology.",
      },
      {
        title: "Full Building Control",
        description:
          "Lighting, HVAC, blinds, security, energy metering, irrigation — all on a single bus cable.",
      },
      {
        title: "ETS Programming",
        description:
          "Industry-standard ETS software for commissioning. Any certified integrator worldwide can service your system.",
      },
      {
        title: "Energy Monitoring",
        description:
          "Built-in energy metering capabilities. Track consumption per circuit and automate for 20-40% savings.",
      },
    ],
    pros: [
      "Open standard — no vendor lock-in",
      "Extremely reliable wired backbone",
      "20+ year lifespan with minimal maintenance",
      "Global interoperability (500+ brands)",
      "Best for new construction and major renovations",
      "Strong resale value for property",
    ],
    cons: [
      "Higher upfront cost than wireless alternatives",
      "Requires dedicated bus wiring during construction",
      "Not ideal for retrofit without rewiring",
      "Programming requires certified KNX engineer",
    ],
    faqs: [
      {
        question: "What is the cost of KNX home automation in India?",
        answer:
          "KNX home automation in India typically costs ₹8–30 Lakh depending on property size, number of rooms, and features. A 3BHK apartment with basic KNX automation starts around ₹8 Lakh, while a luxury villa with full KNX integration can exceed ₹30 Lakh.",
      },
      {
        question: "Is KNX better than wireless smart home systems?",
        answer:
          "KNX is significantly more reliable than wireless systems because it uses dedicated wiring. It's the best choice for new constructions and renovations where wiring is accessible. Wireless systems are better for retrofits where running new cables isn't practical.",
      },
      {
        question: "How long does a KNX system last?",
        answer:
          "A KNX system typically lasts 20+ years with minimal maintenance. Many KNX installations from the early 2000s are still functioning perfectly. The wired bus architecture has no batteries to replace and no wireless interference issues.",
      },
      {
        question: "Can KNX work with Alexa and Google Home?",
        answer:
          "Yes. KNX integrates with Alexa, Google Home, Apple HomeKit, and other voice platforms through IP gateways. You get the reliability of wired automation with the convenience of voice control.",
      },
    ],
  },
  {
    slug: "crestron",
    name: "Crestron",
    tagline: "The Ultimate Custom Automation Experience",
    protocol: "Proprietary (Cresnet + IP)",
    origin: "USA (Crestron Electronics, New Jersey)",
    certifiedSince: "2012",
    website: "https://www.crestron.com",
    overview:
      "Crestron is the world's leading brand for ultra-luxury home automation and commercial AV. Every Crestron system is custom-programmed by certified engineers to deliver pixel-perfect control interfaces, seamless AV distribution, and unmatched precision. Where a client specifies Crestron — or already owns it — we integrate it into a unified, single-app home alongside the rest of the automation.",
    bestFor:
      "Ultra-luxury villas, celebrity homes, high-end penthouses, boardrooms, and clients who demand absolute perfection.",
    priceRange: "₹15–50 Lakh+ for residential; ₹50 Lakh+ for commercial",
    features: [
      {
        title: "Custom Programming",
        description:
          "Every button, scene, and automation flow is custom-coded in SIMPL or C# for pixel-perfect control.",
      },
      {
        title: "Crestron Home OS",
        description:
          "Beautiful, intuitive touch-screen interface with room-by-room control, scheduling, and scene management.",
      },
      {
        title: "AV Distribution",
        description:
          "Industry-leading DigitalMedia and NVX systems for 4K/8K video distribution across any number of zones.",
      },
      {
        title: "Lighting Design",
        description:
          "Crestron lighting with tunable white, RGBW, and DMX support for architectural lighting design.",
      },
      {
        title: "Enterprise-Grade Networking",
        description:
          "Built-in network management, remote monitoring, and OTA firmware updates across all devices.",
      },
      {
        title: "Shading & Climate",
        description:
          "Integrated motorized shading and HVAC control with occupancy-based automation.",
      },
    ],
    pros: [
      "Unmatched customization and precision",
      "Best-in-class AV distribution",
      "Beautiful, custom touch-screen interfaces",
      "Enterprise-grade reliability",
      "Remote monitoring and management",
      "Premium brand recognition",
    ],
    cons: [
      "Highest cost in the home automation market",
      "Requires certified Crestron programmer",
      "Proprietary ecosystem — vendor-dependent",
      "Changes and modifications require programmer",
    ],
    faqs: [
      {
        question: "How much does Crestron home automation cost in India?",
        answer:
          "Crestron home automation in India starts at approximately ₹15 Lakh for a premium apartment and can exceed ₹50 Lakh for a large luxury villa. The cost reflects custom programming, premium hardware, and dedicated touch-panel interfaces.",
      },
      {
        question: "Is Crestron worth the premium over KNX or Control4?",
        answer:
          "Crestron is worth it if you prioritize custom AV distribution, pixel-perfect interfaces, and absolute precision in automation. For homeowners who want the best possible experience and are willing to invest, Crestron is unmatched. KNX offers better value for pure building automation without heavy AV needs.",
      },
      {
        question: "Can I control Crestron with my phone?",
        answer:
          "Yes. Crestron Home OS includes native iOS and Android apps for full system control. You can also use dedicated Crestron touch panels, keypads, and voice control via Alexa or Google Assistant.",
      },
      {
        question: "How long does Crestron installation take?",
        answer:
          "A typical Crestron residential project takes 4-8 weeks from design to commissioning, depending on scope. This includes wiring, hardware installation, custom programming, testing, and client training.",
      },
    ],
  },
  {
    slug: "control4",
    name: "Control4",
    tagline: "Smart Automation Made Beautifully Simple",
    protocol: "Proprietary (ZigBee + IP)",
    origin: "USA (Snap One / Control4, Utah)",
    certifiedSince: "2012",
    website: "https://www.control4.com",
    overview:
      "Control4 delivers an exceptional balance of powerful automation, beautiful interfaces, and accessible pricing. It's the world's most popular premium home automation platform, now part of Snap One. Control4 supports lighting, audio, video, security, climate, and more — all controllable from elegant touch screens, keypads, or the Control4 app.",
    bestFor:
      "Premium homes and apartments that want powerful whole-home automation without Crestron-level investment.",
    priceRange: "₹5–20 Lakh depending on home size and features",
    features: [
      {
        title: "Control4 OS 3",
        description:
          "Award-winning interface with room-by-room navigation, scene management, scheduling, and When-Then automation.",
      },
      {
        title: "Multi-Room Audio",
        description:
          "Native support for streaming services with multi-zone audio distribution and Triad speakers.",
      },
      {
        title: "Broad Device Compatibility",
        description:
          "Works with 35,000+ third-party devices including Lutron, Sonos, Ring, Yale, and major AV brands.",
      },
      {
        title: "Smart Lighting",
        description:
          "Control4 dimmers, switches, and keypads with adaptive lighting, color tuning, and scene control.",
      },
      {
        title: "Intercom Anywhere",
        description:
          "Built-in video intercom between rooms, touch panels, and mobile devices — answer the door from anywhere.",
      },
      {
        title: "4Sight Remote Access",
        description:
          "Cloud-based remote access lets you control your home from anywhere and enables dealer remote support.",
      },
    ],
    pros: [
      "Excellent user interface (OS 3)",
      "More affordable than Crestron",
      "Huge third-party device compatibility",
      "Great for audio/video distribution",
      "Built-in video intercom system",
      "Active dealer support ecosystem",
    ],
    cons: [
      "Requires authorized dealer for setup",
      "Proprietary platform — some lock-in",
      "Advanced changes need dealer involvement",
      "Annual 4Sight subscription for remote access",
    ],
    faqs: [
      {
        question: "What is the cost of Control4 home automation in India?",
        answer:
          "Control4 home automation in India ranges from ₹5–20 Lakh. A 3BHK apartment with lighting, audio, and security automation starts around ₹5 Lakh, while a full villa setup with video distribution and intercom can reach ₹15–20 Lakh.",
      },
      {
        question: "Is Control4 better than KNX?",
        answer:
          "Control4 and KNX serve different needs. Control4 excels in user experience, AV integration, and ease of use. KNX excels in long-term reliability, open standards, and building automation. For AV-heavy homes, Control4 is often better. For pure building automation longevity, KNX wins.",
      },
      {
        question: "Can I add Control4 to an existing home?",
        answer:
          "Yes. Control4 supports both wired and wireless communication (ZigBee), making it suitable for retrofits. Wireless devices can be added without new wiring, though a wired backbone improves reliability.",
      },
      {
        question: "Does Control4 work with Alexa and Google Home?",
        answer:
          "Yes. Control4 has native integration with Amazon Alexa and Google Assistant for voice control of lights, scenes, music, and more.",
      },
    ],
  },
  {
    slug: "lutron",
    name: "Lutron",
    tagline: "The World Leader in Precision Lighting Control",
    protocol: "Proprietary (Clear Connect RF + Wired)",
    origin: "USA (Lutron Electronics, Pennsylvania)",
    certifiedSince: "2014",
    website: "https://www.lutron.com",
    overview:
      "Lutron invented the solid-state dimmer in 1961 and has been the global authority on lighting control ever since. Lutron systems — from Caseta to RadioRA 3 to HomeWorks QSX — deliver unmatched dimming precision, motorized shading, and energy savings. Lutron is typically used as a standalone lighting layer or integrated with a KNX backbone — we can specify and integrate it into your project.",
    bestFor:
      "Homeowners and designers who want the best possible lighting experience — dimming quality, scene control, and automated shading.",
    priceRange: "₹1.5–10 Lakh for lighting; ₹3–15 Lakh with shading",
    features: [
      {
        title: "Precision Dimming",
        description:
          "Lutron's patented dimming technology works flawlessly with LEDs, halogens, and incandescents — no flickering.",
      },
      {
        title: "RadioRA 3 / HomeWorks QSX",
        description:
          "Scalable platforms from small apartments (RadioRA) to large estates (HomeWorks QSX) with the same premium quality.",
      },
      {
        title: "Motorized Shading",
        description:
          "Serena and Palladiom shading systems with whisper-quiet motors and daylight harvesting automation.",
      },
      {
        title: "Keypads & Pico Remotes",
        description:
          "Elegant seeTouch keypads and wireless Pico remotes that blend into any interior design.",
      },
      {
        title: "Scene Control",
        description:
          "One-touch scenes for Movie, Dinner, Morning, Goodnight — controlling lights and shades together.",
      },
      {
        title: "Energy Savings",
        description:
          "Automated daylight harvesting and occupancy sensing reduce energy consumption by 20-40%.",
      },
    ],
    pros: [
      "Best dimming quality in the industry",
      "Beautiful, designer-friendly keypads",
      "Excellent motorized shading systems",
      "Reliable Clear Connect wireless",
      "Integrates with all major automation platforms",
      "Strong energy savings ROI",
    ],
    cons: [
      "Focused on lighting and shading only",
      "Premium pricing for keypads and dimmers",
      "HomeWorks QSX requires dealer programming",
      "Limited to Lutron ecosystem for core devices",
    ],
    faqs: [
      {
        question: "How much does Lutron lighting cost in India?",
        answer:
          "Lutron lighting automation in India ranges from ₹1.5–10 Lakh depending on the system (Caseta, RadioRA 3, or HomeWorks QSX) and number of rooms. A typical 3BHK with RadioRA 3 costs ₹3–5 Lakh for lighting control.",
      },
      {
        question: "Can Lutron work with KNX or Crestron?",
        answer:
          "Yes. Lutron integrates seamlessly with KNX, Crestron, Control4, and other platforms via integration protocols. Many luxury homes use KNX or Crestron for overall automation with Lutron handling the lighting layer.",
      },
      {
        question: "Is Lutron better than regular smart switches?",
        answer:
          "Lutron is significantly better than budget smart switches in dimming quality, reliability, and design. Lutron dimmers eliminate LED flickering, offer precise 0-100% dimming, and come in designer-grade keypads. Regular smart switches often flicker, have limited dimming range, and look generic.",
      },
      {
        question: "Does Lutron work with Alexa?",
        answer:
          "Yes. All Lutron systems (Caseta, RadioRA 3, HomeWorks QSX) integrate with Amazon Alexa, Google Assistant, and Apple HomeKit for voice control.",
      },
    ],
  },
  {
    slug: "sonos",
    name: "Sonos",
    tagline: "Premium Multi-Room Audio for Every Space",
    protocol: "Wi-Fi + AirPlay 2",
    origin: "USA (Sonos Inc., California)",
    certifiedSince: "2016",
    website: "https://www.sonos.com",
    overview:
      "Sonos is the world's leading multi-room audio system, delivering rich, room-filling sound with dead-simple setup and control. From the compact Era 100 to the cinematic Arc soundbar, Sonos products integrate with every major streaming service and automation platform. Sonos can be included as the audio layer in a whole-home automation package, integrated with the rest of the system.",
    bestFor:
      "Homeowners who want premium whole-home audio that's easy to use, expandable, and works with any automation system.",
    priceRange: "₹50,000–5 Lakh depending on zones and speaker selection",
    features: [
      {
        title: "Multi-Room Audio",
        description:
          "Play different music in every room, or group rooms together for synchronized playback throughout your home.",
      },
      {
        title: "Trueplay Tuning",
        description:
          "Automatic room calibration adjusts the sound profile based on your room's acoustics for optimal listening.",
      },
      {
        title: "100+ Streaming Services",
        description:
          "Native support for Spotify, Apple Music, Amazon Music, YouTube Music, and 100+ more services.",
      },
      {
        title: "Home Theater",
        description:
          "Arc, Beam, and Sub combine for a true Dolby Atmos home theater experience without complex AV wiring.",
      },
      {
        title: "Architectural Speakers",
        description:
          "Sonos by Sonance in-wall and in-ceiling speakers for invisible audio that blends into your architecture.",
      },
      {
        title: "Voice Control",
        description:
          "Built-in Alexa and Google Assistant support, plus Sonos Voice Control for private, on-device processing.",
      },
    ],
    pros: [
      "Best-in-class multi-room audio",
      "Extremely easy to set up and use",
      "Works with every streaming service",
      "Integrates with KNX, Crestron, Control4",
      "Expandable — add rooms anytime",
      "Architectural in-wall/ceiling options",
    ],
    cons: [
      "Audio only — no lighting or automation control",
      "Requires stable Wi-Fi network",
      "Premium pricing vs generic Bluetooth speakers",
      "Some advanced features need Sonos subscription",
    ],
    faqs: [
      {
        question: "How much does a Sonos multi-room setup cost in India?",
        answer:
          "A Sonos multi-room audio setup in India costs ₹50,000–5 Lakh depending on the number of zones and speaker models. A basic 3-room setup with Era 100 speakers starts around ₹1 Lakh. A full home theater + multi-room system can reach ₹3–5 Lakh.",
      },
      {
        question: "Can Sonos integrate with home automation systems?",
        answer:
          "Yes. Sonos integrates natively with Control4, Crestron, Savant, and other automation platforms. It can also be controlled via KNX through IP integration — a popular choice for the audio layer in a whole-home automation package.",
      },
      {
        question: "Is Sonos better than a traditional AV receiver setup?",
        answer:
          "Sonos is better for multi-room audio distribution and ease of use. Traditional AV receivers are better for dedicated home theater rooms where you need 7.1+ surround sound with separate speakers. Many homes use both — Sonos for whole-home audio and a dedicated AV receiver for the theater room.",
      },
      {
        question: "Do I need special wiring for Sonos?",
        answer:
          "Standard Sonos speakers are wireless and only need power outlets. Sonos by Sonance architectural (in-wall/ceiling) speakers require speaker wire runs during construction. We recommend planning ceiling speaker locations during the design phase.",
      },
    ],
  },
  {
    slug: "schneider-electric",
    name: "Schneider Electric",
    tagline: "Wired KNX Intelligence, Wireless Wiser Comfort",
    protocol: "KNX (wired) + Wiser (Zigbee / Wi-Fi / Matter)",
    origin: "France (Schneider Electric, Rueil-Malmaison)",
    website: "https://www.se.com/in/en/",
    overview:
      "Schneider Electric is one of the world's largest energy-management and electrical companies and a founding force behind the global KNX open standard. In smart homes it plays at two tiers: the professional, wired KNX system (Unica KNX keypads, touch units, thermostats, lighting and HVAC control) for villas and large projects, and the retrofit-friendly wireless Wiser range (smart switches, dimmers, energy management, app and voice control) for apartments and existing homes. We design and install both — scaling from a single smart switch to a fully managed residence.",
    bestFor:
      "Homeowners wanting a globally backed, standards-based system — KNX for new villas, Wiser for retrofit apartments without rewiring.",
    priceRange:
      "Indicative ₹1.5–6 Lakh for a Wiser retrofit of a 2–3 BHK; ₹8–30 Lakh+ for a wired KNX villa, depending on size, points and finishes",
    features: [
      { title: "KNX Open Standard", description: "Wired, vendor-neutral bus that interoperates with thousands of certified devices worldwide." },
      { title: "Unica KNX Keypads", description: "Elegant push-button and touch keypads with thermostat options and premium metal finishes." },
      { title: "Wiser Retrofit Range", description: "Wireless switches, dimmers and modules that upgrade existing homes in hours without rewiring." },
      { title: "Energy Management", description: "Wiser monitors and optimises home energy use for efficiency and lower bills." },
      { title: "Matter & Zigbee", description: "Wiser supports Zigbee and Matter for broad cross-brand device compatibility." },
      { title: "App & Voice Control", description: "Control lighting, climate and scenes via the Wiser app, Alexa and Google Assistant." },
    ],
    pros: [
      "Backed by a 180+ year global engineering company with strong India presence",
      "KNX is a future-proof, open standard — no single-vendor lock-in",
      "Two tiers: wired KNX for villas, wireless Wiser for retrofits",
      "Wide local availability and service network in India",
      "Premium keypad finishes suit luxury interiors",
      "Strong energy-management and sustainability focus",
    ],
    cons: [
      "Full KNX systems are premium-priced and need a trained integrator to program",
      "Wiser and KNX are largely separate ecosystems — not one unified platform",
      "KNX commissioning adds project time and cost",
      "Wiser's standard warranty is shorter than some premium rivals",
    ],
    faqs: [
      { question: "What is the difference between KNX and Wiser?", answer: "KNX is Schneider's professional wired bus system, ideal for new villas where cabling is planned and you want a future-proof open standard. Wiser is the wireless retrofit range that upgrades an existing flat without breaking walls. We help you choose based on whether your home is under construction or already finished." },
      { question: "Can Wiser be installed in an existing apartment without rewiring?", answer: "Yes. Wiser smart switches and modules fit into existing switch boxes and connect wirelessly over Zigbee/Wi-Fi, so a typical 2–3 BHK can be made smart in a day with no wall damage. Indicative cost for such a retrofit starts around ₹1.5 Lakh depending on the number of points." },
      { question: "Is KNX worth it for an Indian home?", answer: "For large villas and high-end homes where reliability and a single integrated system matter, wired KNX is a sound long-term investment, typically ₹8 Lakh and up. Because KNX is an open standard, you are never locked to one brand for future expansion." },
      { question: "Does Schneider work with Alexa and Google Assistant?", answer: "Yes. The Wiser range supports Amazon Alexa and Google Assistant, and its move to Matter improves compatibility with other smart-home brands. KNX systems can also be bridged to voice assistants during integration." },
    ],
  },
  {
    slug: "ajax",
    name: "Ajax Systems",
    tagline: "Award-Winning Wireless Security, Beautifully Simple",
    protocol: "Jeweller wireless radio (+ Fibra wired)",
    origin: "Ukraine (Ajax Systems, Kyiv)",
    website: "https://ajax.systems/",
    overview:
      "Ajax Systems is Europe's largest manufacturer of wireless security systems. Its hub-based platform uses the encrypted Jeweller radio protocol — long range, low power and multi-year battery life — to link motion, door, glass-break, fire and flood detectors, sirens and keypads. In a smart home it sits as the dedicated intrusion-and-life-safety layer, controlled and monitored entirely through the Ajax app, and we integrate it alongside a wider automation system where needed.",
    bestFor:
      "Villas, apartments and offices wanting a clean, wireless, professionally monitored alarm system without breaking walls.",
    priceRange:
      "Indicative ₹35,000–1,50,000 for a typical home, depending on size, number of detectors, hub model and outdoor sensors (basic StarterKit ~₹20,000–25,000)",
    features: [
      { title: "Jeweller Protocol", description: "Encrypted radio with long range and years of battery life per device." },
      { title: "Hub-Based Architecture", description: "A central hub analyses threats and pushes instant alerts to your phone." },
      { title: "Wireless Installation", description: "No wall-breaking or messy cabling, so setup is fast and clean." },
      { title: "Power Backup", description: "Devices and hub keep running through mains power failures." },
      { title: "Anti-Tamper & Anti-Jamming", description: "Built-in detection resists sabotage, jamming and false alarms." },
      { title: "App Control & Automation", description: "Arm/disarm, monitor and switch appliances via relays from the Ajax app." },
    ],
    pros: [
      "Europe's most award-winning wireless alarm system",
      "Fully wireless — fast, clean installation with no wall damage",
      "Long battery life and power-failure backup",
      "Strong anti-jamming, anti-tamper and false-alarm filtering",
      "Scalable: add fire, flood, outdoor and relay devices over time",
      "Sleek, design-led hardware suited to premium interiors",
    ],
    cons: [
      "Premium-priced versus generic alarm kits",
      "Smaller India service footprint than incumbent CCTV brands",
      "Primarily a security system, not a full automation platform",
      "Cellular/cloud monitoring depends on connectivity",
    ],
    faqs: [
      { question: "Is Ajax suitable for Indian homes and apartments?", answer: "Yes. Ajax is fully wireless, so it suits both new villas and existing apartments without any wall-breaking. Its hub keeps working on backup power during the outages common in many areas, and hubs with a SIM stay connected even if Wi-Fi drops." },
      { question: "How much does an Ajax system cost in India?", answer: "A basic StarterKit retails around ₹20,000–25,000, while a fuller home setup with extra detectors, outdoor sensors and a siren typically runs ₹35,000 to ₹1,50,000 depending on coverage. We scope the exact device count after a site survey." },
      { question: "What happens during a power cut or internet outage?", answer: "Ajax devices run on long-life batteries and the hub has its own backup power, so protection continues during a power cut. Hubs with a cellular SIM also stay connected for alerts even if your broadband drops." },
      { question: "Can Ajax control appliances or only security?", answer: "Ajax is primarily a wireless security and life-safety system, but it can switch appliances through relay modules from the app. For full lighting, climate and scene automation we pair it with a dedicated system such as KNX or Wiser." },
    ],
  },
  {
    slug: "vimar",
    name: "Vimar",
    tagline: "Italian-Made Smart Living, Beautifully Wired",
    protocol: "KNX (By-me Plus) + View Wireless (Zigbee / BLE)",
    origin: "Italy (Vimar S.p.A., Marostica)",
    website: "https://www.vimar.com",
    overview:
      "Vimar is a 1945-founded Italian manufacturer of electrical wiring devices and smart-home systems, exporting to around 110 countries. Its portfolio spans the By-me Plus bus system (open to the KNX protocol) for full home automation and the View Wireless range (Zigbee/Bluetooth) for retrofit control by swapping existing switches. In a smart home it sits at the wiring and control layer — switches, sockets, thermostats, shutter and lighting control — with Italian design finishes and KNX interoperability.",
    bestFor:
      "Homeowners and architects wanting Italian-design wiring devices with a path from simple wireless retrofit to full KNX-grade automation.",
    priceRange:
      "Indicative ₹2.5–8 Lakh for a mid-size apartment on View Wireless; ₹10–30 Lakh+ for a KNX-integrated villa, depending on points, panels and import (India list pricing is limited)",
    features: [
      { title: "By-me Plus Bus", description: "Wired home-automation system whose protocol is open to the KNX language for cross-brand interoperability." },
      { title: "View Wireless Retrofit", description: "Adds smart control by replacing only switches, over Zigbee and Bluetooth, without rewiring." },
      { title: "KNX-Certified Devices", description: "KNX-certified products interoperate with other manufacturers' KNX equipment." },
      { title: "Touch-Screen Panels", description: "By-me Plus offers 7-inch and 10-inch in-wall touch panels in black and white." },
      { title: "Italian Wiring Design", description: "Civil-series switches and sockets carry Made-in-Italy aesthetics and finishes." },
      { title: "View App & Cloud", description: "The View ecosystem enables remote app control of lighting, climate, shutters and energy." },
    ],
    pros: [
      "Genuine Made-in-Italy build quality and design finishes",
      "Both wired (By-me/KNX) and wireless (View) paths under one brand",
      "KNX openness avoids single-vendor lock-in",
      "Strong on energy management and metering",
      "Scales from a single room to a full villa",
      "Established, financially stable manufacturer (since 1945)",
    ],
    cons: [
      "Limited, thinly documented India distribution and after-sales network",
      "Imported pricing and lead times higher than domestic brands",
      "KNX/By-me commissioning needs a trained integrator",
      "Less brand recognition in India versus mainstream switch makers",
    ],
    faqs: [
      { question: "Is Vimar available and supported in India?", answer: "Vimar exports to around 110 countries and has India distributors, so products can be sourced and installed here. Local stocking and after-sales depth are more limited than mainstream Indian brands, so it is best deployed by an experienced integrator who can manage imports and spares." },
      { question: "What's the difference between By-me Plus and View Wireless?", answer: "By-me Plus is a wired bus system (open to KNX) suited to new builds and full-villa automation, while View Wireless retrofits existing homes by swapping switches over Zigbee/Bluetooth. For a renovation without rewiring, View Wireless is usually the practical choice; for a ground-up project, By-me Plus/KNX gives deeper integration." },
      { question: "Roughly what does a Vimar smart home cost in India?", answer: "As an indicative figure, expect around ₹2.5–8 Lakh for a mid-size apartment on View Wireless and ₹10–30 Lakh+ for a large KNX-integrated villa. Final cost depends on home size, number of control points, panels and import margins, so get a measured quote." },
      { question: "Does Vimar work with KNX and other systems?", answer: "Yes — By-me Plus is open to the KNX protocol, and KNX-certified Vimar devices interoperate with other manufacturers' KNX gear for lighting, HVAC, security and energy. This makes Vimar a sound choice in the mixed-brand KNX projects common in premium villas." },
    ],
  },
  {
    slug: "elan",
    name: "ELAN",
    tagline: "One App for the Whole Connected Home",
    protocol: "Whole-home control & AV platform (IP)",
    origin: "USA (ELAN / Nice, Lexington, Kentucky)",
    website: "https://www.elanhomesystems.com",
    overview:
      "ELAN, founded in 1989 and now part of Nice (which absorbed Nortek Security & Control), is a whole-home control and AV-automation platform. A single ELAN app and interface unifies security, climate, lighting, entertainment, multi-room audio/video, surveillance and intercom. It sits at the top 'brain' layer of a smart home, orchestrating equipment from many brands rather than acting as the wiring devices themselves — which makes it well suited to large, AV-rich villas.",
    bestFor:
      "Luxury homeowners wanting a single, dealer-installed interface that ties together high-end AV, security and automation across the whole house.",
    priceRange:
      "Indicative ₹6–15 Lakh for a controller-plus-app setup in a premium apartment; ₹20 Lakh–1 Crore+ for a large villa with multi-room AV, surveillance and security (dealer-quoted per home)",
    features: [
      { title: "Single-App Control", description: "One ELAN interface manages security, climate, entertainment, surveillance and video distribution." },
      { title: "Whole-Home AV", description: "Distributes house-wide audio and video across multiple rooms and zones." },
      { title: "Voice Assistant", description: "A natively integrated voice assistant controls media, cameras, climate, lighting and shades." },
      { title: "Broad Integrations", description: "Works with HVAC, lighting, security, cameras/NVR and third-party AV equipment." },
      { title: "Touch Panels & Remotes", description: "Responsive touch panels and ergonomic handheld remotes for room-to-room control." },
      { title: "Nice Ecosystem", description: "Backed by Nice/Nortek brands such as SpeakerCraft and Furman for a fuller AV stack." },
    ],
    pros: [
      "True single-interface control across many sub-systems",
      "Excellent for whole-home and multi-room AV distribution",
      "Native voice assistant with deep system control",
      "Backed by a large global parent (Nice) with sister AV brands",
      "Mature platform with 35+ years of automation heritage",
      "Regular software upgrades add features over time",
    ],
    cons: [
      "Dealer-installed system — not DIY or off-the-shelf",
      "Proprietary platform means partial lock-in to ELAN/Nice",
      "AV-centric; less focused on the switch/wiring layer",
      "Limited public India pricing and a narrower local base",
    ],
    faqs: [
      { question: "Who owns ELAN now — is it the same as Nice/Nortek?", answer: "ELAN began in Lexington, Kentucky in 1989 and later became part of Nortek Security & Control, which Nice acquired. Nice has since unified the portfolio, so you may see it branded as 'Nice (formerly ELAN)', but the ELAN control system remains the product line." },
      { question: "What makes ELAN good for a large Indian villa?", answer: "ELAN is built to distribute audio and video across many rooms and unify AV, lighting, climate, cameras and security into one app. That suits large villas with home theatres and multi-room music, where a single control layer over mixed equipment is valuable." },
      { question: "Roughly what does an ELAN system cost in India?", answer: "ELAN is quoted per project rather than list-priced, so figures are indicative: around ₹6–15 Lakh for a controller-plus-app setup in a premium apartment, and ₹20 Lakh to ₹1 Crore+ for a large villa with multi-room AV and security. Cost scales with zones, sub-systems and the gear ELAN controls." },
      { question: "Can ELAN control equipment from other brands?", answer: "Yes — ELAN is designed as a top-layer controller that integrates third-party HVAC, lighting, security, cameras/NVR and AV under one interface. This is its core strength in premium homes that mix multiple equipment brands. We confirm device drivers during design." },
    ],
  },
  {
    slug: "drainvac",
    name: "DrainVac",
    tagline: "Powerful Central Vacuums With Patented Auto-Drain",
    protocol: "Central (ducted) vacuum systems — wet & dry",
    origin: "Canada (DrainVac International, Quebec)",
    website: "https://www.drainvac.com",
    overview:
      "DrainVac is a Quebec-based manufacturer that has produced central (ducted) vacuum systems for around 45 years and developed the first central vacuum with a patented automatic drain, enabling true wet-and-dry pickup. The power unit sits in a utility area and connects via in-wall PVC piping to inlet points around the home, so a lightweight hose plugs in at each room. In India it is supplied and installed through a partner network across 25+ cities.",
    bestFor:
      "Premium villas and large homes (and hotels) wanting quiet, high-suction, fully ducted cleaning with hospital-grade dust removal and no portable canister.",
    priceRange:
      "Indicative ₹1.2–4.5 Lakh+ for a fitted residential system, depending on home size, number of inlet valves, piping runs and dry vs wet/dry power unit",
    features: [
      { title: "Patented Auto-Drain", description: "DrainVac pioneered the central vacuum with an automatic drain, letting it pick up liquids and clear a blocked sink in seconds." },
      { title: "Wet & Dry Pickup", description: "Wet/dry models vacuum both dry debris and spills, unlike standard dry-only central vacuums." },
      { title: "Quiet Operation", description: "The motor sits away from living areas and soundproofed units run around 58 dB, so cleaning is near-silent indoors." },
      { title: "Ducted Whole-Home Reach", description: "In-wall PVC piping connects to inlet valves throughout the home so a light hose plugs in room to room." },
      { title: "Better Indoor Air", description: "Dust and allergens are exhausted to the utility unit rather than recirculated into living spaces." },
      { title: "Durable Canisters", description: "Large polyethylene and galvanized or stainless-steel canisters resist rust and last for years." },
    ],
    pros: [
      "Genuinely strong, constant suction with no loss as it fills",
      "Wet + dry capability most central vacuums lack",
      "Very quiet at the point of use",
      "Removes dust and allergens from the living space",
      "Long-life, corrosion-resistant build from a 45+ year specialist",
      "Established India installation and service network",
    ],
    cons: [
      "High upfront cost and disruptive to retrofit — best designed in at construction",
      "Requires in-wall piping and a dedicated utility/plant space",
      "Single-brand dependence for parts and servicing",
      "Published transparent INR pricing is limited; quotes are site-by-site",
    ],
    faqs: [
      { question: "Can DrainVac be installed in an already-built Indian home?", answer: "Yes, but it's far easier and cheaper in a home under construction or renovation, because the PVC piping runs inside walls and floors. Retrofitting an occupied home means surface conduits or chasing walls, which adds cost and mess. For new villas, designing the ducting in at the civil/MEP stage is strongly recommended." },
      { question: "What does a DrainVac system cost to install in India?", answer: "As an indicative range, a fitted residential system typically runs about ₹1.2–4.5 Lakh+, driven mainly by home size, the number of inlet points and whether you choose a dry or wet/dry power unit. Power-unit-only prices are lower but exclude piping, inlets and labour, so get a survey-based quote." },
      { question: "Is it noisy inside the house?", answer: "No — that's a core benefit. The power unit lives in a garage, utility or service room, so motor noise stays away from living spaces, and soundproofed models are rated around 58 dB. At the inlet you mainly hear airflow, not the motor." },
      { question: "Does it really pick up water and spills?", answer: "DrainVac's wet/dry models, built around its patented automatic drain, can vacuum liquids and even clear a blocked sink in seconds — useful in kitchens, utility areas and wet zones. Dry-only series are also available if liquid pickup isn't needed, usually at a lower price." },
    ],
  },
  {
    slug: "dali",
    name: "DALI",
    tagline: "Open Digital Standard for Smart Lighting",
    protocol: "Lighting-control standard (IEC 62386)",
    origin: "International (DALI Alliance / DiiA)",
    website: "https://www.dali-alliance.org",
    overview:
      "DALI (Digital Addressable Lighting Interface) is the internationally standardized, open digital protocol for communication between lighting-control devices, defined by IEC 62386 and governed by the DALI Alliance. It uses a simple two-wire, polarity-independent control bus to give two-way communication — fixtures not only receive dim/on-off commands but report status and faults back. Because it's an open, certified protocol, drivers and controllers from different manufacturers interoperate, and we use it as the lighting-control layer that ties dimmable LED drivers, sensors and scene controllers into a home or building automation system.",
    bestFor:
      "Premium homes, hotels and large villas wanting precise, scalable, multi-brand dimmable lighting with scenes, daylight/occupancy response and individually addressable fixtures.",
    priceRange:
      "Indicative ₹2,500–8,000+ per light point for the DALI driver and control bus, plus controllers and gateways; whole-home systems commonly ₹2–10 Lakh+ depending on fittings, scenes and head-end",
    features: [
      { title: "Two-Way Communication", description: "Fixtures both receive commands and report status, faults and lamp failures back to the controller." },
      { title: "Individual Addressing", description: "Each driver gets its own address, so single fixtures, groups or all lights can be controlled independently." },
      { title: "Software Reconfiguration", description: "Groups and scenes are set in software, so lighting zones can be rezoned without rewiring." },
      { title: "Simple Two-Wire Bus", description: "A single polarity-independent control pair runs to all fixtures, simplifying wiring versus analog control." },
      { title: "Multi-Brand Interoperability", description: "DALI-2 certification guarantees products from different manufacturers work together on the same bus." },
      { title: "Open IEC Standard", description: "Defined by IEC 62386 and free for any manufacturer to implement, avoiding proprietary lock-in." },
    ],
    pros: [
      "Open, vendor-neutral standard — not locked to one brand",
      "Precise, flicker-free digital dimming and per-fixture control",
      "Two-way feedback enables fault detection and energy monitoring",
      "Easy rezoning and scenes in software without rewiring",
      "Scales from a single room to large buildings on one bus",
      "Integrates cleanly with KNX and Crestron via gateways",
    ],
    cons: [
      "Higher upfront cost than basic on/off or simple analog dimming",
      "Requires DALI-compatible drivers/fixtures plus a control bus and gateway",
      "Needs skilled commissioning and addressing — not DIY",
      "A control layer only; quality still depends on the chosen luminaires",
    ],
    faqs: [
      { question: "Is DALI a brand I'm buying, or a standard?", answer: "It's an open standard, not a single brand — the DALI Alliance governs it under IEC 62386, and many manufacturers make DALI drivers, sensors and controllers. We use DALI as the lighting-control layer and select certified components from multiple brands to suit your project, so you're never locked into one vendor." },
      { question: "How much does DALI add to a lighting project in India?", answer: "As an indicative figure, budget roughly ₹2,500–8,000+ per light point for the DALI driver and control bus, plus controllers and sensors, so a whole-home system commonly lands at ₹2–10 Lakh+. That's the control-layer cost on top of the luminaires; final pricing depends on the number of fittings and scenes." },
      { question: "Can DALI work with my KNX or Crestron home automation?", answer: "Yes — DALI is commonly used as the lighting layer beneath a KNX or Crestron system via a DALI gateway, so lights join the same scenes, app and voice control as blinds, AC and AV. This combines DALI's fine lighting control with the broader automation backbone in one system." },
      { question: "Do all my lights have to be the same brand for DALI?", answer: "No. DALI-2 certification mandates interoperability, so certified drivers and fixtures from different manufacturers work together on the same bus. This lets us mix the best luminaires for each space while keeping unified control." },
    ],
  },
  {
    slug: "digilux",
    name: "Digilux",
    tagline: "A Smart Home Within Your Budget",
    protocol: "Zigbee mesh + Wi-Fi (wireless)",
    origin: "India (Digilux Automation, Bengaluru)",
    website: "https://www.digilux.co.in",
    overview:
      "Digilux is a Bengaluru-based home-automation company (founded 2016) built around wireless Zigbee mesh technology, positioned as an affordable retrofit solution that converts existing homes into smart homes without rewiring. Its system centres on a network controller/gateway managing lighting, appliances, entertainment and security via app, voice, scenes and scheduling, with a newer Wi-Fi 'Digilux AI' line that works with Alexa and Google Assistant. We use it where a budget-friendly, retrofit-first wireless system fits the brief.",
    bestFor:
      "Budget-conscious homeowners and builders wanting a retrofit smart-home upgrade on existing wiring, without the cost of premium wired systems like KNX.",
    priceRange:
      "Indicative ₹50,000–3,00,000 for a full home, depending on home size, number of rooms/circuits automated and product range",
    features: [
      { title: "Zigbee Mesh Network", description: "Devices form a self-healing wireless mesh, so control works without line-of-sight." },
      { title: "True Retrofit Install", description: "Modules fit behind existing switches, converting finished homes to smart homes without rewiring." },
      { title: "Central Gateway Control", description: "A network controller manages lighting, appliances, entertainment and security from one hub." },
      { title: "App, Voice & Scenes", description: "Control via mobile app, voice commands, preset scenarios and time scheduling." },
      { title: "Wide-Voltage Operation", description: "Designed to operate across the wide, variable mains conditions common in Indian homes." },
      { title: "Alexa & Google", description: "The Wi-Fi 'Digilux AI' panel works with Amazon Alexa and Google Assistant." },
    ],
    pros: [
      "Genuinely affordable versus premium wired systems",
      "No rewiring — true retrofit, good for finished homes",
      "Indian company with a large install base and builder relationships",
      "Multiple product ranges (glass / entry / in-wall)",
      "Voice, app, scene and schedule control",
      "Zigbee mesh needs no line-of-sight for reliable indoor range",
    ],
    cons: [
      "Lesser-known brand than global names; smaller support ecosystem",
      "Public per-product pricing is limited (mostly quote-based)",
      "Two parallel stacks (Zigbee mesh vs newer Wi-Fi) can confuse buyers",
      "Not a wired-bus standard — less suited to ultra-premium large villas",
    ],
    faqs: [
      { question: "Is Digilux an Indian brand?", answer: "Yes — Digilux Automation Pvt. Ltd. is headquartered in Bengaluru and was founded in 2016. It's positioned as an affordable, retrofit-first Indian home-automation brand." },
      { question: "Does Digilux need rewiring?", answer: "No — it's a retrofit system whose modules sit behind existing switches, so finished homes can be automated without tampering with the wiring. That makes it a practical choice for occupied apartments and villas." },
      { question: "What technology does Digilux use?", answer: "Primarily wireless Zigbee mesh, which is self-healing and doesn't need line-of-sight. The newer Digilux AI Wi-Fi panel works with Alexa and Google Assistant for voice control." },
      { question: "How much does a Digilux smart home cost?", answer: "As an indicative range, a full home typically runs ₹50,000 to ₹3,00,000 depending on size and the number of circuits automated — substantially less than premium wired systems. We scope the exact cost after understanding your rooms and requirements." },
    ],
  },
];

export function getBrandBySlug(slug: string): BrandDetail | undefined {
  return BRAND_DETAILS.find((b) => b.slug === slug);
}
