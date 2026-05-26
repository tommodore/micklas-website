import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' | Micklas Admin',
      favicon: '/logo-micklas.png',
    },
  },
  collections: [],
  globals: [],
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
    outputFile: './payload-types.ts',
  },
})
