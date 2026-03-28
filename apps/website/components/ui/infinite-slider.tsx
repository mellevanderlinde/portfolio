'use client'

import type { ReactNode } from 'react'
import { animate, motion, useMotionValue } from 'motion/react'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  className,
  direction = 'horizontal',
  gap = 16,
  reverse = false,
  speed = 100,
  speedOnHover,
}: InfiniteSliderProps): ReactNode {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [ref, { height, width }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls
    const size = direction === 'horizontal' ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const distanceToTravel = Math.abs(to - from)
    const duration = distanceToTravel / currentSpeed

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to)
      const transitionDuration = remainingDistance / currentSpeed

      controls = animate(translation, [translation.get(), to], {
        duration: transitionDuration,
        ease: 'linear',
        onComplete: () => {
          setIsTransitioning(false)
          setKey(prevKey => prevKey + 1)
        },
      })
    }
    else {
      controls = animate(translation, [from, to], {
        duration,
        ease: 'linear',
        onRepeat: () => {
          translation.set(from)
        },
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: 'loop',
      })
    }

    return controls?.stop
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ])

  const hoverProps = speedOnHover
    ? {
        onHoverEnd: (): void => {
          setIsTransitioning(true)
          setCurrentSpeed(speed)
        },
        onHoverStart: (): void => {
          setIsTransitioning(true)
          setCurrentSpeed(speedOnHover)
        },
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: `${gap}px`,
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
