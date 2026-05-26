/**
 * Payload REST API client.
 *
 * This is a fetch-based client for the Payload CMS REST API.
 * It runs on Cloudflare Workers (no Node.js server dependency).
 *
 * Payload CMS itself runs on Railway/Render as a separate Node.js server.
 * The frontend on Cloudflare Pages fetches data from it at runtime.
 */

const PAYLOAD_API_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export interface Post {
	id: string;
	title: string;
	slug: string;
	excerpt?: string;
	content?: any;
	coverImage?: { url: string; alt?: string };
	publishDate: string;
	status: "draft" | "published";
	locale?: string;
}

export interface PostsResponse {
	docs: Post[];
	totalDocs: number;
	totalPages: number;
	page: number;
}

export interface PostResponse {
	doc: Post;
}

/**
 * Fetch published posts from the Payload REST API.
 * Falls back to empty array if the API is unavailable.
 */
export async function getPosts(
	locale: string,
	options?: { limit?: number },
): Promise<Post[]> {
	try {
		const limit = options?.limit || 12;
		const url = `${PAYLOAD_API_URL}/api/posts?locale=${locale}&limit=${limit}&sort=-publishDate&where[status][equals]=published&depth=1`;

		const res = await fetch(url, {
			next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			console.warn(`Payload API returned ${res.status} for posts`);
			return [];
		}

		const data: PostsResponse = await res.json();
		return data.docs || [];
	} catch (error) {
		console.error("Failed to fetch posts from Payload API:", error);
		return [];
	}
}

/**
 * Fetch a single post by slug from the Payload REST API.
 * Returns null if not found or unavailable.
 */
export async function getPostBySlug(
	slug: string,
	locale: string,
): Promise<Post | null> {
	try {
		const url = `${PAYLOAD_API_URL}/api/posts?locale=${locale}&where[slug][equals]=${slug}&where[status][equals]=published&depth=1&limit=1`;

		const res = await fetch(url, {
			next: { revalidate: 60 },
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			console.warn(`Payload API returned ${res.status} for post: ${slug}`);
			return null;
		}

		const data: PostsResponse = await res.json();
		return data.docs?.[0] || null;
	} catch (error) {
		console.error(`Failed to fetch post '${slug}' from Payload API:`, error);
		return null;
	}
}
