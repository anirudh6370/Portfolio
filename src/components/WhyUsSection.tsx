import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const points = [
  {
    title: 'Direct access, no account managers',
    description: "You talk to the engineer writing the code — not a layer of project management passing messages along.",
  },
  {
    title: 'Fixed scope, transparent pricing',
    description: 'Clear deliverables and timelines agreed upfront. No open-ended hourly billing surprises.',
  },
  {
    title: 'Production mindset',
    description: 'We ship code meant to run in production from day one — tested, documented, and handed off cleanly.',
  },
  {
    title: 'Right specialist for the job',
    description: "Need graph analytics one month and a React dashboard the next? You're covered by the same collective.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why Us" title="Freelance, without the freelance risk." />

        <div className="grid gap-8 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/30 font-mono text-xs text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-white/90">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
