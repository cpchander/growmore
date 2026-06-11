import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = createMetadata({
  title: `3D Smart Home Experience — Interactive Room Walkthrough`,
  description: `Explore a smart home in 3D — click lights, open curtains, adjust temperature. Experience home automation before you buy, by ${COMPANY.name}.`,
  path: "/experience",
});

const ROOMS = [
  {
    name: "Living Room",
    desc: "Tap 'Movie' and the lights dim, curtains close, the TV wakes and the AC settles to your preferred temperature — one touch transforms the whole room. 'Evening' brings warm, layered light as the sun sets.",
  },
  {
    name: "Master Bedroom",
    desc: "A 'Goodnight' scene switches off every light in the house, arms security, lowers the blinds and sets the AC for sleep. A bedside keypad means you never reach for a phone in the dark.",
  },
  {
    name: "Home Theater",
    desc: "One button drops the screen, dims sconces to 10%, closes blackout shades and powers up Dolby Atmos sound — a true cinema scene without juggling five remotes.",
  },
  {
    name: "Kitchen & Dining",
    desc: "Bright, glare-free task lighting for cooking shifts to a warm 'Dinner' scene at the touch of a keypad, with music following you from room to room on multi-room audio.",
  },
  {
    name: "Entrance & Security",
    desc: "Smart locks, video door phone and cameras greet you at the gate; a 'Welcome' scene lights the path home, while 'Away' arms sensors and simulates occupancy when you travel.",
  },
];

const faqs = [
  {
    question: "What is a smart home 3D experience?",
    answer:
      "A smart home 3D experience lets you see home automation in action before you invest — lights, climate, curtains, audio and security responding to a single touch, a schedule or your voice. This interactive walkthrough previews how a Grow More Solutions smart home behaves room by room, from morning to movie night.",
  },
  {
    question: "Can I see a real working smart home before buying?",
    answer:
      "Yes. Beyond this 3D walkthrough, our live Experience Center in Ghitorni, New Delhi has fully working KNX, lighting, climate and home-theater systems on display. You can touch the keypads, trigger scenes and feel the difference in person before you commit.",
  },
  {
    question: "What can actually be automated in each room?",
    answer:
      "Lighting (scenes, dimming, schedules), climate (AC and fans by zone), curtains and blinds, home theater and multi-room audio, security (cameras, smart locks, sensors) and access — all unified under one app, keypad or voice command. Each room is programmed around how you actually live in it.",
  },
  {
    question: "Does the automation keep working without internet?",
    answer:
      "Yes, when it's designed properly. We build wired, locally-controlled systems (such as KNX) where keypads, lights and curtains keep working without internet — and basic scenes continue during a power cut on backup. The internet is only needed for remote app access, not for your home to function day to day.",
  },
  {
    question: "How do I get this experience in my own home?",
    answer:
      "Book a free consultation and our engineers will design a system around your home and lifestyle — from a single room to a whole villa. You can also build and price your own setup with our Smart Home Planner, or estimate the full project with our Cost Estimator.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "3D Experience", url: "/experience" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">3D Experience</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              3D Smart Home{" "}
              <span className="text-gradient-gold">Experience</span>
            </h1>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              See what happens when you walk into a smart home. Watch lights
              turn on automatically, curtains open at sunrise, rooms transform
              for movie night, and security arm itself at bedtime.
            </p>
            <p className="mt-2 text-sm text-navy-400">
              Click each scenario below to watch automation respond in real time.
            </p>
          </div>

          {/* Definition paragraph (featured-snippet target) */}
          <div className="max-w-3xl mx-auto mb-12 glass-card rounded-xl p-6">
            <p className="text-navy-200 leading-relaxed">
              A <strong className="text-white">smart home experience</strong> lets
              you see home automation in action before you invest — lights,
              climate, curtains, audio and security responding to a single touch,
              a schedule or your voice. This interactive 3D walkthrough previews
              how a {COMPANY.name} home behaves room by room, from a sunrise
              wake-up to a one-button movie night, so you know exactly what
              you&apos;re buying.
            </p>
          </div>

          {/* 3D Walkthrough (client component) */}
          <ExperienceClient />

          {/* What You're Seeing */}
          <div className="mt-16 glass-card rounded-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              What You&apos;re Experiencing
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Scene Control
                </h3>
                <p className="text-navy-300">
                  Each room has pre-programmed scenes — movie mode, dinner mode,
                  goodnight mode. One button transforms the entire room.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Automation Logic
                </h3>
                <p className="text-navy-300">
                  Smart sensors detect occupancy, time of day, and ambient
                  conditions to automate lighting, HVAC, and security
                  automatically.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-500 mb-1">
                  Unified Control
                </h3>
                <p className="text-navy-300">
                  All systems — lighting, audio, climate, curtains, security —
                  are managed from a single app, touch panel, or voice command.
                </p>
              </div>
            </div>
          </div>

          {/* Room-by-room */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
              A Smart Home, <span className="text-gradient-gold">Room by Room</span>
            </h2>
            <p className="text-navy-300 text-center max-w-2xl mx-auto mb-10">
              Every room is programmed around how you actually live in it. Here&apos;s
              what one-touch automation feels like across the home.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ROOMS.map((room) => (
                <div key={room.name} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-gold-500 mb-2">{room.name}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{room.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Experience <span className="text-gradient-gold">FAQs</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore more (internal cross-links) */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/#experience-center" className="text-gold-500 hover:underline">Visit our live Experience Center →</Link>
            <Link href="/smart-home-planner" className="text-gold-500 hover:underline">Build & price your system →</Link>
            <Link href="/estimator" className="text-gold-500 hover:underline">Estimate your project cost →</Link>
            <Link href="/blog/home-automation-cost-2026" className="text-gold-500 hover:underline">Home automation cost guide →</Link>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-navy-300 mb-4">
              Ready to experience this in your own home?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
