'use client'
import type { SpringOptions } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion, useSpring, useTransform } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface SpotlightProps {
  className?: string
  size?: number
  springOptions?: SpringOptions
}

const defaultSpringOptions: SpringOptions = { bounce: 0 }

export function Spotlight({
  className,
  size = 200,
  springOptions = defaultSpringOptions,
}: SpotlightProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, x => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, y => `${y - size / 2}px`)

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement
      if (parent) {
        parent.style.position = 'relative'
        parent.style.overflow = 'hidden'
        // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
        setParentElement(parent)
      }
    }
  }, [])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement)
        return
      const { left, top } = parentElement.getBoundingClientRect()
      mouseX.set(event.clientX - left)
      mouseY.set(event.clientY - top)
    },
    [mouseX, mouseY, parentElement],
  )

  useEffect(() => {
    if (!parentElement)
      return

    parentElement.addEventListener('mousemove', handleMouseMove)
    parentElement.addEventListener('mouseenter', () => setIsHovered(true))
    parentElement.addEventListener('mouseleave', () => setIsHovered(false))

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove)
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true))
      parentElement.removeEventListener('mouseleave', () => setIsHovered(false))
    }
  }, [parentElement, handleMouseMove])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
        'from-zinc-50 via-zinc-100 to-zinc-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  )
}
