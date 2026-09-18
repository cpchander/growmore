import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { createMetadata, faqJsonLd } from "@/lib/metadata";
import { Phone, Mail, MapPin, Clock, Shield, Instagram, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = createMetadata({
  title: `Contact Us — Book Free Smart Home Consultation`,
  description: `Book a free home automation consultation with ${COMPANY.name}. Call ${COMPANY.phone} or fill the form — ${COMPANY.experience} years of expertise.`,
  path: "/contact",
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Grow More Solutions",
  description: `Book a free home automation consultation with ${COMPANY.name}. ${COMPANY.experience} years of smart home expertise.`,
  url: "https://growmoresolutions.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: "https://growmoresolutions.com/images/company/gmhs.png",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: "https://growmoresolutions.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Showroom No. A5, KH-405, MG Road, Ghitorni",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4946,
      longitude: 77.1456,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "₹₹₹",
    areaServed: { "@type": "Country", name: "India" },
  },
};

const faqs = [
  {
    question: "Is the home automation consultation really free?",
    answer:
      `Yes — the initial consultation is completely free and carries no obligation. Our team discusses your property, automation goals and budget, then prepares a tailored scope and estimate. You can also visit our Experience Center in Ghitorni, New Delhi to see KNX, Crestron, Control4 and Lutron systems working live before you decide anything.`,
  },
  {
    question: "How soon will you respond after I submit the contact form?",
    answer:
      `We typically respond within 2 hours during business hours (Monday to Saturday, 9 AM–6 PM IST). For urgent enquiries you can call us directly at ${COMPANY.phone} or message us on WhatsApp for an immediate reply.`,
  },
  {
    question: "What happens during the consultation?",
    answer:
      "We review your floor plan or site, understand which rooms and systems you want to automate (lighting, climate, security, AV, curtains, access), and explain the wired vs wireless options for your build stage. You receive an honest, tiered proposal — from a starter package to full whole-home integration — with no pressure to upgrade.",
  },
  {
    question: "Do I need to visit your showroom, or can you come to my site?",
    answer:
      "Both work. You're welcome at our New Delhi Experience Center for a live demo, and for project clients we also conduct on-site surveys to measure the space, assess wiring and electrical conditions, and plan camera and panel placement. Under-construction homes are best surveyed early so we can plan pre-wiring and save on retrofit costs.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      `${COMPANY.name} delivers projects across 60 cities in India — from Delhi NCR, Mumbai, Bangalore and Hyderabad to tier-2 and tier-3 markets — with installation and after-sales support. If your city isn't listed, contact us anyway; we serve premium projects pan-India.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Book Your Free{" "}
            <span className="text-gradient-gold">Consultation</span>
          </h1>
          <p className="mt-4 text-navy-300 text-lg">
            Tell us about your home and automation goals. Our experts will
            design a custom solution — no obligation, no pressure.
          </p>
        </div>

        {/* Form first (main content), sidebar second */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form — takes 2/3 */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Sidebar — 2 merged cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Card 1: Contact details */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-navy-300 hover:text-gold-500 transition-colors">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <div>
                    <span className="text-sm block">{COMPANY.phone}</span>
                    <span className="text-xs text-navy-500">Mon-Sat, 9AM-6PM IST</span>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-navy-300 hover:text-gold-500 transition-colors">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  <div>
                    <span className="text-sm block">{COMPANY.email}</span>
                    <span className="text-xs text-navy-500">Response within 2 hours</span>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-navy-300">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm block">{COMPANY.demoCenter.address}</span>
                    <span className="text-xs text-navy-500">{COMPANY.demoCenter.hours}</span>
                  </div>
                </div>
              </div>
              <hr className="border-navy-700/50 my-4" />
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-400 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Trust signals */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white mb-3">Why Choose Us</h3>
              <div className="space-y-2.5 text-sm text-navy-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{COMPANY.afterSales.warranty} + AMC plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{COMPANY.experience} years of expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>{COMPANY.projectsCompleted} projects across India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-navy-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Consultation <span className="text-gradient-gold">FAQs</span>
        </h2>
        <p className="text-center text-navy-300 mb-10 max-w-2xl mx-auto">
          What to expect before booking a free home automation consultation
          with {COMPANY.name}.
        </p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
