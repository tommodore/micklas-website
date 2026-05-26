# Micklas Travels — Official Website

**Modern website for travel influencer Michael Glashauser (@micklas)**  
120k+ Instagram followers | Travel Photography | Social Media Advertising Partner

**Live site:** https://micklas.travel

---

## Quick Start for Developers

### Tech Stack

- **Frontend:** Astro 5 + TypeScript + Tailwind CSS 4
- **CMS (Headless):** Payload CMS 3.x (HTTP REST API)
- **Hosting:** Cloudflare Pages (frontend) + Cloudflare Workers (Payload backend)
- **Database:** D1 (SQLite) on Cloudflare
- **Media Storage:** R2 on Cloudflare
- **Animations:** Framer Motion (via React components in Astro)
- **Multi-language:** 10 languages (de default, en, fr, it, es, pt, da, sv, no, me)

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Edit .env.local with Payload secret, etc.

# 3. Start both backend + frontend
npm run dev

# Or separately:
npm run dev:payload   # Payload admin + API at http://localhost:3000
npm run dev:astro     # Frontend at http://localhost:4321
```

### Build & Deploy

```bash
# Build frontend only
npm run build

# Build Payload backend only
npm run build:payload

# Deploy frontend to Cloudflare Pages
npm run deploy

# Deploy Payload backend to Cloudflare Workers
npm run deploy:payload

# Build + deploy everything
npm run deploy:all
```

---

### For Michael (Content Updates)

**You don't need this README.**  
Log into `/admin` and edit everything visually. Changes publish automatically.

See the detailed guide inside [AGENTS.md](./AGENTS.md) under **"For Michael (Non-IT User)"**.

---

## Project Structure

```
/micklas-website/
├── app/                        # Payload admin (Next.js, backend only)
│   ├── (payload)/              # Admin panel layout + routes
│   └── api/                    # Payload REST API
├── src/
│   ├── pages/                  # Astro frontend pages
│   │   └── [locale]/           # i18n routing (de, en, fr, ...)
│   ├── layouts/                # Astro layouts
│   ├── components/             # Astro (.astro) + React (.tsx) components
│   ├── lib/                    # Payload REST API client
│   ├── data/                   # Static data
│   ├── collections/            # Payload collections (Posts, Media, Users)
│   └── globals/                # Payload globals (InstagramHighlights)
├── astro.config.mjs            # Astro configuration
├── next.config.ts              # Next.js config (for Payload admin only)
├── wrangler.jsonc              # Cloudflare Workers config (Payload backend)
├── public/                     # Static assets
├── AGENTS.md                   # Detailed project guide
└── DEPLOYMENT.md               # Deployment guide
```

---

## Brand Colors

| Color | Hex       | Usage                 |
| ----- | --------- | --------------------- |
| Navy  | `#142A64` | Primary text, headers |
| Teal  | `#30BB9A` | Accents, CTAs, links  |
| White | `#FFFFFF` | Backgrounds           |

---

**Built with ❤️ for Micklas and his amazing travel community.** 📸✈️
