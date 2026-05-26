import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	output: "static", // Static site — no server needed
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/",
			},
		},
	},
	i18n: {
		defaultLocale: "de",
		locales: ["de", "en", "fr", "it", "es", "pt", "da", "sv", "no", "me"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
