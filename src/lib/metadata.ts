import type { Metadata } from "next";
import { COMPANY, CITIES } from "./constants";

const BASE_URL = "https://growmoresolutions.com";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/opengraph-image.png`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ─── City geo coordinates for LocalBusiness schema ───────────────────
const CITY_GEO: Record<string, { lat: number; lng: number }> = {
  "New Delhi": { lat: 28.4946, lng: 77.1456 },
  "Delhi NCR": { lat: 28.4946, lng: 77.1456 },
  Gurgaon: { lat: 28.4595, lng: 77.0266 },
  Noida: { lat: 28.5355, lng: 77.391 },
  Faridabad: { lat: 28.4089, lng: 77.3178 },
  Ghaziabad: { lat: 28.6692, lng: 77.4538 },
  Udaipur: { lat: 24.5854, lng: 73.7125 },
  Jodhpur: { lat: 26.2389, lng: 73.0243 },
  Dehradun: { lat: 30.3165, lng: 78.0322 },
  Indore: { lat: 22.7196, lng: 75.8577 },
  Agra: { lat: 27.1767, lng: 78.0081 },
  Meerut: { lat: 28.9845, lng: 77.7064 },
  Panipat: { lat: 29.3909, lng: 76.9635 },
  Gwalior: { lat: 26.2183, lng: 78.1828 },
  Mumbai: { lat: 19.076, lng: 72.8777 },
  Bangalore: { lat: 12.9716, lng: 77.5946 },
  Hyderabad: { lat: 17.385, lng: 78.4867 },
  Pune: { lat: 18.5204, lng: 73.8567 },
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Kolkata: { lat: 22.5726, lng: 88.3639 },
  Ahmedabad: { lat: 23.0225, lng: 72.5714 },
  Goa: { lat: 15.2993, lng: 74.124 },
  Jaipur: { lat: 26.9124, lng: 75.7873 },
  Chandigarh: { lat: 30.7333, lng: 76.7794 },
  Lucknow: { lat: 26.8467, lng: 80.9462 },
  Sonipat: { lat: 28.9931, lng: 77.0151 },
  Karnal: { lat: 29.6857, lng: 76.9905 },
  Moradabad: { lat: 28.8386, lng: 78.7733 },
  Rewari: { lat: 28.197, lng: 76.617 },
  Rohtak: { lat: 28.8955, lng: 76.6066 },
  Surat: { lat: 21.1702, lng: 72.8311 },
  Coimbatore: { lat: 11.0168, lng: 76.9558 },
  Kochi: { lat: 9.9312, lng: 76.2673 },
  Ludhiana: { lat: 30.901, lng: 75.8573 },
  Nagpur: { lat: 21.1458, lng: 79.0882 },
  Visakhapatnam: { lat: 17.6868, lng: 83.2185 },
  Amritsar: { lat: 31.634, lng: 74.8723 },
  Mangaluru: { lat: 12.9141, lng: 74.856 },
  Bhubaneswar: { lat: 20.2961, lng: 85.8245 },
  Kozhikode: { lat: 11.2588, lng: 75.7804 },
  Raipur: { lat: 21.2514, lng: 81.6296 },
  Thiruvananthapuram: { lat: 8.5241, lng: 76.9366 },
};

// ─── Shared certification credentials ────────────────────────────────
const CREDENTIALS = [
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "KNX Certified Partner",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "Crestron Certified Integrator",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "Control4 Certified Dealer",
  },
  {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "Lutron Certified Partner",
  },
];

// ─── Area served — all 12 cities ─────────────────────────────────────
const AREA_SERVED = CITIES.map((c) => ({
  "@type": "City" as const,
  name: c.name,
}));

// ─── Opening hours ───────────────────────────────────────────────────
const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opens: "10:00",
  closes: "19:00",
};

// ─── Organization (canonical, used globally) ─────────────────────────
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/company/gmhs.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/images/company/gmhs.png`,
    foundingDate: String(COMPANY.foundedYear),
    description: `${COMPANY.tagline}. ${COMPANY.experience} years of smart home automation expertise across ${COMPANY.citiesServed} cities in India.`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Showroom No. A5, Opp. Metro Pillar No. 121, KH-405, MG Road",
      addressLocality: "Ghitorni",
      addressRegion: "New Delhi",
      postalCode: "110030",
      addressCountry: "IN",
    },
    areaServed: AREA_SERVED,
    hasCredential: CREDENTIALS,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(COMPANY.socialLinks).filter(Boolean),
    knowsAbout: [
      "Home Automation",
      "Smart Home Systems",
      "KNX",
      "Crestron",
      "Control4",
      "Lutron",
      "Home Theater",
      "HVAC Automation",
      "Smart Lighting",
      "Smart Security",
    ],
  };
}

