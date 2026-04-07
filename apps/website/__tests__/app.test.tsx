import type { Album } from '@/lib/interfaces'
import { render } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import Albums from '@/app/albums/page'
import BlogLayout from '@/app/blog/layout'
import { Footer } from '@/app/footer'
import { Header } from '@/app/header'
import RootLayout from '@/app/layout'
import Home from '@/app/page'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'

it('matches home', () => {
  const { container } = render(<Home />)

  expect(container).toMatchSnapshot()
})

it('matches root layout', () => {
  // Mock
  vi.mock('next/font/google', () => ({
    Geist: (): { className: string, variable: string } => ({
      className: 'geist',
      variable: 'geist',
    }),
    Geist_Mono: (): { className: string, variable: string } => ({
      className: 'geist-mono',
      variable: 'geist-mono',
    }),
  }))
  Object.defineProperty(window, 'matchMedia', {
    value: vi.fn().mockImplementation(() => ({
      addListener: vi.fn(),
    })),
  })

  // Test
  const { container } = render(<RootLayout children={<></>} />)

  expect(container).toMatchSnapshot()
})

it('matches footer', () => {
  const { container } = render(<Footer />)

  expect(container).toMatchSnapshot()
})

it('matches header', () => {
  const { container } = render(<Header />)

  expect(container).toMatchSnapshot()
})

it('matches blog layout', () => {
  const { container } = render(<BlogLayout children={<></>} />)

  expect(container).toMatchSnapshot()
})

it('matches albums page', () => {
  // Mock
  globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
  }))
  vi.mock('@/lib/data', () => ({
    albums: [{ albumId: 'album-id', coverId: 'cover-id', name: 'Artist - Album' }] satisfies Album[],
    jobs: [],
    links: [],
    posts: [],
    projects: [],
  }))

  // Test
  const { container } = render(<Albums />)

  expect(container).toMatchSnapshot()
})

it('matches robots', () => {
  const result = robots()

  expect(result).toMatchSnapshot()
})

it('matches sitemap', () => {
  const result = sitemap()
  // Change to static date for snapshot
  for (const item of result) {
    item.lastModified = '2024-01-01T00:00:00.000Z'
  }

  expect(result).toMatchSnapshot()
})
