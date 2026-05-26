import path from "path";
import { sqliteD1Adapter } from "@payloadcms/db-d1-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { r2Storage } from "@payloadcms/storage-r2";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { InstagramHighlights } from "./globals/InstagramHighlights";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Helper: create a mock D1 binding for build/CLI use
function createMockD1() {
  return {
    prepare: () => ({
      bind: () => ({
        run: async () => ({ results: [] as Record<string, unknown>[] }),
        raw: async () => [] as unknown[],
      }),
      run: async () => ({ results: [] as Record<string, unknown>[] }),
      raw: async () => [] as unknown[],
    }),
    batch: async () => [] as { results: Record<string, unknown>[] }[],
    dump: async () => Buffer.from([]),
    exec: async () => [] as Record<string, unknown>[],
  };
}

function createMockR2() {
  return {
    get: async () => null as any,
    put: async () => null as any,
    delete: async () => null as any,
    list: async () => ({ objects: [] as any[], truncated: false, delimitedPrefixes: [] as any[] }),
  };
}

// During next build and CLI, we must avoid loading workerd/Miniflare.
// Provide minimal mocks so the build can compile.
// We use a module-level flag + the PAYLOAD_DATABASE env to signal build mode.
const isBuildContext =
  process.env.NODE_ENV === "production" ||
  process.env.PAYLOAD_DATABASE === "cli";

let cloudflare: { env: { D1: any; R2: any } };

if (isBuildContext && !process.env.CLOUDFLARE_ENV) {
  // Build / CLI mode: use mock bindings
  cloudflare = {
    env: {
      D1: createMockD1(),
      R2: createMockR2(),
    },
  };
} else {
  // Cloudflare Workers or wrangler dev mode: use real bindings
  // To avoid bundling issues with workerd during build, we use a dynamic
  // import that the bundler can't resolve statically.
  const modName = "@opennextjs/cloudflare";
  const mod = await import(modName);
  const ctx = await mod.getCloudflareContext({ async: true });
  cloudflare = {
    env: {
      D1: ctx.env.D1,
      R2: ctx.env.R2,
    },
  };
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts],
  globals: [InstagramHighlights],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteD1Adapter({ binding: cloudflare.env.D1 }),
  localization: {
    locales: [
      { label: "Deutsch", code: "de" },
      { label: "English", code: "en" },
      { label: "Français", code: "fr" },
      { label: "Italiano", code: "it" },
      { label: "Español", code: "es" },
      { label: "Português", code: "pt" },
      { label: "Dansk", code: "da" },
      { label: "Svenska", code: "sv" },
      { label: "Norsk", code: "no" },
      { label: "Crnogorski", code: "me" },
    ],
    defaultLocale: "de",
    fallback: true,
  },
  plugins: [
    r2Storage({
      bucket: cloudflare.env.R2,
      collections: { media: true },
    }),
  ],
});
