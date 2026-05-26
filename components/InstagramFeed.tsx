import Image from 'next/image'

interface InstagramFeedProps {
  title?: string
  subtitle?: string
}

export default function InstagramFeed({ 
  title = "Follow @micklas on Instagram", 
  subtitle = "Latest moments from my travels"
}: InstagramFeedProps) {
  
  const displayPosts = [
    { image: { url: '/logo-micklas.png' }, caption: 'Midnight sun in Lofoten' },
    { image: { url: '/logo-micklas.png' }, caption: 'Torres del Paine at sunrise' },
    { image: { url: '/logo-micklas.png' }, caption: 'Northern Lights in Iceland' },
    { image: { url: '/logo-micklas.png' }, caption: 'Patagonia hiking adventure' },
    { image: { url: '/logo-micklas.png' }, caption: 'Sahara desert sunset' },
    { image: { url: '/logo-micklas.png' }, caption: 'Kyoto autumn colors' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-teal"></div>
            <span className="text-brand-teal text-sm tracking-[3px]">INSTAGRAM</span>
            <div className="w-8 h-px bg-brand-teal"></div>
          </div>
          <h2 className="text-5xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
          <a 
            href="https://instagram.com/micklas" 
            target="_blank" 
            className="inline-block mt-4 text-brand-teal hover:underline font-medium"
          >
            @micklas on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayPosts.map((post, index) => (
            <a 
              key={index} 
              href="https://instagram.com/micklas" 
              target="_blank"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 block"
            >
              <Image 
                src={post.image.url} 
                alt={post.caption} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                {post.caption}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
