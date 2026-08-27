import { useState } from 'react'
import { domains, type Domain } from '../data/domains'
import SectionHeading from './SectionHeading'

/**
 * Three columns drifting past a fixed window, fading out at the top and
 * bottom edges. Below lg the columns collapse into a plain grid — three
 * scrolling lanes on a phone would be unreadable.
 */
const ACCENTS = [
  { hex: '#FF6434', fg: '#FFFFFF' },
  { hex: '#4F49F5', fg: '#FFFFFF' },
  { hex: '#F8D7B1', fg: '#0A0A0A' },
  { hex: '#4117B4', fg: '#FFFFFF' },
  { hex: '#B9B6FB', fg: '#0A0A0A' },
]

/** Per-column direction and pace. Slightly different durations keep the
 *  columns from drifting in lockstep. */
const COLUMNS = [
  { animation: 'animate-scroll-up', duration: '92s' },
  { animation: 'animate-scroll-down', duration: '116s' },
  { animation: 'animate-scroll-up', duration: '78s' },
]

type Card = { domain: Domain; index: number; accent: (typeof ACCENTS)[number]; solid: boolean }

/**
 * Deal the domains into columns, then skin them. Both the accent and the
 * solid/tinted split are offset by column so no single column ends up
 * carrying all the colour — the earlier grid put every filled card in the
 * middle lane, which left the outer two reading as plain black.
 */
function buildColumns(): Card[][] {
  return COLUMNS.map((_, col) =>
    domains
      .map((domain, index) => ({ domain, index }))
      .filter(({ index }) => index % COLUMNS.length === col)
      .map(({ domain, index }, row) => ({
        domain,
        index,
        accent: ACCENTS[(row * COLUMNS.length + col) % ACCENTS.length],
        solid: (row + col) % 3 === 0,
      }))
  )
}

const columns = buildColumns()

export default function DomainsSection() {
  /** Which column the cursor is over — that one alone holds still. */
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="expertise" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Deep expertise, not a generic <span className="text-lilac">dev-shop menu</span>.
            </>
          }
          description={`${domains.length} domains where the collective consistently ships production-grade work.`}
        />

        {/* Drifting columns — lg and up. */}
        <div className="fade-y hidden h-[44rem] grid-cols-3 gap-4 overflow-hidden lg:grid">
          {columns.map((cards, col) => (
            <div
              key={col}
              onMouseEnter={() => setHovered(col)}
              onMouseLeave={() => setHovered(null)}
              className={`flex flex-col gap-4 pb-4 will-change-transform ${COLUMNS[col].animation}`}
              style={{
                animationDuration: COLUMNS[col].duration,
                animationPlayState: hovered === col ? 'paused' : 'running',
              }}
            >
              {/* Second pass is the loop's tail — hidden from assistive tech
                  so the domains aren't announced twice. */}
              {[...cards, ...cards].map((card, i) => (
                <DomainCard key={`${card.domain.title}-${i}`} card={card} duplicate={i >= cards.length} />
              ))}
            </div>
          ))}
        </div>

        {/* Static grid — below lg. */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {columns.flat().map((card) => (
            <DomainCard key={card.domain.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DomainCard({ card, duplicate = false }: { card: Card; duplicate?: boolean }) {
  const { domain, index, accent, solid } = card

  const chipBg = solid
    ? accent.fg === '#0A0A0A'
      ? 'rgba(0,0,0,0.10)'
      : 'rgba(0,0,0,0.18)'
    : 'rgba(255,255,255,0.06)'

  const muted = solid
    ? accent.fg === '#0A0A0A'
      ? 'rgba(10,10,10,0.72)'
      : 'rgba(255,255,255,0.82)'
    : 'rgba(255,255,255,0.55)'

  return (
    <article
      aria-hidden={duplicate || undefined}
      className="relative overflow-hidden rounded-[1.75rem] p-7 transition-colors duration-300"
      style={
        solid
          ? { backgroundColor: accent.hex, color: accent.fg }
          : {
              // Tinted rather than plain black: the accent carries through the
              // hairline, the numeral and a soft corner glow.
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: `1px solid ${accent.hex}2E`,
              color: '#FFFFFF',
            }
      }
    >
      {!solid && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"
          style={{ backgroundImage: `radial-gradient(closest-side, ${accent.hex}2B, transparent 72%)` }}
        />
      )}

      <span
        className="relative font-mono text-xs"
        style={{ color: solid ? muted : accent.hex }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="relative mt-4 font-display text-xl font-bold leading-tight tracking-tight">
        {domain.title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed" style={{ color: muted }}>
        {domain.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {domain.tags.map((t) => (
          <span
            key={t}
            className="rounded-full px-2.5 py-1 font-mono text-[11px]"
            style={{ backgroundColor: chipBg, color: muted }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
