import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header1 } from 'app/components/header'
import { projects } from './project-data'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Projects',
}

export default function Page(): ReactNode {
  return (
    <section>
      <Header1 title="Projects" />
      <div className="space-y-6">
        {projects.map(project => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
