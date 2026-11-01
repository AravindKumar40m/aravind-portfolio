import { m, useReducedMotion } from 'motion/react'

// Fades and lifts its children into view once, when they scroll on screen.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = m[as] ?? m.div
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
