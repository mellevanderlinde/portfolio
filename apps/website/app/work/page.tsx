import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header1 } from '@components/header'
import { jobs } from './work-data'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Work',
}

export default function Page(): ReactNode {
  return (
    <section>
      <Header1 title="Work" />
      <div className="space-y-6">
        {jobs.map(job => (
          <div className="flex flex-col" key={job.title}>
            <div className="w-full flex justify-between items-baseline">
              <span className="text-black dark:text-white font-medium tracking-tight">
                {job.title}
                {' '}
                @
                {' '}
                {job.company}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {job.start}
                {' '}
                -
                {' '}
                {job.end ?? 'Present'}
              </span>
            </div>
            {job.description.map(desc => (
              <p
                className="prose prose-neutral dark:prose-invert pt-3"
                key={desc}
              >
                {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
