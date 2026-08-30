import type { Developer } from '../data/developers'

/** Palette rotation so the team grid reads as a set of colour-coded cards. */
export const accents = [
  { chip: 'bg-flame text-white', text: 'text-flame', blob: 'rgba(255,100,52,0.35)' },
  { chip: 'bg-electric text-white', text: 'text-electric', blob: 'rgba(79,73,245,0.32)' },
  { chip: 'bg-royal text-white', text: 'text-royal', blob: 'rgba(65,23,180,0.28)' },
  { chip: 'bg-sand text-ink-950', text: 'text-ink-700', blob: 'rgba(248,215,177,0.6)' },
  { chip: 'bg-lilac text-ink-950', text: 'text-royal', blob: 'rgba(185,182,251,0.5)' },
]

/**
 * Anonymous capability card: initials, role, experience and stack — no name,
 * no profile panel, no résumé. The engineer behind it is introduced once a
 * conversation starts, not to every visitor.
 */
export default function DeveloperCard({ dev, index }: { dev: Developer; index: number }) {
  const accent = accents[index % accents.length]

  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white/70 p-7">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full"
        style={{ backgroundImage: `radial-gradient(closest-side, ${accent.blob}, transparent 72%)` }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl font-bold ${accent.chip}`}
        >
          {dev.avatarInitials}
        </span>
        <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[11px] text-ink-700/60">
          {dev.yearsExperience}+ yrs
        </span>
      </div>

      <h3 className={`relative mt-7 font-display text-xl font-bold tracking-tight ${accent.text}`}>
        {dev.role}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-ink-700/70">{dev.tagline}</p>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
        {dev.topSkills.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded-full bg-black/[0.05] px-2.5 py-1 font-mono text-[11px] text-ink-700/70"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  )
}
