import type { Developer } from '../data/developers'

/** Palette rotation so the team grid reads as a set of colour-coded cards. */
export const accents = [
  { chip: 'bg-flame text-white', text: 'text-flame', blob: 'rgba(255,100,52,0.35)' },
  { chip: 'bg-electric text-white', text: 'text-electric', blob: 'rgba(79,73,245,0.32)' },
  { chip: 'bg-royal text-white', text: 'text-royal', blob: 'rgba(65,23,180,0.28)' },
  { chip: 'bg-sand text-ink-950', text: 'text-ink-700', blob: 'rgba(248,215,177,0.6)' },
  { chip: 'bg-lilac text-ink-950', text: 'text-royal', blob: 'rgba(185,182,251,0.5)' },
]

export default function DeveloperCard({
  dev,
  index,
  onOpen,
}: {
  dev: Developer
  index: number
  onOpen: () => void
}) {
  const accent = accents[index % accents.length]

  return (
    <button
      onClick={onOpen}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white/70 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:bg-white"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: `radial-gradient(closest-side, ${accent.blob}, transparent 72%)` }}
      />

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-2xl font-display text-lg font-bold ${accent.chip}`}
        >
          {dev.avatarInitials}
        </span>
        <span className="rounded-full border border-black/10 px-3 py-1 font-mono text-[11px] text-ink-700/60">
          {dev.yearsExperience}+ yrs
        </span>
      </div>

      <h3 className="relative mt-7 font-display text-xl font-bold tracking-tight text-ink-950">
        {dev.name}
      </h3>
      <p className={`relative mt-0.5 text-sm font-medium ${accent.text}`}>{dev.role}</p>
      <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-ink-700/70">
        {dev.tagline}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {dev.topSkills.slice(0, 4).map((s) => (
          <span key={s} className="rounded-full bg-black/[0.05] px-2.5 py-1 font-mono text-[11px] text-ink-700/70">
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-center gap-3 pt-8 text-sm font-medium text-ink-950">
        View profile
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 text-white transition-transform duration-300 group-hover:translate-x-1">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
            <path
              d="M5 12h13M12 5.5 18.5 12 12 18.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </button>
  )
}
