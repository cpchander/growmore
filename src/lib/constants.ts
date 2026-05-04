// ============================================================
// SITE-WIDE CONSTANTS — Update these once, reflects everywhere
// ============================================================

export const COMPANY = {
  name: "Grow More Solutions",
  legalName: "Grow More Hitech Solutions Pvt. Ltd.",
  tagline: "India's Leading Smart Home & Automation Company",
  motto: "Play Imagination",
  foundedYear: 2009,
  experience: "15+",
  founderExperience: "25+", // Anupam Mahajan's total industry experience
  projectsCompleted: "300+",
  citiesServed: "15+",
  phone: "+91-96678-95926",
  whatsapp: "919667895926",
  email: "sales@growmoresolutions.com",
  address: "Showroom No. A5, Opp. Metro Pillar No. 121, KH-405, MG Road, Ghitorni, New Delhi 110030",
  city: "New Delhi",
  cin: "U51101DL2009PTC194853",
  gmbUrl: "", // TODO: Google Business Profile URL
  socialLinks: {
    instagram: "https://www.instagram.com/conceptual_homeautomation/",
    facebook: "https://www.facebook.com/GMHTS/",
    linkedin: "https://linkedin.com/company/grow-more-hitech-solutions-pvt-ltd",
    youtube: "",
  },
  sectors: ["Residential", "Corporate", "Hospitality"],
  demoCenter: {
    name: "Grow More Experience Center",
    address: "Showroom No. A5, Opp. Metro Pillar No. 121, KH-405, MG Road, Ghitorni, New Delhi 110030",
    hours: "Mon–Sat: 10:00 AM – 7:00 PM",
    features: [
      "Live smart home setup with working automation",
      "KNX, Crestron, Control4 & Lutron systems on display",
      "Lighting scenes & HVAC control demonstration",
      "Home theater & AV room experience",
      "One-on-one consultation with automation experts",
    ],
  },
  afterSales: {
    warranty: "1-Year Comprehensive Warranty",
    amc: "Annual Maintenance Contracts (AMC) available",
    support: "Dedicated support team for troubleshooting",
    services: [
      "Remote diagnostics & firmware updates",
      "On-site maintenance & repair",
      "System upgrades & expansion",
      "24/7 emergency support for AMC clients",
      "Preventive maintenance schedules",
    ],
  },
} as const;

export const SERVICES = [
  {
    slug: "home-automation",
    title: "Home Automation",
    shortDesc: "Complete smart home solutions — lighting, security, climate, AV, and whole-home integration.",
    icon: "Home",
    features: ["Centralized control", "Scene automation", "Voice & app control", "Energy management"],
  },
  {
    slug: "conceptual-lighting",
    title: "Conceptual Lighting",
    shortDesc: "Architectural and decorative lighting design with automated scenes and energy optimization.",
    icon: "Lightbulb",
    features: ["Architectural lighting", "Scene control", "Daylight harvesting", "Facade lighting"],
  },
  {
    slug: "home-theater",
    title: "Home Theater & AV",
    shortDesc: "Immersive audio-visual systems with Dolby Atmos, 4K/8K projection, and one-touch scenes.",
    icon: "Tv",
    features: ["Dolby Atmos", "4K/8K projection", "Multi-room audio", "One-touch scenes"],
  },
  {
    slug: "home-security",
    title: "Smart Security & CCTV",
    shortDesc: "Intelligent surveillance, access control, smart locks, and intrusion detection.",
    icon: "Shield",
    features: ["IP cameras", "Smart locks", "Motion sensors", "Remote monitoring"],
  },
  {
    slug: "central-vacuum",
    title: "Central Vacuum System",
    shortDesc: "Built-in vacuum systems for dust-free, hygienic homes — no lugging heavy units.",
    icon: "Wind",
    features: ["Built-in piping", "Multi-room inlets", "HEPA filtration", "Silent operation"],
  },
  {
    slug: "clean-air-systems",
    title: "Clean Air Systems",
    shortDesc: "Indoor air quality management with smart purifiers, fresh air systems, and monitoring.",
    icon: "Fan",
    features: ["Air purifiers", "Fresh air systems", "AQI monitoring", "HEPA + carbon filters"],
  },
  {
    slug: "solar-power",
    title: "Solar Power Systems",
    shortDesc: "Rooftop solar panel installations for residential and commercial energy independence.",
    icon: "Sun",
    features: ["Rooftop solar", "Grid-tied systems", "Battery storage", "Net metering"],
  },
  {
    slug: "hvac-automation",
    title: "HVAC Automation",
    shortDesc: "Smart heating, ventilation & air conditioning control with zone management, energy optimization, and IoT-enabled climate scheduling.",
    icon: "Thermometer",
    features: ["Smart thermostat control", "Zone-wise climate management", "VRV/VRF integration", "Energy usage analytics", "Occupancy-based HVAC", "Scheduled temperature profiles", "Duct & sensor monitoring", "BMS-linked HVAC control"],
  },
  {
    slug: "commercial",
    title: "Commercial Automation",
    shortDesc: "Building management systems for offices, hotels, hospitals, and commercial spaces.",
    icon: "Building2",
    features: ["BMS integration", "Energy optimization", "Access control", "Meeting rooms"],
  },
] as const;

