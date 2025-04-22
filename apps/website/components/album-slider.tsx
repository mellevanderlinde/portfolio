'use client'

import type { ReactNode } from 'react'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { UnderlinedLink } from '@/components/underlined-link'
import { transition, variantsContainer, variantsSection } from '@/lib/constants'
import { albums } from '@/lib/data'
import { motion } from 'motion/react'

function InfiniteAlbumSlider(): ReactNode {
  return (
    <InfiniteSlider speedOnHover={20} gap={24} className="mt-8">
      {albums.sort(() => Math.random() - 0.5) // Randomly shuffle albums
        .map(album => (
          <img
            key={album.id}
            src={`https://i.scdn.co/image/${album.id}`}
            alt={album.name}
            className="aspect-square w-[120px] rounded-[4px]"
          />
        ))}
    </InfiniteSlider>
  )
}

export function AlbumSlider(): ReactNode {
  return (
    <motion.main
      className="space-y-24"
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={variantsSection}
        transition={transition}
        className="mt-18"
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            These are a few of my favorite albums. You can also find me on
            {' '}
            <UnderlinedLink href="https://soundcloud.com/melledj">SoundCloud</UnderlinedLink>
            .
          </p>
        </div>
        <InfiniteAlbumSlider />
      </motion.section>
    </motion.main>
  )
}
