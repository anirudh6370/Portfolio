import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="max-w-2xl mb-14">
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-white/60 text-lg">{description}</p>}
    </Reveal>
  )
}
