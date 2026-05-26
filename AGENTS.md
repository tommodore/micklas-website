# AGENTS.md — micklas-website

**Project:** Official website for Micklas (Michael Glashauser) — Travel Influencer & Photographer  
**Instagram:** @micklas (120k+ followers)  
**Current site (to replace):** https://micklastravels.jimdofree.com/ (outdated Jimdo free site, minimal content, last updated 2019)  
**Brand:** Professional travel photography + social media advertising partner.  
**Exact logo colors (from 1590997233.jpg):**

- Deep Navy: #142A64 (circle & text)
- Vibrant Teal/Green: #30BB9A (swoosh banner)
- Pure White: #FFFFFF (text & background)  
  Use these exact colors throughout the site for perfect brand alignment.

**Note for AI Assistants:** This file provides clear, consistent guidance for any AI coding assistant (Grok, Claude, GPT, Pi, etc.) working on the project. Follow the principles and structure below to ensure high-quality, maintainable results.

---

## Project Goals

Create a **modern, fast, beautiful, and extremely easy-to-maintain** website that:

- Showcases Micklas' travel photography and stories
- Acts as a professional hub for brand collaborations and inquiries
- Replaces the outdated Jimdo site completely
- Is **fully manageable by Michael (non-technical user)** via a simple admin panel — **no coding, no Git, no deployment needed for content updates**
- Supports **10 languages** (German primary, English, French, Italian, Spanish, Portuguese, Danish, Swedish, Norwegian, Montenegrin)
- Is SEO-optimized, mobile-first, and conversion-focused (contact/collaboration leads)

**Success metrics:** Beautiful visual experience, easy content updates for Michael, high performance scores (Lighthouse 95+), professional impression for brands.

---

## Architecture Overview

This project uses a **dual-deployment architecture** on Cloudflare:

```
┌─────────────────────────────────────────────┐
│              Cloudflare Platform             │
│                                              │
│  ┌─────────────────────────────┐             │
│  │  Cloudflare Pages (Astro)   │  Frontend   │
│  │  → Public-facing website    │             │
│  │  → Astro 5 SSR              │             │
│  │  → Fetches data from Payload│             │
│  │    via REST API             │             │
│  └──────────┬──────────────────┘             │
│             │ HTTP requests                  │
│             ▼                                │
│  ┌─────────────────────────────┐             │
│  │  Cloudflare Worker          │  Backend    │
│  │  (Next.js via OpenNext)     │             │
│  │  → Payload CMS admin panel  │             │
│  │  → JSON API for content     │             │
│  │  → D1 database (SQLite)     │             │
│  │  → R2 storage (media)       │             │
│  └─────────────────────────────┘             │
│                                              │
│  ┌──────────────┐  ┌──────────────┐          │
│  │  D1 Database  │  │  R2 Storage  │          │
│  │  (SQLite)     │  │  (Images)    │          │
│  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────┘
```

