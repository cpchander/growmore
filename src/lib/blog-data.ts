// Static blog data — replace with Sanity CMS fetch when ready
import { content as costGuideContent } from "./blog-content/cost-guide";
import { content as knxVsCrestronContent } from "./blog-content/knx-vs-crestron";
import { content as smartLightingContent } from "./blog-content/smart-lighting";
import { content as buildersSmartHomesContent } from "./blog-content/builders-smart-homes";
import { content as technicalOpsStaffingContent } from "./blog-content/technical-operations-remote-staffing";
import { content as homeAutomationCost2026Content } from "./blog-content/home-automation-cost-2026";
import { content as wiringNewConstructionContent } from "./blog-content/smart-home-wiring-new-construction";
import { content as securitySystemsContent } from "./blog-content/smart-home-security-systems";
import { content as homeTheaterAvContent } from "./blog-content/home-theater-av-automation-india";
import { content as smartHvacClimateControlContent } from "./blog-content/smart-hvac-climate-control-india";
import { content as motorizedCurtainsBlindsContent } from "./blog-content/motorized-curtains-blinds-india";
import { content as wiredVsWirelessContent } from "./blog-content/wired-vs-wireless-home-automation-india";
import { content as matterVsKnxContent } from "./blog-content/matter-vs-knx-india";
import { content as whatIsHomeAutomationContent } from "./blog-content/what-is-home-automation";
import { content as smartHomeHubsContent } from "./blog-content/smart-home-hubs-2026";
import { content as smartMotionSensorsContent } from "./blog-content/smart-motion-sensors-guide";
import { content as smartBedroomContent } from "./blog-content/smart-bedroom-automation-india";
import { content as homeOfficeContent } from "./blog-content/home-office-automation-india";
import { content as restaurantContent } from "./blog-content/restaurant-automation-india";
import { content as cost3bhkBangaloreContent } from "./blog-content/home-automation-cost-3bhk-bangalore";
import { content as farmhouseAutomationContent } from "./blog-content/farmhouse-home-automation-india";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  content: string; // Markdown content
};

