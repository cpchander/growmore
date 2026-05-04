// ============================================================
// CENTRALIZED IMAGE URLS
// Local WebP images + Unsplash fallbacks where local not yet available
// ============================================================

export const IMAGES = {
  // Hero / General
  hero: "/images/services/luxury-villa-exterior.webp",
  heroAlt: "Modern smart home villa at night with automated colored lighting and pool",

  // Service category images — local WebP photos
  services: {
    lighting: "/images/services/smart-lighting-control.webp",
    lightingMoods: "/images/services/lighting-moods.webp",
    security: "/images/services/security-cctv-monitor.webp",
    climate:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    curtains: "/images/services/smart-blinds-control.webp",
    theater:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    audio:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
    wholeHome: "/images/services/home-automation-panel.webp",
    voice: "/images/services/voice-control-tablet.webp",
    centralVacuum: "/images/services/central-vacuum-drainvac.webp",
    freshAir: "/images/services/fresh-air-renson.webp",
    villaExterior: "/images/services/luxury-villa-exterior.webp",
  },

  // Solutions
  solutions: {
    homeowners: "/images/services/luxury-villa-exterior.webp",
    builders:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    architects:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    hotels:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },

  // About
  about: {
    story: "/images/about/smart-home-panel.webp",
    team:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    office:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },

  // Projects placeholder
  projects: {
    luxury: "/images/services/luxury-villa-exterior.webp",
    villa:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    penthouse:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    office:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    hotel:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },

  // Brands
  brands: {
    knx: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    crestron:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80",
    control4:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80",
    lutron:
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80",
    sonos:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80",
  },
} as const;
