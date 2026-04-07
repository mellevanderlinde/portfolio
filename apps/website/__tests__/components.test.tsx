import type { Album } from '@/lib/interfaces'
import { render } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { AlbumSlider } from '@/components/album-slider'
import { MagneticLink } from '@/components/magnetic-link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'

it('matches animated background', () => {
  const { container } = render(<AnimatedBackground children={<></>} />)

  expect(container).toMatchSnapshot()
})

it('matches scroll progress', () => {
  const { container } = render(<ScrollProgress />)

  expect(container).toMatchSnapshot()
})

it('matches text effect', () => {
  const { container } = render(<TextEffect children="" />)

  expect(container).toMatchSnapshot()
})

it('matches text loop', () => {
  const { container } = render(<TextLoop children={[]} />)

  expect(container).toMatchSnapshot()
})

it('matches magnetic link', () => {
  const { container } = render(<MagneticLink children={<></>} link="/example" />)

  expect(container).toMatchSnapshot()
})

it('matches infinite slider', () => {
  // Mock
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
  }))

  // Test
  const { container } = render(<InfiniteSlider children={<></>} />)

  expect(container).toMatchSnapshot()
})

it('matches album slider', () => {
  // Mock
  vi.mock('@/lib/data', () => ({
    albums: [{ albumId: 'album-id', coverId: 'cover-id', name: 'Artist - Album' }] satisfies Album[],
    jobs: [],
    links: [],
    posts: [],
    projects: [],
  }))

  // Test
  const { container } = render(<AlbumSlider />)

  expect(container).toMatchSnapshot()
})
