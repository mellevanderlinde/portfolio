import type { ReactNode } from 'react'
import { codeToHtml } from 'shiki'
import { z } from 'zod'

const CodeProps = z.object({
  children: z.object({
    props: z.object({
      children: z.string(),
      className: z.enum(['language-typescript', 'language-yaml']),
    }),
  }),
})

export async function Code(props: z.infer<typeof CodeProps>): Promise<ReactNode> {
  const { children, className } = CodeProps.parse(props).children.props
  const __html = await codeToHtml(children, {
    lang: className.replace('language-', ''),
    themes: {
      dark: 'github-dark-high-contrast',
      light: 'github-light',
    },
  })

  // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
  return <div dangerouslySetInnerHTML={{ __html }} />
}