- **Payload CMS 3.x** runs as a headless CMS backend. Under the hood it uses Next.js internally for its admin panel, deployed as a **Cloudflare Worker** via OpenNext. This is an implementation detail — Michael only ever sees the `/admin` login page.
- **Astro 5** is the public-facing frontend framework, deployed as **Cloudflare Pages** with SSR. It fetches content from Payload via REST API.
- **D1** (Cloudflare's SQLite database) stores all CMS content.
- **R2** (Cloudflare's S3-compatible object storage) stores all media files (photos, videos).

**Important:** Both the Payload Worker (from `app/`) and the Astro Pages (from `src/pages/`) live in the **same repository** but are deployed as separate Cloudflare projects. They communicate over HTTP at runtime.

---

## Tech Stack (Strictly Follow)

### Frontend (Public Website)

- **Framework:** Astro 5 (SSR mode) + TypeScript
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin)
- **Animations:** Framer Motion (used inside `.tsx` components via `@astrojs/react` bridge)
- **Icons:** Lucide (imported in React components)
- **Spacing / Layout:** CSS Grid, Flexbox, Tailwind utilities — no CSS-in-JS

### Backend (CMS & API)

- **CMS:** Payload CMS 3.x (latest stable) — **this is the key for easy maintenance**
- **Admin Panel:** Next.js 15 (provided by Payload automatically, lives in `app/`)
- **Database:** Cloudflare D1 (SQLite via `@payloadcms/db-d1-sqlite`)
- **Media Storage:** Cloudflare R2 (via `@payloadcms/storage-r2`)
- **Editor:** Lexical rich text editor (via `@payloadcms/richtext-lexical`)
- **API:** Payload REST API (consumed by Astro frontend)

### Deployment & Infrastructure

- **Frontend:** Cloudflare Pages via `@astrojs/cloudflare` adapter
- **Backend:** Cloudflare Worker via `@opennextjs/cloudflare`
- **Domain:** Cloudflare DNS + SSL (Full strict)
- **Local Dev:** Next.js dev server for Payload + Astro dev server for frontend (run simultaneously)

### Other

- **i18n / Multi-Language:** Payload built-in localization for content, Astro i18n for frontend routing
- **Forms:** Custom API route in Payload + email sending via Resend or similar
- **Image Handling:** Astro `<Image />` component + Payload media API with R2 + Sharp
- **SEO:** Astro built-in metadata (`<SEO />` or Astro head management), JSON-LD structured data
- **Accessibility:** WCAG AA minimum

**Why this stack?**

- Payload CMS gives Michael a **beautiful, WordPress-like admin panel** (`/admin`) where he can add/edit posts, upload photos, change text, manage galleries — **zero code required**.
- Astro delivers near-zero JS by default, resulting in blazing fast page loads and perfect Lighthouse scores.
- Everything on Cloudflare = no server management, global CDN, automatic scaling, zero cold starts for the static parts.
- D1 + R2 = no external database or storage bills, everything in one Cloudflare account.

---

## Project Structure (Target)

```
/micklas-website/
├── app/                              # Payload admin (Next.js - minimal, just for CMS admin)
│   ├── (payload)/                    # Payload's admin layout
│   │   ├── admin/
│   │   │   └── [[...segments]]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── custom.scss
│   │   └── importMap.js
│   ├── [locale]/                     # Placeholder Next.js pages (redirects to Astro)
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── travels/
│   │   ├── journal/
│   │   ├── collaborate/
│   │   ├── impressum/
│   │   └── privacy/
│   ├── api/                          # Payload API route ([[...slug]]/route.ts)
│   └── globals.css
│
├── src/                              # Astro frontend + Payload configuration
│   ├── payload/                      # Payload CMS configuration
│   │   ├── payload.config.ts         # Main Payload config (D1, R2, locales)
│   │   ├── collections/
│   │   │   ├── Posts.ts              # Travel stories / blog posts
│   │   │   ├── Media.ts              # Photo/video uploads
│   │   │   └── Users.ts              # Admin users
│   │   └── globals/
│   │       └── InstagramHighlights.ts # Instagram feed section (managed in admin)
│   │
│   ├── pages/                        # Astro pages (public website)
│   │   └── [locale]/
│   │       ├── index.astro           # Homepage
│   │       ├── about.astro           # About Micklas
│   │       ├── travels.astro         # Travel portfolio
│   │       ├── travels/[slug].astro  # Individual travel story
│   │       ├── journal.astro         # Blog list
│   │       ├── journal/[slug].astro  # Single blog post
│   │       ├── collaborate.astro     # Brand collaboration page
│   │       ├── contact.astro         # Contact form
│   │       ├── impressum.astro       # Legal notice (DE required)
│   │       └── privacy.astro         # Privacy policy
│   │
│   ├── layouts/                      # Astro layouts
│   │   ├── BaseLayout.astro          # Global HTML shell (head, body, scripts)
│   │   ├── PageLayout.astro          # Standard page with header + footer
│   │   └── PostLayout.astro          # Blog / travel story layout
│   │
│   ├── components/                   # Astro components (.astro) + React components (.tsx)
│   │   ├── Header.astro              # Navigation + language switcher
│   │   ├── Footer.astro              # Footer with links, socials, imprint
│   │   ├── Hero.astro                # Homepage hero section
│   │   ├── TravelCard.astro          # Travel story card
│   │   ├── InstagramFeed.tsx         # React component (Framer Motion animated)
│   │   ├── LanguageSwitcher.tsx      # React component for locale switching
│   │   ├── Testimonials.tsx          # React component (animated)
│   │   └── ui/                       # Shared UI components
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── ...
│   │
│   ├── lib/                          # Utilities
│   │   └── payload.ts                # Payload REST API client
│   │
│   └── env.d.ts                      # Astro type declarations
│
├── public/                           # Static assets
│   ├── favicon.ico
│   └── logo-micklas.svg              # Your provided logo (SVG version)
│
├── astro.config.mjs                  # Astro configuration (Cloudflare adapter, i18n)
├── next.config.ts                    # Next.js configuration (for Payload admin)
├── wrangler.jsonc                    # Cloudflare Worker config (D1 + R2 bindings)
├── open-next.config.ts               # OpenNext configuration (Payload → Worker)
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json
├── package.json
├── AGENTS.md                         # This file
├── DEPLOYMENT.md                     # Full deployment guide
└── README.md
```

**Key Payload Collections to implement:**

- `Posts` — Travel stories / blog (title, excerpt, content (rich text + images), cover photo, publishDate, status, locale)
- `Media` — All photos/videos (with alt text, automatic responsive sizes from R2)
- `Users` — Admin users (auth only, no custom fields)
- `InstagramHighlights` (Global) — Instagram feed section managed in admin (title, subtitle, array of posts with image + caption + URL)

---

## For Michael (Non-IT User) — How to Maintain the Website

**You will NEVER need to touch code, GitHub, or deploy anything for normal updates.**

### Daily / Regular Tasks (5-10 minutes max):

1. Go to `https://micklas.travel/admin`
2. Log in with your admin credentials (set during setup)
3. Use the left sidebar:
   - **Posts** → Add new travel story / blog post (rich text editor, upload photos, choose language)
   - **Media** → Upload new photos (auto-optimized, stored in Cloudflare R2)
   - **Instagram Highlights** → Update the Instagram section on the homepage (images, captions, URLs)
4. Hit **Save & Publish** — changes appear on the live site within seconds

**Pro tip:** The admin panel looks modern and is as easy as using Instagram or Canva. You can preview changes live.

**What you can update yourself:**

- All text on the site (About, bio, travel descriptions — per language!)
- Add/remove photos and galleries
- Publish new blog posts / travel journals
- Update Instagram handle, contact email, collaboration info
- Change hero image or background
- Write in any of the 10 supported languages

**What requires developer help (rare):**

- New page layouts / design changes
- Adding completely new features (e.g. new section type)
- Fixing bugs

**Never** edit code files yourself unless you want to learn (we can guide you later if interested).

---

## Design & Branding Guidelines

- **Primary colors:**
  - Navy: `#142A64`
  - Teal/Green: `#30BB9A`
  - White / Off-white backgrounds
  - Accent gold or warm sand for highlights (travel feel)
- **Typography:** Modern sans-serif (Inter or similar) for body, elegant display font for "Micklas" headings where appropriate.
- **Logo usage:** Always use the provided circular logo (SVG version preferred). Place in header (white on dark nav or dark on light). Use as favicon too.
- **Photography-first:** Large, high-quality images with subtle overlays. Masonry or grid galleries. Scroll-triggered reveals (tasteful, using Framer Motion).
- **Tone:** Adventurous yet professional, trustworthy for brands, warm and inspiring for readers.
- **Mobile:** Hamburger menu, touch-friendly, thumb-friendly CTAs.

**Hero section idea (homepage):**
Big background photo + overlay logo + headline:  
**"Micklas Travels"**  
**"Travel Photography • 120k+ Community • Your Partner for Social Media Advertising"**

---

## Content Strategy & Pages (Minimum Viable)

1. **Homepage** — Hero, About teaser, Featured travels, Instagram feed preview, CTA to collaborate
2. **About Micklas** — Full bio, stats (120k followers, countries visited, photography style), philosophy
3. **Travels / Portfolio** — Filterable gallery by destination or year + individual story pages
4. **Travel Journal (Blog)** — List of posts + single post view (rich content with images)
5. **Collaborate** — Form for brands + past collaborations / case studies
6. **Contact** — Simple form + social links

**Instagram integration:**

- Link prominently to @micklas
- Instagram Highlights managed in Payload admin (images, captions, URLs)
- No live API integration needed — Michael can update the feed himself

---

## Multi-Language Support (10 Locales)

The site supports **10 languages** managed entirely through Payload's built-in localization:

| Code | Language    | Status      |
| ---- | ----------- | ----------- |
| de   | German      | **Default** |
| en   | English     | Active      |
| fr   | French      | Active      |
| it   | Italian     | Active      |
| es   | Spanish     | Active      |
| pt   | Portuguese  | Active      |
| da   | Danish      | Active      |
| sv   | Swedish     | Active      |
| no   | Norwegian   | Active      |
| me   | Montenegrin | Active      |

**How it works:**

- **Astro i18n** handles URL routing: `/de/`, `/en/`, `/fr/`, etc.
- **Payload localization** handles content: every text field with `localized: true` stores content per locale.
- The frontend fetches content from Payload filtered by the current locale.
- Fallback to German if content is not yet translated for a given locale.

---

## Development Workflow & Commands

### Initial Setup (done once)

```bash
git clone <repo>
cd micklas-website
pnpm install
cp .env.example .env.local
# Add PAYLOAD_SECRET, Cloudflare API tokens, etc.
```

### Local Development

The project has **two dev servers** you need to run simultaneously:

**Terminal 1 — Payload CMS (admin + API):**

```bash
pnpm dev:payload
# Starts on http://localhost:3000
# Admin at http://localhost:3000/admin
# REST API at http://localhost:3000/api/
```

**Terminal 2 — Astro frontend:**

```bash
pnpm dev:astro
# Starts on http://localhost:4321
# Fetches content from Payload at http://localhost:3000
```

Or use the combined command:

```bash
pnpm dev
# Runs both concurrently
```

### Daily Development Commands

```bash
pnpm dev                  # Start both dev servers (Payload + Astro) concurrently
pnpm dev:payload          # Start Payload only (Next.js on :3000)
pnpm dev:astro            # Start Astro only (on :4321)
pnpm build                # Build Astro frontend for production
pnpm build:payload        # Build Payload Worker for Cloudflare
pnpm build:all            # Build both (Astro + Payload Worker)
pnpm lint                 # ESLint + TypeScript check
pnpm typecheck            # Strict TS check
pnpm payload:generate     # Regenerate TypeScript types after changing Payload config
pnpm preview              # Preview Astro build locally
pnpm deploy:astro         # Deploy Astro to Cloudflare Pages
pnpm deploy:payload       # Deploy Payload Worker to Cloudflare
pnpm deploy               # Deploy both
```

**Always run `pnpm build` and fix any errors before committing.**

### Important: Dual Build Process

```bash
# 1. Build Astro frontend
pnpm build
# → Output in dist/ (or .vercel/output/static with adapter)

# 2. Build Payload Worker for Cloudflare
pnpm build:payload
# → Uses OpenNext to bundle Next.js + Payload into a Cloudflare Worker
# → Output in .open-next/

# 3. Deploy each to its own Cloudflare project
pnpm deploy:astro          # → Cloudflare Pages
pnpm deploy:payload        # → Cloudflare Worker (via wrangler)
```

**Git workflow:** Feature branches → PR → main (protected). Use conventional commits.

---

## Guidelines for AI Coding Assistants

Any AI assistant working on this project should follow these principles to ensure consistency, quality, and long-term maintainability:

1. **Always start with Payload schema** — If a new content type or field is needed, update `src/payload/payload.config.ts` and the relevant collections first, then run `pnpm payload:generate` to regenerate types.

2. **Content lives in the CMS** — Never hardcode text, images, or blog posts directly in Astro components. Always fetch from Payload via its REST API. The only exception is static layout text (navigation labels, footer credit, etc.) which goes into a dedicated content utility.

3. **Multi-language first** — Every new text field in Payload must support all 10 locales using `localized: true`. Every new Astro page must handle `[locale]` routing. Never add a text field that is only available in one language.

4. **Admin UX is critical** — Every new field in the Payload admin must have clear labels, helpful descriptions (using `admin.description`), and proper validation. Always test changes by logging in as a non-technical user (Michael's perspective).

5. **Performance & Images** — Use Astro's built-in `<Image />` component for optimization. Configure Payload media uploads with proper alt text. Use responsive image approaches. Leverage Cloudflare Images or R2-based image transformations when possible.

6. **Minimal JavaScript** — Astro's strength is shipping zero JS by default. Use Astro components (`.astro`) whenever possible. Only use React components (`.tsx`) when you need interactivity (animations, language switcher, form validation). Keep Framer Motion usage tasteful and limited.

7. **Accessibility & SEO** — Add proper semantic headings, meaningful alt texts, metadata per page and locale, and JSON-LD structured data for travel content. Use Astro's built-in `<head>` management for per-page SEO.

8. **Before any major change** — Always run `pnpm build` and `pnpm typecheck` locally, fix all errors, and verify the admin panel still works correctly.

9. **Michael-first approach** — When Michael requests changes, first guide him to the Payload admin panel. Only modify code for design, new features, or system-level updates.

10. **Deployment awareness** — Remember that Payload and Astro are separate deployments. Changes to Payload schema require rebuilding and redeploying the Worker. Changes to frontend code only require rebuilding the Astro Pages. API compatibility between them must be maintained.

**Never do the following:**

- Hardcode German or English strings without proper i18n
- Store images outside the Payload Media collection (they belong in R2)
- Make the admin panel confusing (always add clear help text and descriptions)
- Break existing content when changing the schema (use careful updates or migrations)
- Import Payload's server SDK (`payload`) in Astro frontend code — use the REST API instead

---

## GDPR & DSGVO Compliance (Critical for German-speaking audience)

Because the primary audience is German/Austrian and the site is commercial, **full GDPR (DSGVO) compliance is mandatory**.

### Required Pages (must be created early)

- **Impressum** (Imprint) — Full legal notice with name, address, contact, VAT ID if applicable (German law requirement)
- **Datenschutzerklärung** (Privacy Policy) — Clear explanation of what data is collected, why, how long it is stored, and user rights (access, deletion, etc.)

### Technical & Implementation Requirements

- **Contact / Collaboration form**:
  - Explicit consent checkbox before submission
  - Clear statement: "By submitting this form you agree that your data (name, email, message) will be processed to respond to your inquiry. Data will be deleted after 6 months if no further contract is concluded."
  - No pre-filled or hidden tracking fields
- **Analytics**: Use privacy-friendly tools only (Cloudflare Web Analytics, Plausible, or Matomo self-hosted). **No Google Analytics** without consent.
- **Cookies / Local Storage**: Minimal usage. If any non-essential cookies are set, implement a simple consent banner.
- **Payload CMS**:
  - Strict access control (only admins can access user data)
  - Regular automated backups (configure D1 export or manual snapshots)
  - All data transmission encrypted (HTTPS + Full Strict SSL on Cloudflare)
- **Data Minimization**: Collect only what is absolutely necessary.
- **User Rights**: Provide easy ways for visitors to request data deletion or export (add a note in the privacy policy + a simple email contact).

### Language

All legal pages must be available in **German (primary)** and all 9 other languages.

**AI assistants must ensure** that every form, tracking decision, and new feature respects these rules from the very beginning.

---

## Deployment

Both the frontend (Astro) and backend (Payload Worker) are deployed on Cloudflare.

### Frontend: Cloudflare Pages (Astro)

- Deployed via `@astrojs/cloudflare` adapter with SSR mode
- Handles all public-facing routes: `/de/`, `/en/`, etc.
- Fetches content from the Payload Worker at runtime
- Auto-deploys from GitHub via Cloudflare Pages Git integration

### Backend: Cloudflare Worker (Payload CMS)

- Next.js + Payload bundled via `@opennextjs/cloudflare`
- Serves the admin panel at `/admin`
- Serves the REST API at `/api/`
- Connects to D1 database and R2 storage via Worker bindings
- Deployed via Wrangler CLI or GitHub Actions

### Custom Domain

- `micklas.travel` managed via Cloudflare DNS
- Frontend: `micklas.travel` (Cloudflare Pages)
- Admin: `micklas.travel/admin` (served by the Worker, same domain)
- Both behind Cloudflare CDN with Full (strict) SSL

### Environment Variables

**Cloudflare Pages (Astro):**

```env
PAYLOAD_PUBLIC_SERVER_URL=https://micklas.travel
PUBLIC_SITE_URL=https://micklas.travel
```

**Cloudflare Worker (Payload — via wrangler.jsonc or Cloudflare dashboard):**

```env
PAYLOAD_SECRET=your-super-long-random-secret
PAYLOAD_DATABASE=cli
NEXT_PUBLIC_SITE_URL=https://micklas.travel
```

**D1 and R2 bindings** are configured in `wrangler.jsonc`.

---

## Initial Build Roadmap (Suggested Order)

1. Set up Astro 5 + `@astrojs/cloudflare` + `@astrojs/react` + Tailwind CSS 4 + Framer Motion
2. Configure Astro i18n with all 10 locales in `astro.config.mjs`
3. Set up Payload CMS with existing collections (Posts, Media, Users, InstagramHighlights), D1, and R2
4. Build the Astro `BaseLayout` and `PageLayout` with Header (navigation + language switcher) and Footer
5. Implement homepage (Hero, About teaser, Featured travels, Instagram feed) — fetch all content from Payload REST API
6. Build all other pages (About, Travels, Journal, Collaborate, Contact, Impressum, Privacy)
7. Implement contact/collaboration form with email sending (Payload API route + Resend)
8. Add Framer Motion animations to key components (Hero, TravelCard, InstagramFeed)
9. Add JSON-LD structured data, SEO metadata, accessibility improvements
10. Polish responsive design for mobile, tablet, desktop
11. Deploy Payload Worker to Cloudflare (via OpenNext + Wrangler)
12. Deploy Astro frontend to Cloudflare Pages
13. Connect custom domain and configure SSL
14. Hand over to Michael with login + 15-min video walkthrough (or written guide)

---

## Useful Resources

- **Astro Docs:** https://docs.astro.build
- **Payload CMS 3 Docs:** https://payloadcms.com/docs
- **Payload + D1:** https://payloadcms.com/docs/database/d1-sqlite
- **Payload + R2:** https://payloadcms.com/docs/storage/r2
- **OpenNext for Cloudflare:** https://opennext.js.org/cloudflare
- **@astrojs/cloudflare adapter:** https://docs.astro.build/en/guides/integrations-guide/cloudflare
- **@astrojs/react:** https://docs.astro.build/en/guides/integrations-guide/react
- **Tailwind CSS 4:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion
- **Lucide Icons:** https://lucide.dev
- **Cloudflare D1:** https://developers.cloudflare.com/d1
- **Cloudflare R2:** https://developers.cloudflare.com/r2
- **Wrangler CLI:** https://developers.cloudflare.com/workers/wrangler

---

## Boundaries & Principles

- **User-first (Michael):** Every decision must make his life easier. If a feature makes content management harder, don't add it.
- **Brand-first:** Every pixel must feel like Micklas — premium travel photography meets professional influencer.
- **Future-proof:** Use TypeScript strictly. Keep components small and composable.
- **Security:** Proper Payload access control (admin only). Rate limit contact form. Use Cloudflare's WAF.
- **Simplicity:** Prefer simple solutions over clever ones. The site should feel lightweight and fast.
- **Minimal JS by default:** Prefer `.astro` components. Only reach for React when interactivity is truly needed.
- **Separation of concerns:** Payload handles content and API. Astro handles rendering and UX. Never import Payload's server SDK in Astro code.

---

**This AGENTS.md is the single source of truth for this project.**  
Update it whenever the stack, structure, or guidelines change.

**Let's build something Michael and his 120k+ community will be proud of!** :globe_with_meridians: :camera:
