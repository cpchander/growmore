import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { breadcrumbJsonLd } from "@/lib/metadata";
import BlogTableOfContents, { type TocItem } from "@/components/blog/BlogTableOfContents";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  User,
  Calculator,
  Phone,
  CheckCircle,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `https://growmoresolutions.com/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `https://growmoresolutions.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Strip markdown formatting to get plain text */
function stripMd(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\[(.*?)\]\(.*?\)/g, "$1");
}

/** Extract TOC items from content */
function extractToc(content: string): TocItem[] {
  const items: TocItem[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    if (line.startsWith("## ")) {
      const raw = line.replace("## ", "");
      const text = stripMd(raw);
      items.push({ id: slugify(text), text, level: 2 });
    } else if (line.startsWith("### ")) {
      const raw = line.replace("### ", "");
      const text = stripMd(raw);
      items.push({ id: slugify(text), text, level: 3 });
    }
  }
  return items;
}

// ─── Inline formatter ────────────────────────────────────────────────────

function formatInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\))/g;
  let lastIndex = 0;
  let match;
  let idx = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      parts.push(
        <strong key={`${keyPrefix}-b${idx}`} className="text-white font-semibold">
          {match[2]}
        </strong>
      );
    } else if (match[3] !== undefined && match[4] !== undefined) {
      parts.push(
        <Link
          key={`${keyPrefix}-l${idx}`}
          href={match[4]}
          className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
        >
          {match[3]}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
    idx++;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

// ─── Content renderer with heading IDs ───────────────────────────────────

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-700">
                {tableRows[0].map((cell, i) => (
                  <th key={i} className="text-left py-2 px-3 text-navy-400 font-medium">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(2).map((row, ri) => (
                <tr key={ri} className="border-b border-navy-800">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-navy-300">
                      {formatInline(cell, `t${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("|")) {
      inTable = true;
      const cells = line
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // CTA block: {{CTA:text:url}}
    if (line.startsWith("{{CTA:")) {
      const match = line.match(/\{\{CTA:(.*?):(.*?)\}\}/);
      if (match) {
        elements.push(
          <div key={i} className="my-8 glass-card rounded-xl p-6 sm:p-8 text-center">
            <Link
              href={match[2]}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              {match[1]} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      const raw = line.replace("## ", "");
      const plainText = stripMd(raw);
      const id = slugify(plainText);
      elements.push(
        <h2 key={i} id={id} className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-24">
          {formatInline(raw, `h2-${i}`)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      const raw = line.replace("### ", "");
      const plainText = stripMd(raw);
      const id = slugify(plainText);
      elements.push(
        <h3 key={i} id={id} className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-24">
          {formatInline(raw, `h3-${i}`)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-navy-300 leading-relaxed ml-4 list-disc">
          {formatInline(line.replace("- ", ""), `li-${i}`)}
        </li>
      );
    } else if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={i} className="text-navy-300 leading-relaxed ml-4 list-decimal">
          {formatInline(line.replace(/^\d+\. /, ""), `ol-${i}`)}
        </li>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-navy-300 leading-relaxed mb-4">
          {formatInline(line, `p-${i}`)}
        </p>
      );
    }
  }

  if (inTable) flushTable();
  return elements;
}

// ─── Page Component ──────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tocItems = extractToc(post.content);

  // Related posts — same category, excluding current
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== slug
  ).slice(0, 3);

  // Other posts for sidebar (different category or just other posts)
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4);

  const isFounderAuthor = post.author === "Anupam Mahajan";

  const founderPersonSchema = {
    "@type": "Person",
    name: "Anupam Mahajan",
    jobTitle: "Co-Founder & Managing Director",
    worksFor: {
      "@type": "Organization",
      name: COMPANY.name,
      url: "https://growmoresolutions.com",
    },
    knowsAbout: ["home automation", "KNX", "Crestron", "Control4", "smart home design", "building automation", "HVAC"],
    description: "25+ years in home automation and building technology. KNX-certified. Led 300+ residential automation projects across 12 Indian cities.",
    image: "https://growmoresolutions.com/images/team/anupam-mahajan.webp",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://growmoresolutions.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: isFounderAuthor
      ? founderPersonSchema
      : { "@type": "Organization", name: COMPANY.name },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: "https://growmoresolutions.com",
      logo: {
        "@type": "ImageObject",
        url: "https://growmoresolutions.com/images/company/gmhs.png",
      },
    },
    mainEntityOfPage: `https://growmoresolutions.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />

      <article className="section-padding">
        {/* ── Full-width header area ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-400 mb-8">
            <Link href="/" className="hover:text-gold-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold-500">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs bg-gold-500/10 text-gold-500 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-navy-400">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span>{post.publishedAt}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime} read
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 bg-navy-800">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </div>

        {/* ── 3-column content area ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[220px_1fr_260px] lg:gap-8 xl:gap-10">
            {/* ═══ Left Sidebar — TOC ═══ */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8 pr-2 scrollbar-thin">
                <BlogTableOfContents items={tocItems} />
              </div>
            </aside>

            {/* ═══ Main Content ═══ */}
            <div className="min-w-0">
              {/* Mobile TOC — collapsible */}
              {tocItems.length > 0 && (
                <details className="lg:hidden glass-card rounded-xl mb-8 group">
                  <summary className="flex items-center justify-between cursor-pointer px-4 py-3 text-sm font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Table of Contents
                    </span>
                    <svg className="w-4 h-4 text-navy-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 space-y-1">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs py-1 ${
                          item.level === 3 ? "pl-4" : ""
                        } text-navy-400 hover:text-gold-500 transition-colors`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                </details>
              )}

              {/* Content */}
              <div className="prose-custom">{renderContent(post.content)}</div>

              {/* Bottom CTA */}
              <div className="mt-12 glass-card rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to Automate Your Home?
                </h3>
                <p className="text-navy-300 text-sm mb-4">
                  Book a free consultation with our experts. {COMPANY.experience}{" "}
                  years of experience, {COMPANY.projectsCompleted} projects
                  delivered.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Author Bio */}
              <div className="mt-10 flex items-center gap-4 glass-card rounded-xl p-6">
                {isFounderAuthor ? (
                  <>
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-gold-500/30">
                      <Image
                        src="/images/team/anupam-mahajan.webp"
                        alt="Anupam Mahajan — Co-Founder & Managing Director, GMHS"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Anupam Mahajan</p>
                      <p className="text-xs text-gold-500 mb-1">Co-Founder & Managing Director</p>
                      <p className="text-sm text-navy-400">
                        25+ years in home automation. KNX-certified. Led 300+ residential automation projects across 12 Indian cities.
                      </p>
                      <Link href="/about/team" className="text-xs text-gold-500 hover:text-gold-400 mt-1 inline-block">
                        View full profile →
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-full bg-navy-700 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-gold-500">G</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{post.author}</p>
                      <p className="text-sm text-navy-400">
                        {COMPANY.name} — {COMPANY.experience} years of home
                        automation expertise across India. Certified KNX, Crestron &
                        Control4 partners.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Related Articles
                  </h2>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="group flex items-start gap-4 glass-card rounded-lg p-4 hover:border-gold-500/30 transition-all"
                      >
                        <div className="relative w-20 h-20 rounded-lg bg-navy-800 shrink-0 overflow-hidden">
                          <Image
                            src={r.image}
                            alt={r.imageAlt}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-gold-500 transition-colors">
                            {r.title}
                          </h3>
                          <p className="text-sm text-navy-400 mt-1">
                            {r.readTime} · {r.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to blog */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm text-navy-400 hover:text-gold-500 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </div>

            {/* ═══ Right Sidebar ═══ */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8 pl-2 scrollbar-thin">
                {/* Quick Quote CTA */}
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Calculator className="w-4 h-4 text-gold-500" />
                    <h4 className="text-sm font-semibold text-white">Get Instant Quote</h4>
                  </div>
                  <p className="text-xs text-navy-400 mb-4">
                    Calculate your smart home cost in 2 minutes. No login required.
                  </p>
                  <Link
                    href="/get-quote"
                    className="block text-center bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
                  >
                    Calculate Now
                  </Link>
                </div>

                {/* Trust Signals */}
                <div className="glass-card rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Why Grow More?
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      `${COMPANY.experience}+ Years Experience`,
                      `${COMPANY.projectsCompleted} Projects Delivered`,
                      "Certified KNX & Crestron Partner",
                      "15+ Cities Across India",
                      "Free Site Assessment",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-navy-300"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call CTA */}
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-gold-500" />
                    <h4 className="text-sm font-semibold text-white">
                      Talk to an Expert
                    </h4>
                  </div>
                  <p className="text-xs text-navy-400 mb-3">
                    Get answers to your smart home questions.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="block text-center border border-gold-500/30 hover:bg-gold-500/10 text-gold-500 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                {/* More Articles */}
                {otherPosts.length > 0 && (
                  <div className="glass-card rounded-xl p-5">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      More Articles
                    </h4>
                    <div className="space-y-3">
                      {otherPosts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="group block"
                        >
                          <p className="text-xs font-medium text-navy-200 group-hover:text-gold-500 transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </p>
                          <p className="text-[10px] text-navy-500 mt-0.5">
                            {p.readTime} · {p.category}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Smart Home Planner */}
                <div className="glass-card rounded-xl p-5 border border-gold-500/20 bg-gold-500/5">
                  <h4 className="text-sm font-semibold text-gold-500 mb-2">
                    Smart Home Planner
                  </h4>
                  <p className="text-xs text-navy-400 mb-3">
                    Design your dream setup room-by-room with our free interactive tool.
                  </p>
                  <Link
                    href="/smart-home-planner"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-500 hover:text-gold-400 transition-colors"
                  >
                    Try It Free <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
