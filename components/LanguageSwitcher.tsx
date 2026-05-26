'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const languages = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'da', label: 'DA' },
  { code: 'sv', label: 'SV' },
  { code: 'no', label: 'NO' },
  { code: 'me', label: 'ME' },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'de'

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((lang, index) => (
        <Link
          key={lang.code}
          href={pathname.replace(`/${currentLocale}`, `/${lang.code}`)}
          className={`px-2 py-1 rounded transition-all ${
            currentLocale === lang.code 
              ? 'bg-brand-teal text-white font-medium' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  )
}