/**
 * The numbered process strip from the brand board: oversized rounded type
 * with colour-coded numeral discs, scrolling in opposite directions.
 * Duplicating the list and translating -50% gives a seamless loop.
 */
const steps = [
  { n: '01', label: 'Scope', dot: 'bg-electric text-white' },
  { n: '02', label: 'Architect', dot: 'bg-flame text-white' },
  { n: '03', label: 'Prototype', dot: 'bg-sand text-ink-950' },
  { n: '04', label: 'Build', dot: 'bg-royal text-white' },
  { n: '05', label: 'Ship', dot: 'bg-lilac text-ink-950' },
  { n: '06', label: 'Support', dot: 'bg-white text-ink-950' },
]

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max">
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...steps, ...steps].map((s, i) => (
          <div key={s.n + i} className="flex items-center gap-5">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-xs ${s.dot}`}
            >
              {s.n}
            </span>
            <span className="whitespace-nowrap font-display text-[clamp(1.75rem,4.4vw,3.25rem)] font-semibold tracking-tight text-white">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProcessMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-14">
      <div className="fade-x space-y-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
