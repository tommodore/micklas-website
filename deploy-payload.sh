#!/usr/bin/env bash
# deploy-payload.sh
# Build and deploy the Payload CMS backend (Next.js + OpenNext) to Cloudflare Workers.
# Uses wrangler.payload.jsonc instead of the Astro-minimal wrangler.jsonc.

set -euo pipefail

echo "🔁 Switching to Payload wrangler config..."
cp wrangler.payload.jsonc wrangler.jsonc

echo "🔨 Building Payload CMS backend..."
npm run build:payload

echo "🚀 Deploying Payload to Cloudflare Workers..."
npx opennextjs-cloudflare deploy

echo "🧹 Restoring Astro wrangler config..."
cp wrangler.astro.jsonc wrangler.jsonc

echo "✅ Payload deployed successfully!"
