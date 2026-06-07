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

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
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
      "Matter vs KNX comparison for Indian homes 2026 — KNX wired bus backbone vs Matter wireless Thread mesh, showing reliability, cost, and the KNX-to-Matter gateway architecture based on 300+ GMHS installations",
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
    imageAlt: "Wired vs wireless home automation comparison for Indian homes 2026 — KNX bus cable and Zigbee mesh diagram showing cost, reliability, and lifespan differences based on 300+ GMHS installations",
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
    imageAlt: "Motorized curtains and blinds cost breakdown for Indian premium homes 2026 — tiers from ₹8K Wi-Fi roller to ₹2.4 Lakh+ Lutron Sivoia QS per window, based on 300+ GMHS installations",
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
    imageAlt: "Smart HVAC and climate control cost breakdown for Indian premium homes 2026 — tiers from ₹2 Lakh IoT integration to ₹35 Lakh+ VRV with IAQ and zone control, based on 300+ GMHS installations",
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
    imageAlt: "Home theater and AV automation cost breakdown for India 2026 showing tiers from ₹3 Lakh entry media room to ₹2 Crore+ reference Dolby Atmos cinema, based on 300+ GMHS installations",
    content: homeTheaterAvContent,
  },
  {
    slug: "smart-home-security-systems-india",
    title: "Smart Home Security Systems India 2026: Costs & Brands",
    excerpt:
      "Smart home security costs in India: ₹80K–₹15L+. CCTV (post-STQC 2026), smart locks, intrusion sensors & KNX integration. Based on 300+ GMHS projects.",
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
    readTime: "16 min",
    featured: false,
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
    readTime: "17 min",
    featured: false,
    image: "/images/blog/builders-smart-homes.webp",
    imageAlt: "Smart home vs standard building comparison showing builder advantages including 8-15% premium pricing and 2x faster sales",
    content: buildersSmartHomesContent,
  },
  {
    slug: "home-automation-cost-2026",
    title: "Home Automation Cost in India 2026: Real Pricing from 300+ Premium Installations",
    excerpt:
      "Home automation cost in India 2026 — real pricing from 300+ premium installations across budget, mid-range and luxury smart home tiers.",
    category: "Guides",
    author: "Anupam Mahajan",
    authorRole: "Co-Founder & Managing Director",
    publishedAt: "2026-05-04",
    readTime: "12 min",
    featured: true,
    image: "/images/blog/home-automation-cost-2026.webp",
    imageAlt: "Home automation cost breakdown in India 2026 showing pricing by home size, brand, and scope from ₹5 Lakh to ₹50 Lakh+ based on 300+ GMHS installations",
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
