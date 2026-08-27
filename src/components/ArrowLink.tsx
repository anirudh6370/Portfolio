import type { ReactNode } from 'react'

function ArrowGlyph({ up = false }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d={up ? 'M7 17 17 7M9 7h8v8' : 'M5 12h13M12 5.5 18.5 12 12 18.5'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * The brand's primary call to action: a label riding a filled pill with a
 * circular arrow disc on the end. `solid` is the flame-on-anything hero
 * button; `outline` adapts to whichever half of the palette it sits on.
 */
export default function ArrowLink({
  href,
  children,
  variant = 'solid',
  tone = 'dark',
  external = false,
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  /** Which ground it sits on: `dark` = black section, `light` = paper section. */
  tone?: 'dark' | 'light'
  external?: boolean
  className?: string
}) {
  const solid = variant === 'solid'

  const shell = solid
    ? 'bg-flame text-white hover:bg-[#ff7a52]'
    : tone === 'dark'
      ? 'border border-white/20 text-white hover:border-white/50 hover:bg-white/5'
      : 'border border-black/15 text-ink-950 hover:border-black/40 hover:bg-black/[0.04]'

  const disc = solid
    ? 'bg-white text-flame'
    : tone === 'dark'
      ? 'bg-white text-ink-950'
      : 'bg-ink-950 text-white'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-[15px] font-medium transition-colors duration-300 ${shell} ${className}`}
    >
      {children}
      <span
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ${disc}`}
      >
        <span
          className={`transition-transform duration-300 ${
            external ? 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5' : 'group-hover:translate-x-1'
          }`}
        >
          <ArrowGlyph up={external} />
        </span>
      </span>
    </a>
  )
}
