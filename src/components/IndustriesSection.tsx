import { industries } from '../data/industries'
import Reveal from './Reveal'
import ArrowLink from './ArrowLink'

/**
 * Flooded in royal — a third ground between the ink and paper sections, so
 * the page doesn't just alternate black/white all the way down. Laid out as
 * an editorial index rather than another card grid, for rhythm.
 */
export default function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-royal py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 noise" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 max-w-3xl">
          <span className="eyebrow text-sand">Who we build for</span>
          <h2 className="headline mt-4 text-[clamp(2rem,5vw,3.5rem)]">
            Domains we&apos;ve already <span className="text-sand">shipped into</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Every sector below traces back to production work someone in the collective has
            delivered — not a list of markets we&apos;d like to enter.
          </p>
        </Reveal>

        <div className="border-t border-white/20">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 0.06}>
              <article className="group grid gap-3 border-b border-white/15 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <span className="font-mono text-xs text-white/45 transition-colors duration-300 group-hover:text-sand sm:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:col-span-4 sm:text-3xl">
                  {ind.title}
                </h3>

                <div className="sm:col-span-7">
                  <p className="leading-relaxed text-white/70">{ind.description}</p>
                  <div className="mt-3.5 flex flex-wrap gap-2">
                    {ind.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <ArrowLink href="#contact">Not listed? Tell us your domain</ArrowLink>
            <span className="text-sm text-white/55">
              Most of what we do transfers across sectors — the data changes, the engineering
              doesn&apos;t.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
