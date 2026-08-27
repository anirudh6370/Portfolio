import { motion } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

export default function Reveal({
  children,
  delay = 0,
  className = '',
  y = 24,
  onPointerEnter,
  onPointerLeave,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
  onPointerEnter?: (e: PointerEvent<HTMLDivElement>) => void
  onPointerLeave?: (e: PointerEvent<HTMLDivElement>) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  )
}
