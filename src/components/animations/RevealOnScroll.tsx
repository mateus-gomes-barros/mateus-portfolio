import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'

export interface RevealOnScrollProps extends HTMLMotionProps<'div'> {
  delay?: number
  y?: number
  once?: boolean
}

export function RevealOnScroll({
  children,
  delay = 0,
  y = 20,
  once = true,
  className,
  ...props
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        margin: '-60px',
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}