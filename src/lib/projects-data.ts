export type Project = {
  slug: string;
  image: string;
  title: string;
  city: string;
  type: "Villa" | "Apartment" | "Penthouse" | "Commercial" | "Hotel";
  area: string;
  features: string[];
  brand: string;
  description: string;
};

export const PROJECT_TYPES = ["All", "Villa", "Apartment", "Penthouse", "Commercial", "Hotel"] as const;

export const PROJECTS: Project[] = [
  {
    slug: "mumbai-bandra-villa",
    image: "/images/services/luxury-villa-exterior.webp",
    title: "Luxury Villa Automation — Bandra, Mumbai",
    city: "Mumbai",
    type: "Villa",
    area: "6,500 sq ft",
    features: ["KNX Wired System", "Lutron Lighting", "Crestron AV", "Home Theater", "Pool Automation"],
    brand: "KNX + Crestron",
    description: "Complete whole-home automation for a 6,500 sq ft sea-facing villa in Bandra. KNX backbone with Crestron AV integration, Lutron lighting throughout, motorized curtains, and automated pool management.",
  },
  {
    slug: "delhi-golf-links-penthouse",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    title: "Smart Penthouse — Golf Links, Delhi",
    city: "Delhi NCR",
    type: "Penthouse",
    area: "4,200 sq ft",
    features: ["Control4 System", "Smart Lighting", "Security", "Climate Control", "Multi-Room Audio"],
    brand: "Control4",
    description: "Elegant penthouse automation using Control4. Scene-based lighting, integrated security with video intercom, Sonos multi-room audio, and climate automation across all zones.",
  },
  {
    slug: "bangalore-whitefield-apartments",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    title: "200-Unit Smart Apartment Complex — Whitefield, Bangalore",
    city: "Bangalore",
    type: "Apartment",
    area: "200 units",
    features: ["Bulk Automation", "Smart Lighting", "Security", "App Control", "Video Doorbell"],
    brand: "Custom Wireless",
    description: "Bulk smart home deployment across 200 apartment units for a leading Bangalore developer. Each unit equipped with smart lighting, security camera, video doorbell, and unified app control.",
  },
  {
    slug: "hyderabad-jubilee-hills-villa",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    title: "Contemporary Villa — Jubilee Hills, Hyderabad",
    city: "Hyderabad",
    type: "Villa",
    area: "8,000 sq ft",
    features: ["KNX System", "Dolby Atmos Theater", "Motorized Curtains", "Garden Automation", "Biometric Locks"],
    brand: "KNX",
    description: "Ultra-luxury villa with KNX wired automation. Features include a dedicated Dolby Atmos home theater, automated landscaping irrigation, biometric access control, and energy monitoring dashboard.",
  },
  {
    slug: "goa-resort-automation",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
    title: "Boutique Resort — 50 Rooms, North Goa",
    city: "Goa",
    type: "Hotel",
    area: "50 rooms",
    features: ["Guest Room Automation", "Energy Management", "Keycard Integration", "Lobby Lighting", "BMS"],
    brand: "KNX + Custom BMS",
    description: "Guest room automation for a 50-room boutique resort in North Goa. Keycard-activated lighting, occupancy-based AC control, and centralized energy management reducing power costs by 35%.",
  },
  {
    slug: "pune-koregaon-park-apartment",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    title: "Premium 4BHK Automation — Koregaon Park, Pune",
    city: "Pune",
    type: "Apartment",
    area: "2,800 sq ft",
    features: ["Smart Lighting", "Motorized Curtains", "Security", "Voice Control", "Scene Automation"],
    brand: "Lutron + Sonos",
    description: "Premium apartment automation with Lutron smart lighting, Sonos whole-home audio, motorized curtains, comprehensive security, and Alexa voice control integration.",
  },
];
