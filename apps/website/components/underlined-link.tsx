import type { AnchorHTMLAttributes, ReactNode } from 'react'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  href: string
}

export function UnderlinedLink({ children, ...props }: LinkProps) {
  if (props.href.startsWith('http')) {
    props.target = '_blank'
    props.rel = 'noopener noreferrer'
  }
  return <u><a {...props}>{children}</a></u>
}
