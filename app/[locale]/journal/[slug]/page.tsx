import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, any> = {
  'lofoten-islands-norway': {
    title: 'Lofoten Islands: Where Mountains Meet the Sea',
    date: 'May 12, 2026',
    category: 'Norway',
    content: `
      <p>The Lofoten Islands have been on my bucket list for years, and they did not disappoint. From the moment I arrived in Svolvær, I was completely captivated by the dramatic peaks rising straight from the sea.</p>
      
      <h2>The Midnight Sun Experience</h2>
      <p>Being there during the midnight sun period was magical. The light never truly disappeared — it just changed from golden to a soft twilight and back again. I spent many nights shooting until 2 or 3 in the morning.</p>
      
      <h2>Best Spots I Discovered</h2>
      <ul>
        <li><strong>Reinebringen</strong> — The most iconic view in Lofoten. The hike is steep but worth every step.</li>
        <li><strong>Utakleiv Beach</strong> — Quiet, dramatic, and perfect for sunset.</li>
        <li><strong>Nusfjord</strong> — A beautifully preserved fishing village that feels like stepping back in time.</li>
      </ul>
      
      <p>I’ll definitely be returning to Lofoten — there’s simply too much to explore in just one week.</p>
    `,
  },
  'patagonia-chile': {
    title: 'Patagonia: The End of the World',
    date: 'April 28, 2026',
    category: 'Chile',
    content: `
      <p>Patagonia is raw, wild, and incredibly humbling. I spent three weeks hiking through Torres del Paine National Park and the surrounding areas.</p>
      
      <h2>The Famous W Trek</h2>
      <p>The W Trek is one of the most popular hikes in Patagonia, and for good reason. The views of the granite towers are simply unforgettable.</p>
      
      <p>Pro tip: Go in shoulder season (March–April) if you want to avoid the crowds but still have good weather.</p>
    `,
  },
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-12">
        <Link href={`/${locale}/journal`} className="text-brand-teal hover:underline text-sm tracking-widest">
          ← BACK TO JOURNAL
        </Link>
      </div>

      <div className="mb-8">
        <div className="text-sm text-brand-teal tracking-[2px] mb-3">{post.category} • {post.date}</div>
        <h1 className="text-6xl font-bold tracking-tight leading-none">{post.title}</h1>
      </div>

      <div 
        className="prose prose-xl max-w-none text-gray-700 prose-headings:font-semibold prose-headings:text-brand-navy prose-a:text-brand-teal"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-12 border-t text-center">
        <p className="text-gray-500 mb-6">Enjoyed this story?</p>
        <Link href={`/${locale}/collaborate`} className="btn-primary">
          Work with Micklas
        </Link>
      </div>
    </div>
  )
}
