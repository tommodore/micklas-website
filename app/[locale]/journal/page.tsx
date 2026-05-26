import Link from 'next/link'
import Image from 'next/image'

const journalPosts = [
  {
    slug: 'lofoten-islands-norway',
    title: 'Lofoten Islands: Where Mountains Meet the Sea',
    excerpt: 'A week exploring the dramatic landscapes of Northern Norway during the midnight sun.',
    date: 'May 12, 2026',
    image: '/logo-micklas.png',
    category: 'Norway',
  },
  {
    slug: 'patagonia-chile',
    title: 'Patagonia: The End of the World',
    excerpt: 'Hiking through Torres del Paine and chasing the famous Patagonian winds.',
    date: 'April 28, 2026',
    image: '/logo-micklas.png',
    category: 'Chile',
  },
  {
    slug: 'iceland-winter-adventure',
    title: 'Iceland in Winter: A Frozen Fairytale',
    excerpt: 'Chasing the Northern Lights and exploring ice caves in the land of fire and ice.',
    date: 'March 15, 2026',
    image: '/logo-micklas.png',
    category: 'Iceland',
  },
]

export default function JournalPage({ params }: { params: { locale: string } }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal text-sm tracking-[3px] mb-4">TRAVEL JOURNAL</div>
        <h1 className="text-6xl font-bold tracking-tight mb-6">Stories from the Road</h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Behind-the-scenes moments, travel tips, and honest reflections from my journeys around the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {journalPosts.map((post, index) => (
          <Link 
            key={index} 
            href={`/${params.locale}/journal/${post.slug}`}
            className="group block overflow-hidden rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80 bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 text-brand-navy text-xs px-4 py-1 rounded-full font-medium tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-sm opacity-75 mb-2">{post.date}</div>
                <h3 className="text-3xl font-semibold leading-tight group-hover:text-brand-teal transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 line-clamp-3 text-[15px] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center text-brand-teal font-medium group-hover:underline">
                Read the full story 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16 text-sm text-gray-500">
        More stories coming soon. Follow along on{' '}
        <a href="https://instagram.com/micklas" target="_blank" className="text-brand-teal hover:underline">@micklas</a>
      </div>
    </div>
  )
}