import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Shield, Instagram, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact Us — Book Free Smart Home Consultation`,
  description: `Get in touch with ${COMPANY.name} for a free home automation consultation. Call ${COMPANY.phone} or fill the form. ${COMPANY.experience} years of smart home expertise across India.`,
  alternates: { canonical: "https://growmoresolutions.com/contact" },
};

export default function ContactPage() {
  return (
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
  );
}
