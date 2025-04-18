import Albums from '@/app/albums/page'
import BlogLayout from '@/app/blog/layout'
import { Footer } from '@/app/footer'
import { Header } from '@/app/header'
import RootLayout from '@/app/layout'
import Home from '@/app/page'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'
import { render } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

it('matches home', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it('matches root layout', () => {
  // Mock
  vi.mock('next/font/google', () => ({
    Geist: () => ({
      className: 'geist',
      variable: 'geist',
    }),
    Geist_Mono: () => ({
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
    observe: vi.fn(),
    disconnect: vi.fn(),
  }))
  vi.mock('@/lib/data', () => ({
    posts: [],
    albums: [{ id: 'id', name: 'Artist - Album' }],
    projects: [],
    jobs: [],
    links: [],
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
