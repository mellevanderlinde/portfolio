'use client'

import type { SpringOptions } from 'motion/react'
import type { ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

const SPRING_CONFIG = { damping: 4.1, mass: 0.2, stiffness: 26.7 }

export interface MagneticProps {
  children: ReactNode
  intensity?: number
  range?: number
  actionArea?: 'self' | 'parent' | 'global'
  springOptions?: SpringOptions
}

export function Magnetic({
  actionArea = 'self',
  children,
  intensity = 0.6,
  range = 100,
  springOptions = SPRING_CONFIG,
}: MagneticProps): ReactNode {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, springOptions)
  const springY = useSpring(y, springOptions)

  useEffect(() => {
    const calculateDistance = (e: MouseEvent): void => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY

        const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

        if (isHovered && absoluteDistance <= range) {
          const scale = 1 - absoluteDistance / range
          x.set(distanceX * intensity * scale)
          y.set(distanceY * intensity * scale)
        }
        else {
          x.set(0)
          y.set(0)
        }
      }
    }

    document.addEventListener('mousemove', calculateDistance)

    return (): void => {
      document.removeEventListener('mousemove', calculateDistance)
    }
  }, [ref, isHovered, intensity, range])

  useEffect(() => {
    if (actionArea === 'parent' && ref.current?.parentElement) {
      const parent = ref.current.parentElement

      const handleParentEnter = (): void => setIsHovered(true)
      const handleParentLeave = (): void => setIsHovered(false)

      parent.addEventListener('mouseenter', handleParentEnter)
      parent.addEventListener('mouseleave', handleParentLeave)

      return (): void => {
        parent.removeEventListener('mouseenter', handleParentEnter)
        parent.removeEventListener('mouseleave', handleParentLeave)
      }
    }
    else if (actionArea === 'global') {
      setIsHovered(true)
    }
    return undefined
  }, [actionArea])

  const handleMouseEnter = (): void => {
    if (actionArea === 'self') {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = (): void => {
    if (actionArea === 'self') {
      setIsHovered(false)
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={actionArea === 'self' ? handleMouseEnter : undefined}
      onMouseLeave={actionArea === 'self' ? handleMouseLeave : undefined}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  )
}
