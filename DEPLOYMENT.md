# Deployment Guide for Micklas Travels

## Architecture

- **Frontend**: Next.js 15 → Cloudflare Pages
- **Backend (Payload CMS)**: Railway or Render
- **Database**: MongoDB Atlas (Free Tier)
- **Domain**: micklas.travel (managed via Cloudflare)

---

## 1. Deploy Frontend to Cloudflare Pages

### Step 1: Install dependencies

```bash
npm install
npm install -D @cloudflare/next-on-pages wrangler
```

### Step 2: Build the project

```bash
npm run build
```

### Step 3: Deploy to Cloudflare

**Option A: Via Dashboard (Recommended for first time)**

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Click **"Create a project"** → **"Connect to Git"**
3. Select your `micklas-website` repository
4. Configure build settings:

   | Setting                    | Value                          |
   |----------------------------|--------------------------------|
   | Framework preset           | Next.js                        |
   | Build command              | `npm run deploy:cloudflare`    |
   | Build output directory     | `.vercel/output/static`        |
   | Root directory             | (leave empty)                  |

5. Add these **Environment Variables**:

   ```env
   NEXT_PUBLIC_SITE_URL=https://micklas.travel
   PAYLOAD_PUBLIC_SERVER_URL=https://your-payload-url.up.railway.app
   ```

6. Click **"Save and Deploy"**

**Option B: Via Wrangler CLI**

```bash
npm run deploy:cloudflare
npx wrangler pages deploy .vercel/output/static --project-name=micklas-website
```

---

## 2. Deploy Payload CMS (Backend)

### Recommended: Railway (Easiest)

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click **"New Project"** → **"Deploy from GitHub Repo"**
4. Select `micklas-website`
5. Add these environment variables:

   ```env
   DATABASE_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/micklas?retryWrites=true&w=majority
   PAYLOAD_SECRET=your-super-long-random-secret-here
   NEXT_PUBLIC_SERVER_URL=https://micklas.travel
   ```

6. Railway will give you a public URL like:
   `https://micklas-production.up.railway.app`

7. Set this as `PAYLOAD_PUBLIC_SERVER_URL` in Cloudflare Pages.

---

## 3. Set Up MongoDB (Free)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster (M0 Sandbox)
3. Create a database user with read/write permissions
4. Get your connection string (it looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/micklas?retryWrites=true&w=majority
   ```
5. Add this to Railway/Render as `DATABASE_URI`

---

## 4. Connect Custom Domain (micklas.travel)

1. In Cloudflare Dashboard, go to your domain `micklas.travel`
2. Go to **DNS** → Add these records:

   | Type   | Name      | Content                              | Proxy |
   |--------|-----------|--------------------------------------|-------|
   | CNAME  | @         | your-cloudflare-pages-url.pages.dev  | ON    |
   | CNAME  | admin     | your-payload-url.up.railway.app      | ON    |

3. Go to **SSL/TLS** → Set to **Full (strict)**

4. Enable **Always Use HTTPS**

---

## 5. Environment Variables Summary

### Cloudflare Pages
```env
NEXT_PUBLIC_SITE_URL=https://micklas.travel
PAYLOAD_PUBLIC_SERVER_URL=https://your-payload-url.up.railway.app
```

### Railway / Render (Payload)
```env
DATABASE_URI=your-mongodb-connection-string
PAYLOAD_SECRET=super-long-random-string
NEXT_PUBLIC_SERVER_URL=https://micklas.travel
```

---

## 6. Local Development with Cloudflare

```bash
# Install wrangler if you haven't already
npm install -D wrangler

# Run locally with Cloudflare environment
npm run dev:cloudflare
```

---

## 7. Post-Deployment Checklist

- [ ] Frontend deployed to Cloudflare Pages
- [ ] Payload deployed to Railway/Render
- [ ] MongoDB Atlas connected
- [ ] Custom domain `micklas.travel` working
- [ ] Admin panel accessible at `admin.micklas.travel`
- [ ] All 10 languages working
- [ ] Contact form sending (test it)
- [ ] Instagram feed loading from admin

---

## Need Help?

If you run into any issues during deployment, just paste the error here and I’ll help you fix it.

---

**Last updated**: May 2026
**Maintained by**: Grok for Micklas Travels