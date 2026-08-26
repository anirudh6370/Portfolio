import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Team', href: '#team' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/20' : ''
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-cyan-500 to-magenta-500">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-900" fill="none">
                <path d="M6 18V6l12 12V6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Nexus<span className="text-gradient">Collective</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-900 transition-transform hover:scale-105"
          >
            Hire Us
          </a>
        </div>
      </div>
    </motion.header>
  )
}
