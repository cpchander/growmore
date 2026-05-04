import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects-data";
import { breadcrumbJsonLd } from "@/lib/metadata";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Ruler,
  Tag,
  CheckCircle2,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Smart Home Case Study`,
    description: `${project.description.slice(0, 155)}…`,
    alternates: { canonical: `https://growmoresolutions.com/projects/${slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  // Related projects — same type, excluding current
  const related = PROJECTS.filter(
    (p) => p.type === project.type && p.slug !== slug
  ).slice(0, 3);

  // If no same-type matches, show other projects
  const relatedFinal =
    related.length > 0
      ? related
      : PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: "https://growmoresolutions.com",
    },
    mainEntityOfPage: `https://growmoresolutions.com/projects/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Projects", url: "/projects" },
              { name: project.title, url: `/projects/${slug}` },
            ])
          ),
        }}
      />

      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-gold-500">
              Projects
            </Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{project.title}</span>
          </nav>

          {/* Hero Image Placeholder */}
          <div className="aspect-video bg-navy-800 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
            <span className="text-navy-600">Project Hero Image</span>
            <span className="absolute top-4 left-4 text-xs bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full font-medium">
              {project.type}
            </span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-navy-400 mb-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-500" /> {project.city}
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-gold-500" /> {project.area}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-gold-500" /> {project.brand}
              </span>
            </div>

            <p className="text-navy-300 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Details Card */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">
                Project Details
              </h2>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-navy-400 text-sm">Location</dt>
                  <dd className="text-white text-sm font-medium">
                    {project.city}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-navy-800 pt-3">
                  <dt className="text-navy-400 text-sm">Property Type</dt>
                  <dd className="text-white text-sm font-medium">
                    {project.type}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-navy-800 pt-3">
                  <dt className="text-navy-400 text-sm">Area / Scale</dt>
                  <dd className="text-white text-sm font-medium">
                    {project.area}
                  </dd>
                </div>
                <div className="flex justify-between border-t border-navy-800 pt-3">
                  <dt className="text-navy-400 text-sm">System / Brand</dt>
                  <dd className="text-white text-sm font-medium">
                    {project.brand}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Features Card */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">
                Automation Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-navy-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery Placeholder */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-4">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="aspect-square bg-navy-800 rounded-lg flex items-center justify-center"
                >
                  <span className="text-navy-600 text-xs">Photo {n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-white mb-2">
              Want a Similar Setup for Your{" "}
              {project.type === "Hotel" ? "Property" : project.type}?
            </h3>
            <p className="text-navy-300 text-sm mb-4">
              Our team can design a custom automation system tailored to your
              space, budget, and lifestyle. Free consultation included.
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
                Get Instant Quote
              </Link>
            </div>
          </div>

          {/* Related Projects */}
          {relatedFinal.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Similar Projects
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedFinal.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/projects/${r.slug}`}
                    className="group glass-card rounded-lg overflow-hidden hover:border-gold-500/30 transition-all"
                  >
                    <div className="aspect-video bg-navy-800 flex items-center justify-center">
                      <span className="text-navy-600 text-xs">Image</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white group-hover:text-gold-500 transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-xs text-navy-400 mt-1">
                        {r.city} · {r.type} · {r.area}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-navy-400 hover:text-gold-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </div>
      </article>
    </>
  );
}