export const BLOG_CATEGORIES = [
  "All",
  "Guides",
  "Comparisons",
  "Room Automation",
  "Technology",
  "Projects",
  "B2B",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "farmhouse-home-automation-india",
    title:
      "Farmhouse Home Automation in India (2026): Costs, Security & Estate Setup",
    excerpt:
      "What does it cost to automate a farmhouse in India? ₹15–60 Lakh+ (6BHK NCR avg ₹38L). Why 60–70% of the budget is land — perimeter security, estate networking, gates, solar backup — not the building. From 600+ GMHS installs.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    readTime: "14 min",
    featured: true,
    image: "/images/blog/farmhouse-home-automation-india.webp",
    imageAlt:
      "Farmhouse home automation cost and setup for India 2026 — estate layout showing layered perimeter security, gate automation, outdoor lighting, pool and pump control, networking and solar backup across 1–5 acres, from ₹15 Lakh to ₹60 Lakh+, based on 600+ GMHS installations",
    content: farmhouseAutomationContent,
  },
  {
    slug: "home-automation-cost-3bhk-bangalore",
    title:
      "Home Automation Cost for a 3BHK in Bangalore (2026) — Real Pricing Guide",
    excerpt:
      "What does it cost to automate a 3BHK in Bangalore in 2026? Wireless ₹1.5–4L, wired ₹5–12L, luxury ₹12–25L+. Subsystem breakdown, brand tiers, and Whitefield/Sarjapur-specific factors from 600+ GMHS installs.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-22",
    updatedAt: "2026-06-22",
    readTime: "13 min",
    featured: true,
    image: "/images/blog/home-automation-cost-3bhk-bangalore.webp",
    imageAlt:
      "Home automation cost breakdown for a 3BHK in Bangalore 2026 showing wireless, wired, and luxury pricing tiers from ₹1.5 Lakh to ₹25 Lakh+ across Whitefield and Sarjapur",
    content: cost3bhkBangaloreContent,
  },
  {
    slug: "what-is-home-automation",
    title:
      "What Is Home Automation? The Complete Guide for India (2026)",
    excerpt:
      "What is home automation, how does it work, and is it worth it in India? A beginner's guide — components, protocols, ₹ costs, power-cut & AQI realities, and how to get started.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "18 min",
    featured: true,
    image: "/images/services/home-automation-panel.webp",
    imageAlt:
      "What is home automation — a smart home control panel showing lighting, climate, security and scene control, explained for Indian homes 2026 by GMHS",
    content: whatIsHomeAutomationContent,
  },
  {
    slug: "smart-home-hubs-2026",
    title: "Smart Home Hubs in 2026: Do You Really Need One?",
    excerpt:
      "What a smart home hub does, the best options for India (SmartThings, Apple, Aqara, Home Assistant), local vs cloud, the Z-Wave 865 MHz gotcha, and consumer hub vs KNX/Control4 controller.",
    category: "Technology",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "12 min",
    featured: false,
    image: "/images/services/home-automation-panel.webp",
    imageAlt:
      "Smart home hub guide 2026 — a central control panel bridging Zigbee, Z-Wave, Thread and Wi-Fi devices for Indian homes, by GMHS",
    content: smartHomeHubsContent,
  },
  {
    slug: "smart-motion-sensors-guide",
    title: "Smart Motion Sensors for Home Automation: PIR vs mmWave (India Guide)",
    excerpt:
      "How smart motion sensors work, PIR vs mmWave presence sensors, why your lights turn off when you sit still, India brands & ₹ prices, and how to fix false triggers in Indian heat.",
    category: "Technology",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "11 min",
    featured: false,
    image: "/images/services/security-cctv-monitor.webp",
    imageAlt:
      "Smart motion sensor guide for India — PIR vs mmWave presence sensors for automatic lighting, security and energy savings, by GMHS",
    content: smartMotionSensorsContent,
  },
  {
    slug: "smart-bedroom-automation-india",
    title: "Smart Bedroom Automation in India: Lighting, AC, Curtains & Sleep Mode",
    excerpt:
      "Automate your bedroom for better sleep — layered lighting, sleep-temperature AC, dual-layer blackout curtains, a one-tap Goodnight scene, and the India realities (early sunrise, heat, power cuts) most guides miss.",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "12 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    imageAlt:
      "Smart bedroom automation in India — a luxury bedroom with automated lighting, motorized blackout curtains and smart AC for better sleep, by GMHS",
    content: smartBedroomContent,
  },
  {
    slug: "home-office-automation-india",
    title: "Home Office Automation in India: Lighting, Productivity & WFH Setup",
    excerpt:
      "Build a WFH setup that performs — circadian lighting, smart AC, reliable networking and router-on-UPS for India's power cuts, plus Work/Meeting/End-of-Day scenes. Costs and product picks included.",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "12 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=1200&q=80",
    imageAlt:
      "Home office automation in India — a smart WFH desk setup with circadian lighting, smart AC and reliable networking, by GMHS",
    content: homeOfficeContent,
  },
  {
    slug: "restaurant-automation-india",
    title: "Restaurant & Cafe Automation in India: Smart Lighting, Audio & Ambiance",
    excerpt:
      "How restaurants automate ambiance and cut energy — scene-based lighting, multi-zone audio, HVAC scheduling, and one-touch dayparts (Lunch, Dinner, Party). Energy ROI, costs, and the India context.",
    category: "B2B",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-08",
    readTime: "12 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    imageAlt:
      "Restaurant and cafe automation in India — a stylish restaurant with scene-based smart lighting, multi-zone audio and ambiance control, by GMHS",
    content: restaurantContent,
  },
  {
    slug: "matter-vs-knx-india",
    title:
      "Matter vs KNX in India 2026: Which Smart Home Standard Wins (And Why They're Better Together)",
    excerpt:
      "Matter vs KNX for Indian homes — KNX the wired backbone, Matter the consumer/voice layer, bridged by a gateway. INR costs, decision framework & installer verdict.",
    category: "Comparisons",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-06-07",
    readTime: "17 min",
    featured: true,
    image: "/images/blog/matter-vs-knx-india.webp",
    imageAlt:
      "Matter vs KNX comparison for Indian homes 2026 — KNX wired bus backbone vs Matter wireless Thread mesh, showing reliability, cost, and the KNX-to-Matter gateway architecture based on 600+ GMHS installations",
    content: matterVsKnxContent,
  },
  {
    slug: "wired-vs-wireless-home-automation-india",
    title: "Wired vs Wireless Home Automation in India 2026: Real Costs, Protocols & Decision Framework",
    excerpt:
      "Wired vs wireless home automation in India: KNX/Crestron (₹5–40L) vs Zigbee/Wi-Fi (₹1–5L) — protocol comparison, hybrid approach & decision framework.",
    category: "Comparisons",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-26",
    readTime: "19 min",
    featured: true,
    image: "/images/blog/wired-vs-wireless-home-automation-india.webp",
    imageAlt: "Wired vs wireless home automation comparison for Indian homes 2026 — KNX bus cable and Zigbee mesh diagram showing cost, reliability, and lifespan differences based on 600+ GMHS installations",
    content: wiredVsWirelessContent,
  },
  {
    slug: "motorized-curtains-blinds-india",
    title: "Motorized Curtains & Blinds in India 2026: ₹8K–₹2.4 Lakh+ Per Window",
    excerpt:
      "Motorized curtains & blinds in India: ₹8K–₹2.4 Lakh+ per window. Somfy vs Lutron vs Hunter Douglas, KNX integration and 14–22% HVAC savings.",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-25",
    readTime: "17 min",
    featured: true,
    image: "/images/blog/motorized-curtains-blinds-india.webp",
    imageAlt: "Motorized curtains and blinds cost breakdown for Indian premium homes 2026 — tiers from ₹8K Wi-Fi roller to ₹2.4 Lakh+ Lutron Sivoia QS per window, based on 600+ GMHS installations",
    content: motorizedCurtainsBlindsContent,
  },
  {
    slug: "smart-hvac-climate-control-india",
    title: "Smart HVAC & Climate Control in India 2026: ₹2 Lakh–35 Lakh+ Real Costs",
    excerpt:
      "Smart HVAC & climate control in India: ₹2–35 Lakh+. VRV vs split economics, KNX/BACnet integration, IAQ sensors and 28–42% energy savings.",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-18",
    readTime: "18 min",
    featured: true,
    image: "/images/blog/smart-hvac-climate-control-india.webp",
    imageAlt: "Smart HVAC and climate control cost breakdown for Indian premium homes 2026 — tiers from ₹2 Lakh IoT integration to ₹35 Lakh+ VRV with IAQ and zone control, based on 600+ GMHS installations",
    content: smartHvacClimateControlContent,
  },
  {
    slug: "home-theater-av-automation-india",
    title: "Home Theater & AV Automation Cost in India 2026: ₹3 Lakh–2 Cr+ Real Pricing",
    excerpt:
      "Home theater & AV automation cost in India: ₹3 Lakh to ₹2 Cr+. Dolby Atmos configs, acoustic treatment, projectors and AV control (Crestron/Control4).",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-11",
    readTime: "17 min",
    featured: true,
    image: "/images/blog/home-theater-av-automation.webp",
    imageAlt: "Home theater and AV automation cost breakdown for India 2026 showing tiers from ₹3 Lakh entry media room to ₹2 Crore+ reference Dolby Atmos cinema, based on 600+ GMHS installations",
    content: homeTheaterAvContent,
  },
  {
    slug: "smart-home-security-systems-india",
    title: "Smart Home Security Systems India 2026: Costs & Brands",
    excerpt:
      "Smart home security costs in India: ₹80K–₹15L+. CCTV (post-STQC 2026), smart locks, intrusion sensors & KNX integration. Based on 600+ GMHS projects.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-06",
    readTime: "16 min",
    featured: true,
    image: "/images/blog/smart-home-security-systems.webp",
    imageAlt: "Smart home security system cost breakdown showing CCTV, access control, and intrusion detection pricing from ₹80K to ₹15 Lakh+ for Indian homes",
    content: securitySystemsContent,
  },
  {
    slug: "home-automation-cost-india-complete-guide",
    title: "Home Automation Cost in India — Complete Pricing Guide (2026)",
    excerpt:
      "Detailed breakdown of smart home automation costs in India. From ₹2 Lakh basics to ₹50 Lakh+ luxury — understand what you'll pay and what you'll get.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-04-15",
    updatedAt: "2026-06-15",
    readTime: "15 min",
    featured: true,
    image: "/images/blog/home-automation-cost-india.webp",
    imageAlt: "Home automation cost breakdown in India showing basic, premium, and luxury package pricing from ₹2 Lakh to ₹50 Lakh+",
    content: costGuideContent,
  },
  {
    slug: "knx-vs-crestron-vs-control4-india",
    title: "KNX vs Crestron vs Control4 — India Buyer's Guide (2026)",
    excerpt:
      "Comprehensive comparison of KNX, Crestron, and Control4 for Indian homes. Pricing, features, reliability, and which one is right for you.",
    category: "Comparisons",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-04-10",
    updatedAt: "2026-06-15",
    readTime: "18 min",
    featured: true,
    image: "/images/blog/knx-vs-crestron-vs-control4.webp",
    imageAlt: "KNX vs Crestron vs Control4 comparison chart showing pricing, features, and ratings for Indian smart homes",
    content: knxVsCrestronContent,
  },
  {
    slug: "smart-lighting-guide-indian-homes",
    title: "Smart Lighting for Indian Homes — Everything You Need to Know",
    excerpt:
      "Complete guide to smart lighting automation in India. Scene control, dimming, scheduling, voice control, and the best brands for Indian homes.",
    category: "Room Automation",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-04-05",
    updatedAt: "2026-06-15",
    readTime: "17 min",
    featured: true,
    image: "/images/blog/smart-lighting-guide.webp",
    imageAlt: "Smart lighting scene control illustration showing movie, reading, dinner, and party modes in a living room",
    content: smartLightingContent,
  },
  {
    slug: "why-builders-should-offer-smart-homes",
    title: "Why Builders Should Offer Smart Home Packages in 2026",
    excerpt:
      "How smart-home-ready apartments help builders command premium pricing, close deals faster, and differentiate in a competitive real estate market.",
    category: "B2B",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-03-28",
    updatedAt: "2026-06-08",
    readTime: "17 min",
    featured: false,
    image: "/images/blog/builders-smart-homes.webp",
    imageAlt: "Smart home vs standard building comparison showing builder advantages including 8-15% premium pricing and 2x faster sales",
    content: buildersSmartHomesContent,
  },
  {
    slug: "home-automation-cost-2026",
    title: "Home Automation Cost in India 2026: Real Pricing from 600+ Premium Installations",
    excerpt:
      "Home automation cost in India 2026 — real pricing from 600+ premium installations across budget, mid-range and luxury smart home tiers.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-04",
    readTime: "12 min",
    featured: true,
    image: "/images/blog/home-automation-cost-2026.webp",
    imageAlt: "Home automation cost breakdown in India 2026 showing pricing by home size, brand, and scope from ₹5 Lakh to ₹50 Lakh+ based on 600+ GMHS installations",
    content: homeAutomationCost2026Content,
  },
  {
    slug: "smart-home-wiring-new-construction-india",
    title: "Smart Home Wiring & Planning Guide for New Construction in India (2026): What Your Electrician Won't Tell You",
    excerpt:
      "Smart home wiring & planning for new construction in India — what to pre-wire, cable types, conduit and timing. The guide your electrician won't give you.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-06",
    readTime: "14 min",
    featured: true,
    image: "/images/blog/smart-home-wiring-new-construction.webp",
    imageAlt: "Smart home pre-wiring diagram showing KNX bus cable, Cat6A, speaker wire, and HDMI conduit routing in a villa under construction",
    content: wiringNewConstructionContent,
  },
  {
    slug: "technical-operations-remote-staffing",
    title: "From Smart Homes to Global Staffing: How 17 Years of Technical Operations Powers Remote Talent Delivery",
    excerpt:
      "How Grow More Solutions' 17 years in architecture, HVAC & home automation operations powers Zedtreeo's global remote staffing. From 2009 to 500+ professionals.",
    category: "B2B",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-05",
    readTime: "14 min",
    featured: true,
    image: "/images/blog/technical-operations-remote-staffing.webp",
    imageAlt: "Timeline showing Grow More Solutions journey from architecture (2009) to HVAC (2015) to smart homes (2019) to global staffing via Zedtreeo (2024)",
    content: technicalOpsStaffingContent,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}
