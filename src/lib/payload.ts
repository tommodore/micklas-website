/**
 * Payload REST API client for Astro frontend.
 * Fetches content from the Payload CMS REST API at build/request time.
 * The Payload backend is deployed as a Cloudflare Worker alongside this Astro site.
 */

// In development, Payload runs on localhost:3000
// In production, it's a Cloudflare Worker (same domain, /api/*)
const API_BASE = import.meta.env.DEV
	? "http://localhost:3000"
	: import.meta.env.PUBLIC_PAYLOAD_URL || "";

export interface PayloadPost {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	content?: Record<string, unknown>;
	coverImage?: {
		url: string;
		alt: string;
		sizes?: Record<string, { url: string; width: number; height: number }>;
	};
	publishDate: string;
	status: "draft" | "published";
}

export interface PayloadMedia {
	id: string;
	url: string;
	alt: string;
	filename?: string;
	mimeType?: string;
	sizes?: Record<string, { url: string; width: number; height: number }>;
}

interface FindPostsParams {
	locale?: string;
	limit?: number;
	sort?: string;
	slug?: string;
}

interface PayloadResponse<T> {
	docs: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

/**
 * Fetch published posts from Payload.
 */
export async function getPosts(
	params: FindPostsParams = {},
): Promise<PayloadPost[]> {
	const { locale = "de", limit = 12, sort = "-publishDate", slug } = params;

	const searchParams = new URLSearchParams({
		where: JSON.stringify({
			status: { equals: "published" },
			...(slug ? { slug: { equals: slug } } : {}),
		}),
		sort,
		limit: String(limit),
		depth: "2",
	});

	const url = `${API_BASE}/api/posts?${searchParams.toString()}`;

	try {
		const res = await fetch(url, {
			headers: {
				"Accept-Language": locale,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			console.error(`Payload API error: ${res.status} ${res.statusText}`);
			return [];
		}

		const data: PayloadResponse<PayloadPost> = await res.json();
		return data.docs;
	} catch (error) {
		console.error("Failed to fetch posts from Payload:", error);
		return [];
	}
}

/**
 * Fetch a single post by slug.
 */
export async function getPostBySlug(
	slug: string,
	locale: string = "de",
): Promise<PayloadPost | null> {
	const posts = await getPosts({ locale, slug, limit: 1 });
	return posts[0] || null;
}

/**
 * Fetch media item by ID.
 */
export async function getMedia(
	id: string,
	locale: string = "de",
): Promise<PayloadMedia | null> {
	const url = `${API_BASE}/api/media/${id}?depth=1`;

	try {
		const res = await fetch(url, {
			headers: {
				"Accept-Language": locale,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) return null;

		return await res.json();
	} catch {
		return null;
	}
}
