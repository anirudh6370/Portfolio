import { developers } from '../data/developers'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function ProjectsSection() {
  const projects = developers.flatMap((dev) =>
    dev.projects.map((p) => ({ ...p, author: dev.name }))
  )

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="A few things we've shipped."
          description="A sample of production and research work across the collective — more under NDA."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <a
                href={p.link ?? '#contact'}
                target={p.link ? '_blank' : undefined}
                rel={p.link ? 'noreferrer' : undefined}
                className="group block h-full rounded-3xl glass glass-hover p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400">{p.stack}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                    fill="none"
                  >
                    <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.description}</p>
                <p className="mt-5 text-xs text-white/40">by {p.author}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
