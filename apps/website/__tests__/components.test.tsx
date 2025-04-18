import { AnimatedBackground } from '@/components/ui/animated-background'
import { Magnetic } from '@/components/ui/magnetic'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Spotlight } from '@/components/ui/spotlight'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

it('matches animated background', () => {
  const { container } = render(<AnimatedBackground children={<></>} />)
  expect(container).toMatchSnapshot()
})

it('matches magnetic', () => {
  const { container } = render(<Magnetic children={<></>} />)
  expect(container).toMatchSnapshot()
})

it ('matches scroll progress', () => {
  const { container } = render(<ScrollProgress />)
  expect(container).toMatchSnapshot()
})

it('matches spotlight', () => {
  const { container } = render(<Spotlight />)
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