// ─── LocalBusiness (homepage + city pages) ───────────────────────────
export function localBusinessJsonLd(city?: string) {
  const geo = city
    ? CITY_GEO[city] || CITY_GEO["New Delhi"]
    : CITY_GEO["New Delhi"];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": city
      ? `${BASE_URL}/cities/${city.toLowerCase().replace(/\s+/g, "-")}/#business`
      : `${BASE_URL}/#localbusiness`,
    name: city ? `${COMPANY.name} — ${city}` : COMPANY.name,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${BASE_URL}/images/company/gmhs.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Showroom No. A5, Opp. Metro Pillar No. 121, KH-405, MG Road",
      addressLocality: city || "Ghitorni",
      addressRegion: city ? undefined : "New Delhi",
      postalCode: city ? undefined : "110030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    foundingDate: String(COMPANY.foundedYear),
    priceRange: "₹₹₹",
    openingHoursSpecification: OPENING_HOURS,
    hasCredential: CREDENTIALS,
    areaServed: city
      ? { "@type": "City", name: city }
      : AREA_SERVED,
    sameAs: Object.values(COMPANY.socialLinks).filter(Boolean),
  };
}

// ─── Service schema (for /services/[slug]) ───────────────────────────
export function serviceJsonLd(
  serviceName: string,
  serviceDescription: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: `${BASE_URL}/services/${slug}`,
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: AREA_SERVED,
    availableLanguage: ["English", "Hindi"],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "200000",
      highPrice: "5000000",
      offerCount: "3",
      description: "₹2,00,000–₹50,00,000+ depending on project scope and brand selection",
    },
    hasCredential: CREDENTIALS,
  };
}

// ─── BlogPosting schema (for /blog/[slug]) ──────────────────────────
export function blogPostingJsonLd({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  authorName,
  authorUrl,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || `${BASE_URL}/opengraph-image.png`,
    author: {
      "@type": "Person",
      name: authorName || "Anupam Mahajan",
      url:
        authorUrl ||
        "https://linkedin.com/in/anupam-mahajan-3882ba14",
      jobTitle: "Co-Founder & Managing Director",
      worksFor: {
        "@type": "Organization",
        name: COMPANY.name,
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/company/gmhs.png`,
        width: 512,
        height: 512,
      },
    },
    inLanguage: "en-IN",
  };
}

// ─── CreativeWork / Project schema (for /projects/[slug]) ────────────
export function projectJsonLd({
  name,
  description,
  slug,
  city,
  brands,
  datePublished,
  image,
}: {
  name: string;
  description: string;
  slug: string;
  city?: string;
  brands?: string[];
  datePublished?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: `${BASE_URL}/projects/${slug}`,
    ...(datePublished && { datePublished }),
    ...(image && { image }),
    ...(city && {
      locationCreated: {
        "@type": "Place",
        name: city,
        address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "IN" },
      },
    }),
    ...(brands &&
      brands.length > 0 && {
        mentions: brands.map((b) => ({
          "@type": "Brand",
          name: b,
        })),
      }),
    creator: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: COMPANY.name,
    },
  };
}

// ─── FAQ schema ──────────────────────────────────────────────────────
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Breadcrumb schema ───────────────────────────────────────────────
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
