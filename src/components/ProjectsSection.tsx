import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { developers } from '../data/developers'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Mark from './Mark'

/** Palette rotation — one accent per folder, reused by its tabs and spine. */
const ACCENTS = [
  { hex: '#FF6434', fg: '#FFFFFF' },
  { hex: '#4F49F5', fg: '#FFFFFF' },
  { hex: '#F8D7B1', fg: '#0A0A0A' },
  { hex: '#4117B4', fg: '#FFFFFF' },
  { hex: '#B9B6FB', fg: '#0A0A0A' },
]

/** How long each folder holds the front slot. Must match the `progress`
 *  animation duration in tailwind.config.js, which draws the spine. */
const CYCLE_MS = 1500

/** How long the move itself takes. Deliberately most of the dwell, so the
 *  deck reads as one continuous swap rather than a snap-and-wait. */
const SLIDE_S = 0.9

/** Slow to leave, then accelerating hard through the back half before it
 *  settles — the folder eases away, zips across, and lands. A plain
 *  ease-out would put all the speed at the front and read as a snap. */
const SLIDE_EASE: [number, number, number, number] = [0.75, 0, 0.35, 1]

/** How many folders are visible at the top of the stack before it fades out. */
const VISIBLE = 4

/**
 * Resting transforms per stack position. Index 0 is the front folder; the
 * rest recede upward so their tabs peek out. On hover the front folder
 * grows and the ones behind pull further back — that contrast is what makes
 * it read as claiming space rather than just scaling.
 */
const SLOTS = [
  { y: 0, scale: 1, opacity: 1 },
  { y: -34, scale: 0.962, opacity: 1 },
  { y: -62, scale: 0.926, opacity: 1 },
  { y: -84, scale: 0.894, opacity: 0.8 },
]

const SLOTS_EXPANDED = [
  { y: 6, scale: 1.028, opacity: 1 },
  { y: -56, scale: 0.94, opacity: 0.5 },
  { y: -88, scale: 0.9, opacity: 0.3 },
  { y: -110, scale: 0.87, opacity: 0.16 },
]

/** Off-stage: where the outgoing folder slides to, and the back of the deck. */
const DISMISSED = { y: 150, scale: 0.95, opacity: 0 }
const BACK = { y: -84, scale: 0.894, opacity: 0 }

