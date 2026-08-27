import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { developers } from '../data/developers'
import { domains } from '../data/domains'
import GlassRing from './GlassRing'
import ArrowLink from './ArrowLink'

const rotatingWords = [
  { word: 'agentic AI', color: 'text-flame' },
  { word: 'RAG systems', color: 'text-lilac' },
  { word: 'fine-tuned LLMs', color: 'text-sand' },
  { word: 'graph analytics', color: 'text-electric' },
  { word: 'full-stack apps', color: 'text-lilac' },
  { word: 'computer vision', color: 'text-sand' },
]

const maxYearsExperience = Math.max(...developers.map((d) => d.yearsExperience))

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2600)
    return () => clearInterval(id)
  }, [])

  const active = rotatingWords[index]

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-36 sm:pt-44">
      {/* Chrome torus artifacts — the brand's signature object, kept behind
          the type and off the left column so the headline stays readable. */}
      <GlassRing
        size={520}
        thickness={72}
        tiltX={64}
        tiltZ={-24}
        duration={30}
        className="-right-28 top-2 hidden opacity-90 lg:block"
      />
      <GlassRing
        size={260}
        thickness={38}
        tiltX={58}
        tiltZ={16}
        duration={22}
        reverse
        className="right-40 top-[26rem] hidden opacity-80 xl:block"
      />
      {/* Small screens get one ring hanging off the right edge instead — the
          large ones would sit under the headline where the type needs to win. */}
      <GlassRing
        size={200}
        thickness={30}
        tiltX={70}
        tiltZ={-8}
        duration={26}
        className="-right-16 top-28 opacity-45 lg:hidden"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 noise" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-flame" />
          Available for freelance &amp; contract engagements
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="headline max-w-[15ch] text-[clamp(2.25rem,8.2vw,6.25rem)] text-white"
        >
          We build{' '}
          <span className="relative inline-block h-[0.95em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={active.word}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-105%' }}
                transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                className={`inline-block whitespace-nowrap leading-[0.95em] ${active.color}`}
              >
                {active.word}
              </motion.span>
            </AnimatePresence>
          </span>{' '}
          that clients actually ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-white/55"
        >
          A small collective of independent AI &amp; software engineers taking on freelance and
          contract work — from agentic pipelines to production-grade full-stack apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="mt-11 flex flex-wrap items-center gap-3"
        >
          <ArrowLink href="#contact">Start a project</ArrowLink>
          <ArrowLink href="#team" variant="outline" tone="dark">
            Meet the collective
          </ArrowLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-24 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          <Stat value={String(developers.length)} label="Engineers" accent="text-flame" />
          <Stat value={`${maxYearsExperience}+`} label="Yrs, senior engineer" accent="text-lilac" />
          <Stat value={String(domains.length)} label="Core domains" accent="text-sand" />
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div>
      <div className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${accent}`}>{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/40">{label}</div>
    </div>
  )
}
