import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, any> = {
  'lofoten-islands-norway': {
    title: 'Lofoten Islands: Where Mountains Meet the Sea',
    date: 'May 12, 2026',
    category: 'Norway',
    content: `...` // keep your existing content
  },
  // ... rest of the file
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params
  // ... rest of your code
}
