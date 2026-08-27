import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  /** `dark` = white type on ink, `light` = ink type on paper. */
  tone?: 'dark' | 'light'
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <Reveal className={`mb-16 max-w-3xl ${className}`}>
      <span className="eyebrow text-flame">{eyebrow}</span>
      <h2
        className={`headline mt-4 text-[clamp(2rem,5vw,3.5rem)] ${dark ? 'text-white' : 'text-ink-950'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-lg leading-relaxed ${dark ? 'text-white/55' : 'text-ink-700/75'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
