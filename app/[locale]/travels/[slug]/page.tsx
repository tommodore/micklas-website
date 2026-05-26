import Link from 'next/link'
import { notFound } from 'next/navigation'

const destinations: Record<string, any> = {
  'lofoten-norway': {
    title: 'Lofoten Islands',
    country: 'Norway',
    year: '2026',
    description: 'Dramatic peaks rising straight from the Norwegian Sea during the midnight sun.',
    longDescription: 'The Lofoten archipelago is one of the most spectacular places on Earth. Steep mountains, sheltered bays, and traditional fishing villages create a landscape that feels both wild and welcoming.',
  },
  'patagonia-chile': {
    title: 'Torres del Paine',
    country: 'Chile',
    year: '2026',
    description: 'The iconic granite towers of Patagonia in Torres del Paine National Park.',
    longDescription: 'One of the most famous national parks in the world. Home to the famous W Trek and some of the most dramatic mountain scenery on the planet.',
  },
}

export default function DestinationPage({ params }: { params: { locale: string; slug: string } }) {
  const dest = destinations[params.slug]

  if (!dest) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-8">
        <Link href={`/${params.locale}/travels`} className="text-brand-teal hover:underline">
          ← Back to all travels
        </Link>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-4 text-sm tracking-widest text-brand-teal mb-4">
          <span>{dest.country}</span>
          <span>•</span>
          <span>{dest.year}</span>
        </div>
        <h1 className="text-7xl font-bold tracking-tighter mb-8">{dest.title}</h1>
        <p className="text-2xl text-gray-600 max-w-2xl">{dest.description}</p>
      </div>

      <div className="prose prose-xl max-w-none text-gray-700">
        <p>{dest.longDescription}</p>
        <p>More detailed content and photo galleries will be added here once connected to Payload CMS.</p>
      </div>

      <div className="mt-16 pt-12 border-t">
        <Link href={`/${params.locale}/collaborate`} className="btn-primary">
          Book Micklas for your next project →
        </Link>
      </div>
    </div>
  )
}