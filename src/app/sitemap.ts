import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.weepingwillowco.com'
  return [
    { url: base,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1   },
    { url: `${base}/honeysuckle`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/where-to-buy`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/our-story`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
  ]
}
