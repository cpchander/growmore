import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { BRAND_DETAILS, getBrandBySlug } from "@/lib/brands-data";
import { PROJECTS } from "@/lib/projects-data";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/metadata";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Shield,
  Globe,
  Calendar,
  IndianRupee,
  Zap,
  ExternalLink,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BRAND_DETAILS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: `${brand.name} Home Automation in India — Certified ${brand.name} Partner`,
    description: `${brand.name} home automation by India's most experienced certified partner. ${brand.tagline}. ${brand.priceRange}. ${COMPANY.experience} years experience, ${COMPANY.projectsCompleted} projects delivered.`,
    alternates: { canonical: `https://growmoresolutions.com/brands/${slug}` },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  // Projects using this brand
  const brandProjects = PROJECTS.filter((p) =>
    p.brand.toLowerCase().includes(brand.name.toLowerCase())
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Brands", url: "/brands" },
              { name: brand.name, url: `/brands/${slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqJsonLd(brand.faqs)
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-gold-500">Brands</Link>
            <span>/</span>
            <span className="text-white">{brand.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <span className="text-xs bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full">
              Certified Partner Since {brand.certifiedSince}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-3">
              <span className="text-gradient-gold">{brand.name}</span> Home
              Automation in India
            </h1>
            <p className="text-lg text-navy-300 mb-2">{brand.tagline}</p>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gold-500 hover:text-gold-400 transition-colors mb-3"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Official {brand.name} Website — {brand.website.replace("https://www.", "")}
            </a>
            <p className="text-navy-400 text-sm">
              Installed by {COMPANY.name} — India&apos;s most experienced smart
              home company with {COMPANY.experience} years and{" "}
              {COMPANY.projectsCompleted} projects delivered.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div className="glass-card rounded-lg p-4 text-center">
              <Shield className="w-5 h-5 text-gold-500 mx-auto mb-2" />
              <p className="text-xs text-navy-400">Protocol</p>
              <p className="text-sm text-white font-medium mt-0.5">
                {brand.protocol}
              </p>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <Globe className="w-5 h-5 text-gold-500 mx-auto mb-2" />
              <p className="text-xs text-navy-400">Origin</p>
              <p className="text-sm text-white font-medium mt-0.5">
                {brand.origin.split("(")[0].trim()}
              </p>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <Calendar className="w-5 h-5 text-gold-500 mx-auto mb-2" />
              <p className="text-xs text-navy-400">Our Partnership</p>
              <p className="text-sm text-white font-medium mt-0.5">
                Since {brand.certifiedSince}
              </p>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <IndianRupee className="w-5 h-5 text-gold-500 mx-auto mb-2" />
              <p className="text-xs text-navy-400">Price Range</p>
              <p className="text-sm text-white font-medium mt-0.5">
                {brand.priceRange.split("depending")[0].trim()}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              About {brand.name}
            </h2>
            <p className="text-navy-300 leading-relaxed">{brand.overview}</p>
            <div className="mt-4 glass-card rounded-lg p-4 border-l-2 border-gold-500">
              <p className="text-sm text-navy-300">
                <strong className="text-white">Best For:</strong>{" "}
                {brand.bestFor}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Key {brand.name} Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {brand.features.map((f) => (
                <div key={f.title} className="glass-card rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-navy-300">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              {brand.name} — Pros & Cons
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Advantages
                </h3>
                <ul className="space-y-2">
                  {brand.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm text-navy-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Limitations
                </h3>
                <ul className="space-y-2">
                  {brand.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm text-navy-300"
                    >
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Projects with this brand */}
          {brandProjects.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Our {brand.name} Projects
              </h2>
              <div className="space-y-3">
                {brandProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex items-center justify-between glass-card rounded-lg p-4 hover:border-gold-500/30 transition-all"
                  >
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-gold-500 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-navy-400 mt-0.5">
                        {p.city} · {p.type} · {p.area}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-navy-500 group-hover:text-gold-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              {brand.name} FAQ
            </h2>
            <div className="space-y-4">
              {brand.faqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-lg p-5">
                  <h3 className="font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-navy-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get {brand.name} Installed by Certified Experts
            </h2>
            <p className="text-navy-300 max-w-lg mx-auto mb-6">
              As a certified {brand.name} partner since {brand.certifiedSince},
              we handle everything — system design, wiring, installation,
              programming, and lifetime support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get {brand.name} Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
