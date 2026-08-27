import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import ArrowLink from './ArrowLink'

/**
 * The four things we get hired for, played as a looping reel rather than a
 * static grid: each pillar gets a card beat (card pops up holding its
 * message, then slides right and vanishes) followed by a word beat (a short
 * line flies in from both edges with a card punching through the middle).
 *
 * Reduced-motion visitors get the same four pillars as a plain grid — the
 * reel is decorative and marked aria-hidden, with an sr-only list carrying
 * the content for assistive tech.
 */
const DOTS = {
  backgroundImage: 'radial-gradient(rgba(10,10,10,0.13) 1.5px, transparent 1.5px)',
  backgroundSize: '24px 24px',
}

const pillars = [
  {
    title: 'Agentic AI',
    body: 'Multi-agent systems that plan, call tools and hand off work — with evaluation and observability wired in from day one.',
    words: ['agents', 'that act'],
    stage: '#FF6434',
    chip: 'bg-flame text-white',
    glyph: (
      <>
        <circle cx="12" cy="5" r="2.4" />
        <circle cx="5" cy="19" r="2.4" />
        <circle cx="19" cy="19" r="2.4" />
        <path d="M12 7.4 6.2 16.8M12 7.4l5.8 9.4M7.4 19h9.2" strokeWidth="1.5" fill="none" stroke="currentColor" />
      </>
    ),
  },
  {
    title: 'Retrieval & Data',
    body: 'RAG grounded in your own corpus, vector and graph stores, and the pipelines that keep both fresh at production scale.',
    words: ['answers', 'you can trust'],
    stage: '#4F49F5',
    chip: 'bg-electric text-white',
    glyph: (
      <>
        <ellipse cx="12" cy="6.5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: 'Applied ML',
    body: 'Fine-tuning, forecasting, vision and scoring models — trained on your constraints, quantized to run inside your budget.',
    words: ['models', 'that pay off'],
    stage: '#2F2F2F',
    chip: 'bg-sand text-ink-950',
    glyph: (
      <>
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M4.5 15.5 9 10l3.5 3.5L20 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="20" cy="5" r="1.8" />
      </>
    ),
  },
  {
    title: 'Full-Stack Delivery',
    body: 'The whole thing shipped: FastAPI and React, containerized, deployed on AWS with CI/CD and a clean handoff.',
    words: ['shipped', 'end to end'],
    stage: '#4117B4',
    chip: 'bg-royal text-white',
    glyph: (
      <>
        <rect x="3" y="4.5" width="18" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M9.5 12.5 7 15l2.5 2.5M14.5 12.5 17 15l-2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
]

/** Card beat holds a touch longer — there's a paragraph to read. */
const CARD_MS = 3000
const WORD_MS = 2600
const PAPER = '#F5F4F1'

export default function ApproachSection() {
  const reduceMotion = useReducedMotion()
  const [beat, setBeat] = useState(0)

  const total = pillars.length * 2
  const pillar = pillars[Math.floor(beat / 2) % pillars.length]
  const isCardBeat = beat % 2 === 0

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setTimeout(
      () => setBeat((b) => (b + 1) % total),
      isCardBeat ? CARD_MS : WORD_MS
    )
    return () => window.clearTimeout(id)
  }, [beat, isCardBeat, reduceMotion, total])

  return (
    <section id="approach" className="relative overflow-hidden bg-paper-300 py-28 text-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-8">
            <h2 className="headline max-w-[16ch] text-[clamp(2.25rem,6vw,4.5rem)]">
              At Nexus, shipped beats <span className="text-flame">pitched</span>, every time.
            </h2>
            <div className="flex items-center gap-3 pt-2">
              <ArrowLink href="#expertise" variant="outline" tone="light">
                See all expertise
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-700/75">
            Four things we get hired for again and again. Every engagement runs through the same
            loop — scope it honestly, prototype fast, then harden what survives contact with real
            data.
          </p>
        </Reveal>

        {reduceMotion ? (
          <StaticGrid />
        ) : (
          <>
            <Reveal delay={0.15}>
              <motion.div
                aria-hidden="true"
                animate={{ backgroundColor: isCardBeat ? pillar.stage : PAPER }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="relative mt-16 h-[24rem] overflow-hidden rounded-[2.5rem] border border-black/[0.06] sm:h-[27rem] lg:h-[30rem]"
              >
                <AnimatePresence initial={false}>
                  {isCardBeat ? (
                    <CardBeat key={`card-${beat}`} pillar={pillar} />
                  ) : (
                    <WordBeat key={`word-${beat}`} pillar={pillar} />
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>

            {/* The reel is decorative; this carries its content to assistive tech. */}
            <ul className="sr-only">
              {pillars.map((p) => (
                <li key={p.title}>
                  {p.title}: {p.body}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

type Pillar = (typeof pillars)[number]

/** Pops up from below, holds, then slides right and vanishes. */
function CardBeat({ pillar }: { pillar: Pillar }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
      initial={{ opacity: 0, y: 70, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 420, scale: 0.95 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10"
        style={DOTS}
      >
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.chip}`}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            {pillar.glyph}
          </svg>
        </span>
        <h3 className="mt-8 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight">
          {pillar.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-700/70 sm:text-lg">{pillar.body}</p>
      </div>
    </motion.div>
  )
}

/** Words fly in from both edges; a card punches through between them. */
function WordBeat({ pillar }: { pillar: Pillar }) {
  const [left, right] = pillar.words

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-8 lg:gap-12"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.span
        className="headline text-[clamp(1.75rem,5.5vw,3.75rem)]"
        style={{ color: pillar.stage }}
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {left}
      </motion.span>

      <motion.span
        className="relative flex h-28 w-24 shrink-0 items-center justify-center rounded-[1.25rem] bg-white shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)] sm:h-40 sm:w-32"
        style={DOTS}
        initial={{ scale: 0, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ delay: 0.42, type: 'spring', stiffness: 260, damping: 18 }}
      >
        <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-14 sm:w-14" fill="currentColor" style={{ color: pillar.stage }}>
          {pillar.glyph}
        </svg>
      </motion.span>

      <motion.span
        className="headline text-[clamp(1.75rem,5.5vw,3.75rem)]"
        style={{ color: pillar.stage }}
        initial={{ x: 260, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {right}
      </motion.span>
    </motion.div>
  )
}

/** Reduced-motion fallback: the same four pillars, standing still. */
function StaticGrid() {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => (
        <article
          key={p.title}
          className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/65 p-7"
        >
          <div className="flex items-center justify-between">
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${p.chip}`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                {p.glyph}
              </svg>
            </span>
            <span className="font-mono text-xs text-ink-700/40">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="mt-10 font-display text-xl font-bold tracking-tight">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{p.body}</p>
        </article>
      ))}
    </div>
  )
}
