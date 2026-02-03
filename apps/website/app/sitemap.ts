import { MetadataRoute } from 'next'
import { url } from '@/lib/constants'
import { posts } from '../lib/data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  lastModified.setUTCDate(lastModified.getUTCDate())
  lastModified.setUTCHours(11, 0, 0, 0)

  return [
    { url, lastModified },
    ...posts.map(post => ({ url: `${url}${post.link}`, lastModified })),
  ]
}
