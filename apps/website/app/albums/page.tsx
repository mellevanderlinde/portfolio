import { Metadata } from 'next'
import { ReactNode } from 'react'
import { AlbumSlider } from '@/components/album-slider'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Albums',
}

export default function Albums(): ReactNode {
  return <AlbumSlider />
}
