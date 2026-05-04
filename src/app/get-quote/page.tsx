import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import Link from "next/link";
import QuoteCalculator from "./QuoteCalculator";

export const metadata: Metadata = {
  title: `Home Automation Cost Calculator India — Get Instant Quote`,
  description: `Calculate your home automation cost in India instantly. Select rooms, features, and budget to get a personalized smart home quote. Free consultation by ${COMPANY.name} — ${COMPANY.experience} years experience.`,
  alternates: { canonical: "https://growmoresolutions.com/get-quote" },
};

const quoteFaqs = [
  {
    question: "How much does home automation cost in India?",
    answer:
      "Home automation in India costs between ₹2,000 to ₹15,000 per square foot depending on the level of automation, brand selection, and number of features. A basic 3BHK automation starts at ₹2-3 Lakh, while a luxury villa with KNX/Crestron can go up to ₹50 Lakh or more.",
  },
  {
    question: "What factors affect home automation pricing?",
    answer:
      "Key factors include: number of rooms, type of automation (wired vs wireless), brand selection (KNX/Crestron vs budget brands), features chosen (lighting, security, HVAC, curtains, AV), property type (apartment vs villa), and whether it's a new construction or retrofit.",
  },
  {
    question: "Is the quote from this calculator final?",
    answer:
      "This calculator provides an estimated price range based on typical project costs. The final quote is determined after a free on-site consultation where our engineers assess your property, wiring requirements, and specific needs.",
  },
];

export default function GetQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Get Quote", url: "/get-quote" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(quoteFaqs)),
        }}
      />

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Get Quote</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Smart Home{" "}
              <span className="text-gradient-gold">Cost Calculator</span>
            </h1>
            <p className="mt-4 text-lg text-navy-300">
              Get an instant estimate for your home automation project.
              Select your rooms and features below.
            </p>
          </div>

          <QuoteCalculator />

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Pricing <span className="text-gradient-gold">FAQs</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {quoteFaqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-navy-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
