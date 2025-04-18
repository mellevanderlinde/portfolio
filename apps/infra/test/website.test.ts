/* eslint-disable test/consistent-test-it */
import { describe, expect, test } from 'vitest'

const domain = 'mellevanderlinde.com'

describe('check if website is available', () => {
  test('http', async () => {
    const result = await fetch(`http://${domain}`)
    expect(result.status).toBe(200)
  })

  test('https', async () => {
    const result = await fetch(`https://${domain}`)
    expect(result.status).toBe(200)
  })

  test('http www', async () => {
    const result = await fetch(`http://www.${domain}`)
    expect(result.status).toBe(200)
  })

  test('https www', async () => {
    const result = await fetch(`https://www.${domain}`)
    expect(result.status).toBe(200)
  })
})

describe('check if pages are available', () => {
  const root = `https://${domain}`

  test('homepage', async () => {
    const result = await fetch(root)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')

    // Header
    expect(text).toMatch('Melle van der Linde')
    expect(text).toMatch('Cloud Engineer')

    // About
    expect(text).toMatch('About')
    expect(text).toMatch(
      'Interested in software engineering, cloud, machine learning, technology and sustainability.',
    )

    // Projects
    expect(text).toMatch('Selected Projects')
    expect(text).toMatch('Portfolio with CloudFront and Next.js')
    expect(text).toMatch(
      'Portfolio with CloudFront and Next.js',
    )
    expect(text).toMatch('Project serving this website.')

    // Work
    expect(text).toMatch('Work Experience')
    expect(text).toMatch('Cloud Engineer')
    expect(text).toMatch('PostNL')

    // Blog
    expect(text).toMatch('Blog')
    expect(text).toMatch('Connect GitHub Actions with AWS using OpenID Connect')

    // Connect
    expect(text).toMatch('Connect')
    expect(text).toMatch('Feel free to check out my projects on GitHub or contact me on LinkedIn.')
  })

  test('blog', async () => {
    const result = await fetch(`${root}/blog/openid-connect-aws-github`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('Connect GitHub Actions with AWS using OpenID Connect')
    expect(text).toMatch('A common pattern is to invoke AWS actions from a GitHub Actions workflow.')
  })

  test('albums', async () => {
    const result = await fetch(`${root}/albums`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('These are a few of my favorite albums.')
    expect(text).toMatch('Kaytranada - 99.9%')
    expect(text).toMatch('Toco - Outro Lugar')
  })
})
