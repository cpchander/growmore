import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-data";
import { breadcrumbJsonLd } from "@/lib/metadata";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `Smart Home Blog — Guides, Tips & Comparisons`,
  description: `Expert guides on home automation in India. Costs, comparisons (KNX vs Crestron), room automation tips, and smart home trends from ${COMPANY.name} — ${COMPANY.experience} years of expertise.`,
  alternates: { canonical: "https://growmoresolutions.com/blog" },
};

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter((p) => p.featured);
  const recentPosts = BLOG_POSTS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ])
          ),
        }}
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Smart Home <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-lg text-navy-300 max-w-2xl mb-10">
            Expert guides, cost breakdowns, and technology comparisons from
            India&apos;s most experienced home automation company.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm border border-navy-700 text-navy-300 hover:border-gold-500 hover:text-gold-500 transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group glass-card rounded-xl overflow-hidden hover:border-gold-500/30 transition-all"
                >
                  <div className="relative aspect-video bg-navy-800 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-navy-500">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-navy-300 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-gold-500 mt-4 font-medium">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* All Posts */}
          <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-4 glass-card rounded-xl p-5 hover:border-gold-500/30 transition-all"
              >
                <div className="relative w-24 h-24 rounded-lg bg-navy-800 shrink-0 hidden sm:block overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs bg-navy-800 text-navy-300 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-navy-500">{post.publishedAt}</span>
                    <span className="text-xs text-navy-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-navy-300 mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
