import type { Transition, Variants } from 'motion/react'

export const url = 'https://mellevanderlinde.com'

export const variantsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const variantsSection: Variants = {
  hidden: { filter: 'blur(8px)', opacity: 0, y: 20 },
  visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

export const transition: Transition = {
  duration: 0.3,
}
