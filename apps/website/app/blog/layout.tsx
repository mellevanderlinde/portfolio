'use client'
import type { ReactNode } from 'react'
import { Main } from '@/components/main'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export default function LayoutBlogPost({
  children,
}: {
  children: ReactNode
}): ReactNode {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      <Main>
        {children}
      </Main>
    </>
  )
}
