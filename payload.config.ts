import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' | Micklas Admin',
      favicon: '/logo-micklas.png',
    },
  },
  collections: [Posts, Media, Pages],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  localization: {
    locales: [
      { label: 'Deutsch', code: 'de' },
      { label: 'English', code: 'en' },
      { label: 'Français', code: 'fr' },
      { label: 'Italiano', code: 'it' },
      { label: 'Español', code: 'es' },
      { label: 'Português', code: 'pt' },
      { label: 'Dansk', code: 'da' },
      { label: 'Svenska', code: 'sv' },
      { label: 'Norsk', code: 'no' },
      { label: 'Crnogorski', code: 'me' },
    ],
    defaultLocale: 'de',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  plugins: [],
})