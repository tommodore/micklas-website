# Micklas Travels — Official Website

**Modern website for travel influencer Michael Glashauser (@micklas)**  
120k+ Instagram followers | Travel Photography | Social Media Advertising Partner

**Live site:** https://micklas.travel

---

## Quick Start for Developers

This project includes a detailed AGENTS.md file to guide any AI coding assistant (Grok, Claude, GPT, Pi, etc.). Always follow it for consistent, high-quality results.

### Tech Stack (Summary)
- Next.js 15 + TypeScript
- Payload CMS 3.x (easy admin for Michael)
- Tailwind + shadcn/ui
- Multi-language: German (default) + English
- MongoDB + Cloudflare Pages (frontend) + Railway/Render (Payload CMS)

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/tommodore/micklas-website.git
cd micklas-website

# 2. Install dependencies
pnpm install

# 3. Copy environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB URI, Payload secret, etc.

# 4. Start development (Next.js + Payload admin)
pnpm dev

# Site: http://localhost:3000
# Admin: http://localhost:3000/admin (create first user on first visit)
```

### For Michael (Content Updates)
**You don't need this README.**  
See the simple guide inside [AGENTS.md](./AGENTS.md) under the section **"For Michael (Non-IT User)"**.

Log into `/admin` and edit everything visually. Changes publish automatically.

---

## Project Deliverables

- Fully responsive, modern website matching the Micklas brand and logo
- Powerful yet simple Payload CMS admin panel
- Multi-language support (German + English)
- Blog / Travel Journal
- Photo galleries and portfolio
- Contact / Collaboration inquiry form (GDPR/DSGVO compliant)
- Instagram integration
- SEO optimized + fast loading
- Easy one-person maintenance by Michael

---

## Logo & Branding

The official logo is provided in `/public/logo-micklas.png` (use the high-resolution version from the original assets).

**Exact Colors (from logo 1590997233.jpg):**
- Deep Navy: `#142A64` (circle & main text)
- Vibrant Teal/Green: `#30BB9A` (banner swoosh)
- Pure White: `#FFFFFF`
Use these exact hex values site-wide for perfect brand match.

---

## Next Steps (Project Workflow)

1. **Initialize the project** using the Payload + Next.js official template
2. Follow the detailed roadmap in [AGENTS.md](./AGENTS.md)
3. Build iteratively — always test the admin panel from Michael's perspective
4. Deploy frontend to Cloudflare Pages + Payload to Railway/Render (full Cloudflare CDN)
5. Hand over with a simple video or written onboarding guide for Michael

---

**Built with ❤️ for Micklas and his amazing travel community.**

*Ready to replace the old Jimdo site and level up his online presence.* 📸✈️