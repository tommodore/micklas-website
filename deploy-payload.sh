#!/usr/bin/env bash
# deploy-payload.sh
# Build and deploy the Payload CMS backend (Next.js + OpenNext) to Cloudflare Workers.
# Generates required config files, builds, deploys, then cleans up.

set -euo pipefail

echo "📝 Generating config files..."
cat >wrangler.payload.jsonc <<'PAYLOADCONFIG'
{
	"$schema": "node_modules/wrangler/config-schema.json",
	"main": ".open-next/worker.js",
	"name": "micklas-website",
	"compatibility_date": "2026-05-26",
	"compatibility_flags": ["nodejs_compat"],
	"assets": {
		"directory": ".open-next/assets",
		"binding": "ASSETS"
	},
	"services": [
		{
			"binding": "WORKER_SELF_REFERENCE",
			"service": "micklas-website"
		}
	],
	"images": {
		"binding": "IMAGES"
	},
	"d1_databases": [
		{
			"binding": "D1",
			"database_name": "micklas-db",
			"database_id": "b5d638f9-27fb-41a9-8913-605ac7e4eb57"
		}
	],
	"r2_buckets": [
		{
			"binding": "R2",
			"bucket_name": "micklas-media"
		}
	]
}
PAYLOADCONFIG

cat >open-next.config.ts <<'OPENNEXTCONFIG'
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
export default defineCloudflareConfig({});
OPENNEXTCONFIG

echo "💾 Saving Astro wrangler config..."
ASTRO_WRANGLER=$(cat wrangler.jsonc 2>/dev/null || echo "")

cp wrangler.payload.jsonc wrangler.jsonc

echo "🧹 Cleaning Astro build artifacts (dist/)..."
rm -rf dist/ .astro/ .next/

echo "🔨 Building Payload CMS backend..."
NEXT_PRIVATE_STANDALONE=true npx next build
node -e "const fs=require('fs');const p='node_modules/@opennextjs/cloudflare/dist/cli/templates/shims/env.js';let c=fs.readFileSync(p,'utf8');if(!c.includes('export default')){fs.writeFileSync(p,c+'\nexport default { loadEnvConfig }\n')}"
npx opennextjs-cloudflare build --skipNextBuild

echo "🚀 Deploying Payload to Cloudflare Workers..."
npx opennextjs-cloudflare deploy

echo "🧹 Cleaning up generated configs..."
rm -f wrangler.payload.jsonc open-next.config.ts

if [ -n "$ASTRO_WRANGLER" ]; then
	echo "$ASTRO_WRANGLER" >wrangler.jsonc
	echo "🔁 Restored Astro wrangler config"
fi

echo "✅ Payload deployed successfully!"
