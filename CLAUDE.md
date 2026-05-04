# HomeAutomation — Project Instructions

## Project Overview
Modern, 3D-interactive website for India's most experienced home automation company (40+ years). Built on Next.js 16 (App Router) + Tailwind v4 + React Three Fiber.

**Domain:** growmoresolutions.com

---

## Tech Stack
- **Framework:** Next.js 16, App Router, TypeScript, React 19
- **Styling:** Tailwind CSS v4 (dark luxury theme — navy + gold)
- **3D:** React Three Fiber + Three.js + @react-three/drei + postprocessing
- **Animation:** GSAP + Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Hosting:** Vercel (deploy via `vercel` CLI or GitHub integration)
- **Package Manager:** pnpm

---

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (all sections assembled)
│   ├── layout.tsx          # Root layout (Header + Footer + WhatsApp + Schema)
│   ├── globals.css         # Tailwind v4 theme (gold + navy palette)
│   ├── sitemap.ts          # Dynamic XML sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── contact/            # Contact page + multi-step lead form
│   ├── experience/         # 3D walkthrough page
│   ├── services/[slug]/    # Dynamic service pages (8 services)
│   └── cities/[slug]/      # Dynamic city pages (12 cities)
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections (Hero, Services, Stats, etc.)
│   ├── ui/                 # Reusable UI (WhatsAppButton, etc.)
│   └── three/              # 3D scene components (TODO)
└── lib/
    ├── constants.ts        # Company info, services, cities, brands, stats
    ├── metadata.ts         # SEO helpers, JSON-LD generators
    └── utils.ts            # cn() utility
```

---

## Key Configuration Files

### `src/lib/constants.ts` — SINGLE SOURCE OF TRUTH
All company data lives here. Update once, reflects everywhere:
- `COMPANY` — name, phone, email, founded year, social links
- `SERVICES` — all 8 services with slugs, descriptions, features
- `CITIES` — 12 cities with areas served
- `BRANDS` — partner brand logos
- `STATS` — counter values for homepage
- `PROCESS_STEPS` — 4-step process

### `src/lib/metadata.ts` — SEO UTILITIES
- `createMetadata()` — generates consistent page metadata
- `organizationJsonLd()` — Organization schema (site-wide)
- `localBusinessJsonLd()` — LocalBusiness schema (city pages)
- `serviceJsonLd()` — Service schema
- `faqJsonLd()` — FAQ schema (featured snippet targeting)
- `breadcrumbJsonLd()` — Breadcrumb schema

---

## Design System

### Color Palette (Tailwind classes)
- **Gold (Primary):** `gold-500` (#D4A843) — CTAs, accents, highlights
- **Navy (Background):** `navy-950` (#060E1A) to `navy-700` (#1A2744)
- **Electric Blue (Accent):** `electric-500` (#3B82F6) — links, secondary
- **Text:** `white` for headings, `navy-300` for body, `navy-400` for muted

### Utility Classes (globals.css)
- `.text-gradient-gold` — gold gradient text effect
- `.glass-card` — frosted glass card with blur
- `.glow-gold` / `.glow-blue` — glow box shadows
- `.section-padding` — consistent section spacing
- `.link-underline` — animated underline on hover

### Typography
- Uses Geist font (loaded in layout.tsx)
- Headings: bold, white
- Body: navy-300, text-sm to text-base
- Pattern: `text-gradient-gold` for emphasis words in headings

---

## SEO Rules

### Every page MUST have:
1. Unique `<title>` with primary keyword + brand + experience years
2. Meta description with keyword, value prop, social proof, CTA
3. Canonical URL
4. At least one JSON-LD schema block
5. H1 with primary keyword (one per page)
6. Breadcrumb navigation (visual + schema)

### Schema Markup Strategy:
| Page Type | Schema Types |
|-----------|-------------|
| Homepage | Organization + LocalBusiness + FAQPage |
| Service pages | Service + FAQPage + BreadcrumbList |
| City pages | LocalBusiness + FAQPage + BreadcrumbList |
| Blog posts | Article + FAQPage + BreadcrumbList |
| Contact | ContactPage + LocalBusiness |

### Featured Snippet Targeting:
- Every page should have a 40-60 word definition paragraph
- Use tables for pricing/comparisons
- Use numbered lists for processes
- FAQs on every page (visible + schema)

---

## TODO: Pages to Build

### Priority 1 (Week 1-2):
- [x] Homepage with all sections
- [x] Contact page with multi-step form
- [x] 8 Service pages (dynamic route ready)
- [x] 12 City pages (dynamic route ready)
- [x] 3D Experience page (placeholder)
- [x] 404 page
- [x] /about/our-story — 40-year timeline (scroll animation)
- [x] /about/team — leadership + engineer profiles
- [x] /about/certifications — brand partnerships page
- [x] /get-quote — interactive quote calculator

### Priority 2 (Week 3-4):
- [x] /solutions/for-homeowners — B2C landing page
- [x] /solutions/for-builders — B2B landing page
- [x] /solutions/for-architects — B2B landing page
- [x] /solutions/for-hotels — hospitality landing page
- [x] /projects — project gallery with filters
- [x] /projects/[slug] — individual case studies
- [x] /blog — blog listing with categories
- [x] /blog/[slug] — blog post template

### Priority 3 (Week 5-6):
- [x] /brands/[slug] — brand-specific pages (KNX, Crestron, etc.)
- [x] /compare — comparison pages
- [x] /privacy — privacy policy
- [x] /terms — terms of service

### Interactive Tools:
- [x] /smart-home-planner — product library configurator + cost calculator + brand comparison
- [x] Images added across services, solutions, projects, and about pages

### 3D Integration (Parallel):
- [x] Source/create 3D smart home model (hero scene) — procedural geometry
- [x] Build SmartHomeScene component with React Three Fiber
- [x] Implement progressive loading (static image → 3D)
- [x] Create room walkthrough scenes (5 rooms)
- [x] Add interactive hotspots for each automation feature
- [x] Mobile fallback (static animated visual)
- [ ] Optimize with GLTF models when real 3D assets are sourced

---

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (Turbopack)
pnpm build            # Production build
pnpm start            # Start production server
pnpm lint             # ESLint
```

---

## Conversion Architecture

### Primary CTAs (in order of priority):
1. "Book Free Consultation" → /contact (multi-step form)
2. "Get Instant Quote" → /get-quote (interactive calculator)
3. WhatsApp floating button → wa.me link with pre-filled message
4. Phone number → click-to-call

### Lead Form Flow:
Step 1: Property type → Step 2: City + Budget → Step 3: Features → Step 4: Contact details

### Trust Signals (show on every page):
- "40+ Years Experience"
- "500+ Projects Completed"
- "15+ Cities Across India"
- Brand partnership logos
- Phone number in header
- Physical address in footer

---

## Performance Rules

1. 3D scenes MUST NOT block LCP — load static image first, 3D after hydration
2. All images via Next.js `<Image>` component (auto WebP/AVIF)
3. GLTF models compressed with Draco (< 2MB per scene)
4. Use React Server Components for all non-interactive pages
5. Client components only where interactivity is needed ("use client")
6. Fonts self-hosted or loaded via next/font (no external font blocking)
7. Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
