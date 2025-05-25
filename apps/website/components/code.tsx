import type { ReactNode } from 'react'
import { highlight } from 'sugar-high'
import { z } from 'zod'

const CodeProps = z.object({
  children: z.string(),
  className: z.enum(['language-typescript', 'language-yaml']).optional(),
})

export function Code(props: z.infer<typeof CodeProps>): ReactNode {
  const { children, className } = CodeProps.parse(props)
  const code = className === 'language-typescript' ? highlight(children) : children
  // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
  return <code dangerouslySetInnerHTML={{ __html: code }} />
}
