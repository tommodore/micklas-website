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
- Supports **German (primary) + English** (multi-language)
- Is SEO-optimized, mobile-first, and conversion-focused (contact/collaboration leads)

**Success metrics:** Beautiful visual experience, easy content updates for Michael, high performance scores (Lighthouse 95+), professional impression for brands.

---

## Tech Stack (Strictly Follow)

- **Frontend Framework:** Next.js 15 (App Router) + TypeScript
- **CMS (Headless):** Payload CMS 3.x (latest stable) — **this is the key for easy maintenance**
- **Styling:** Tailwind CSS 4 + shadcn/ui (or Radix UI primitives) + Lucide React icons
- **Animations:** Framer Motion (subtle, tasteful — travel feel)
- **i18n / Multi-Language:** 
  - Payload built-in localization (locales: `de` default, `en`)
  - Frontend: `next-intl` or Payload's i18n hooks (keep consistent)
- **Database:** MongoDB (Atlas free tier recommended for simplicity) or PostgreSQL (Payload 3 supports both well)
- **Image Handling:** Payload Media + Sharp + Next.js Image (optimized, WebP, responsive)
- **Forms:** Payload Form Builder or simple API route + Resend/EmailJS for contact
- **Deployment:** Cloudflare Pages (Next.js frontend with official Cloudflare adapter) + Payload CMS (deployed on Railway or Render for best compatibility & low cost, with custom domain + Cloudflare CDN for global performance)
- **Other:** 
  - next-sitemap, next-seo or built-in metadata
  - React Hook Form + Zod for any custom forms
  - Accessibility: WCAG AA minimum

**Why this stack?**
- Payload CMS gives Michael a **beautiful, WordPress-like admin panel** (`/admin`) where he can add/edit posts, upload photos, change text, manage galleries — **zero code required**.
- Everything else is code-only for initial build and future design updates.

---

## For Michael (Non-IT User) — How to Maintain the Website

**You will NEVER need to touch code, GitHub, or deploy anything for normal updates.**

### Daily / Regular Tasks (5-10 minutes max):

1. Go to `https://micklas.travel/admin`
2. Log in with your admin credentials (set during setup)
3. Use the left sidebar:
   - **Posts** → Add new travel story / blog post (rich text editor, upload photos, choose language)
   - **Media** → Upload new photos (auto-optimized)
   - **Pages** or **Globals** → Edit "About Micklas", "Hero", footer text, social links
4. Hit **Save & Publish** — changes appear on the live site within seconds (or after a quick refresh)

**Pro tip:** The admin panel looks modern and is as easy as using Instagram or Canva. You can preview changes live.

**What you can update yourself:**
- All text on the site (About, bio, travel descriptions)
- Add/remove photos and galleries
- Publish new blog posts / travel journals
- Update Instagram handle, contact email, collaboration info
- Change hero image or background

**What requires developer help (rare):**
- New page layouts / design changes
- Adding completely new features (e.g. new section type)
- Fixing bugs

**Never** edit code files yourself unless you want to learn (we can guide you later if interested).

---

## Project Structure (Target)

```
/micklas-website
├── app/                          # Next.js App Router
│   ├── [locale]/                 # i18n routing (de, en)
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   ├── travels/
│   │   ├── blog/
│   │   ├── contact/
│   ├── api/                      # Payload + custom routes
│   └── globals.css
├── components/                   # Reusable UI (shadcn + custom)
│   ├── ui/                       # shadcn components
│   ├── Hero.tsx
│   ├── TravelCard.tsx
│   ├── InstagramEmbed.tsx
│   └── ...
├── payload.config.ts             # CMS configuration (collections, globals, access)
├── collections/                  # Payload collections
│   ├── Posts.ts
│   ├── Pages.ts (or use blocks)
│   ├── Media.ts
│   └── ...
├── globals/                      # Site-wide settings (nav, footer, SEO, brand)
├── public/                       # Static files
│   └── logo-micklas.png          # Your provided logo (optimize + use SVG version if possible)
├── lib/                          # Utils, i18n config, payload client
├── types/                        # TypeScript types generated from Payload
├── .env.example
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── AGENTS.md                     # This file
```

**Key Payload Collections to implement:**
- `Posts` — Travel stories / blog (title, excerpt, content (rich text + images), cover photo, publishDate, locale)
- `Media` — All photos/videos (with focal point cropping in admin)
- `Pages` or **Block-based layout** (recommended for flexibility: Hero, Text+Image, Gallery, Testimonials, CTA, etc.)
- `Globals`: `SiteSettings` (logo, navigation links, socials, contact email, meta title/description per locale)
- Optional: `Testimonials`, `Destinations`, `Collaborations`

---

## Development Workflow & Commands

### Initial Setup (done once)
```bash
git clone <repo>
cd micklas-website
pnpm install
cp .env.example .env.local
# Add MongoDB URI, Payload secret, etc.
pnpm dev
```

- Opens at `http://localhost:3000` (site)
- Admin at `http://localhost:3000/admin` (create first admin user on first run)

### Daily Development Commands
```bash
pnpm dev                 # Start dev server (Next + Payload)
pnpm build               # Production build (always run before deploy)
pnpm lint                # ESLint + TypeScript check
pnpm typecheck           # Strict TS check
pnpm payload:generate    # Regenerate types after changing Payload config
```

**Always run `pnpm build` and fix any errors before committing.**

**Git workflow:** Feature branches → PR → main (protected). Use conventional commits.

---

## Design & Branding Guidelines

- **Primary colors:** 
  - Navy: `#142A64`
  - Teal/Green: `#30BB9A`
  - White / Off-white backgrounds
  - Accent gold or warm sand for highlights (travel feel)
