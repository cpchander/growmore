// Static blog data — replace with Sanity CMS fetch when ready
import { content as costGuideContent } from "./blog-content/cost-guide";
import { content as knxVsCrestronContent } from "./blog-content/knx-vs-crestron";
import { content as smartLightingContent } from "./blog-content/smart-lighting";
import { content as buildersSmartHomesContent } from "./blog-content/builders-smart-homes";
import { content as technicalOpsStaffingContent } from "./blog-content/technical-operations-remote-staffing";

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
    slug: "home-automation-cost-india-complete-guide",
    title: "Home Automation Cost in India — Complete Pricing Guide (2026)",
    excerpt:
      "Detailed breakdown of smart home automation costs in India. From ₹2 Lakh basics to ₹50 Lakh+ luxury — understand what you'll pay and what you'll get.",
    category: "Guides",
    author: "Grow More Solutions Team",
    authorRole: "Smart Home Experts",
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
    author: "Grow More Solutions Team",
    authorRole: "Smart Home Experts",
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
    author: "Grow More Solutions Team",
    authorRole: "Smart Home Experts",
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
    author: "Grow More Solutions Team",
    authorRole: "Smart Home Experts",
    publishedAt: "2026-03-28",
    readTime: "17 min",
    featured: false,
    image: "/images/blog/builders-smart-homes.webp",
    imageAlt: "Smart home vs standard building comparison showing builder advantages including 8-15% premium pricing and 2x faster sales",
    content: buildersSmartHomesContent,
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