export default function ProjectsSection() {
  const projects = useMemo(
    () =>
      developers.flatMap((dev) =>
        dev.projects.map((p) => ({
          ...p,
          // Initials only — the team is presented anonymously site-wide.
          author: dev.avatarInitials,
          tabs: p.stack.split('·').map((s) => s.trim()),
        }))
      ),
    []
  )

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  /** Bumped every time the countdown (re)starts, so the spine's fill
   *  animation remounts in lockstep with the timer instead of drifting. */
  const [cycle, setCycle] = useState(0)
  const reduceMotion = useReducedMotion()
  const count = projects.length

  useEffect(() => {
    if (paused) return
    setCycle((c) => c + 1)
    const id = window.setTimeout(() => setActive((a) => (a + 1) % count), CYCLE_MS)
    return () => window.clearTimeout(id)
  }, [active, paused, count])

  return (
    <section id="work" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              A few things <span className="text-sand">we&apos;ve shipped</span>.
            </>
          }
          description="A sample of production and research work across the collective — more under NDA. Hover a folder to hold it open."
        />

        <Reveal>
          <div
            className="relative mx-auto h-[32rem] max-w-[54rem] sm:h-[34rem] lg:h-[36rem]"
            onPointerEnter={(e) => e.pointerType === 'mouse' && setPaused(true)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {projects.map((p, i) => {
              const offset = (i - active + count) % count
              const isFront = offset === 0
              const isOutgoing = offset === count - 1
              const inStack = offset < VISIBLE

              const target = inStack
                ? (paused ? SLOTS_EXPANDED : SLOTS)[offset]
                : isOutgoing
                  ? DISMISSED
                  : BACK

              return (
                <motion.div
                  key={p.name}
                  className="absolute inset-x-0 top-14"
                  style={{ zIndex: isOutgoing ? 40 : Math.max(0, VISIBLE - offset) }}
                  animate={target}
                  initial={false}
                  transition={
                    // Cards parked at the back of the deck jump into place
                    // while invisible — animating them would send them flying
                    // backwards through every slot they skipped.
                    inStack || isOutgoing
                      ? { duration: reduceMotion ? 0 : SLIDE_S, ease: SLIDE_EASE }
                      : { duration: 0 }
                  }
                  aria-hidden={!isFront}
                  onClick={!isFront && inStack ? () => setActive(i) : undefined}
                >
                  <Folder
                    project={p}
                    index={i}
                    count={count}
                    accent={ACCENTS[i % ACCENTS.length]}
                    isFront={isFront}
                    expanded={paused && isFront}
                    interactive={!isFront && inStack}
                    cycle={cycle}
                    paused={paused}
                  />
                </motion.div>
              )
            })}
          </div>
        </Reveal>

        {/* Minimal jump-to control — carries the keyboard path the hover-driven
            deck can't provide on its own. */}
        <div className="mx-auto mt-10 flex max-w-[54rem] items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              className="h-4 flex-1 py-1.5"
            >
              <span
                className="block h-[3px] w-full rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i === active ? ACCENTS[i % ACCENTS.length].hex : 'rgba(255,255,255,0.14)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

type FolderProject = {
  name: string
  stack: string
  description: string
  link?: string
  author: string
  tabs: string[]
}

function Folder({
  project,
  index,
  count,
  accent,
  isFront,
  expanded,
  interactive,
  cycle,
  paused,
}: {
  project: FolderProject
  index: number
  count: number
  accent: { hex: string; fg: string }
  isFront: boolean
  expanded: boolean
  interactive: boolean
  cycle: number
  paused: boolean
}) {
  return (
    <div className={`relative ${interactive ? 'cursor-pointer' : ''}`}>
      {/* Tabs sit above the card in the DOM so the card body paints over
          their lower half — that overlap is what makes them read as tabs. */}
      <div className="absolute left-8 top-0 flex gap-1.5 sm:left-10">
        {project.tabs.slice(0, 3).map((t, k) => {
          const c = ACCENTS[(index + k) % ACCENTS.length]
          return (
            <span
              key={t}
              className="inline-block h-12 max-w-[7rem] truncate rounded-t-2xl px-4 pt-2.5 font-mono text-[11px] leading-tight sm:max-w-[11rem]"
              style={{ backgroundColor: c.hex, color: c.fg }}
            >
              {t}
            </span>
          )
        })}
      </div>

      <div className="relative mt-7 h-[26rem] overflow-hidden rounded-[2rem] bg-paper-200 sm:h-[28rem] lg:h-[30rem]">
        {/* Left spine. On the front folder it fills over one cycle, so the
            countdown is visible; hovering freezes it along with the timer. */}
        <div className="absolute inset-y-0 left-0 w-[10px] bg-black/[0.07]">
          {isFront && (
            <div
              key={cycle}
              className="h-full w-full origin-top animate-progress"
              style={{
                backgroundColor: accent.hex,
                animationPlayState: paused ? 'paused' : 'running',
              }}
            />
          )}
        </div>

        <div className="flex h-full flex-col p-8 pl-12 text-ink-950 sm:p-12 sm:pl-16">
          <div className="flex items-start justify-between gap-6">
            <span className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-sand" />
              <span style={{ color: accent.hex }}>
                <Mark className="h-4 w-4" />
              </span>
            </span>
            <span className="shrink-0 font-mono text-xs text-ink-700/40">
              {String(index + 1).padStart(2, '0')} / {count}
            </span>
          </div>

          <h3 className="mt-8 max-w-[20ch] font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.05] tracking-tight">
            {project.name}
          </h3>

          <p className="mt-6 line-clamp-3 max-w-[62ch] text-base leading-relaxed text-ink-700/70 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-auto flex items-end justify-between gap-6 border-t border-black/[0.08] pt-6">
            <div>
              <span className="eyebrow block text-ink-700/40">Built by</span>
              <span className="mt-1.5 block font-display text-lg font-semibold">{project.author}</span>
            </div>

            {/* Revealed on hover. Always visible below lg, where there is no
                hover to reveal it with. */}
            <a
              href={project.link ?? '#contact'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noreferrer' : undefined}
              tabIndex={isFront ? 0 : -1}
              className={`group/cta flex shrink-0 items-center gap-3 rounded-full bg-ink-950 py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-all duration-300 hover:bg-ink-700 ${
                expanded ? 'translate-y-0 opacity-100' : 'opacity-100 lg:translate-y-2 lg:opacity-0'
              }`}
            >
              {project.link ? 'View project' : 'Ask about it'}
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: accent.hex, color: accent.fg }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  fill="none"
                >
                  <path
                    d="M5 12h13M12 5.5 18.5 12 12 18.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
