'use client'
import type { AnimatePresenceProps, Transition, Variants } from 'motion/react'
import type { ReactNode } from 'react'
import {
  AnimatePresence,
  motion,
} from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TextLoopProps {
  children: ReactNode[]
  className?: string
  interval?: number
  transition?: Transition
  variants?: Variants
  onIndexChange?: (index: number) => void
  trigger?: boolean
  mode?: AnimatePresenceProps['mode']
}

const defaultTransition: Transition = { duration: 0.3 }

export function TextLoop({
  children,
  className,
  interval = 2,
  mode = 'popLayout',
  onIndexChange,
  transition = defaultTransition,
  trigger = true,
  variants,
}: TextLoopProps): ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = [...children]

  useEffect(() => {
    if (!trigger) {
      return
    }

    const intervalMs = interval * 1000
    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, intervalMs)
    return (): void => clearInterval(timer)
  }, [items.length, interval, onIndexChange, trigger])

  const motionVariants: Variants = {
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    initial: { opacity: 0, y: 20 },
  }

  return (
    <div className={cn('relative inline-block whitespace-nowrap', className)}>
      <AnimatePresence mode={mode} initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
