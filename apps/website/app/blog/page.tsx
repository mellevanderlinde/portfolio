import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header1 } from '@app/components/header'
import Link from 'next/link'
import { formatDate, getBlogPosts } from '../lib/posts'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Blog',
}

export default function Page(): ReactNode {
  const blogPosts = getBlogPosts()

  return (
    <section>
      <Header1 title="Blog" />
      <div>
        {blogPosts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt)
                > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map(post => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-black dark:text-white tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
