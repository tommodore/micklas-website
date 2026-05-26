# Deployment Guide for Micklas Travels

## Architecture (Updated for Astro + Payload)

The site now runs TWO separate deployments on Cloudflare:

| Component         | Framework              | Deployment                       | Purpose                |
| ----------------- | ---------------------- | -------------------------------- | ---------------------- |
| **Frontend**      | Astro 5                | Cloudflare Pages                 | Public-facing website  |
| **Backend (CMS)** | Payload 3 + Next.js 15 | Cloudflare Worker (via OpenNext) | Admin panel + REST API |
| **Database**      | D1 SQLite              | Cloudflare D1                    | Content storage        |
| **Media Storage** | R2                     | Cloudflare R2                    | Image/video uploads    |

Both share the same custom domain `micklas.travel` via Cloudflare routing.

---

## 1. Deploy Payload CMS (Backend)

The backend handles the admin panel (`/admin`) and REST API (`/api/*`).

### Step 1: Build

```bash
npm run build:payload
```

### Step 2: Deploy to Cloudflare Workers

```bash
# Deploy using OpenNext Cloudflare adapter
npm run deploy:payload
```

This will deploy the Next.js + Payload backend as a Cloudflare Worker with the wrangler.jsonc configuration (which includes D1 and R2 bindings).

### Environment Variables (Payload Worker)

Set these in your Cloudflare Worker dashboard or via `.dev.vars`:

```env
PAYLOAD_SECRET=your-super-long-random-secret-here
NEXTJS_ENV=production
```

---

## 2. Deploy Astro Frontend (Public Site)

The frontend is the public-facing Astro site that fetches content from Payload's REST API.

### Step 1: Build

```bash
npm run build
```

This builds the Astro site to `dist/`.

### Step 2: Deploy to Cloudflare Pages

```bash
# Using Wrangler
npm run deploy
```

### Initial Setup (Cloudflare Dashboard)

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click **"Create a project"** → **"Connect to Git"**
3. Select your `micklas-website` repository
4. Configure build settings:

   | Setting          | Value           |
   | ---------------- | --------------- |
   | Framework preset | Astro           |
   | Build command    | `npm run build` |
   | Build output dir | `dist/`         |
   | Root directory   | (leave empty)   |

5. Add **Environment Variables**:

   ```env
   PUBLIC_PAYLOAD_URL=https://micklas.travel
   ```

6. Click **"Save and Deploy"**

---

## 3. Cloudflare Routing (Same Domain)

For both deployments to share `micklas.travel`, configure routing in Cloudflare:

### Option A: Cloudflare Pages + Worker (Recommended)

1. Deploy the Astro frontend to Cloudflare Pages on `micklas.travel`
2. In Cloudflare Dashboard → Workers & Pages → your Payload Worker
3. Add a **Route**: `admin.micklas.travel/*` → Payload Worker
4. Or use a subdomain: `admin.micklas.travel` for the Payload admin
5. Set `PUBLIC_PAYLOAD_URL=https://admin.micklas.travel` in the Astro Pages env

### Option B: Cloudflare Pages Functions Proxy

If both are in the same Pages project, use a `_routes.json` or `functions/` directory to route `/api/*` and `/admin/*` to the Payload Worker via Service Bindings.

---

## 4. First-Time Setup

After deploying Payload:

1. Visit `https://admin.micklas.travel/admin` (or your deployed URL)
2. Create the first admin user
3. Add some test posts and media
4. Verify the Astro frontend can fetch content

---

## 5. Environment Variables Summary

### Payload Worker (via wrangler.jsonc + .dev.vars)

```env
# Defined in wrangler.jsonc (D1 + R2 bindings)
PAYLOAD_SECRET=your-secret
```

### Astro Frontend (Cloudflare Pages env vars)

```env
PUBLIC_PAYLOAD_URL=https://admin.micklas.travel
```

---

## 6. Local Development

```bash
# Start both Payload backend and Astro frontend
npm run dev

# Or separately:
npm run dev:payload   # Payload admin + API on :3000
npm run dev:astro     # Astro frontend on :4321
```

The Astro dev server proxies API requests to `http://localhost:3000` automatically.

---

## 7. Post-Deployment Checklist

- [ ] Payload CMS deployed as Cloudflare Worker
- [ ] Astro frontend deployed as Cloudflare Pages
- [ ] D1 database connected and working
- [ ] R2 storage connected (media uploads working)
- [ ] Custom domain routing configured
- [ ] Admin panel accessible at `admin.micklas.travel`
- [ ] Frontend loads content from Payload API
- [ ] All 10 languages working
- [ ] Contact form submitting (test it)
- [ ] SEO metadata visible
- [ ] Cloudflare Web Analytics active

---

**Last updated**: May 2026
**Stack**: Astro 5 + Payload 3 + Cloudflare (D1 + R2)
