#!/usr/bin/env bash
# build-pages.sh
# Post-process Astro build output for Cloudflare Pages compatibility.
# Run after `astro build`.
# Usage: npm run build:pages

set -euo pipefail

echo "📁 Copying static assets to dist/ root..."
cp -r dist/client/. dist/
rm -rf dist/client

echo "📄 Creating Pages _worker.js..."
cat >dist/_worker.js <<'EOF'
import handler from "./server/entry.mjs";
export default handler;
EOF

echo "✅ Build ready for Cloudflare Pages!"
echo "   Deploy with: wrangler pages deploy dist/"
echo "   Or set Pages build output to: dist/"
