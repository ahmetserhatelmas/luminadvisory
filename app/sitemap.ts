import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { locales } from '@/lib/messages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://luminsustainability.com'
  const pages = locales.flatMap((locale) => [
    { url: `${base}/${locale}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}/${locale}/imprint`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/${locale}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...articles.map((article) => ({
      url: `${base}/${locale}/insights/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ])
  return pages
}
