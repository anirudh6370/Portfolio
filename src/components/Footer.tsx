import Mark from './Mark'

const links = [
  { label: 'Approach', href: '#approach' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Industries', href: '#industries' },
  { label: 'Team', href: '#team' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <a
            href="#top"
            className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-white"
          >
            <Mark className="h-7 w-7 text-flame" />
            Nexus<span className="text-white/40">Collective</span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-white/40">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[11px] text-white/35">
          <p>© {new Date().getFullYear()} Nexus Collective — built by the collective itself.</p>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sand" />
            <span className="h-2.5 w-2.5 rounded-full bg-royal" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-flame" />
            <span className="h-2.5 w-2.5 rounded-full bg-electric" />
            <span className="h-2.5 w-2.5 rounded-full bg-lilac" />
          </div>
        </div>
      </div>
    </footer>
  )
}