- **Typography:** Modern sans-serif (Inter or similar) for body, elegant script or bold display for "Micklas" headings where appropriate.
- **Logo usage:** Always use the provided circular logo (high-res version). Place in header (white on dark nav or dark on light). Favicon too.
- **Photography-first:** Large, high-quality images with subtle overlays. Masonry or grid galleries. Parallax or scroll-triggered reveals (tasteful).
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
5. **Collaborate** — Form for brands + past collaborations / case studies (if available)
6. **Contact** — Simple form + social links

**Instagram integration:** 
- Link prominently to @micklas
- Use Instagram oEmbed or manual "Latest from Instagram" section (update manually or via API if possible — keep simple for maintenance)

---

## Guidelines for AI Coding Assistants

Any AI assistant working on this project should follow these principles to ensure consistency, quality, and long-term maintainability:

1. **Always start with Payload schema** — If a new content type or field is needed, update `payload.config.ts` and the relevant collections first.
2. **Content lives in the CMS** — Never hardcode text, images, or blog posts directly in React components. Always fetch from Payload using `getPayload()` or server components.
3. **Multi-language first** — Every new text field must support both `de` (default) and `en`. Use Payload’s `localized: true` setting.
4. **Admin UX is critical** — Every new field in the Payload admin must have clear labels, helpful descriptions, and proper validation. Always test changes by logging in as a non-technical user (Michael’s perspective).
5. **Performance & Images** — Use Next.js `<Image>` component everywhere. Configure Payload media uploads with multiple image sizes (thumbnail, card, hero, OG).
6. **Accessibility & SEO** — Add proper semantic headings, meaningful alt texts, metadata per page and locale, and JSON-LD structured data for travel content.
7. **Before any major change** — Always run `pnpm build` locally, fix all errors, and verify the admin panel still works correctly.
8. **Michael-first approach** — When Michael requests changes, first guide him to the Payload admin panel. Only modify code for design, new features, or system-level updates.
9. **Deployment** — Frontend goes to Cloudflare Pages (`@cloudflare/next-on-pages` + Wrangler). Payload CMS goes to Railway or Render (reliable full Node.js support). Use Cloudflare as the front door (custom domain, CDN, SSL).

**Never do the following:**
- Hardcode German or English strings without proper i18n
- Store images outside the Payload Media collection
- Make the admin panel confusing (always add clear help text and descriptions)
- Break existing content when changing the schema (use careful updates or migrations)

---

## GDPR & DSGVO Compliance (Critical for German-speaking audience)

Because the primary audience is German/Austrian and the site is commercial, **full GDPR (DSGVO) compliance is mandatory**.

### Required Pages (must be created early)
- **Impressum** (Imprint) — Full legal notice with name, address, contact, VAT ID if applicable (German law requirement)
- **Datenschutzerklärung** (Privacy Policy) — Clear explanation of what data is collected, why, how long it is stored, and user rights (access, deletion, etc.)

### Technical & Implementation Requirements
- **Contact / Collaboration form**:
  - Explicit consent checkbox before submission
  - Clear statement: “By submitting this form you agree that your data (name, email, message) will be processed to respond to your inquiry. Data will be deleted after 6 months if no further contract is concluded.”
  - No pre-filled or hidden tracking fields
- **Analytics**: Use privacy-friendly tools only (Cloudflare Web Analytics, Plausible, or Matomo self-hosted). **No Google Analytics** without consent.
- **Cookies / Local Storage**: Minimal usage. If any non-essential cookies are set, implement a simple consent banner.
- **Payload CMS**:
  - Strict access control (only admins can access user data)
  - Regular automated backups
  - All data transmission encrypted (HTTPS + modern TLS)
- **Data Minimization**: Collect only what is absolutely necessary.
- **User Rights**: Provide easy ways for visitors to request data deletion or export (add a note in the privacy policy + a simple email contact).

### Language
All legal pages must be available in **German (primary)** and **English**.

**AI assistants must ensure** that every form, tracking decision, and new feature respects these rules from the very beginning.

---

## Initial Build Roadmap (Suggested Order)

1. Set up Next.js 15 + Tailwind + shadcn/ui + Payload 3 boilerplate (use official Payload Next.js template as starting point)
2. Configure Payload with basic collections (Media, Posts, SiteSettings) + localization
3. Implement homepage with hero + sections (static first, then connect to Payload)
4. Add multi-language routing + language switcher
5. Build admin-friendly Post editor with rich text + image blocks
6. Create reusable block components (HeroBlock, GalleryBlock, etc.)
7. Add contact form + email sending
8. Polish design, animations, SEO, accessibility
9. Deploy frontend to Cloudflare Pages + Payload to Railway/Render + connect custom domain via Cloudflare
10. Hand over to Michael with login + 15-min video walkthrough (or written guide)

---

## Useful Resources

- Payload 3 Docs: https://payloadcms.com/docs
- Payload + Next.js template: https://github.com/payloadcms/payload/tree/main/templates/next
- next-intl or Payload i18n examples
- shadcn/ui + Tailwind best practices
- Cloudflare Pages + Next.js adapter docs  
- Payload CMS deployment options (Railway/Render recommended for Payload)

---

## Boundaries & Principles

- **User-first (Michael):** Every decision must make his life easier. If a feature makes content management harder, don't add it.
- **Brand-first:** Every pixel must feel like Micklas — premium travel photography meets professional influencer.
- **Future-proof:** Use TypeScript strictly. Keep components small and composable.
- **Security:** Proper Payload access control (admin only for now). Rate limit contact form.
- **Simplicity:** Prefer simple solutions over clever ones. The site should feel lightweight and fast.

---

**This AGENTS.md is the single source of truth for this project.**  
Update it whenever the stack, structure, or guidelines change.

**Let's build something Michael and his 120k+ community will be proud of!** 🌍📸

---
