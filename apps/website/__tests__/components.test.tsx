import Footer from '@app/components/footer'
import { Header1 } from '@app/components/header'
import { Navbar } from '@app/components/nav'
import { getBlogPosts } from '@app/lib/posts'
import robots from '@app/robots'
import sitemap from '@app/sitemap'
import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

it('matches footer', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})

it('matches header', () => {
  const { container } = render(<Header1 title="Test" />)
  expect(container).toMatchSnapshot()
})

it('matches navbar', () => {
  const { container } = render(<Navbar />)
  expect(container).toMatchSnapshot()
})

it('matches posts', () => {
  const result = getBlogPosts()
  expect(result).toMatchSnapshot()
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
