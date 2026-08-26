import { domains } from '../data/domains'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function DomainsSection() {
  return (
    <section id="expertise" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Deep expertise, not a generic dev-shop menu."
          description={`${domains.length} domains where the collective consistently ships production-grade work.`}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full rounded-3xl glass glass-hover p-7 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                <h3 className="relative mt-3 font-display text-lg font-semibold">{d.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{d.description}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
