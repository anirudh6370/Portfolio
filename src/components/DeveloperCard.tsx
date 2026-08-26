import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Developer } from '../data/developers'

export default function DeveloperCard({
  dev,
  onOpen,
}: {
  dev: Developer
  onOpen: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative w-full text-left rounded-3xl glass glass-hover p-7 overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-magenta-500 font-display text-lg font-semibold text-ink-900">
          {dev.avatarInitials}
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/50">
          {dev.yearsExperience}+ yrs
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-xl font-semibold">{dev.name}</h3>
      <p className="relative text-sm text-cyan-400">{dev.role}</p>
      <p className="relative mt-3 text-sm text-white/60 leading-relaxed">{dev.tagline}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {dev.topSkills.slice(0, 4).map((s) => (
          <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/60">
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-white/80">
        View profile
        <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.button>
  )
}
