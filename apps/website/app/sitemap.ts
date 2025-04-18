import type { MetadataRoute } from 'next'
import { posts } from './data'

export const dynamic = 'force-static'

export const url = 'https://mellevanderlinde.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  lastModified.setUTCDate(lastModified.getUTCDate())
  lastModified.setUTCHours(11, 0, 0, 0)

  return [
    { url, lastModified },
    ...posts.map(post => ({ url: `${url}${post.link}`, lastModified })),
  ]
}
