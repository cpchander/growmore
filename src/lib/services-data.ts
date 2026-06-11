import { COMPANY } from "@/lib/constants";

export type ServiceContent = {
  slug: string;
  headline: string;
  introduction: string;
  whatItIs: string;
  whyItMatters: string;
  howWeDoIt: { step: string; detail: string }[];
  useCases: { title: string; description: string }[];
  pricing: { tier: string; range: string; includes: string }[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
  // Optional — used by Home Automation to show wired-vs-wireless positioning,
  // an "everything we automate" grid, and a second (wireless) pricing table.
  systems?: { knx: string; wireless: string };
  automate?: { title: string; description: string }[];
  pricingWireless?: { tier: string; range: string; includes: string }[];
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "home-automation",
    headline: "Complete Smart Home Automation Solutions in India",
    introduction: `Home automation integrates lighting, security, climate, entertainment, and appliance control into a unified intelligent system that you can manage from a single app, voice command, or touch panel. ${COMPANY.name} has been delivering whole-home automation across India for ${COMPANY.experience} years — designing systems that simplify daily life, enhance security, cut energy bills by 20–40%, and significantly increase property value.`,
    whatItIs: `Home automation — also called smart home technology or domotics — uses sensors, controllers, and a communication protocol (wired like KNX or wireless like ZigBee/Z-Wave) to connect every device in your home. A centralized processor or distributed intelligence coordinates actions: lights dim automatically at sunset, the AC adjusts when you leave, curtains close during peak heat, and the security system arms itself at night. The result is a home that anticipates your needs and responds without manual intervention.`,
    whyItMatters: `Indian homeowners are spending ₹1–2 Crore on properties but living with light switches from the 1990s. Smart home automation is no longer a luxury — it's a practical investment. Automated energy management alone saves ₹30,000–80,000 per year on electricity in a typical 3BHK. Beyond savings, automation delivers convenience (one-touch scenes for morning, movie, dinner, goodnight), security (real-time alerts, smart locks, CCTV integration), and a future-proof home that commands 10–15% higher resale value.`,
    howWeDoIt: [
      { step: "Discovery & Consultation", detail: "Our engineers visit your home or review your floor plans. We understand your lifestyle, pain points, and budget to recommend the right protocol (KNX, Crestron, Control4, or Lutron) and feature scope." },
      { step: "System Design & 3D Visualization", detail: "We produce detailed system schematics, wiring layouts, and 3D visualizations showing how automation will look and feel in your space. Every switch location, sensor placement, and scene is planned." },
      { step: "Wiring & Infrastructure", detail: "Our certified electricians run dedicated automation wiring (bus cables, Cat6, HDMI runs) alongside your regular electrical work. For retrofits, we use wireless protocols to minimize disruption." },
      { step: "Hardware Installation", detail: "Controllers, actuators, dimmers, sensors, touch panels, and keypads are installed and physically commissioned. Every device is tested individually before system integration." },
      { step: "Programming & Scene Creation", detail: "Our certified programmers configure automation logic, create scenes (Morning, Movie, Dinner, Goodnight, Away), set schedules, and integrate voice assistants (Alexa, Google, Siri)." },
      { step: "Training & Handover", detail: "We train you and your family on using the system — app controls, touch panels, voice commands, and manual overrides. You receive a complete system documentation package." },
    ],
    useCases: [
      { title: "Luxury Villas & Bungalows", description: "Full KNX or Crestron automation covering 15–30 rooms with motorized curtains, multi-zone HVAC, landscape lighting, gate automation, and dedicated home theater." },
      { title: "Premium Apartments (3BHK–5BHK)", description: "Control4 or Lutron-based packages with smart lighting scenes, split AC automation, video door phone, and multi-room audio. Most popular segment." },
      { title: "Farmhouses & Weekend Homes", description: "Remote monitoring and control via app — check CCTV, control lights, manage irrigation, and pre-cool the house before you arrive." },
      { title: "Penthouse & Duplex Units", description: "Multi-floor automation with floor-wise zones, staircase lighting automation, terrace scene control, and elevator integration." },
    ],
    systems: {
      knx: "Built for new constructions and full renovations, where the infrastructure can be planned from the ground up. KNX is bus-wired, rock-solid and infinitely scalable — engineered to last 25+ years. It's the right choice for villas and homes being built or gutted, delivering unmatched reliability across lighting, climate, shading, AV and security.",
      wireless: "Ideal for retrofits, rentals and already-finished homes — smart living with no walls broken, installed in days. Zigbee / Wi-Fi mesh delivers most of what a wired system does (lighting, curtains, climate, locks, CCTV, audio) with zero civil work, so you can upgrade without the construction mess.",
    },
    automate: [
      { title: "Lighting", description: "Walk into a room and have the lights set the exact mood — dim for a movie, wake to a sunrise scene, schedule everything, and never leave a light on again." },
      { title: "Curtains, Blinds & Shading", description: "Curtains open with the morning sun and close at a tap of “Goodnight.” Blinds shade the harsh afternoon automatically — effortless comfort you didn't know you were missing." },
      { title: "Climate & HVAC", description: "Come home to a perfectly cooled room without running the AC all day. Zone-by-zone control learns your schedule and cuts electricity bills without compromising comfort." },
      { title: "Security & Access", description: "Know who's at the door before you open it, get alerts the moment someone enters, and lock or unlock from anywhere in the world." },
      { title: "Entertainment & AV", description: "One button dims the lights, closes the curtains, drops the projector and starts the movie. Multi-room audio follows you from bedroom to kitchen to terrace." },
      { title: "Doors, Gates & Access", description: "Never step out in the rain to open a gate again. Grant a guest entry from your phone, and set the garage to close every night automatically." },
      { title: "Garden & Landscape", description: "Irrigation runs on schedule and adjusts to rain sensors; landscape lighting glows at sunset — your outdoors as smart as your interiors." },
      { title: "Appliances & Devices", description: "Turn off everything with one tap as you leave, heat the geyser before your shower, and charge the EV at off-peak hours — using the appliances you already own." },
      { title: "Energy & Power", description: "See exactly where your electricity goes, manage solar, battery and grid on one dashboard, and shift heavy loads to off-peak hours to save every month." },
      { title: "Air Quality", description: "Real-time sensors track CO₂, PM2.5, humidity and VOCs, triggering purifiers and fresh-air systems automatically so you breathe cleaner air without thinking about it." },
      { title: "Utility Systems", description: "Monitor sump and overhead tank levels, shut off the supply the instant a leak is detected, and run pumps only when needed — the silent systems, finally intelligent." },
      { title: "Scenes & Modes", description: "Where it all comes together: a “Good Morning” scene opens curtains, plays music and starts the coffee; a “Leaving Home” mode powers down, arms security and locks up in one tap." },
    ],
    pricing: [
      { tier: "Essential", range: "₹4–7 Lakh", includes: "Smart lighting (scenes + dimming), 2–3 AC automation, basic keypads, app + voice control. Best for 2–3BHK." },
      { tier: "Premium", range: "₹7–15 Lakh", includes: "Full lighting + curtain automation, multi-zone HVAC, TV & DTH control, premium keypads. Best for 3–5BHK & mid-size villas." },
      { tier: "Luxury", range: "₹15–30 Lakh", includes: "Whole-home KNX, motorized everything, home theatre, landscape automation, smart locks, intrusion, multi-room audio, dedicated touch panels, gate/elevator integration." },
      { tier: "Ultra Luxury", range: "₹30–50 Lakh+", includes: "The complete Grow More experience — KNX whole-home intelligence, custom scenes, architectural lighting, full estate security with AI analytics, VRV/VRF climate, multi-room audio, motorized blinds, solar & energy monitoring, structured networking, central vacuum and a dedicated project manager." },
    ],
    pricingWireless: [
      { tier: "Essential", range: "₹1.5–3 Lakh", includes: "Smart living with no walls broken — Wi-Fi lighting control, 2–3 AC automation, app + voice (Alexa/Google). Installed in days. Best for 2–3BHK apartments & rentals." },
      { tier: "Premium", range: "₹3–5 Lakh", includes: "A full smart-home upgrade without the construction mess — Zigbee mesh lighting, motorized curtains, multi-zone AC, smart locks, video door phone, motion sensors. All retrofittable." },
      { tier: "Luxury", range: "₹5–10 Lakh+", includes: "The complete wireless smart home — Zigbee mesh backbone, architectural lighting scenes, motorized blinds, multi-zone climate, CCTV, multi-room audio, intrusion sensors, dedicated touch panels. Zero structural disruption." },
    ],
    whyChooseUs: [
      `${COMPANY.experience} years — India's longest-serving home automation company`,
      "Certified KNX, Crestron, Control4, and Lutron partner — we don't sell one brand, we recommend the best fit",
      `${COMPANY.projectsCompleted} successful installations across ${COMPANY.citiesServed} cities`,
      "End-to-end in-house team — no subcontracting. Design, wiring, installation, and programming under one roof",
      "1-year comprehensive warranty + AMC plans with 24/7 emergency support",
      "Live Experience Center in Delhi — see automation working before you invest",
    ],
    faqs: [
      { question: "What is the cost of home automation in India?", answer: `Home automation costs in India range from ₹2–5 Lakh for basic smart lighting and security in a 2–3BHK, ₹5–15 Lakh for comprehensive automation in a 3–5BHK, and ₹15–50 Lakh+ for luxury whole-home systems in villas. The cost depends on home size, chosen brand (KNX, Crestron, Control4, Lutron), and feature scope. ${COMPANY.name} offers free consultation to provide an accurate estimate for your specific requirements.` },
      { question: "Can home automation be added to an existing home?", answer: "Yes. For existing homes (retrofits), we use wireless protocols like ZigBee, Z-Wave, or Control4's wireless technology to add automation without breaking walls or running new wires. Wireless retrofits typically cost 20–30% more than new construction automation but require zero civil work." },
      { question: "Which is the best home automation brand for Indian homes?", answer: `The best brand depends on your priorities. KNX is ideal for new constructions wanting 20+ year reliability. Crestron is for ultra-luxury homes demanding custom interfaces. Control4 offers the best balance of features and price. Lutron is unmatched for lighting quality. ${COMPANY.name} is certified across all four brands and recommends based on your specific needs — not commission margins.` },
      { question: "Does home automation increase property value?", answer: "Yes. Properties with professional home automation typically command 10–15% higher resale value. Smart home features are increasingly expected in premium segments. A well-designed automation system also significantly reduces selling time." },
      { question: "How long does home automation installation take?", answer: `For new construction, automation wiring happens during the electrical phase and adds no time to your project. Hardware installation and programming takes 2–4 weeks depending on scope. For retrofits, a typical 3BHK takes 1–2 weeks. ${COMPANY.name} provides a detailed project timeline during consultation.` },
    ],
  },
  {
    slug: "conceptual-lighting",
    headline: "Conceptual & Architectural Lighting Design in India",
    introduction: `Conceptual lighting transforms spaces through carefully designed layers of ambient, task, accent, and decorative light — all controllable via automation. ${COMPANY.name} combines lighting design expertise with automation technology to create scenes that adapt to time of day, activity, and mood. Our ${COMPANY.experience} years of experience span luxury residences, boutique hotels, restaurants, and commercial facades.`,
    whatItIs: `Conceptual lighting goes far beyond installing fixtures. It's the art and science of using light as a design element — creating depth, drama, and emotion in a space. It involves three core layers: ambient (general room lighting), task (focused light for work areas), and accent (highlighting architectural features, art, or textures). When combined with automation, these layers become programmable scenes: a "Dinner" scene dims ambient light to 20%, warms color temperature to 2700K, and highlights the dining table. A "Morning" scene gradually brightens to simulate sunrise.`,
    whyItMatters: `Lighting accounts for 25–30% of a home's electricity consumption. Automated lighting with occupancy sensors and daylight harvesting reduces this by 30–50%. Beyond energy savings, the right lighting design dramatically improves aesthetics, makes spaces feel larger, enhances artwork, and directly impacts mood and well-being. Yet most Indian homes still use flat, uniform lighting with basic switches — leaving enormous untapped potential.`,
    howWeDoIt: [
      { step: "Lighting Audit & Design Brief", detail: "We study your architectural drawings, interior design mood boards, and lifestyle to create a detailed lighting design brief covering every room's functional and aesthetic requirements." },
      { step: "Fixture Selection & Layout", detail: "We specify fixture types (recessed, track, cove, pendant, wall wash), positions, beam angles, color temperatures, and lumen output. Every fixture is selected for design integrity and automation compatibility." },
      { step: "Scene Programming", detail: "We design and program lighting scenes — Morning, Work, Relax, Dinner, Movie, Entertain, Goodnight — each with precise dimming levels and color temperatures per fixture." },
      { step: "Daylight Integration", detail: "Light sensors measure natural light and automatically adjust artificial lighting to maintain consistent lux levels while minimizing energy consumption." },
      { step: "Facade & Landscape Lighting", detail: "For villas and commercial projects, we design exterior lighting including facade wash, pathway lighting, garden accents, and pool lighting — all automated with astronomical clock scheduling." },
      { step: "Commissioning & Fine-Tuning", detail: "We commission the system on-site, fine-tune every scene with the client, and ensure smooth integration with the broader home automation system." },
    ],
    useCases: [
      { title: "Living & Dining Areas", description: "Layered scenes for entertaining, family time, and formal dining. Cove lighting for ambient warmth, spotlights for art, and pendant control for dining." },
      { title: "Bedrooms", description: "Circadian lighting that warms in the evening and gradually brightens in the morning. Reading lights, pathway lighting for nighttime, and romantic scene options." },
      { title: "Facade & Landscape", description: "RGBW facade washing, pathway bollards, tree uplighting, pool lighting — all scheduled with astronomical clock for automatic sunset/sunrise transitions." },
      { title: "Commercial & Hospitality", description: "Restaurant mood lighting, hotel lobby ambiance, retail display highlighting, and office biodynamic lighting for productivity." },
    ],
    pricing: [
      { tier: "Design Only", range: "₹50,000–2 Lakh", includes: "Complete lighting design with fixture specifications, layout drawings, and scene definitions. You source and install separately." },
      { tier: "Design + Automation", range: "₹2–8 Lakh", includes: "Lighting design plus Lutron or KNX dimming system, scene programming, and integration with home automation. For apartments and mid-size homes." },
      { tier: "Full Turnkey", range: "₹8–25 Lakh+", includes: "Complete lighting design, fixture procurement, installation, automation, facade/landscape lighting, and commissioning. For luxury villas and commercial projects." },
    ],
    whyChooseUs: [
      "Combined lighting design + automation expertise — most companies offer only one",
      "KNX-certified lighting integrators with access to premium Lutron & architectural fixtures",
      "Extensive portfolio of residential, hospitality, and commercial lighting projects",
      "Energy-optimized designs that reduce lighting electricity by 30–50%",
      "Scene programming included — not just hardware installation",
      "Post-installation fine-tuning and lifetime support",
    ],
    faqs: [
      { question: "How much does conceptual lighting cost in India?", answer: `Conceptual lighting design with automation costs ₹2–8 Lakh for apartments, ₹8–25 Lakh for luxury villas including facade lighting, and varies for commercial projects. Design-only services start at ₹50,000. ${COMPANY.name} provides detailed estimates after understanding your space and requirements.` },
      { question: "What is the difference between regular and conceptual lighting?", answer: "Regular lighting uses standard fixtures with on/off switches — flat, uniform illumination. Conceptual lighting uses multiple layers (ambient, task, accent) with specific beam angles, color temperatures, and dimming controls to create atmosphere, highlight architecture, and respond to activities through programmable scenes." },
      { question: "Can lighting automation save electricity?", answer: "Yes. Automated lighting with occupancy sensors, daylight harvesting, and dimming typically saves 30–50% on lighting electricity. A home spending ₹4,000/month on lighting electricity can save ₹1,500–2,000/month — paying back the automation investment within 3–5 years." },
      { question: "Does conceptual lighting work with existing interiors?", answer: "Yes. While new constructions allow maximum flexibility for concealed fixtures and wiring, conceptual lighting can be retrofitted into existing spaces using surface-mounted fixtures, track systems, and wireless dimming controls like Lutron Caseta or RadioRA 3." },
    ],
  },
  {
    slug: "home-theater",
    headline: "Home Theater & AV Solutions — Dolby Atmos, 4K/8K Projection",
    introduction: `A dedicated home theater transforms how you experience movies, music, and gaming. ${COMPANY.name} designs and installs cinema-grade home theater systems with Dolby Atmos surround sound, 4K/8K laser projection, acoustic treatment, and one-touch automation — so starting a movie is as simple as pressing "Watch." ${COMPANY.experience} years of AV expertise across ${COMPANY.projectsCompleted} projects.`,
    whatItIs: `A professional home theater combines high-performance audio (5.1, 7.1, 7.1.4, or 9.1.6 Dolby Atmos configurations), a reference-grade display (laser projector + acoustically transparent screen or 85"+ OLED/MicroLED), acoustic room treatment (absorption, diffusion, bass traps), and automation that controls lights, AV equipment, curtains, and climate with a single button press. Unlike a soundbar-and-TV setup, a properly designed theater delivers genuine cinema-quality audio and video with room-optimized acoustics.`,
    whyItMatters: `Post-pandemic, home entertainment has become a priority for Indian families. A professionally designed home theater delivers an experience that no commercial cinema can match — personalized seating, perfect acoustics, no phone distractions, and content on demand. At ₹10–30 Lakh, a dedicated theater costs less than a premium car but delivers daily enjoyment for the entire family for 10–15 years. It also adds significant property value and lifestyle appeal.`,
    howWeDoIt: [
      { step: "Room Assessment", detail: "We evaluate the room dimensions, shape, ambient noise, and structural constraints to determine the optimal speaker layout, screen size, and acoustic treatment plan." },
      { step: "Acoustic Design", detail: "Our acoustic consultant designs the treatment plan — absorption panels, diffusers, bass traps, and isolated walls/ceiling to achieve a reference-level listening environment." },
      { step: "AV System Design", detail: "We specify the projector (JVC, Sony, Epson laser), screen (Stewart, Screen Innovations), speakers (JBL, KEF, B&W, Klipsch), amplifiers, and signal processing for your specific room and budget." },
      { step: "Installation & Calibration", detail: "Equipment is installed, wired, and calibrated using professional measurement tools (REW, Audyssey, Dirac). Every speaker is time-aligned and EQ'd for your room." },
      { step: "Automation Integration", detail: "One-touch scenes: 'Watch' dims lights, lowers curtains/screen, powers on projector, selects input. 'Pause' raises lights to 30%. 'Lights Up' returns to normal. Integrated with your whole-home system." },
      { step: "Training & Support", detail: "We train your family on using the system and provide ongoing support including annual calibration checks and firmware updates." },
    ],
    useCases: [
      { title: "Dedicated Theater Room", description: "Purpose-built theater with 7.1.4 Dolby Atmos, 4K laser projection, acoustic treatment, tiered seating, and full light control. The gold standard." },
      { title: "Media Room / Living Room", description: "High-performance AV in a multi-purpose room — hidden speakers, motorized projector screen that descends from the ceiling, ambient lighting scenes." },
      { title: "Multi-Room Audio", description: "Sonos, Crestron, or Control4-based audio distribution across 5–15 zones. Play different music in every room or group zones for parties." },
      { title: "Outdoor Entertainment", description: "Weather-rated speakers, an outdoor-rated TV or projector, and landscape lighting scenes for poolside or terrace entertainment." },
    ],
    pricing: [
      { tier: "Entry Media Room (5.1 / 5.1.2)", range: "₹3–8 Lakh", includes: "75–85\" 4K TV or short-throw projector, 5.1 surround system, basic acoustic foam, automation integration with existing smart home." },
      { tier: "Premium Media Room (5.1.4 / 7.1.2)", range: "₹8–18 Lakh", includes: "Mid-tier 4K HDR projector (JVC NX5/Sony VW325ES), 110–120\" screen, KEF/B&W speakers, in-ceiling Atmos height channels, fabric-wrapped panels, Lutron lighting scenes." },
      { tier: "Dedicated Cinema (7.1.4 / 9.1.6)", range: "₹18–60 Lakh", includes: "JVC NZ800/NZ900 laser projector, Stewart screen with motorized masking, full acoustic treatment (Vicoustic/GIK/RPG), Trinnov/Dirac Live ART calibration, Procella/JBL Synthesis speakers, 9–12 cinema seats." },
      { tier: "Reference / THX-Grade (9.1.6 / 13.1.6)", range: "₹60 Lakh–2 Cr+", includes: "Decoupled floating room, JBL Synthesis Project Everest or baffle-wall LCR, Trinnov Altitude processor, 4-sub DBA configuration, ISF/THX calibration, direct-view LED option (Samsung The Wall, LG MAGNIT)." },
    ],
    whyChooseUs: [
      "Acoustic design + AV engineering + automation — all under one roof",
      `${COMPANY.experience} years of residential and commercial AV experience`,
      "Crestron, Control4, and Sonos certified for AV distribution and control",
      "In-house acoustic consultant — we don't outsource room treatment",
      "Professional calibration using REW and Dirac measurement tools",
      "Annual maintenance and recalibration support",
    ],
    faqs: [
      { question: "How much does a home theater cost in India?", answer: `A premium living room setup costs ₹3–8 Lakh. A dedicated home theater with Dolby Atmos and acoustic treatment costs ₹10–30 Lakh. Reference-grade cinemas with 8K projection and audiophile speakers range from ₹30–75 Lakh+. ${COMPANY.name} designs systems for every budget level.` },
      { question: "What is the ideal room size for a home theater?", answer: "The ideal dedicated home theater room is 15' × 20' × 10' (minimum 12' × 15'). However, great results are achievable in smaller rooms with proper speaker selection and acoustic treatment. We've designed outstanding theaters in rooms as compact as 10' × 12'." },
      { question: "Is Dolby Atmos worth it for home theater?", answer: "Absolutely. Dolby Atmos adds height channels that create a three-dimensional sound field — helicopters fly overhead, rain falls around you. A properly installed 7.1.4 Atmos system transforms movie watching from 'watching a screen' to 'being inside the movie.' The incremental cost over 7.1 is modest." },
      { question: "Can I add a home theater to an existing room?", answer: "Yes. Retrofit theaters use wireless surround speakers, soundbars with Atmos upfiring, and short-throw projectors that don't require ceiling mounting. Acoustic treatment panels can be wall-mounted as decorative art. The experience is slightly compromised vs. a purpose-built room but still dramatically better than a TV with a soundbar." },
    ],
  },
  {
    slug: "home-security",
    headline: "Smart Security & CCTV Systems for Indian Homes",
    introduction: `Smart security goes beyond basic CCTV cameras. ${COMPANY.name} designs integrated security systems combining IP surveillance, smart locks, motion sensors, intrusion detection, video door phones, and perimeter protection — all connected to your smart home and accessible from your phone. ${COMPANY.experience} years of security integration across residential, commercial, and hospitality projects.`,
    whatItIs: `A smart security system uses IP cameras (2K/4K resolution with AI analytics), smart locks (fingerprint, PIN, RFID, remote unlock), motion and intrusion sensors (PIR, door/window contacts, glass break detectors), video door phones (two-way audio with remote unlock), and perimeter protection (beam sensors, electric fence integration). All devices feed into a unified dashboard accessible via app, touch panel, or TV — and integrate with lighting automation for panic scenes and presence simulation.`,
    whyItMatters: `Property crime in Indian metropolitan areas remains a significant concern, especially for premium residences, farmhouses, and homes with frequent family travel. Traditional CCTV records footage but doesn't prevent or alert in real-time. Smart security provides instant push notifications, two-way audio deterrence, automated lighting responses, and remote lock control — turning passive surveillance into active protection. Integration with home automation adds force multipliers like simulated occupancy (lights and TV cycling when you're away).`,
    howWeDoIt: [
      { step: "Security Assessment", detail: "We assess your property layout, entry points, vulnerable areas, and family lifestyle to design a layered security plan covering perimeter, access points, and interior zones." },
      { step: "Camera Placement Design", detail: "Strategic camera placement covering all entry points, driveways, gardens, and common areas. We specify resolution, field of view, and night vision requirements for each location." },
      { step: "Access Control Design", detail: "Smart lock selection (Yale, Samsung, Godrej) for main door, service entrance, and internal doors. Video door phone with intercom for gate/door communication." },
      { step: "Sensor & Alert Setup", detail: "PIR motion sensors, door/window contacts, glass break detectors, and perimeter beams are placed and configured with alert zones and schedules." },
      { step: "Automation Integration", detail: "Security integrates with lighting (panic scene, welcome scene, away mode simulation), HVAC (shut down on intrusion), and smart locks (auto-lock schedules, guest access codes)." },
      { step: "Monitoring & Support", detail: "NVR/cloud recording setup, mobile app configuration for all family members, and ongoing support for firmware updates and system health checks." },
    ],
    useCases: [
      { title: "Apartment Security", description: "Video door phone, smart lock, hallway camera, motion-triggered alerts, and panic button integration with building security." },
      { title: "Villa & Bungalow Protection", description: "Perimeter cameras with AI analytics, gate intercom, smart locks on all entries, PIR sensors, and automated away-mode lighting." },
      { title: "Farmhouse & Remote Property", description: "Solar-powered cameras, 4G connectivity, remote monitoring, intrusion alerts, and landscape lighting automation for perimeter security." },
      { title: "Commercial & Office", description: "Access control systems (RFID/biometric), visitor management, IP surveillance with analytics, and integration with BMS." },
    ],
    pricing: [
      { tier: "Basic", range: "₹50,000–2 Lakh", includes: "4–8 IP cameras (2K), basic NVR with 1TB storage, smart lock for main door, video door phone, mobile app access." },
      { tier: "Comprehensive", range: "₹2–6 Lakh", includes: "8–16 cameras (4K), enterprise NVR with AI analytics, smart locks on multiple doors, motion sensors, perimeter beams, automation integration." },
      { tier: "Estate Security", range: "₹6–15 Lakh+", includes: "Full perimeter coverage with PTZ cameras, AI-powered analytics (face recognition, vehicle detection), electric fence integration, multi-gate intercom, panic room setup, 24/7 monitoring integration." },
    ],
    whyChooseUs: [
      "Security + automation integration expertise — not just camera installation",
      "AI-powered analytics: face recognition, vehicle detection, loitering alerts",
      "Smart lock integration with guest access codes, auto-lock, and remote unlock",
      "Panic scene automation — one button triggers lights, sirens, and alerts simultaneously",
      "Simulated occupancy mode for when you're traveling",
      "AMC plans with regular system health checks and firmware updates",
    ],
    faqs: [
      { question: "How much does a smart security system cost in India?", answer: `Basic CCTV with smart lock starts at ₹50,000–2 Lakh. Comprehensive security with 4K cameras, multiple smart locks, sensors, and automation integration costs ₹2–6 Lakh. Full estate security with AI analytics and perimeter protection ranges from ₹6–15 Lakh+. ${COMPANY.name} provides customized security assessments and quotes.` },
      { question: "Can smart locks be hacked?", answer: "Premium smart locks (Yale, Samsung, Assa Abloy) use AES-128/256 encryption and are significantly harder to bypass than traditional mechanical locks. They also provide audit trails (who opened when), auto-lock features, temporary guest codes, and remote lock verification — capabilities that mechanical locks simply can't offer." },
      { question: "Do smart security cameras work without internet?", answer: "Yes. Cameras connected to a local NVR continue recording even without internet. You lose remote viewing capability during an outage, but all footage is saved locally. We configure 4G backup for critical installations to ensure uninterrupted remote access." },
      { question: "Can CCTV integrate with home automation?", answer: "Absolutely. This is where smart security becomes truly powerful. Camera motion detection can trigger lights, lock-down sequences, and push notifications. Smart locks integrate with welcome/away scenes. Doorbells show video feeds on your TV or touch panel. Integration is our core expertise." },
    ],
  },
  {
    slug: "central-vacuum",
    headline: "Central Vacuum Systems for Dust-Free Indian Homes",
    introduction: `Central vacuum systems eliminate the need for heavy portable vacuum cleaners by building suction power directly into your home's infrastructure. ${COMPANY.name} designs and installs central vacuum systems with in-wall PVC piping, discreet wall inlets in every room, and a powerful central unit typically installed in a utility area or garage. The result: cleaner air, quieter operation, and effortless cleaning.`,
    whatItIs: `A central vacuum system consists of a powerful motor unit (typically 600–1800 watts) installed in a garage, utility room, or terrace, connected to multiple rooms via concealed PVC piping within walls. Each room has a flush-mounted wall inlet. To clean, you simply plug a lightweight hose into any inlet — suction activates automatically. All dust, allergens, and debris are transported through pipes to the central unit's collection bin, exhausting filtered air outside the living space. Unlike portable vacuums that recirculate 30–50% of fine particles back into the room, central vacuums achieve 99.97% filtration and vent exhaust outside.`,
    whyItMatters: `India's urban air quality consistently ranks among the world's worst. Delhi NCR regularly exceeds 300 AQI. Even inside premium homes, dust accumulates rapidly on surfaces, furniture, and fabrics. Portable vacuum cleaners are noisy (70–85 dB), heavy to carry between rooms, and recirculate fine dust particles. Central vacuums operate at 50–60 dB inside the living space (the motor is remote), are 3–5x more powerful than portable units, and genuinely remove allergens from your living environment by exhausting air outside. For families with allergies, asthma, or young children, this is a health investment.`,
    howWeDoIt: [
      { step: "Layout Planning", detail: "We map your floor plan to determine optimal inlet locations (typically one per 50–60 sqm), piping routes through walls, and the central unit location." },
      { step: "Piping Installation", detail: "PVC piping is concealed within walls during construction or renovation. Pipes run from each inlet to the central unit location. This step must happen before wall finishing." },
      { step: "Inlet Installation", detail: "Flush-mounted wall inlets are installed at convenient heights (usually 30 cm from floor) in each room, hallway, and common area." },
      { step: "Central Unit Setup", detail: "The motor unit is installed in the designated location with proper ventilation and exhaust routing. We select unit capacity based on total piping length and number of inlets." },
      { step: "Testing & Handover", detail: "Every inlet is tested for suction performance. We provide hoses, cleaning accessories, and training on maintenance (filter cleaning, bag replacement)." },
    ],
    useCases: [
      { title: "New Construction Villas", description: "Ideal time to install — piping goes inside walls during construction with zero aesthetic impact. The most cost-effective approach." },
      { title: "Large Apartments (3BHK+)", description: "Central vacuum eliminates storing a bulky vacuum cleaner and provides more powerful, quieter cleaning for daily use." },
      { title: "Homes with Allergy Sufferers", description: "99.97% HEPA filtration with outside exhaust means allergens are genuinely removed — not just redistributed." },
      { title: "Pet Owner Homes", description: "Central vacuums handle pet hair far more effectively than portable units, with specialized attachments for upholstery and pet grooming." },
    ],
    pricing: [
      { tier: "Compact (2–3BHK)", range: "₹80,000–1.5 Lakh", includes: "3–5 wall inlets, concealed piping, compact central unit, standard hose and accessory kit." },
      { tier: "Standard Villa", range: "₹1.5–3 Lakh", includes: "6–10 wall inlets across 2 floors, high-capacity unit, HEPA filtration, complete accessory set." },
      { tier: "Large Estate", range: "₹3–6 Lakh+", includes: "10–20+ inlets, dual-motor high-power unit, multi-zone piping, garage and outdoor inlets, premium accessory kit." },
    ],
    whyChooseUs: [
      "Specialized experience in central vacuum installation — not a side service",
      "Precise piping layout planning for maximum suction at every inlet",
      "Works with leading brands: Beam, Vacuflo, DuoVac, Cyclo Vac",
      "Installation coordinated with your builder/contractor during construction",
      "Annual maintenance support — filter replacement, motor service, pipe cleaning",
      "Integration with home automation: auto-start when inlet is opened",
    ],
    faqs: [
      { question: "How much does a central vacuum system cost in India?", answer: `Central vacuum systems in India cost ₹80,000–1.5 Lakh for a 2–3BHK apartment, ₹1.5–3 Lakh for a standard villa, and ₹3–6 Lakh+ for large estates. The cost includes piping, inlets, central unit, hose, and accessories. Installation during new construction is 20–30% cheaper than retrofit.` },
      { question: "Can central vacuum be installed in an existing home?", answer: "It's possible but significantly more challenging and costly in existing homes since piping needs to be concealed in walls. It works best when combined with a major renovation where walls are being opened. For existing homes without renovation plans, we recommend premium robotic vacuum systems as an alternative." },
      { question: "How often does a central vacuum need maintenance?", answer: "Empty the collection bin every 1–3 months (depending on usage). Replace or clean HEPA filters every 6–12 months. Professional motor service recommended every 2–3 years. Central vacuum motors typically last 15–20 years with proper maintenance." },
      { question: "Is a central vacuum quieter than regular vacuum cleaners?", answer: "Significantly quieter inside the living space. The motor is located remotely (garage, utility area), so you only hear air flowing through the hose — approximately 50–60 dB vs. 70–85 dB for portable vacuums. You can vacuum while others sleep or watch TV in the next room." },
    ],
  },
  {
    slug: "clean-air-systems",
    headline: "Indoor Air Quality & Clean Air Systems for Indian Homes",
    introduction: `With Indian cities consistently recording hazardous AQI levels, indoor air quality has become a critical health concern. ${COMPANY.name} designs integrated clean air systems combining HEPA + activated carbon purifiers, fresh air ventilation (ERV/HRV), real-time AQI monitoring, and smart automation that responds to pollution levels automatically. ${COMPANY.experience} years of building healthy living environments.`,
    whatItIs: `A clean air system goes beyond placing portable purifiers in rooms. It's an engineered solution that addresses the entire indoor air environment: HEPA purification removes 99.97% of particles down to 0.3 microns (dust, pollen, PM2.5), activated carbon filters absorb VOCs and odors, Energy Recovery Ventilators (ERV) bring in fresh outdoor air while recovering temperature/humidity, and CO2 sensors ensure adequate ventilation. Smart automation monitors indoor and outdoor AQI in real-time and adjusts purification and ventilation rates automatically.`,
    whyItMatters: `Indians spend 80–90% of their time indoors, yet indoor air is often 2–5x more polluted than outdoor air due to cooking emissions, furniture off-gassing (formaldehyde), cleaning chemicals, and inadequate ventilation. In Delhi NCR, outdoor PM2.5 regularly exceeds 200 µg/m³ (safe limit: 25 µg/m³). Opening windows for "fresh air" actually makes indoor air worse during pollution seasons. A properly designed clean air system maintains PM2.5 below 15 µg/m³ indoors year-round — cleaner than Scandinavian outdoor air.`,
    howWeDoIt: [
      { step: "Air Quality Assessment", detail: "We measure baseline indoor air quality — PM2.5, PM10, CO2, VOC, temperature, and humidity — across all rooms to identify pollution sources and ventilation gaps." },
      { step: "System Design", detail: "Based on room volumes, occupancy, and pollution sources, we design a system combining ceiling/wall-mounted purifiers, ducted fresh air units (ERV), and sensor placement." },
      { step: "Installation", detail: "Purifiers, ERV units, ducting, and sensors are installed with minimal aesthetic impact. Ducted systems integrate with existing HVAC infrastructure where possible." },
      { step: "Smart Integration", detail: "AQI sensors feed data to your home automation system. Purifiers and ERV units adjust speed automatically. Alerts notify you of unusual pollution spikes." },
      { step: "Monitoring Dashboard", detail: "Real-time air quality data is accessible on your phone, touch panel, or TV — showing PM2.5, CO2, VOC, temperature, and humidity for every monitored room." },
    ],
    useCases: [
      { title: "Delhi NCR Homes", description: "Essential for families in India's most polluted region. Whole-home HEPA purification + ERV ventilation maintaining PM2.5 below 15 µg/m³ even during severe pollution." },
      { title: "Nurseries & Children's Rooms", description: "Priority zones for air purification — children's lungs are developing and more susceptible to PM2.5 damage." },
      { title: "Luxury Villas & Penthouses", description: "Integrated clean air with centralized purification, ERV ventilation, and room-by-room AQI monitoring on automation touch panels." },
      { title: "Commercial Offices", description: "Employee health and productivity improve significantly with clean indoor air. CO2 monitoring prevents 'brain fog' in meeting rooms." },
    ],
    pricing: [
      { tier: "Room-Level", range: "₹50,000–1.5 Lakh", includes: "2–4 smart air purifiers (HEPA + carbon), PM2.5 sensors, app control and monitoring. For apartments." },
      { tier: "Whole-Home", range: "₹2–6 Lakh", includes: "Centralized or distributed purification, ERV fresh air unit, multi-room AQI sensors, automation integration, real-time dashboard." },
      { tier: "Premium Estate", range: "₹6–15 Lakh+", includes: "Ducted whole-home purification with ERV, room-by-room monitoring, medical-grade HEPA, integration with HVAC and home automation, outdoor AQI station." },
    ],
    whyChooseUs: [
      "Engineering approach — not just placing purifiers, but designing airflow",
      "ERV/HRV integration for fresh air without opening windows in polluted cities",
      "Real-time AQI monitoring dashboard integrated with home automation",
      "Smart automation: purifiers respond to pollution automatically",
      "Filter replacement and system maintenance AMC plans available",
      `${COMPANY.experience} years of building healthy living environments`,
    ],
    faqs: [
      { question: "How much does a whole-home clean air system cost?", answer: `Room-level smart purifiers with sensors cost ₹50,000–1.5 Lakh. Whole-home systems with ERV ventilation and multi-room monitoring cost ₹2–6 Lakh. Premium estate solutions with ducted purification range from ₹6–15 Lakh+. ${COMPANY.name} conducts a free air quality assessment before recommending a system.` },
      { question: "Are portable air purifiers enough for Indian homes?", answer: "Portable purifiers help individual rooms but don't address the root problem: lack of fresh air ventilation. They recirculate and filter room air but don't bring in fresh oxygen or remove CO2 buildup. A proper clean air system combines purification with controlled fresh air ventilation (ERV) for truly healthy indoor air." },
      { question: "What is an ERV and why do I need one?", answer: "An Energy Recovery Ventilator (ERV) brings fresh outdoor air into your home while exhausting stale indoor air — but recovers 70–80% of the temperature and humidity from the outgoing air. This means you get fresh air without losing your AC cooling. In polluted Indian cities, the incoming air passes through HEPA filters before entering your home." },
      { question: "How do clean air systems integrate with home automation?", answer: "AQI sensors in each room feed real-time data to your automation system. When PM2.5 rises (from cooking, opening doors, or outdoor pollution spikes), purifiers automatically increase speed. CO2 levels trigger ventilation. All data is visible on your app, touch panel, or TV dashboard. You can also set scene-based responses." },
    ],
  },
  {
    slug: "solar-power",
    headline: "Rooftop Solar Power Systems for Indian Homes & Businesses",
    introduction: `Rooftop solar is the single highest-ROI investment for Indian property owners — generating free electricity for 25+ years after a 3–5 year payback. ${COMPANY.name} designs and installs grid-tied solar power systems for residences and commercial properties, integrated with home automation for real-time generation monitoring and smart energy management.`,
    whatItIs: `A rooftop solar power system consists of photovoltaic (PV) panels mounted on your roof, a solar inverter that converts DC to AC power, net metering that feeds excess energy back to the grid (reducing your bill), and an optional battery storage system for backup during power cuts. Modern panels produce 400–550 watts each and come with 25-year performance warranties. When integrated with home automation, you get real-time generation/consumption dashboards, automated load shifting (running heavy appliances during peak solar hours), and intelligent battery management.`,
    whyItMatters: `Indian electricity tariffs have risen 8–12% annually, with residential rates now ₹6–10/unit across most states. A 5 kW rooftop system (typical for a 3BHK) generates 600–750 units/month, covering 70–90% of household electricity. With net metering, excess units are credited against your bill. The system pays for itself in 3–5 years and then generates free electricity for 20+ more years. Government subsidies of ₹30,000–78,000 further improve ROI. Combined with home automation energy management, total savings can exceed ₹1.5 Lakh/year for larger installations.`,
    howWeDoIt: [
      { step: "Site Assessment & Solar Audit", detail: "We analyze roof area, orientation, shading, structural capacity, and electricity consumption patterns to determine optimal system size and panel layout." },
      { step: "System Design", detail: "Detailed design with panel layout, inverter sizing, wiring schematic, earthing plan, and net metering application documentation." },
      { step: "Government Subsidy Filing", detail: "We handle the complete subsidy application process with your local DISCOM and MNRE portal — paperwork, approvals, and follow-up." },
      { step: "Installation", detail: "Panel mounting, inverter installation, DC/AC wiring, earthing, and lightning protection. Typical installation takes 2–4 days." },
      { step: "Net Metering & Commissioning", detail: "DISCOM inspection, bi-directional meter installation, and system commissioning. Your system starts generating and earning from day one." },
      { step: "Automation Integration", detail: "Solar generation data feeds into your home automation dashboard. Smart energy management shifts high-consumption appliances to peak solar hours automatically." },
    ],
    useCases: [
      { title: "Residential (3BHK–5BHK)", description: "3–10 kW systems covering 70–100% of household electricity. Net metering reduces bills to near-zero." },
      { title: "Luxury Villas", description: "10–25 kW systems with battery backup for uninterrupted power. Integration with home automation for intelligent energy management." },
      { title: "Commercial & Office", description: "25–500 kW systems for offices, factories, and hotels. Accelerated depreciation tax benefits for businesses." },
      { title: "Society/RWA Common Areas", description: "Solar for common area lighting, lifts, water pumps, and STP — reducing maintenance charges for all residents." },
    ],
    pricing: [
      { tier: "3 kW Residential", range: "₹1.5–2.5 Lakh (post-subsidy)", includes: "6–8 panels, grid-tied inverter, mounting structure, wiring, net metering, 5-year inverter + 25-year panel warranty." },
      { tier: "5–10 kW Home", range: "₹3–7 Lakh (post-subsidy)", includes: "12–24 panels, string/micro inverter, complete BOS, net metering, monitoring app, optional battery backup." },
      { tier: "10–25 kW Villa/Commercial", range: "₹6–18 Lakh", includes: "Premium panels, hybrid inverter with battery support, energy monitoring dashboard, home automation integration, comprehensive AMC." },
    ],
    whyChooseUs: [
      "End-to-end service: design, subsidy filing, installation, net metering, and AMC",
      "Integration with home automation for smart energy management — unique in the market",
      "Premium Tier-1 panels with 25-year linear performance warranty",
      "Government subsidy processing handled completely — you don't deal with paperwork",
      "Real-time solar monitoring on your home automation dashboard",
      `${COMPANY.experience} years of reliable installations`,
    ],
    faqs: [
      { question: "How much does rooftop solar cost in India?", answer: `A 3 kW residential system costs ₹1.5–2.5 Lakh after government subsidy. A 5 kW system costs ₹3–4.5 Lakh post-subsidy. 10 kW+ systems for villas cost ₹6–12 Lakh. Government subsidies of ₹30,000–78,000 are available for residential installations up to 10 kW. ${COMPANY.name} handles the complete subsidy application.` },
      { question: "What is the payback period for rooftop solar in India?", answer: "Typical payback period is 3–5 years depending on your electricity tariff, system size, and sunlight availability. After payback, you get free electricity for 20+ years. At current tariffs, a 5 kW system saves ₹5,000–8,000/month — increasing each year as tariffs rise." },
      { question: "Does solar work during monsoon and cloudy days?", answer: "Solar panels produce reduced output (20–40% of peak) during cloudy weather but still generate electricity. Annual generation accounts for monsoon months. Grid-tied systems draw from the grid when solar is insufficient, using net metering credits earned during sunny months." },
      { question: "Can solar integrate with home automation?", answer: "Yes. We integrate solar monitoring into your home automation dashboard showing real-time generation, consumption, grid export/import, and savings. Smart energy management can automatically schedule high-consumption appliances (water heaters, washing machines, pool pumps) during peak solar production hours." },
    ],
  },
  {
    slug: "hvac-automation",
    headline: "Smart HVAC Automation — Intelligent Climate Control for Indian Homes",
    introduction: `HVAC automation transforms your heating, ventilation, and air conditioning from manual thermostat adjustments into an intelligent climate management system. ${COMPANY.name} integrates VRV/VRF systems, ductable ACs, split units, and fresh air handling with smart zone management, occupancy sensing, and energy optimization — delivering 20–40% cooling energy savings with superior comfort.`,
    whatItIs: `HVAC automation uses smart thermostats, temperature/humidity sensors, occupancy detectors, and motorized dampers to create a climate system that adapts automatically. Each room or zone can be independently controlled with different temperature setpoints and schedules. Integration with your building's VRV/VRF system (Daikin, Mitsubishi, LG) or ductable units enables precise capacity modulation. When connected to your home automation system, HVAC responds to scenes (away mode reduces cooling), occupancy (empty rooms stop cooling), and time schedules (pre-cool before you arrive).`,
    whyItMatters: `HVAC accounts for 40–60% of electricity consumption in Indian homes during summer months. Most homes run ACs at fixed temperatures with manual on/off — cooling empty rooms, overcooling occupied ones, and wasting enormous energy. Smart HVAC automation with zone management and occupancy sensing reduces cooling energy by 20–40%. For a home spending ₹15,000/month on summer electricity, that's ₹3,000–6,000/month in savings — plus consistently better comfort.`,
    howWeDoIt: [
      { step: "HVAC Audit", detail: "We assess your existing HVAC setup (or planned installation), room sizes, insulation quality, sun exposure, and occupancy patterns to design an optimal automation strategy." },
      { step: "Zone Planning", detail: "We divide your home into logical climate zones — bedrooms, living areas, home office, kitchen — each with independent temperature control and scheduling." },
      { step: "Sensor & Thermostat Installation", detail: "Smart thermostats, room temperature/humidity sensors, and occupancy sensors are installed. For VRV/VRF systems, we integrate directly with the manufacturer's control interface." },
      { step: "Control Logic Programming", detail: "Zone setpoints, schedules, occupancy rules, and scene integration are programmed. 'Away' mode setback, 'Sleep' mode temperature curve, and 'Pre-cool' timing are configured." },
      { step: "Energy Dashboard", detail: "Real-time and historical energy consumption data per zone is accessible on your app and touch panel, helping you identify and eliminate waste." },
      { step: "Optimization & Support", detail: "After 2–4 weeks of operation data, we fine-tune setpoints and schedules for optimal efficiency. Ongoing AMC ensures continued performance." },
    ],
    useCases: [
      { title: "Large Villas with VRV/VRF", description: "Central VRV system with zone-wise automation — 8–15 indoor units managed intelligently based on occupancy, time, and temperature." },
      { title: "Premium Apartments", description: "Split AC automation with smart thermostats, occupancy sensing, and scene integration (Movie mode sets 23°C, Sleep mode creates a gradual temperature curve)." },
      { title: "Farmhouses & Weekend Homes", description: "Remote pre-cooling via app — start cooling 1 hour before arrival. System stays in energy-saver mode when unoccupied." },
      { title: "Commercial Offices", description: "BMS-integrated HVAC for meeting rooms (occupancy-based), open offices (zone management), and server rooms (precision cooling)." },
    ],
    pricing: [
      { tier: "Smart Thermostat Retrofit", range: "₹30,000–1 Lakh", includes: "Smart thermostats for 2–5 split ACs, app control, basic scheduling, energy monitoring. Quick retrofit with no rewiring." },
      { tier: "Zone Automation", range: "₹1–4 Lakh", includes: "Temperature + occupancy sensors per zone, centralized control, scene integration, energy dashboard, VRV/VRF interface." },
      { tier: "Comprehensive HVAC Control", range: "₹4–12 Lakh+", includes: "Full VRV/VRF integration, room-by-room sensors, motorized dampers for ductable systems, BMS integration, advanced energy analytics." },
    ],
    whyChooseUs: [
      "Deep expertise in VRV/VRF integration (Daikin, Mitsubishi, LG, Toshiba)",
      "Zone-wise automation — not just on/off control",
      "20–40% energy reduction backed by real measurement data",
      "Integration with whole-home automation scenes and schedules",
      "Real-time energy consumption dashboard per zone",
      "AMC plans ensuring continued optimal performance",
    ],
    faqs: [
      { question: "How much does HVAC automation cost in India?", answer: `Smart thermostat retrofits for 2–5 ACs cost ₹30,000–1 Lakh. Zone-based automation with sensors and VRV integration costs ₹1–4 Lakh. Comprehensive systems with BMS integration range from ₹4–12 Lakh+. ${COMPANY.name} recommends the right level based on your HVAC setup and energy savings potential.` },
      { question: "Can HVAC automation work with existing split ACs?", answer: "Yes. Smart thermostat modules (like Cielo, Sensibo, or Intesis) can retrofit any split AC with IR remote into a smart, automated unit — adding app control, scheduling, occupancy sensing, and energy monitoring without replacing the AC unit." },
      { question: "How much energy does HVAC automation actually save?", answer: "Typically 20–40% on cooling energy. The savings come from: eliminating cooling in empty rooms (occupancy sensing), optimized setpoints (every 1°C higher saves 6% energy), scheduled setback during sleeping hours, and preventing overcooling. For a home with ₹15,000/month summer electricity, expect ₹3,000–6,000/month savings." },
      { question: "What is VRV/VRF integration?", answer: "VRV (Variable Refrigerant Volume) and VRF (Variable Refrigerant Flow) are central cooling systems by Daikin, Mitsubishi, and LG that serve multiple indoor units from one outdoor unit. Our automation integrates directly with the VRV/VRF controller via BACnet or Modbus for precise capacity modulation, energy monitoring, and zone management — far beyond what the manufacturer's basic controller offers." },
    ],
  },
  {
    slug: "commercial",
    headline: "Commercial & Building Automation Solutions (BMS) in India",
    introduction: `Commercial automation — or Building Management Systems (BMS) — integrates HVAC, lighting, access control, fire safety, energy management, and surveillance into a unified platform for offices, hotels, hospitals, and commercial complexes. ${COMPANY.name} has ${COMPANY.experience} years of experience deploying commercial automation across hospitality, corporate, and healthcare sectors.`,
    whatItIs: `A Building Management System (BMS) is the nervous system of a commercial building. It connects HVAC (chillers, AHUs, VRV), lighting (zone control, occupancy, daylight harvesting), access control (RFID, biometric, visitor management), fire alarm systems, elevator control, energy metering, and surveillance into a single supervisory platform. Operators monitor and control everything from a central dashboard, while automation rules optimize energy consumption, maintain comfort, and ensure safety compliance 24/7.`,
    whyItMatters: `Commercial buildings account for 40% of India's energy consumption. A properly implemented BMS reduces energy costs by 20–35% through optimized HVAC scheduling, lighting automation, and demand-based ventilation. Beyond energy, BMS improves occupant comfort (consistent temperature, adequate ventilation), enhances security (integrated access control + surveillance), ensures fire safety compliance, and provides data for ESG reporting. For hotels, automated guest room management reduces energy waste by 30–40% while improving guest experience.`,
    howWeDoIt: [
      { step: "Building Assessment", detail: "We audit the building's mechanical, electrical, and plumbing (MEP) systems, understand operational requirements, and identify energy optimization opportunities." },
      { step: "BMS Architecture Design", detail: "We design the BMS architecture — controller placement, network topology (BACnet/IP, Modbus, KNX), sensor locations, and integration points with existing systems." },
      { step: "Hardware & Controller Installation", detail: "DDC controllers, sensors, actuators, and networking equipment are installed. Field devices are wired to controllers and tested point-by-point." },
      { step: "Programming & Graphics", detail: "Control sequences (AHU staging, chiller optimization, lighting schedules) are programmed. Custom graphic dashboards are created for operator monitoring." },
      { step: "Integration & Commissioning", detail: "All subsystems (HVAC, lighting, access, fire, elevator) are integrated and tested as a unified system. Performance is verified against design specifications." },
      { step: "Training & Ongoing Support", detail: "Building operations team is trained on BMS operation. We provide AMC plans for ongoing optimization, firmware updates, and system expansion." },
    ],
    useCases: [
      { title: "Corporate Offices", description: "Floor-wise HVAC and lighting automation, meeting room booking integration, access control with visitor management, energy dashboards for ESG reporting." },
      { title: "Hotels & Resorts", description: "Guest room management (HVAC + lighting based on occupancy), ballroom scene control, back-of-house energy optimization, and PMS integration." },
      { title: "Hospitals & Healthcare", description: "Precision climate control for OTs and ICUs, positive/negative pressure room management, infection control automation, and medical gas monitoring." },
      { title: "Retail & Mixed-Use", description: "Zone-wise lighting and HVAC scheduling, footfall-based ventilation, common area energy optimization, and tenant energy sub-metering." },
    ],
    pricing: [
      { tier: "Small Office (5,000–15,000 sqft)", range: "₹5–15 Lakh", includes: "HVAC and lighting automation, basic access control, energy monitoring dashboard, app-based control." },
      { tier: "Mid-Size Commercial (15,000–50,000 sqft)", range: "₹15–40 Lakh", includes: "Full BMS with HVAC optimization, floor-wise lighting, access control + visitor management, fire system integration, energy analytics." },
      { tier: "Large Complex (50,000+ sqft)", range: "₹40 Lakh–2 Crore+", includes: "Enterprise BMS with chiller plant optimization, comprehensive access control, integrated fire safety, elevator management, energy management + ESG reporting." },
    ],
    whyChooseUs: [
      `${COMPANY.experience} years in both residential and commercial automation — we understand both worlds`,
      "KNX, Crestron, and BACnet expertise for protocol-agnostic integration",
      "Hospitality specialization — hotel guest room management is a core competency",
      "Energy optimization focus — measurable 20–35% reduction in building energy costs",
      "Complete MEP integration: HVAC + lighting + access + fire + elevators",
      "Long-term AMC partnerships for continuous building optimization",
    ],
    faqs: [
      { question: "How much does commercial building automation cost in India?", answer: `Commercial BMS costs vary by building size and scope: ₹5–15 Lakh for small offices, ₹15–40 Lakh for mid-size commercial buildings, and ₹40 Lakh–2 Crore+ for large complexes. The investment typically pays back within 2–4 years through energy savings alone. ${COMPANY.name} provides detailed ROI projections during consultation.` },
      { question: "What is the ROI of a Building Management System?", answer: "A well-implemented BMS typically reduces building energy costs by 20–35%, delivering ROI within 2–4 years. For a building spending ₹5 Lakh/month on energy, a BMS saving 25% means ₹1.25 Lakh/month in savings — ₹15 Lakh/year. Additional value comes from reduced maintenance costs, improved compliance, and occupant satisfaction." },
      { question: "Can BMS be added to an existing building?", answer: "Yes. Retrofit BMS is common for existing buildings undergoing renovation or energy efficiency upgrades. We install controllers, sensors, and actuators that integrate with existing MEP equipment. The key requirement is access to HVAC and lighting control points — which most commercial buildings already have." },
      { question: "What protocols does your BMS support?", answer: "We work with all major building automation protocols: BACnet/IP and BACnet MS/TP (HVAC industry standard), KNX (lighting and room automation), Modbus (energy meters and VFDs), DALI (lighting control), and proprietary protocols for specific equipment brands. Our protocol-agnostic approach ensures we integrate with whatever equipment is already installed." },
    ],
  },

  // ─── Smart Locks & Access Control ──────────────────────────────────────
  {
    slug: "smart-locks",
    headline: "Smart Locks & Digital Door Locks in India",
    introduction: `A smart lock opens via fingerprint, PIN, RFID card, smartphone, or remote command instead of a metal key — while keeping a mechanical key as backup. ${COMPANY.name} supplies, installs, and — crucially — integrates premium smart locks into your wider automation system, so your front door does far more than just unlock. ${COMPANY.experience} years and ${COMPANY.projectsCompleted} projects of doing it properly, not just bolting a Wi-Fi gadget onto your door.`,
    whatItIs: `A digital door lock replaces or augments a key cylinder with electronic authentication and, on connected models, network control plus an audit log of every entry. Locks come in mortise (full lock body recessed into the door — strongest, for main doors), rim/surface-mount (the easy-retrofit Indian mass-market form), deadbolt, and glass-door patch variants. They unlock through "5-way" to "9-way" access — fingerprint, PIN keypad, RFID card, Bluetooth/app, Wi-Fi remote, face recognition, time-bound OTP for guests, and always a mechanical key override. The important distinction: a standalone Wi-Fi lock can only lock and unlock remotely, while an integrated lock becomes a node in your home's logic — triggering scenes, arming security, and logging access centrally.`,
    whyItMatters: `For Indian families a smart lock solves real problems: no more hidden keys, time-bound codes for maids and deliveries (with a notification when used), remote OTP access for relatives at an NRI's second home, and a complete log of who entered and when. But it's also where cheap products fail — a flimsy electronic body on an otherwise heavy door, an optical fingerprint sensor that struggles in monsoon humidity, or Bluetooth proximity-unlock that is vulnerable to relay attacks. The lock on your main door is not the place to save ₹4,000. A premium integrator specifies the right body, the right sensor, proper fire-egress, and genuine integration — not just the flashiest spec sheet.`,
    howWeDoIt: [
      { step: "Door & Security Assessment", detail: "We check your door type and thickness (wooden 30–65mm, metal, UPVC, or frameless glass), existing hardware, fire-egress requirements, and how the lock should fit into your overall security plan." },
      { step: "Brand & Lock Selection", detail: "We recommend the right lock for the door and use case — Yale, Godrej, Hafele, or Aqara/Schlage for Matter homes — balancing build quality, sensor type (capacitive for humidity), access methods, and whether it must integrate with your control system." },
      { step: "Professional Installation", detail: "Precise routing and fitting for mortise locks, correct alignment, and configuration of all credentials — fingerprints, PINs, cards, app users, and the mechanical key backup — with fire-safe interior egress verified." },
      { step: "Automation Integration & Handover", detail: "For control-system homes we integrate the lock into Crestron, Control4, KNX (via gateway), or Matter — so unlocking fires a Welcome scene, locking arms security, and access logs surface in one app. We then train your household and set up AMC." },
    ],
    useCases: [
      { title: "Main Door Security", description: "Multi-credential mortise locks with tamper and intrusion alerts, biometric + PIN + RFID + key backup, integrated with your CCTV and alarm." },
      { title: "NRI & Second Homes", description: "Wi-Fi locks with remote OTP let you admit caretakers or relatives from abroad and review access logs — with PIN/key backup for villas on patchy rural internet." },
      { title: "Rentals & Guest Access", description: "Time-bound guest codes auto-issued and revoked per stay, with a full audit trail — no key handovers, ideal for Airbnb and serviced apartments." },
      { title: "Staff & Delivery Access", description: "Separate time-restricted codes (e.g. maid 9–11am) that notify you when used, plus scheduled access for cooks, drivers, and deliveries." },
    ],
    pricing: [
      { tier: "Entry — Secondary Doors", range: "₹3,000–10,000", includes: "Rim-mount fingerprint + PIN + RFID + key, Bluetooth (phone-near) control, basic app. Best for bedrooms, back doors, and offices." },
      { tier: "Mid — Connected Main Door", range: "₹10,000–30,000", includes: "Fingerprint + PIN + RFID + app + key (5–7 way), Wi-Fi remote, remote OTP, access logs, some with camera/doorbell. The volume sweet spot for most homes." },
      { tier: "Premium — Integrated & Biometric", range: "₹30,000–70,000+", includes: "Auto-deadbolt or push-pull mortise, face recognition, 8–9 way access, voice, and full integration into Crestron/Control4/KNX/Matter with central scenes and logging." },
    ],
    whyChooseUs: [
      "We integrate locks into Crestron, Control4, KNX, and Matter — not just bolt on a Wi-Fi gadget",
      "Honest security engineering: capacitive sensors for humidity, no risky auto-unlock, verified fire-egress",
      "Right-sized recommendations across Yale, Godrej, Hafele, Aqara & Schlage — not commission-driven",
      `${COMPANY.experience} years and ${COMPANY.projectsCompleted} projects, with installation, training & AMC`,
    ],
    faqs: [
      { question: "Which smart locks actually integrate with home automation systems?", answer: "For true integration (not just an Alexa voice command), the credible options are Yale — which has native Crestron Home and Control4 modules — August for Control4, and Aqara or Schlage for Matter-over-Thread homes (working across Apple Home, Google, and Alexa). Most mass-market Indian locks (Lavna, Qubo, Godrej Catus) are standalone Wi-Fi locks that, at best, respond to voice. We specify locks that feed their state into your whole-home logic so unlocking can trigger scenes and arm or disarm security." },
      { question: "Are smart locks safe? What about hacking?", answer: "A well-chosen lock from a reputable brand is very safe, but two honest caveats matter. First, Bluetooth proximity 'auto-unlock' is theoretically vulnerable to relay attacks — we disable it and require a second factor (PIN or biometric). Second, build quality varies wildly; we fit heavy mortise bodies on main doors, not flimsy electronic shells. We also recommend brands with regular firmware updates and, for privacy-conscious clients, India-server data residency." },
      { question: "Do fingerprint locks work reliably in Indian heat and humidity?", answer: "Capacitive fingerprint sensors handle monsoon humidity, sweat, and dust far better than cheaper optical sensors — which is why we specify capacitive readers for Indian conditions. Even so, every lock we install keeps PIN, RFID, and a mechanical key as backups, so a wet thumb never locks you out." },
      { question: "What happens if the battery dies?", answer: "Smart locks warn you well in advance via app alerts (typically weeks of runtime left), and every lock retains a mechanical key override. Better models also have an external 9V jump-start tab or USB-C emergency port so you can power the keypad momentarily even if the battery is fully dead. Wi-Fi locks drain faster (6–12 months) than Bluetooth-only models." },
      { question: "Are smart locks safe in a fire?", answer: "Yes, when specified correctly. The interior side must allow single-action egress — a thumb-turn or handle that opens the door instantly without a code. We verify panic-override on every lock we install, which is a non-negotiable safety requirement and something cheap locks sometimes get wrong." },
    ],
  },

  // ─── Home Networking & WiFi ────────────────────────────────────────────
  {
    slug: "home-networking",
    headline: "Home Networking, Structured Cabling & Whole-Home WiFi in India",
    introduction: `Home networking is the structured cabling, managed switching, and whole-home WiFi that form the nervous system of an automated home — the layer everything else depends on. ${COMPANY.name} designs and installs professional networks that go in before the automation, security, and AV, so your smart home actually responds instantly and never says "device offline." ${COMPANY.experience} years of building the foundation that cheap ISP routers can't.`,
    whatItIs: `A professional home network is far more than the box your ISP supplies. It combines structured cabling (Cat6 or future-proof Cat6A home-runs from every room, with a fibre backbone across floors), a central network rack with a patch panel, PoE switches that power access points and cameras over the data cable, managed switches that enable security segmentation, ceiling-mounted WiFi access points with wired backhaul (far more reliable than wireless mesh hops), and a UPS to keep the whole thing alive through power cuts. The result is a network sized for the 50–150+ connected devices a modern villa runs — not the dozen a consumer router is built for.`,
    whyItMatters: `In a smart home, every scene, command, and camera feed rides the network — and it's the single most common failure point because builders and ISPs cut corners there. Cheap routers choke on device count (not bandwidth), thick RCC walls and multi-floor villas create dead zones, and 4K streaming, cameras, and video calls starve each other without proper switching and QoS. A ₹20 Lakh–₹1.5 Crore automation project is judged on whether the lights respond instantly — and they won't if the network is an afterthought. Critically, structured cabling must be planned during construction: retrofitting it into a finished home costs 10–15× more. Get the network right and everything above it just works.`,
    howWeDoIt: [
      { step: "Site & Coverage Survey", detail: "We map your floor plan, wall construction, device count, and usage (streaming, cameras, work-from-home) to plan access-point placement — roughly one AP per 1,000–1,500 sq ft — and every cable drop." },
      { step: "Structured Cabling Design", detail: "We specify Cat6 or Cat6A home-runs to every room and device, a fibre backbone where needed, and a central rack location — ideally before plaster, since retrofit costs 10–15× more. For finished homes we use MoCA-over-coax and mesh where cabling isn't possible." },
      { step: "Rack, Switching & WiFi Install", detail: "We install the rack, patch panel, PoE and managed switches, wired ceiling access points (UniFi, Aruba Instant On, or Omada), and a rack UPS — a clean, labelled, serviceable backbone built to enterprise standards." },
      { step: "VLAN Security & Integration", detail: "We segment the network with VLANs (trusted devices, IoT/automation, cameras, guest), configure the firewall, set up secure remote access via VPN, and verify that KNX/Control4, cameras, AV, and voice all run reliably on top." },
    ],
    useCases: [
      { title: "Large & Multi-Floor Villas", description: "Cat6A throughout with a fibre backbone and 4–6 wired access points deliver seamless coverage across thick walls and multiple floors where a single router fails." },
      { title: "IoT-Heavy Smart Homes", description: "Homes with 50–150+ devices need the client capacity and VLAN segmentation that only managed, professional networking provides — keeping automation responsive and secure." },
      { title: "Work-From-Home & Streaming", description: "QoS and wired backhaul let multiple 4K streams, video calls, and 24/7 cameras run simultaneously without one activity starving another." },
      { title: "Builders & Under-Construction Homes", description: "Planning structured cabling at the construction stage avoids the 10–15× retrofit cost and delivers a smart-home-ready shell at handover." },
    ],
    pricing: [
      { tier: "Apartment — Cabling + Prosumer Mesh", range: "₹60,000–1,50,000", includes: "8–12 structured drops, wall rack and patch panel, a gateway plus 2 access points, and a managed switch — solid coverage for a 2–3BHK." },
      { tier: "Apartment Managed / Villa Mid", range: "₹1,50,000–5,00,000", includes: "Full structured cabling, UniFi or Aruba gateway, PoE switching, 3–5 wired access points, VLAN segmentation, and a rack UPS." },
      { tier: "Villa — Full Rack-Based", range: "₹5,00,000–15,00,000+", includes: "Cat6A throughout with fibre backbone, 12–24U rack, enterprise gateway and 24-port+ PoE switching, 4–6 wired APs, complete VLAN security, NVR integration, and UPS." },
    ],
    whyChooseUs: [
      "We design the network as the foundation of your automation — before KNX, security, and AV",
      "Enterprise-grade structured cabling, managed switching, and wired access points (UniFi, Aruba, Omada)",
      "VLAN segmentation and secure VPN remote access — security most residential installers ignore",
      `${COMPANY.experience} years building reliable networks for villas, apartments, and builders across India`,
    ],
    faqs: [
      { question: "Do I really need professional networking for a smart home?", answer: "If you have more than a handful of connected devices, yes. Consumer routers and ISP boxes fail on device count, not bandwidth — they drop associations, which shows up as laggy or 'offline' automations. A managed network with wired access points and proper switching is what makes KNX, Control4, cameras, and voice respond instantly and reliably. It's the foundation that de-risks your entire automation spend." },
      { question: "Cat6 or Cat6A — which should I use?", answer: "Cat6 carries 1 Gbps comfortably (10 Gbps over short runs) and is fine for most apartments. Cat6A carries a full 10 Gbps to 100 metres and is the future-proof premium spec for villas — and since cabling is the one layer you cannot upgrade later without breaking walls, we recommend Cat6A for any home you plan to keep. The cable is a small part of the cost; the labour to re-pull it later is not." },
      { question: "Is mesh WiFi good enough, or do I need wired access points?", answer: "Wireless mesh is a fine retrofit when you genuinely cannot run cable, but it relies on wireless 'hops' that halve throughput and add latency. Wired access points — ceiling units backhauled over Ethernet — are dramatically more reliable and the premium standard. In a planned home we always run cable to each AP location." },
      { question: "Why does VLAN segmentation matter for security?", answer: "A compromised cheap IoT device or camera can be a foothold into your personal devices and data. VLANs isolate device classes — your phones and laptops on one network, IoT and automation on another, cameras on a third, guests on a fourth — so a hacked smart plug can't reach your work laptop and cameras can't 'phone home.' This requires managed switches and pro access points, which is why consumer gear can't do it." },
      { question: "Should I get Wi-Fi 6, 6E, or Wi-Fi 7?", answer: "India delicensed the lower 6 GHz band in January 2026, which finally makes Wi-Fi 6E and Wi-Fi 7's best features legally usable here. Wi-Fi 6E is excellent for most homes; we recommend Wi-Fi 7 — with its 320 MHz channels and Multi-Link Operation for lower latency in congested homes — for multi-gig fibre connections, device-dense smart homes, and anyone future-proofing for 5+ years." },
    ],
  },

  // ─── Smart Switches & Keypads ──────────────────────────────────────────
  {
    slug: "smart-switches",
    headline: "Smart Switches & Automation Keypads in India",
    introduction: `A smart switch lets you control lights and fans by app, voice, schedule, sensor, or scene — not just by physical toggle. But there are three very different ways to do it, and choosing wrong is the most common smart-switch mistake. ${COMPANY.name} helps you pick between retrofit modules, glass touch panels, and professional KNX keypads — and installs them so they work reliably, even when your internet doesn't. ${COMPANY.experience} years of wired-system experience behind every recommendation.`,
    whatItIs: `There are three approaches. (1) Retrofit modules — a small relay wired behind your existing switch, so the wall plate and look stay unchanged; cheapest and ideal for finished, occupied homes. (2) Glass touch panels — the whole switch plate is replaced with a capacitive glass or modular touch panel; a premium aesthetic upgrade that fits standard Indian gang boxes. (3) Professional keypads on a wired bus (KNX, Crestron, Lutron) — engraved scene buttons that talk to a central controller driving relays and dimmers in the panel; the gold standard for large and luxury homes. The crucial distinction: a smart switch makes a single light smart, while an automation keypad makes the whole home smart — each button is a programmable scene decoupled from any one load.`,
    whyItMatters: `The switch is the most-touched device in your home — it must respond instantly and keep working when the internet is down. That's where cheap Wi-Fi switches disappoint: each one holds a router slot and depends on a vendor cloud, adding latency and outage risk. There's also a very Indian catch — most homes built before about 2010 have no neutral wire at the switch box, which most smart switches require; we identify this up front and choose no-neutral models or the right wiring approach. And fan speed control needs dedicated regulator hardware (many smart regulators don't work with BLDC fans). Getting these details right is the difference between a smart home that delights and one that frustrates daily.`,
    howWeDoIt: [
      { step: "Wiring & Neutral Assessment", detail: "We check for a neutral wire at your switch boxes (a 10-minute test), back-box depth, fan types (induction vs BLDC), and load types — the practical details that determine which smart switches will actually work in your home." },
      { step: "Approach & Brand Selection", detail: "We map the right approach to your situation: retrofit modules for finished homes, glass touch panels for renovations, or KNX/Crestron/Lutron keypads for new builds and luxury homes — selecting brands from Wipro and Schneider Wiser to Basalte and Lutron." },
      { step: "Professional Installation", detail: "Clean, safe installation by trained electricians — modules seated in the back-box, panels aligned to your switchboards, or keypads wired to the bus — with the physical switch retained as a fail-safe wherever possible." },
      { step: "Scene Programming & Integration", detail: "We program scenes (All Off, Movie, Goodnight, Welcome), integrate with voice and app, and — for keypad systems — tie lighting, curtains, HVAC, and audio onto single engraved buttons across the home." },
    ],
    useCases: [
      { title: "Finished / Occupied Homes", description: "Retrofit modules add app, voice, and scheduling behind your existing switches with zero change to the wall or aesthetics — installed in minutes per point." },
      { title: "Renovations", description: "Glass touch panels replace tired switchboards with a cohesive modern look — backlit capacitive buttons with app and voice in one unit." },
      { title: "New Builds & Luxury Homes", description: "KNX, Crestron, or Lutron keypads deliver engraved scene buttons, designer finishes, deterministic reliability, and zero cloud dependence — the right answer when wiring at construction stage." },
      { title: "Whole-Home Scenes", description: "A single keypad button can dim every light, close the curtains, set the AC, and start the music across rooms — the difference between a smart switch and true automation." },
    ],
    pricing: [
      { tier: "Retrofit Modules", range: "₹500–2,500 / point", includes: "Wi-Fi or Zigbee relay modules behind existing switches — app, voice, and scheduling with no aesthetic change. Best for finished homes and rentals." },
      { tier: "Glass Touch Panels", range: "₹3,000–6,000 / board", includes: "Capacitive glass or modular touch panels (Wozart, Schneider Wiser, AZIOT) replacing your switchboards — premium look, app and voice, with no-neutral options where needed." },
      { tier: "KNX / Crestron / Lutron Keypads", range: "₹10,000–1,20,000 / keypad", includes: "Engraved scene keypads on a wired bus, fully local control, designer finishes (Basalte, Lutron, Gira), integrated with whole-home lighting, curtains, HVAC, and audio." },
    ],
    whyChooseUs: [
      "We match the right approach — retrofit, glass panel, or KNX keypad — to your home and budget",
      "We catch the India-specific catches: neutral wire, back-box depth, and BLDC fan compatibility",
      "Local-control systems that keep working when the internet is down — not cloud-dependent gadgets",
      `${COMPANY.experience} years of wired-system expertise, from Wipro and Schneider Wiser to Basalte and Lutron`,
    ],
    faqs: [
      { question: "My home has no neutral wire — can I still get smart switches?", answer: "Yes. Most Indian homes built before about 2010 have only a live wire at the switch box, and most smart switches need a neutral — but specific no-neutral models (such as Smartify TAC or Aqara with a hub) work without one. Alternatively, for a renovation we can pull a neutral, or for a premium home use a KNX or centralised approach where the switching happens in the panel. We check this first so there are no surprises." },
      { question: "Can I get smart switches without rewiring or breaking walls?", answer: "Yes — retrofit modules sit behind your existing switches and need no wall changes, and same-cut-out glass panels swap onto your existing gang boxes. Only KNX keypad systems require bus cabling, which is why we reserve those for new builds and major renovations. For a finished, occupied home, retrofit modules or touch panels give you most of the functionality with no mess." },
      { question: "Will smart switches control my fan speed?", answer: "On/off, yes — but variable speed needs a dedicated smart fan regulator built for Indian induction-motor fans, not a generic smart switch. Importantly, many smart fan regulators are not compatible with newer BLDC fans, so we check your fan type and specify the correct regulator. This is a detail cheap solutions routinely get wrong." },
      { question: "What's the difference between a smart switch and an automation keypad?", answer: "A smart switch controls its own load — the lights or fan on that board — and adds app and voice on top; it's a one-to-one upgrade. An automation keypad controls the whole house: each button is a programmable scene that simultaneously dims lights, closes curtains, sets the AC, and triggers audio across rooms, talking to a central controller rather than switching a single circuit. Keypads (KNX, Crestron, Lutron) are the premium, future-proof choice." },
      { question: "Do smart switches work when the internet is down?", answer: "It depends on the type — which is exactly why it matters. Cheap Wi-Fi switches often stop responding without the vendor cloud. Retrofit modules keep their physical toggle working regardless. Zigbee switches run locally through a hub with no internet needed. KNX keypads are fully local and deterministic — they always work. For reliability we steer premium clients toward local-control systems, not cloud-dependent gadgets." },
    ],
  },

  // ─── Curtain & Gate Motors ─────────────────────────────────────────────
  {
    slug: "curtain-gate-motors",
    headline: "Motorized Curtains, Blinds & Automatic Gate Motors in India",
    introduction: `Motorized curtains and automatic gates are two of the most-loved automation upgrades — and ${COMPANY.name} delivers both as part of one integrated system, not as disconnected gadgets in separate apps. Your curtains glide open with the morning scene, your gate opens as you arrive home, and both respond to a single app, keypad, or voice command. ${COMPANY.experience} years and ${COMPANY.projectsCompleted} projects of doing motorization properly — with the right motors, real safety, and genuine integration.`,
    whatItIs: `On the window side, we motorize drapery and curtain tracks (ripple-fold, S-fold, pinch-pleat), roller and sunscreen blinds, roman, sheer/zebra, blackout, venetian, honeycomb, and outdoor pergola/zip shades — including dual-layer setups with a sheer for daytime and a blackout behind it for night. On the entry side, we automate swing gates, sliding gates, bi-fold gates, and boom barriers for homes, villas, farmhouses, and gated communities. Both connect into your KNX, Crestron, or Control4 system so they participate in scenes and respond to the same app, keypad, and voice control — a curtain motor in a separate Wi-Fi app and a gate motor on a basic remote are two silos; we make them one system.`,
    whyItMatters: `Beyond the obvious convenience — no reaching behind sofas, no getting out of the car in the rain — motorization delivers real value. Automated solar shading cuts whole-home cooling by 15–25% and overall HVAC energy by up to 30% by rejecting peak-hour heat and glare, which matters in Indian summers. On gates, the difference between a cheap motor and a properly installed one is safety and reliability: photocell safety beams that stop the gate if a child, pet, or car is in the way, obstacle detection, auto-close timers, battery backup that keeps the gate working through power cuts, and a manual release for emergencies — features budget installs routinely skip. Done right, motorized curtains and gates are daily quality-of-life upgrades that also save energy and improve security.`,
    howWeDoIt: [
      { step: "Measurement & Site Survey", detail: "We measure every window and track type, assess your gate (weight, swing room vs sliding, driveway length), and plan power, control wiring, and how it all ties into your automation and intercom." },
      { step: "Product & Motor Selection", detail: "We match the right motor and hardware to the job — Somfy or Lutron for premium quiet curtain tracks, FAAC/Nice/BFT for gates — balancing noise, load, finish, and integration rather than fitting the cheapest motor." },
      { step: "Professional Installation", detail: "Precise track and motor fitting, correctly aligned gate operators with photocell safety sensors and battery backup, manual release, and clean concealed wiring — installed to last, by trained technicians." },
      { step: "Scene Programming & Integration", detail: "We program scenes (Good Morning opens sheers, Movie drops blackouts, Arrive Home opens the gate and porch lights), integrate with your video door phone, app, and voice, and hand over with training and AMC." },
    ],
    useCases: [
      { title: "Living & Bedroom Curtains", description: "Quiet motorized drapery and dual-layer sheer + blackout tracks that open to the morning scene and close for movies or sleep — at a tap or by voice." },
      { title: "Tall & Hard-to-Reach Windows", description: "Floor-to-ceiling glass, skylights, and high atrium windows where manual operation is impractical — motorization is the only sensible option." },
      { title: "Villa & Farmhouse Gates", description: "Automatic swing or sliding gates with photocell safety, battery backup for power cuts, video-intercom screening, and one-tap or number-plate entry." },
      { title: "Outdoor & Pergola Shades", description: "Wind- and sun-rated motorized zip and pergola screens for balconies, terraces, and facades — controlled on schedule or by sun sensor." },
    ],
    pricing: [
      { tier: "Motorized Blinds — Entry to Mid", range: "₹8,000–35,000 / window", includes: "Smart roller, zebra, or sunscreen blinds with app and remote (Dooya, Aqara, Vista, Hunter Douglas) — clean, quiet, scene-ready." },
      { tier: "Premium Curtains & Drapery", range: "₹35,000–2,00,000 / window", includes: "Somfy Sonesse roller and Glydea curtain track to Lutron Sivoia QS / Palladiom drapery, with dual-layer sheer + blackout and full integration." },
      { tier: "Automatic Gate Motors", range: "₹65,000–2,50,000+ installed", includes: "Residential swing or sliding operators (FAAC, Nice, BFT) with photocell safety, auto-close, battery backup, manual release, and intercom/app entry — heavier villa/commercial gates at the top of the range." },
    ],
    whyChooseUs: [
      "Curtains and gates delivered as one integrated system — same app, scenes, and voice, not separate gadgets",
      "Premium motors specified for quiet, reliable operation — Somfy, Lutron, FAAC, Nice — matched to the job",
      "Real gate safety as standard: photocell beams, battery backup for power cuts, manual release",
      `${COMPANY.experience} years, ${COMPANY.projectsCompleted} projects, with site survey, installation & AMC`,
    ],
    faqs: [
      { question: "Can I add motorized curtains to my existing home without major work?", answer: "Yes. Most motorized blinds and many curtain tracks retrofit cleanly — we run a discreet power feed to the track and use RF or Wi-Fi/Zigbee control so no wall-chasing is needed. For premium integrated curtains on a KNX or Crestron system, a little control wiring is ideal, which we plan around your interiors. We'll tell you up front what each window needs after a site survey." },
      { question: "Do motorized curtains really save on air-conditioning?", answer: "Yes, meaningfully. Automated solar shading rejects peak-hour heat and glare before it enters the room, cutting whole-home cooling by roughly 15–25% and overall HVAC energy by up to 30% in studies. With a sun sensor, shades position themselves by the sun's angle — blocking the harsh afternoon sun and admitting gentle morning light — which is especially valuable in Indian summers." },
      { question: "Are automatic gates safe for children and pets?", answer: "When installed correctly, yes — and this is where cheap installs cut corners. Every gate we install includes photocell safety beams that instantly stop and reverse the gate if anything breaks the beam, plus obstacle detection via motor sensing. We add auto-close timers so the gate is never left open, and a manual release for emergencies. Safety sensors are standard on our installs, not an optional extra." },
      { question: "What happens to my automatic gate during a power cut?", answer: "We specify gate operators with battery backup that keep the gate working for several open/close cycles during an outage — essential given India's power cuts. If the battery is also depleted, a manual release key lets you open the gate by hand. You're never locked in or out because of a power failure." },
      { question: "Can the gate and curtains work together in one scene?", answer: "Yes — that's the advantage of an integrated system. An 'Arrive Home' scene can open the gate (triggered by your phone or number-plate recognition), turn on the driveway and porch lights, and open the entry curtains, all automatically. A 'Goodnight' scene confirms the gate is closed, drops the blackout curtains, and turns off the lights. Point products in separate apps can't do this; an integrated KNX/Crestron/Control4 home can." },
    ],
  },

  // ─── Building Automation & BMS ─────────────────────────────────────────
  {
    slug: "building-automation-bms",
    headline: "Building Automation & BMS (Building Management Systems) in India",
    introduction: `A Building Management System (BMS) is the centralized platform that monitors and controls a building's core engineering — HVAC, lighting, energy, security, and life-safety — from a single interface, typically cutting energy use by 20–40%. ${COMPANY.name} designs, integrates, and maintains protocol-agnostic BMS for commercial buildings, hotels, residential towers, and luxury villas — independent of any single OEM, so you get the right mix of equipment, not vendor lock-in. ${COMPANY.experience} years of building automation expertise across India.`,
    whatItIs: `A BMS (also called a BAS or IBMS) is a computer-based supervisory system that ties a building's services into one dashboard: HVAC plant (chillers, AHUs, FCUs, VRV/VRF), lighting (occupancy and daylight control, DALI dimming), energy and sub-metering, access control, CCTV and intrusion, fire and life-safety, elevators, water and pumps, and DG/UPS power. The difference from home automation is purpose: home automation is experience-led (scenes, AV, comfort, convenience in a single home), while a BMS is operations-led — engineered around energy efficiency, equipment uptime, safety compliance, and facility-manager control at scale. The overlap, and our specialty, is residential-grade BMS that brings facility-grade energy and security logic to luxury villas and the common areas of residential towers.`,
    whyItMatters: `HVAC alone accounts for 40–60% of a commercial building's electricity in India, so the savings lever is enormous: a well-designed BMS cuts operational energy by 15–20% (CII–IGBC) and often 20–40% overall through scheduling, idle-load reduction, and occupancy/daylight logic — typically paying for itself in 2–4 years. Beyond energy, a BMS delivers single-pane facility control, predictive maintenance that flags failing equipment before it breaks down, stable comfort and air quality for occupants, and the energy monitoring and controls effectively required for IGBC, LEED, and GRIHA green ratings. For a developer, hotelier, or facility owner, it's the difference between a building that's managed and one that quietly bleeds energy and breaks down unpredictably.`,
    howWeDoIt: [
      { step: "Assessment & Energy Audit", detail: "We survey your building's HVAC, electrical, lighting, and safety systems, identify the biggest energy and operational losses, and define the scope, control points, and green-rating goals." },
      { step: "Design & Protocol Architecture", detail: "We design a protocol-agnostic architecture — BACnet/IP backbone with KNX, Modbus, DALI, and IoT field devices unified into one supervisory layer with consistent point naming, so you're never locked to a single OEM." },
      { step: "Integration & Installation", detail: "We install controllers, sensors, meters, and gateways and integrate multi-vendor equipment (Honeywell, Siemens, Schneider, Johnson Controls, KNX) into the head-end — for new builds and retrofits alike." },
      { step: "Commissioning, Dashboards & AMC", detail: "We commission every point, build the operator dashboards and trends, train your facility team, and provide AMC with remote monitoring, alarms, and energy reporting for ongoing optimization." },
    ],
    useCases: [
      { title: "Commercial Offices & IT Parks", description: "HVAC optimization, energy sub-metering for tenant billing, occupancy and daylight lighting, and integrated access and CCTV — driven by opex and green-rating targets." },
      { title: "Hotels & Resorts", description: "BMS plus Guest Room Management (GRMS): occupancy-based climate and lighting, drapes, do-not-disturb, and PMS integration — cutting energy on unoccupied rooms." },
      { title: "Residential Towers", description: "Common-area BMS for lifts, water pumps and tanks, STP, basement ventilation, DG/UPS, common lighting, fire pumps, CCTV, and access — the building's services, managed centrally." },
      { title: "Luxury Villas", description: "Residential-grade BMS layering facility logic — energy monitoring, pumps, security, gate, and HVAC plant — over a KNX home-automation core." },
    ],
    pricing: [
      { tier: "Commercial BMS — Standard", range: "₹80–250 / sq ft", includes: "HVAC, lighting, and energy metering on a BACnet backbone with operator dashboards — the core efficiency package for offices and mid-size buildings." },
      { tier: "Premium IBMS — Full Integration", range: "₹250–600+ / sq ft", includes: "Fully integrated HVAC, lighting, access, CCTV, fire, lifts, and power on BACnet/IP with green-rating compliance, analytics, and remote monitoring." },
      { tier: "Hospitality & Residential", range: "Scoped per project", includes: "Hotel BMS + per-room GRMS, residential-tower common-area BMS, or villa residential-grade BMS — priced after a site assessment, since scope varies widely." },
    ],
    whyChooseUs: [
      "Vendor-neutral, protocol-agnostic integration — Honeywell, Siemens, Schneider, JCI & KNX, not OEM lock-in",
      "Specialists in the under-served niches: hospitality GRMS, residential-tower, and luxury-villa BMS",
      "Real energy ROI: 15–40% savings, 2–4 year payback, and IGBC/LEED/GRIHA compliance",
      `${COMPANY.experience} years of building automation with design, integration, commissioning & AMC under one roof`,
    ],
    faqs: [
      { question: "What's the difference between a BMS and home automation?", answer: "Home automation is experience-led — lighting scenes, AV, comfort, and convenience in a single home, usually on KNX or Crestron/Lutron. A BMS (Building Management System) is operations-led — it manages a building's infrastructure at scale for energy efficiency, equipment uptime, and safety compliance, engineered around HVAC plant, metering, and life-safety. They overlap in residential-grade BMS, where we bring facility-grade energy and security logic to luxury villas and the common areas of residential towers." },
      { question: "How much energy can a BMS actually save?", answer: "Because HVAC is 40–60% of a commercial building's electricity in India, the savings are substantial: CII–IGBC puts a well-optimized BMS at 15–20% of operational energy cost, and broader industry data shows 20–40% overall through scheduling, idle-load reduction, and occupancy/daylight control. Payback is typically 2–4 years from energy savings alone, before counting reduced maintenance and longer equipment life." },
      { question: "Which protocols and brands do you work with?", answer: "We're protocol-agnostic: BACnet/IP and MS/TP (the HVAC industry standard) as the backbone, with KNX for room-level control, Modbus for meters and drives, DALI for lighting, and MQTT/IoT for cloud analytics — unified into one supervisory layer. We integrate multi-vendor equipment from Honeywell, Siemens, Schneider Electric, Johnson Controls, ABB, and KNX-based systems, so you get the best mix for your building rather than being locked to one OEM." },
      { question: "Can a BMS be added to an existing building?", answer: "Yes — retrofit BMS is common, especially for energy-efficiency upgrades and green re-certification. We install controllers, sensors, and meters that integrate with your existing MEP equipment via gateways, starting with the highest-impact systems (usually HVAC and energy metering) and expanding from there. Most commercial buildings already have the control points we need to tie into." },
      { question: "Do luxury villas and housing societies need a BMS?", answer: "Increasingly, yes. A luxury villa benefits from residential-grade BMS that monitors energy, pumps, security, the gate, and HVAC plant alongside its KNX home automation. A residential tower or housing society needs a common-area BMS to manage lifts, water pumps and tanks, STP, DG/UPS, basement ventilation, fire pumps, and common lighting — reducing running costs and breakdowns across shared infrastructure. We design both, scoped to the property." },
    ],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
