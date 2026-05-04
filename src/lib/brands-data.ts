export type BrandDetail = {
  slug: string;
  name: string;
  tagline: string;
  protocol: string;
  origin: string;
  certifiedSince: string;
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
      "KNX is the world's only open standard for home and building automation, backed by 500+ manufacturers including Schneider Electric, ABB, Gira, and Jung. It uses a wired, decentralized bus system that's virtually maintenance-free and lasts 20+ years. As India's longest-serving KNX partner, we've deployed KNX in luxury villas, penthouses, and commercial buildings across 15+ cities.",
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
      "Crestron is the world's leading brand for ultra-luxury home automation and commercial AV. Every Crestron system is custom-programmed by certified engineers to deliver pixel-perfect control interfaces, seamless AV distribution, and unmatched precision. We are a certified Crestron dealer and programmer with installations in Mumbai, Delhi, Hyderabad, and Bangalore.",
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
      "Lutron invented the solid-state dimmer in 1961 and has been the global authority on lighting control ever since. Lutron systems — from Caseta to RadioRA 3 to HomeWorks QSX — deliver unmatched dimming precision, motorized shading, and energy savings. We install Lutron as a standalone lighting system or integrated with KNX, Crestron, or Control4.",
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
      "Sonos is the world's leading multi-room audio system, delivering rich, room-filling sound with dead-simple setup and control. From the compact Era 100 to the cinematic Arc soundbar, Sonos products integrate with every major streaming service and automation platform. We design and install Sonos systems as part of whole-home automation packages.",
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
          "Yes. Sonos integrates natively with Control4, Crestron, Savant, and other automation platforms. It can also be controlled via KNX through IP integration. We typically include Sonos as the audio layer in our whole-home automation packages.",
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
];

export function getBrandBySlug(slug: string): BrandDetail | undefined {
  return BRAND_DETAILS.find((b) => b.slug === slug);
}
