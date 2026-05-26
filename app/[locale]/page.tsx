import Link from 'next/link'
import Image from 'next/image'
import Testimonials from '../../components/Testimonials'
import InstagramFeed from '../../components/InstagramFeed'

const locales = ['de', 'en', 'fr', 'it', 'es', 'pt', 'da', 'sv', 'no', 'me']

export default async function Home({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    return <div>Language not supported</div>
  }

  return (
    <main className="min-h-screen bg-white text-brand-navy">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="mb-8 flex justify-center">
            <Image 
              src="/logo-micklas.png" 
              alt="Micklas Travels Logo" 
              width={180} 
              height={180}
              className="drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            MICKLAS TRAVELS
          </h1>
          
          <p className="text-2xl md:text-3xl text-brand-teal mb-4 font-light">
            Travel Photography • 120k+ Community
          </p>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-white/90">
            Your Partner for Social Media Advertising
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/about`} 
              className="btn-primary text-lg px-10 py-4"
            >
              Meet Micklas
            </Link>
            <Link 
              href={`/${locale}/collaborate`} 
              className="btn-primary bg-white text-brand-navy hover:bg-brand-teal hover:text-white text-lg px-10 py-4"
            >
              Collaborate with Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="text-sm tracking-[4px] mb-2 text-white/70">SCROLL TO EXPLORE</div>
          <div className="w-px h-12 bg-white/50"></div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-brand-teal">120k+</div>
            <div className="mt-2 text-lg">Instagram Followers</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-teal">40+</div>
            <div className="mt-2 text-lg">Countries Visited</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-teal">250+</div>
            <div className="mt-2 text-lg">Travel Stories</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-teal">10</div>
            <div className="mt-2 text-lg">Languages</div>
          </div>
        </div>
      </section>

      {/* Featured Travels Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-widest mb-4">DESTINATIONS</div>
          <h2 className="text-5xl font-bold tracking-tight">Featured Travels</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-md mx-auto">
            Discover some of Micklas’ most memorable journeys
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="h-80 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-75">NORWAY • 2025</div>
                  <div className="text-3xl font-semibold">Lofoten Islands</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 line-clamp-3">
                  Breathtaking fjords, dramatic mountains, and the magical Northern Lights.
                </p>
                <div className="mt-4 text-brand-teal font-medium group-hover:underline">Read the full story →</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/travels`} className="inline-flex items-center text-lg font-medium text-brand-teal hover:underline">
            Explore all destinations →
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="bg-brand-navy text-white py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to work together?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto">
            Whether you’re a brand, tourism board, or hotel — let’s create something beautiful.
          </p>
          <Link 
            href={`/${locale}/collaborate`} 
            className="inline-block bg-brand-teal hover:bg-white hover:text-brand-navy text-white text-lg px-14 py-4 rounded-full font-medium transition-all"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t py-12 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Micklas Travels. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href={`/${locale}/impressum`} className="hover:text-brand-navy">Impressum</Link>
            <Link href={`/${locale}/privacy`} className="hover:text-brand-navy">Privacy Policy</Link>
          </div>
          <div>Built with ❤️ for the travel community</div>
        </div>
      </footer>
    </main>
  )
}
