import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { developers } from '../data/developers'
import { domains } from '../data/domains'

const rotatingWords = [
  'Agentic AI',
  'RAG Systems',
  'LLM Fine-Tuning',
  'Graph Analytics',
  'Full-Stack Products',
  'Computer Vision',
]

const maxYearsExperience = Math.max(...developers.map((d) => d.yearsExperience))

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance & contract engagements
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl"
        >
          <span className="flex flex-wrap items-center gap-x-4">
            <span>We build</span>
            <span className="relative inline-block h-[1.15em] overflow-hidden align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[index]}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="text-gradient inline-block leading-[1.15em]"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <span className="block mt-2">that clients actually ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/60"
        >
          A small collective of independent AI & software engineers, taking on freelance
          and contract work — from agentic pipelines to production-grade full-stack apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 font-medium text-ink-900 transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-cyan-400 to-magenta-400 bg-[length:200%_auto] animate-gradient-x" />
            <span className="relative">Start a project</span>
          </a>
          <a
            href="#team"
            className="rounded-full glass glass-hover px-7 py-3.5 font-medium text-white/90"
          >
            Meet the team
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl border-t border-white/10 pt-8"
        >
          <Stat value={`${developers.length}`} label="Engineers" />
          <Stat value={`${maxYearsExperience}+`} label="Years, senior engineer" />
          <Stat value={`${domains.length}`} label="Core domains" />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-gradient">{value}</div>
      <div className="mt-1 text-xs text-white/50 uppercase tracking-wide">{label}</div>
    </div>
  )
}
