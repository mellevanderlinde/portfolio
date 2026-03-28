import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AlbumSlider } from '@/components/album-slider'

export const metadata: Metadata = {
  title: 'Albums',
}

export default function Albums(): ReactNode {
  return <AlbumSlider />
}
