'use client'

import type { SpringOptions } from 'motion/react'
import type { ReactNode, RefObject } from 'react'
import { cn } from '@/lib/utils'
import { motion, useScroll, useSpring } from 'motion/react'

interface ScrollProgressProps {
  className?: string
  springOptions?: SpringOptions
  containerRef?: RefObject<HTMLDivElement>
}

const defaultSpringOptions: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
}

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps): ReactNode {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: Boolean(containerRef?.current),
  })

  const scaleX = useSpring(scrollYProgress, {
    ...defaultSpringOptions,
    ...(springOptions ?? {}),
  })

  return (
    <motion.div
      className={cn('inset-x-0 top-0 h-1 origin-left', className)}
      style={{
        scaleX,
      }}
    />
  )
}
