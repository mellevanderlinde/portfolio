import Blog from '@app/blog/page'
import NotFound from '@app/not-found'
import Home from '@app/page'
import Projects from '@app/projects/page'
import Work from '@app/work/page'
import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

it('matches home', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it('matches blog', () => {
  const { container } = render(<Blog />)
  expect(container).toMatchSnapshot()
})

it('matches projects', () => {
  const { container } = render(<Projects />)
  expect(container).toMatchSnapshot()
})

it('matches work', () => {
  const { container } = render(<Work />)
  expect(container).toMatchSnapshot()
})

it('matches not found', () => {
  const { container } = render(<NotFound />)
  expect(container).toMatchSnapshot()
})
