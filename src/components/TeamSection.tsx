import { developers } from '../data/developers'
import DeveloperCard from './DeveloperCard'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-paper-300 py-28 text-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="light"
          eyebrow="The collective"
          title={
            <>
              Independent engineers, <br className="hidden sm:block" />
              working as one team.
            </>
          }
          description="Each of us takes freelance work individually — together we cover more ground than any single generalist. You meet the engineer on your project once we scope it."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((dev, i) => (
            <Reveal key={dev.id} delay={(i % 3) * 0.08} className="h-full">
              <DeveloperCard dev={dev} index={i} />
            </Reveal>
          ))}

          <Reveal delay={0.24} className="h-full">
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-black/15 p-7 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-black/20 font-display text-xl text-ink-700/50">
                +
              </span>
              <p className="mt-4 max-w-[22ch] text-sm text-ink-700/55">
                More engineers joining the collective soon
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
