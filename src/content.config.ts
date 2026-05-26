import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		locale: z.enum(["de", "en", "fr", "it", "es", "pt", "da", "sv", "no", "me"]).default("de"),
		publishDate: z.coerce.date(),
		excerpt: z.string().optional(),
		coverImage: z.string().optional(),
		tags: z.array(z.string()).default(["Travel"]),
		draft: z.boolean().default(true),
	}),
});

export const collections = { journal };
