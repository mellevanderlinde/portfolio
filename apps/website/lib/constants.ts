import { Transition, Variants } from 'motion/react'

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
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const transition: Transition = {
  duration: 0.3,
}
