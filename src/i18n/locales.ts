import type { GetStaticPathsResult } from "astro";

const locales = [
	"de",
	"en",
	"fr",
	"it",
	"es",
	"pt",
	"da",
	"sv",
	"no",
	"me",
] as const;

export type Locale = (typeof locales)[number];

export function getAllLocales(): Locale[] {
	return [...locales];
}

export function getLocaleStaticPaths(): GetStaticPathsResult {
	return locales.map((locale) => ({
		params: { locale },
	}));
}
