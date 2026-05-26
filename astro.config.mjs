import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	output: "server", // SSR for dynamic content from Payload
	adapter: cloudflare({
		imageService: "passthrough",
		platformProxy: {
			enabled: true,
		},
	}),
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			// Ensure Astro can resolve project root imports
			alias: {
				"@": "/",
			},
		},
	},
	i18n: {
		defaultLocale: "de",
		locales: ["de", "en", "fr", "it", "es", "pt", "da", "sv", "no", "me"],
		routing: {
			prefixDefaultLocale: true, // /de/ for default, /en/ for English, etc.
		},
	},
});
