import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
