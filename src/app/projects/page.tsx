import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { PROJECTS, PROJECT_TYPES } from "@/lib/projects-data";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, MapPin, Ruler, Tag } from "lucide-react";
import InstagramFeed from "@/components/ui/InstagramFeed";

export const metadata: Metadata = {
  title: `Smart Home Projects — ${COMPANY.projectsCompleted}+ Completed Across India`,
  description: `Browse ${COMPANY.projectsCompleted}+ completed home automation projects across India. Luxury villas, apartments, penthouses, hotels & commercial spaces. KNX, Crestron, Control4 installations by ${COMPANY.name}.`,
  alternates: { canonical: "https://growmoresolutions.com/projects" },
};

export default function ProjectsPage() {
  // Group projects by city for structured display
  const cities = [...new Set(PROJECTS.map((p) => p.city))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Projects", url: "/projects" },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image src={IMAGES.projects.luxury} alt="Smart home automation projects portfolio" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1000px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          </div>

          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Projects</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-2xl mb-4">
            {COMPANY.projectsCompleted}+ smart home and building automation
            projects delivered across {COMPANY.citiesServed}+ cities in India —
            from luxury villas to 200-unit apartment complexes.
          </p>
          <p className="text-navy-400 text-sm max-w-2xl mb-10">
            Every project below was designed, installed, and commissioned by our
            in-house team of certified KNX, Crestron, and Control4 engineers
            with {COMPANY.experience} years of experience.
          </p>

          {/* Type Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-12">
            {PROJECT_TYPES.map((type) => (
              <span
                key={type}
                className="px-4 py-1.5 rounded-full text-sm border border-navy-700 text-navy-300 hover:border-gold-500 hover:text-gold-500 transition-colors cursor-pointer"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {PROJECTS.map((project) => (
              <div
                key={project.slug}
                className="group glass-card rounded-xl overflow-hidden hover:border-gold-500/30 transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-navy-800 flex items-center justify-center relative">
                  <span className="text-navy-600 text-sm">Project Image</span>
                  <span className="absolute top-3 left-3 text-xs bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors mb-2">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-navy-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {project.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Ruler className="w-3 h-3" /> {project.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {project.brand}
                    </span>
                  </div>

                  <p className="text-sm text-navy-300 line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-navy-800 text-navy-300 px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-xs text-navy-500">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-gold-500 font-medium hover:gap-2 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="glass-card rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
            <div>
              <p className="text-3xl font-bold text-gold-500">
                {COMPANY.projectsCompleted}+
              </p>
              <p className="text-sm text-navy-400 mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold-500">
                {COMPANY.citiesServed}+
              </p>
              <p className="text-sm text-navy-400 mt-1">Cities Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold-500">
                {COMPANY.experience}+
              </p>
              <p className="text-sm text-navy-400 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold-500">5</p>
              <p className="text-sm text-navy-400 mt-1">Premium Brands</p>
            </div>
          </div>

          {/* Projects by City */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Projects by City
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => {
                const count = PROJECTS.filter((p) => p.city === city).length;
                return (
                  <div
                    key={city}
                    className="glass-card rounded-lg p-4 text-center hover:border-gold-500/30 transition-all"
                  >
                    <p className="font-semibold text-white">{city}</p>
                    <p className="text-xs text-navy-400 mt-1">
                      {count} project{count > 1 ? "s" : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instagram Gallery — Real Project Photos */}
          <div className="mb-16">
            <InstagramFeed count={3} />
          </div>

          {/* CTA */}
          <div className="glass-card rounded-xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Your Project Could Be Next
            </h2>
            <p className="text-navy-300 max-w-lg mx-auto mb-6">
              Whether it&apos;s a 2BHK apartment or a 200-room hotel — we
              design, install, and support smart automation systems across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-gold-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
