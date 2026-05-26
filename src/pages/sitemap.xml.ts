import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const locales = ["de", "en", "fr", "it", "es", "pt", "da", "sv", "no", "me"];
const pages = [
	"",
	"about",
	"travels",
	"journal",
	"collaborate",
	"merch",
	"trainings",
	"pictures",
	"impressum",
	"privacy",
];
const SITE = "https://micklas-website.pages.dev";

export const GET: APIRoute = async () => {
	const journalEntries = await getCollection(
		"journal",
		({ data }) => data.draft === false,
	);

	let urls = "";

	// Static pages for each locale
	for (const locale of locales) {
		for (const page of pages) {
			const path = page ? `/${locale}/${page}` : `/${locale}`;
			urls += `
	<url>
		<loc>${SITE}${path}/</loc>
		<changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
		<priority>${page === "" ? "1.0" : "0.8"}</priority>
	</url>`;
		}
	}

	// Journal posts
	for (const post of journalEntries) {
		urls += `
	<url>
		<loc>${SITE}/${post.data.locale}/journal/${post.data.slug}/</loc>
		<lastmod>${post.data.publishDate.toISOString().split("T")[0]}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>`;
	}

	// Root redirect page
	urls += `
	<url>
		<loc>${SITE}/</loc>
		<priority>0.9</priority>
	</url>`;

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
	</urlset>`,
		{
			status: 200,
			headers: { "Content-Type": "application/xml" },
		},
	);
};
