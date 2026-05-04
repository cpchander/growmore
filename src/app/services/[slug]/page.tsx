import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, COMPANY } from "@/lib/constants";
import { getServiceContent } from "@/lib/services-data";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  IndianRupee,
  Zap,
} from "lucide-react";
import { IMAGES } from "@/lib/images";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} in India — ${COMPANY.experience} Years of Expertise`,
    description: `${service.shortDesc} by ${COMPANY.name}. ${COMPANY.experience} years, ${COMPANY.projectsCompleted} projects. Free consultation.`,
    alternates: { canonical: `https://growmoresolutions.com/services/${slug}` },
  };
}

const serviceImageMap: Record<string, string> = {
  "home-automation": IMAGES.services.wholeHome,
  "conceptual-lighting": IMAGES.services.lightingMoods,
  "home-theater": IMAGES.services.theater,
  "home-security": IMAGES.services.security,
  "central-vacuum": IMAGES.services.centralVacuum,
  "clean-air-systems": IMAGES.services.freshAir,
  "solar-power": IMAGES.services.villaExterior,
  "hvac-automation": IMAGES.services.voice,
  "commercial": IMAGES.services.wholeHome,
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = getServiceContent(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(service.title, service.shortDesc, service.slug)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${slug}` },
            ])
          ),
        }}
      />
      {content && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(content.faqs)),
          }}
        />
      )}

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-500">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          {/* Hero image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={serviceImageMap[slug] || IMAGES.services.wholeHome}
              alt={`${service.title} — smart home automation by ${COMPANY.name}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {content ? content.headline : (
              <>{service.title}{" "}<span className="text-gradient-gold">Solutions</span></>
            )}
          </h1>

          {/* Introduction */}
          <p className="text-lg text-navy-200 leading-relaxed mb-8">
            {content ? content.introduction : (
              <>{service.shortDesc} Backed by {COMPANY.experience} years of expertise and {COMPANY.projectsCompleted} successful installations across India.</>
            )}
          </p>

          {/* Key Features */}
          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="glass-card rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-navy-100 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {content && (
            <>
              {/* What It Is */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  What is {service.title}?
                </h2>
                <p className="text-navy-200 leading-relaxed">
                  {content.whatItIs}
                </p>
              </div>

              {/* Why It Matters */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Why {service.title} Matters for Indian Homes
                </h2>
                <p className="text-navy-200 leading-relaxed">
                  {content.whyItMatters}
                </p>
              </div>

              {/* How We Do It — Process */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Our {service.title} Process
                </h2>
                <div className="space-y-4">
                  {content.howWeDoIt.map((step, index) => (
                    <div key={step.step} className="glass-card rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-navy-900 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{step.step}</h3>
                          <p className="text-sm text-navy-300 leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  {service.title} — Ideal For
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.useCases.map((uc) => (
                    <div key={uc.title} className="glass-card rounded-xl p-5">
                      <Zap className="w-5 h-5 text-gold-500 mb-2" />
                      <h3 className="font-semibold text-white mb-1">{uc.title}</h3>
                      <p className="text-sm text-navy-300 leading-relaxed">{uc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  {service.title} Cost in India
                </h2>
                <div className="space-y-4">
                  {content.pricing.map((tier) => (
                    <div key={tier.tier} className="glass-card rounded-xl p-5 border-l-2 border-gold-500">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-semibold text-white">{tier.tier}</h3>
                        <span className="inline-flex items-center gap-1 text-gold-500 font-semibold text-sm">
                          <IndianRupee className="w-3.5 h-3.5" />
                          {tier.range.replace("₹", "")}
                        </span>
                      </div>
                      <p className="text-sm text-navy-300 leading-relaxed">{tier.includes}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-navy-500">
                  * Prices are indicative and vary based on property size, brand selection, and feature scope. Contact us for an accurate quote.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Why Choose {COMPANY.name} for {service.title}?
                </h2>
                <div className="glass-card rounded-xl p-6">
                  <ul className="space-y-3">
                    {content.whyChooseUs.map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-navy-200 leading-relaxed">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  {service.title} — Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {content.faqs.map((faq) => (
                    <div key={faq.question} className="glass-card rounded-xl p-6">
                      <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-sm text-navy-200 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready for {service.title}?
            </h2>
            <p className="text-navy-300 max-w-lg mx-auto mb-6">
              Book a free consultation with our {service.title.toLowerCase()} experts.
              We&apos;ll assess your requirements and provide a detailed proposal — no
              obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Get a Free {service.title} Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
