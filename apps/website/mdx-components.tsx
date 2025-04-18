import type { MDXComponents } from 'mdx/types'
import type { ReactNode } from 'react'
import Link from 'next/link'

function customLink(props: { href: string, children: ReactNode }): ReactNode {
  const href = props.href
  if (href.startsWith('/')) {
    return <Link {...props}>{props.children}</Link>
  }
  if (href.startsWith('#')) {
    return <a {...props} />
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// eslint-disable-next-line react-hooks-extra/no-unnecessary-use-prefix
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, a: customLink }
}
