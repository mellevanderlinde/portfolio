'use client'
import type { Transition } from 'motion/react'
import type { ReactElement, ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Children,
  cloneElement,
  useEffect,
  useId,
  useState,
} from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>
  defaultValue?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string
  transition?: Transition
  enableHover?: boolean
}

export function AnimatedBackground({
  children,
  className,
  defaultValue,
  enableHover = false,
  onValueChange,
  transition,
}: AnimatedBackgroundProps): ReactNode {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  const handleSetActiveId = (id: string | null): void => {
    setActiveId(id)

    if (onValueChange) {
      onValueChange(id)
    }
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id']

    const interactionProps = enableHover
      ? {
          onMouseEnter: (): void => handleSetActiveId(id),
          onMouseLeave: (): void => handleSetActiveId(null),
        }
      : {
          onClick: (): void => handleSetActiveId(id),
        }

    return cloneElement(
      child,
      {
        'className': cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        'key': index,
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-10">{child.props.children}</div>
      </>,
    )
  })
}
