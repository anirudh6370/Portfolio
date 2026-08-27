import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Mark from './Mark'

const links = [
  { label: 'Approach', href: '#approach' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Team', href: '#team' },
  { label: 'Work', href: '#work' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full pl-5 pr-2 py-2 transition-all duration-300 ${
          scrolled || open
            ? 'bg-ink-950/80 backdrop-blur-xl border border-white/10'
            : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-[17px] font-bold tracking-tight text-white">
          <Mark className="h-6 w-6 text-flame" />
          Nexus<span className="text-white/45">Collective</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-flame px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#ff7a52] sm:block"
          >
            Start a project
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 8h16M4 16h16'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-ink-950/95 p-2 md:hidden"
          >
            {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 font-display text-lg font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
