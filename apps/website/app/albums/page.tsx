'use client'

import type { ReactNode } from 'react'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { transition, variantsContainer, variantsSection } from '@/lib/constants'
import { albums } from '@/lib/data'
import { motion } from 'motion/react'

function InfiniteAlbumSlider(): ReactNode {
  return (
    <InfiniteSlider speedOnHover={20} gap={24} className="mt-8">
      {albums.sort(() => Math.random() - 0.5) // Randomly shuffle the images
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

export default function Albums(): ReactNode {
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
            <a href="https://soundcloud.com/melledj" target="_blank" rel="noopener noreferrer">SoundCloud</a>
            .
          </p>
        </div>
        <InfiniteAlbumSlider />
      </motion.section>
    </motion.main>
  )
}
