import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const points = [
  {
    title: 'Direct access, no account managers',
    description:
      'You talk to the engineer writing the code — not a layer of project management passing messages along.',
    dot: 'bg-flame text-white',
  },
  {
    title: 'Fixed scope, transparent pricing',
    description:
      'Clear deliverables and timelines agreed upfront. No open-ended hourly billing surprises.',
    dot: 'bg-electric text-white',
  },
  {
    title: 'Production mindset',
    description:
      'We ship code meant to run in production from day one — tested, documented, and handed off cleanly.',
    dot: 'bg-sand text-ink-950',
  },
  {
    title: 'Right specialist for the job',
    description:
      "Need graph analytics one month and a React dashboard the next? You're covered by the same collective.",
    dot: 'bg-lilac text-ink-950',
  },
]

export default function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-paper-300 py-28 text-ink-950">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="light"
          eyebrow="Why us"
          title={
            <>
              Freelance, without the <span className="text-flame">freelance risk</span>.
            </>
          }
        />

        <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-5 border-t border-black/10 pt-7">
                <span
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[11px] ${p.dot}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-700/70">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
