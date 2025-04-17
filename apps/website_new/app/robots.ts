import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const url = 'https://mellevanderlinde.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${url}/sitemap.xml`,
  }
}
