import Link from 'next/link'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-white text-brand-navy">
        {/* Top Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo-micklas.png" alt="Micklas" className="h-9 w-9" />
              <div className="font-semibold text-xl tracking-tight">Micklas Travels</div>
            </Link>

            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <Link href="/about" className="hover:text-brand-teal transition-colors">About</Link>
              <Link href="/travels" className="hover:text-brand-teal transition-colors">Travels</Link>
              <Link href="/journal" className="hover:text-brand-teal transition-colors">Journal</Link>
              <Link href="/collaborate" className="hover:text-brand-teal transition-colors">Collaborate</Link>
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>

        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}