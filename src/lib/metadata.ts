import type { Metadata } from "next";
import { COMPANY } from "./constants";

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
  const fullTitle = `${title} | ${COMPANY.name}`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/og-default.jpg`;

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

// Reusable JSON-LD generators
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: BASE_URL,
    logo: `${BASE_URL}/images/company/gmhs.png`,
    foundingDate: String(COMPANY.foundedYear),
    description: `${COMPANY.tagline}. ${COMPANY.experience} years of smart home automation expertise across India.`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: Object.values(COMPANY.socialLinks).filter(Boolean),
  };
}

export function localBusinessJsonLd(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#organization`,
    name: city ? `${COMPANY.name} ${city}` : COMPANY.name,
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city || "India",
      addressCountry: "IN",
    },
    foundingDate: String(COMPANY.foundedYear),
    priceRange: "₹₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function serviceJsonLd(serviceName: string, serviceDescription: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: `${BASE_URL}/services/${slug}`,
  };
}

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
