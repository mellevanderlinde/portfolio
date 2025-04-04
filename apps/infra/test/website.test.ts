/* eslint-disable test/consistent-test-it */
import { describe, expect, test } from 'vitest'

describe('check if website is available', () => {
  const domain = 'mellevanderlinde.com'

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
  const root = 'https://mellevanderlinde.com'

  test('homepage', async () => {
    const result = await fetch(root)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('Melle van der Linde')
    expect(text).toMatch('My Portfolio')
    expect(text).toMatch(
      'I have an interest in cloud engineering, machine learning, technology and sustainability.',
    )
  })

  test('blog', async () => {
    const result = await fetch(`${root}/blog`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('Blog')
    expect(text).toMatch(
      'Connect GitHub Actions with AWS using OpenID Connect',
    )
    expect(text).toMatch('Sep 26, 2024')
  })

  test('blog post', async () => {
    const result = await fetch(`${root}/blog/openid-connect-aws-github`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch(
      'Connect GitHub Actions with AWS using OpenID Connect',
    )
    expect(text).toMatch('Sep 26, 2024')
    expect(text).toMatch(
      'A common pattern is to invoke AWS actions from a GitHub Actions workflow.',
    )
  })

  test('projects', async () => {
    const result = await fetch(`${root}/projects`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('Projects')
    expect(text).toMatch('Portfolio with CloudFront and Next.js')
    expect(text).toMatch(
      'AWS CDK project that serves this Next.js portfolio with Amazon CloudFront.',
    )
  })

  test('work', async () => {
    const result = await fetch(`${root}/work`)
    const text = await result.text()

    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(text).toMatch('Work')
    expect(text).toMatch('Cloud Engineer')
    expect(text).toMatch('PostNL')
    expect(text).toMatch(
      'In 2023 I joined the Cloud Center of Excellence (CCoE) team.',
    )
  })
})
