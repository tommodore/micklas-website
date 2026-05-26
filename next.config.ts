import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// This Next.js app only serves the Payload admin panel and API
	// The public frontend is built with Astro and deployed separately
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	serverExternalPackages: [
		"jose",
		"pg-native",
		"@payloadcms/db-d1-sqlite",
		"drizzle-kit",
		"drizzle-orm",
	],
};

export default withPayload(nextConfig);
