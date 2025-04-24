import type { ReactNode } from 'react'
import ts from '@shikijs/langs/typescript'
import yaml from '@shikijs/langs/yaml'
import githubDarkHighContrast from '@shikijs/themes/github-dark-high-contrast'
import githubLight from '@shikijs/themes/github-light'
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki'
import { z } from 'zod'

const shiki = createHighlighterCoreSync({
  themes: [githubLight, githubDarkHighContrast],
  langs: [ts, yaml],
  engine: createJavaScriptRegexEngine(),
})

const CodeProps = z.object({
  children: z.object({
    props: z.object({
      children: z.string(),
      className: z.enum(['language-typescript', 'language-yaml']),
    }),
  }),
})

export function Code(props: z.infer<typeof CodeProps>): ReactNode {
  const { children, className } = CodeProps.parse(props).children.props
  const __html = shiki.codeToHtml(children, {
    lang: className.replace('language-', ''),
    themes: {
      dark: 'github-dark-high-contrast',
      light: 'github-light',
    },
  })

  // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
  return <div dangerouslySetInnerHTML={{ __html }} />
}
