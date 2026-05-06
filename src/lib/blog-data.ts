// Static blog data — replace with Sanity CMS fetch when ready
import { content as costGuideContent } from "./blog-content/cost-guide";
import { content as knxVsCrestronContent } from "./blog-content/knx-vs-crestron";
import { content as smartLightingContent } from "./blog-content/smart-lighting";
import { content as buildersSmartHomesContent } from "./blog-content/builders-smart-homes";
import { content as technicalOpsStaffingContent } from "./blog-content/technical-operations-remote-staffing";
import { content as homeAutomationCost2026Content } from "./blog-content/home-automation-cost-2026";
import { content as wiringNewConstructionContent } from "./blog-content/smart-home-wiring-new-construction";
import { content as securitySystemsContent } from "./blog-content/smart-home-security-systems";

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
    slug: "smart-home-security-systems-india",
    title: "Smart Home Security Systems India 2026: Costs & Brands | GMHS",
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
      "Real pricing data from 300+ GMHS installations. Cost breakdown by home size (₹5–50 Lakh+), brand (KNX, Crestron, Control4, Lutron), and automation scope for premium Indian homes.",
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
      "Pre-wiring during construction saves ₹4–8 Lakh vs retrofit. Room-by-room checklist, cable specs (KNX, Cat6A, speaker wire), timeline, and what to tell your electrician — from 300+ GMHS installations.",
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
