import { useState } from 'react'
import { developers, type Developer } from '../data/developers'
import DeveloperCard from './DeveloperCard'
import DeveloperModal from './DeveloperModal'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function TeamSection() {
  const [active, setActive] = useState<Developer | null>(null)

  return (
    <section id="team" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The Collective"
          title="Independent engineers, working as one team."
          description="Each of us takes freelance work individually — together we cover more ground than any single generalist."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((dev, i) => (
            <Reveal key={dev.id} delay={i * 0.08} className="h-full">
              <DeveloperCard dev={dev} onOpen={() => setActive(dev)} />
            </Reveal>
          ))}

          <Reveal delay={developers.length * 0.08} className="h-full">
            <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 p-7 text-center text-white/40">
              <span className="font-display text-2xl">+</span>
              <p className="mt-2 text-sm">More engineers joining the collective soon</p>
            </div>
          </Reveal>
        </div>
      </div>

      <DeveloperModal dev={active} onClose={() => setActive(null)} />
    </section>
  )
}