export const CITIES = [
  { slug: "mumbai", name: "Mumbai", areas: ["Bandra", "Juhu", "Powai", "South Mumbai", "Thane", "Navi Mumbai"] },
  { slug: "delhi", name: "Delhi NCR", areas: ["South Delhi", "Gurgaon", "Noida", "Greater Noida", "Dwarka", "Faridabad"] },
  { slug: "bangalore", name: "Bangalore", areas: ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Sarjapur", "Electronic City"] },
  { slug: "hyderabad", name: "Hyderabad", areas: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Kondapur"] },
  { slug: "pune", name: "Pune", areas: ["Koregaon Park", "Kalyani Nagar", "Baner", "Hinjewadi", "Kharadi"] },
  { slug: "chennai", name: "Chennai", areas: ["Anna Nagar", "T. Nagar", "Adyar", "ECR", "OMR"] },
  { slug: "kolkata", name: "Kolkata", areas: ["Salt Lake", "New Town", "Alipore", "Ballygunge", "Park Street"] },
  { slug: "ahmedabad", name: "Ahmedabad", areas: ["SG Highway", "Prahlad Nagar", "Satellite", "Bodakdev", "Thaltej"] },
  { slug: "goa", name: "Goa", areas: ["Panjim", "Calangute", "Candolim", "Dona Paula", "Porvorim"] },
  { slug: "jaipur", name: "Jaipur", areas: ["C-Scheme", "Vaishali Nagar", "Malviya Nagar", "Mansarovar", "Tonk Road"] },
  { slug: "chandigarh", name: "Chandigarh", areas: ["Sector 17", "Sector 35", "Mohali", "Panchkula", "Zirakpur"] },
  { slug: "lucknow", name: "Lucknow", areas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Mahanagar"] },
] as const;

export const BRANDS = [
  { slug: "knx", name: "KNX", logo: "/brands/knx.svg", url: "https://www.knx.org" },
  { slug: "crestron", name: "Crestron", logo: "/brands/crestron.svg", url: "https://www.crestron.com" },
  { slug: "control4", name: "Control4", logo: "/brands/control4.svg", url: "https://www.control4.com" },
  { slug: "lutron", name: "Lutron", logo: "/brands/lutron.svg", url: "https://www.lutron.com" },
  { slug: "sonos", name: "Sonos", logo: "/brands/sonos.svg", url: "https://www.sonos.com" },
  { slug: "schneider-electric", name: "Schneider Electric", logo: "/images/brands/schneider-electric.webp", url: "https://www.se.com" },
  { slug: "ajax", name: "Ajax Systems", logo: "/images/brands/ajax.webp", url: "https://ajax.systems" },
  { slug: "vimar", name: "Vimar", logo: "/images/brands/vimar.webp", url: "https://www.vimar.com" },
  { slug: "elan", name: "ELAN", logo: "/images/brands/elan.webp", url: "https://www.elancontrolsystems.com" },
  { slug: "hager", name: "Hager", logo: "/images/brands/hager.webp", url: "https://www.hager.com" },
  { slug: "belyuse-led", name: "Belyuse LED", logo: "/images/brands/belyuse-led.webp", url: "https://www.belyuse.com" },
  { slug: "hunterdouglas", name: "HunterDouglas", logo: "/images/brands/hunterdouglas.webp", url: "https://www.hunterdouglas.com" },
  { slug: "drainvac", name: "DrainVac", logo: "/images/brands/drainvac.webp", url: "https://www.drainvac.com" },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 25, suffix: "+", label: "Expert Engineers" },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Consult",
    description: "Free consultation to understand your lifestyle, budget, and automation goals.",
  },
  {
    step: 2,
    title: "Design",
    description: "Custom smart home design with 3D visualization and detailed specifications.",
  },
  {
    step: 3,
    title: "Install",
    description: "Professional installation by certified engineers with minimal disruption.",
  },
  {
    step: 4,
    title: "Support",
    description: "Lifetime support with remote diagnostics and on-site maintenance.",
  },
] as const;
