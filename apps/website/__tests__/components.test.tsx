import { AlbumSlider } from '@/components/album-slider'
import { Code } from '@/components/code'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import { render } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

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

it('matches infinite slider', () => {
  // Mock
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
  }))

  // Test
  const { container } = render(<InfiniteSlider children={<></>} />)
  expect(container).toMatchSnapshot()
})

it('matches album slider', () => {
  // Mock
  vi.mock('@/lib/data', () => ({
    posts: [],
    albums: [{ id: 'id', name: 'Artist - Album' }],
    projects: [],
    jobs: [],
    links: [],
  }))

  // Test
  const { container } = render(<AlbumSlider />)
  expect(container).toMatchSnapshot()
})

it('matches code', () => {
  const { container } = render(
    <Code children={{ props: { children: 'const a = 1;', className: 'language-typescript' } }} />,
  )
  container.innerHTML = container.innerHTML.replace(/#[a-z0-9]{6}/gi, '#000000')
  expect(container).toMatchSnapshot()
})
