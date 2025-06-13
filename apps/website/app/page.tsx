'use client'

import type { ReactNode } from 'react'
import { MagneticLink } from '@/components/magnetic-link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { UnderlinedLink } from '@/components/underlined-link'
import { transition, variantsContainer, variantsSection } from '@/lib/constants'
import { motion } from 'motion/react'
import Link from 'next/link'
import {
  jobs,
  links,
  posts,
  projects,
} from '../lib/data'

export default function Personal(): ReactNode {
  return (
    <motion.main
      className="space-y-24"
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={variantsSection}
        transition={transition}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            I work as AWS Cloud Engineer at PostNL in the CCoE (Cloud Center of Excellence) team.
            I'm interested in software engineering, cloud, machine learning, technology and sustainability.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transition}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map(project => (
            <div key={project.name} className="space-y-2">
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transition}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {posts.map(post => (
              <Link
                key={post.id}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.id}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transition}
      >
        <h3 className="mb-5 text-lg font-medium">Work</h3>
        <div className="flex flex-col space-y-2">
          {jobs.map(job => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start}
                    {' '}
                    -
                    {' '}
                    {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={variantsSection}
        transition={transition}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me on LinkedIn. Or see which
          {' '}
          <UnderlinedLink href="/albums">albums</UnderlinedLink>
          {' '}
          I listen to.
        </p>
        <div className="flex items-center justify-start space-x-3">
          {links.map(link => (
            <MagneticLink key={link.name} link={link.link}>
              {link.name}
            </MagneticLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
