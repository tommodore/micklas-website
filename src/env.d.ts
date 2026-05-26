/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Astro-compatible import.meta.env types
interface ImportMetaEnv {
	readonly DEV: boolean;
	readonly PROD: boolean;
	readonly PUBLIC_PAYLOAD_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
