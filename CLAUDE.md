# HomeAutomation — Project Instructions

## Project Overview
Modern, 3D-interactive website for India's most experienced home automation company (40+ years). Built on Next.js 16 (App Router) + Tailwind v4 + React Three Fiber.

**Domain:** growmoresolutions.com

---

## Tech Stack
- **Framework:** Next.js 16.2.6, App Router, TypeScript, React 19.2.6
- **Styling:** Tailwind CSS v4 (dark luxury theme — navy + gold)
- **3D:** React Three Fiber + Three.js + @react-three/drei + postprocessing
- **Animation:** GSAP + Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Nodemailer + ZeptoMail SMTP (`smtp.zeptomail.in:587`)
- **Icons:** Lucide React
- **Hosting:** Vercel (auto-deploy from GitHub `cpchander/growmore` → main)
- **Package Manager:** pnpm
- **Repo:** https://github.com/cpchander/growmore
- **Git Auth:** GitHub PAT `$GMHS_GITHUB_TOKEN (env var in deploy MCP config)` (cpchander account, expires ~Aug 2026)
- **Deploy MCP:** `~/Desktop/gmhs-deploy-mcp/server.py` — tools: `gmhs_commit_and_deploy`, `gmhs_git_status`, `gmhs_push`, `gmhs_commit`, `gmhs_git_log`, `gmhs_diff`
- **Vercel Token:** `$VERCEL_TOKEN (env var in deploy MCP config)` (for API access)
- **Vercel Project:** `prj_42X0RFckZNpHnBY017b1DyF3mqnk` | Team: `team_SaNjFoxePeJoLIn97qDmOBS3`

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

## Security Architecture (Hardened 2026-05-13)

Full pen-test completed — 14 findings identified and ALL resolved. Notion tracker: `35fdb61b-a034-813c-8cbc-d472097f3ba7`

### Security Headers (`next.config.ts` → `headers()`)
7 headers applied globally via Next.js config:
- Content-Security-Policy (self + unsafe-inline/eval for Next.js, googletagmanager, google-analytics, cdnjs.cloudflare.com, youtube, blob: for Three.js)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Cross-Origin-Opener-Policy: same-origin

### Contact API Protections (`src/app/api/contact/route.ts`)
6-layer defense:
1. `escapeHtml()` — prevents HTML injection in email templates
2. Zod `contactSchema` — validates all input (name, phone, email, message, features)
3. IP-based rate limiter — 5 requests per IP per 15 minutes, auto-cleanup every 30 min
4. Honeypot field (`website`) — hidden from users, bots auto-fill it → silently rejected
5. Origin/Referer CSRF check — only accepts requests from `growmoresolutions.com`
6. Double email validation — Zod validates email format before sending acknowledgment

### Secrets Management
- **ZeptoMail API key:** Vercel Dashboard env var (`ZEPTOMAIL_API_KEY`), NOT in codebase
- **Google Analytics:** `NEXT_PUBLIC_GA_ID` env var with fallback to `G-RV11C3QEJP`
- **Git auth:** GitHub PAT (cpchander) — stored in deploy MCP env + CLAUDE.md
- **`.env.local`:** in `.gitignore`, never committed
- **Vercel token:** stored in deploy MCP env for API-based deployment checks

### Dependency Versions (as of 2026-05-13)
- Next.js: 16.2.6 (patched 14 CVEs from 16.2.4)
- React/React-DOM: 19.2.6
- eslint-config-next: 16.2.6
- ⚠️ three.js, lucide-react, zod: major bumps available but need manual testing

### Weekly Security Audit
Automated via `gmhs-weekly-content-engine` scheduled task (JOB 7). Checks:
deps CVEs, 7 security headers, 6 API protections, secrets exposure, SSL/TLS, attack surface paths, robots.txt

---

## Cross-Linking Rules

- **Internal:** Every page must link to 2+ blog posts + 1 tool/page (/smart-home-planner, /get-quote, /contact)
- **External sister sites (Zedtreeo, RemoteStaffingWiki):** ONLY link when content specifically discusses hiring drafters, architects, or remote staffing for home automation. NO blanket cross-links for SEO.

---

## Deployment Rules

### Git Push Workflow (preferred)
1. Edit files → `git add` → `git commit` → `git push origin main`
2. Vercel auto-deploys from GitHub push (~60s build)
3. Use deploy MCP tools when available: `gmhs_commit_and_deploy` does all in one call
4. **CRITICAL:** After updating `package.json` deps, ALWAYS run `pnpm install` locally and commit `pnpm-lock.yaml` — Vercel uses `--frozen-lockfile` and will fail if lockfile is stale

### Git Remote Auth (sandbox)
```bash
git remote set-url origin https://cpchander:$GMHS_GITHUB_TOKEN (env var in deploy MCP config)@github.com/cpchander/growmore.git
```

### Verify Deployment
```bash
curl -s -H "Authorization: Bearer $VERCEL_TOKEN (env var in deploy MCP config)" \
  "https://api.vercel.com/v6/deployments?projectId=prj_42X0RFckZNpHnBY017b1DyF3mqnk&limit=1&teamId=team_SaNjFoxePeJoLIn97qDmOBS3"
```

---

## 3D Scene Rules (IMPORTANT)

- **DO NOT use `<Environment preset="..." />`** from @react-three/drei — it fetches HDR files from `dl.polyhaven.org` which is blocked by CSP, causing WebGL context loss and page crash
- Use local directional/ambient lights instead: `<ambientLight intensity={0.3} />` + `<directionalLight position={[5,8,5]} intensity={0.6} color="#D4A843" />`
- All 3 scene components fixed (2026-05-21): SmartHomeScene, VillaWalkthrough, RoomWalkthrough

---

## Team Page

- `/about/team` — Leadership section shows only 2 people:
  1. **Anupam Mahajan** — Co-Founder & Managing Director | photo: `/images/team/anupam-mahajan.webp` | LinkedIn: `linkedin.com/in/anupam-mahajan-3882ba14`
  2. **Aakanksha Mahajan** — Senior Architect & Head of Design | photo: `/images/team/aakanksha-mahajan.webp` | LinkedIn: `linkedin.com/in/aakanksha-mahajan-gmhs/`
- Do NOT add placeholder team members

---

## Performance Rules

1. 3D scenes MUST NOT block LCP — load static image first, 3D after hydration
2. All images via Next.js `<Image>` component (auto WebP/AVIF)
3. GLTF models compressed with Draco (< 2MB per scene)
4. Use React Server Components for all non-interactive pages
5. Client components only where interactivity is needed ("use client")
6. Fonts self-hosted or loaded via next/font (no external font blocking)
7. Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
