import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, SERVICES, COMPANY, BRANDS } from "@/lib/constants";
import { getCityDetail } from "@/lib/city-details";
import { localBusinessJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `Home Automation in ${city.name} — ${COMPANY.experience} Years of Expertise`,
    description: `Best home automation company in ${city.name}. Smart lighting, security, HVAC & home theater by ${COMPANY.name}. ${COMPANY.experience} years. Free consultation.`,
    alternates: { canonical: `https://growmoresolutions.com/cities/${slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  const detail = getCityDetail(slug);

  const baseFaqs = [
    {
      question: `What is the cost of home automation in ${city.name}?`,
      answer: `Home automation costs in ${city.name} range from ₹2–5 Lakh for basic smart lighting and security in a 2–3BHK apartment, ₹5–15 Lakh for comprehensive automation in a premium 3–5BHK or villa, and ₹15–50 Lakh+ for luxury whole-home systems with KNX or Crestron. ${COMPANY.name} offers free on-site consultation in ${city.name} to provide an accurate estimate based on your property and requirements.`,
    },
    {
      question: `Which is the best home automation company in ${city.name}?`,
      answer: `${COMPANY.name} is the most experienced home automation company serving ${city.name} with ${COMPANY.experience} years in the industry and ${COMPANY.projectsCompleted} completed projects across India. We are certified KNX, Crestron, Control4, and Lutron partners with a dedicated team for ${city.name} and surrounding areas.`,
    },
    {
      question: `Do you provide home automation services in all areas of ${city.name}?`,
      answer: `Yes, ${COMPANY.name} provides complete home automation services across all areas of ${city.name} including ${city.areas.join(", ")}. Our team handles site visits, consultations, installations, and post-installation support throughout ${city.name}.`,
    },
    {
      question: `Can home automation be added to an existing home in ${city.name}?`,
      answer: `Yes. For existing homes in ${city.name}, we use wireless protocols (ZigBee, Z-Wave, Control4 wireless) to add automation without breaking walls or extensive rewiring. Wireless retrofit projects typically take 1–2 weeks for a 3BHK. For new constructions and renovations in ${city.name}, we recommend wired systems like KNX for maximum reliability.`,
    },
    {
      question: `What brands do you install for home automation in ${city.name}?`,
      answer: `We install all major home automation brands in ${city.name}: KNX (open standard, 500+ manufacturers), Crestron (ultra-luxury custom automation), Control4 (best balance of features and price), Lutron (premium lighting control), and Sonos (multi-room audio). As certified partners, we recommend the best brand based on your home, budget, and requirements — not commission margins.`,
    },
    {
      question: `Do you offer after-sales support and AMC in ${city.name}?`,
      answer: `Yes. ${COMPANY.name} provides comprehensive after-sales support in ${city.name} including ${COMPANY.afterSales.warranty}, Annual Maintenance Contracts (AMC), remote diagnostics, firmware updates, and on-site repair. AMC clients get 24/7 emergency support and priority scheduling.`,
    },
  ];

  const cityFaqs = detail ? [...baseFaqs, ...detail.extraFaqs] : baseFaqs;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd(city.name)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(cityFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Cities", url: "/cities" },
              { name: city.name, url: `/cities/${slug}` },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-gold-500">Cities</Link>
            <span>/</span>
            <span className="text-white">{city.name}</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Home Automation in{" "}
            <span className="text-gradient-gold">{city.name}</span>
          </h1>

          {/* Introduction — featured snippet target */}
          <p className="text-lg text-navy-200 leading-relaxed mb-4">
            {COMPANY.name} is {city.name}&apos;s most experienced home automation partner
            with {COMPANY.experience} years of expertise and {COMPANY.projectsCompleted}{" "}
            completed projects. We design, install, and support smart home systems
            covering lighting, security, HVAC, home theater, and whole-home
            integration — using certified brands like KNX, Crestron, Control4,
            and Lutron.
          </p>
          {detail ? (
            <p className="text-base text-navy-300 leading-relaxed mb-12">
              {detail.intro}
            </p>
          ) : (
            <p className="text-base text-navy-300 leading-relaxed mb-12">
              Whether you&apos;re building a new villa in {city.areas[0]}, renovating an
              apartment in {city.areas[1]}, or upgrading security at your {city.areas[2]}{" "}
              home — our {city.name} team delivers end-to-end automation from
              consultation to lifetime support. We serve all major localities
              including {city.areas.join(", ")}.
            </p>
          )}

          {/* City-specific market notes & project examples */}
          {detail && (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                {city.name} Market Notes — What Makes Local Projects Different
              </h2>
              <div className="glass-card rounded-xl p-6 mb-10">
                <ul className="space-y-3">
                  {detail.marketNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-navy-200 text-sm leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Recent GMHS Projects in {city.name}
              </h2>
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-navy-700">
                      <th className="text-left py-2 px-3 text-navy-400 font-medium">Locality</th>
                      <th className="text-left py-2 px-3 text-navy-400 font-medium">Property</th>
                      <th className="text-left py-2 px-3 text-navy-400 font-medium">Budget</th>
                      <th className="text-left py-2 px-3 text-navy-400 font-medium">Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.projectExamples.map((p) => (
                      <tr key={p.area} className="border-b border-navy-800">
                        <td className="py-2 px-3 text-white font-medium">{p.area}</td>
                        <td className="py-2 px-3 text-navy-300">{p.type}</td>
                        <td className="py-2 px-3 text-gold-500 font-semibold">{p.budget}</td>
                        <td className="py-2 px-3 text-navy-300 text-xs">{p.scope}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Services available */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Smart Home Services in {city.name}
          </h2>
          <p className="text-navy-300 mb-6">
            We offer the complete range of home and building automation services
            in {city.name}. Each service can be deployed independently or as part
            of an integrated smart home package.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="glass-card rounded-lg p-5 hover:border-gold-500/30 transition-colors group"
              >
                <h3 className="font-semibold text-white group-hover:text-gold-500 transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">{service.shortDesc}</p>
              </Link>
            ))}
          </div>

          {/* Brands we install */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Automation Brands We Install in {city.name}
          </h2>
          <p className="text-navy-300 mb-6">
            As certified partners of the world&apos;s leading automation brands,
            we recommend the right technology based on your home, budget, and
            long-term goals — not brand commissions.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
            {BRANDS.map((brand) => (
              <a
                key={brand.slug}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-3 flex flex-col items-center justify-center hover:border-gold-500/30 transition-all group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-6 w-auto max-w-[80px] object-contain opacity-70 group-hover:opacity-100 transition-opacity mb-1.5"
                />
                <p className="text-[10px] font-semibold text-navy-400 group-hover:text-gold-500 transition-colors text-center">
                  {brand.name}
                </p>
              </a>
            ))}
          </div>

          {/* Areas served */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Areas We Serve in {city.name}
          </h2>
          <p className="text-navy-300 mb-4">
            Our {city.name} team provides home automation consultation, installation,
            and after-sales support across all major localities:
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {city.areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-navy-800 text-navy-100 px-4 py-2 rounded-lg text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                {area}
              </span>
            ))}
          </div>

          {/* Why Choose Us for this City */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Choose {COMPANY.name} in {city.name}?
          </h2>
          <div className="glass-card rounded-xl p-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">{COMPANY.experience} years — India&apos;s longest-serving home automation company, active in {city.name}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">Certified KNX, Crestron, Control4, and Lutron partner — multi-brand expertise</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">{COMPANY.projectsCompleted} projects delivered across residential, commercial, and hospitality sectors</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">End-to-end in-house team — no subcontracting. Design, wiring, installation, and programming under one roof</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">{COMPANY.afterSales.warranty} + AMC plans with 24/7 emergency support in {city.name}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200">Live Experience Center in Delhi — see automation working before you invest</span>
              </li>
            </ul>
          </div>

          {/* FAQs */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Home Automation in {city.name} — FAQ
          </h2>
          <div className="space-y-4 mb-12">
            {cityFaqs.map((faq) => (
              <div key={faq.question} className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-navy-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Helpful Resources */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Helpful Resources</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link href="/blog/home-automation-cost-2026" className="glass-card rounded-lg p-4 hover:border-gold-500/20 transition-colors">
                <p className="text-sm font-medium text-white mb-1">Cost Guide 2026</p>
                <p className="text-xs text-navy-400">Real pricing from 300+ installations</p>
              </Link>
              <Link href="/blog/home-theater-av-automation-india" className="glass-card rounded-lg p-4 hover:border-gold-500/20 transition-colors">
                <p className="text-sm font-medium text-white mb-1">Home Theater Cost Guide</p>
                <p className="text-xs text-navy-400">₹3 L–2 Cr Atmos configs</p>
              </Link>
              <Link href="/blog/knx-vs-crestron-vs-control4-india" className="glass-card rounded-lg p-4 hover:border-gold-500/20 transition-colors">
                <p className="text-sm font-medium text-white mb-1">Brand Comparison</p>
                <p className="text-xs text-navy-400">KNX vs Crestron vs Control4</p>
              </Link>
              {detail?.recommendedReading.map((r) => (
                <Link key={r.href} href={r.href} className="glass-card rounded-lg p-4 hover:border-gold-500/20 transition-colors">
                  <p className="text-sm font-medium text-white mb-1">{r.title}</p>
                  <p className="text-xs text-navy-400">{r.description}</p>
                </Link>
              ))}
              <Link href="/smart-home-planner" className="glass-card rounded-lg p-4 hover:border-gold-500/20 transition-colors">
                <p className="text-sm font-medium text-white mb-1">Plan Your Smart Home</p>
                <p className="text-xs text-navy-400">Room-by-room configurator</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get Smart Home Automation in {city.name}
            </h2>
            <p className="text-navy-300 max-w-lg mx-auto mb-6">
              Book a free consultation with our {city.name} team. We&apos;ll
              visit your property, understand your requirements, and provide a
              detailed proposal — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Book Free Consultation in {city.name}
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
