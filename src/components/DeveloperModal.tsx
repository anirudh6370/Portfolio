import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Developer } from '../data/developers'

export default function DeveloperModal({ dev, onClose }: { dev: Developer | null; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = dev ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [dev, onClose])

  return (
    <AnimatePresence>
      {dev && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-10 my-8 w-full max-w-3xl rounded-3xl glass bg-ink-900/95 p-8 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-cyan-500 to-magenta-500 font-display text-xl font-semibold text-ink-900">
                {dev.avatarInitials}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{dev.name}</h3>
                <p className="text-cyan-400">{dev.role}</p>
                <p className="mt-1 text-sm text-white/50">{dev.location} · {dev.yearsExperience}+ years experience</p>
              </div>
            </div>

            <p className="mt-6 text-white/70">{dev.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {dev.domains.map((d) => (
                <span key={d} className="rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10 px-3 py-1 text-xs text-white/80">
                  {d}
                </span>
              ))}
            </div>

            <Section title="Experience">
              <div className="space-y-6">
                {dev.experience.map((exp) => (
                  <div key={exp.company + exp.role}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium text-white/90">
                        {exp.role} <span className="text-white/40">· {exp.company}</span>
                      </h4>
                      <span className="text-xs font-mono text-white/40">{exp.period}</span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white/60">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Skills">
              <div className="space-y-4">
                {dev.skillGroups.map((g) => (
                  <div key={g.category}>
                    <p className="text-xs uppercase tracking-wide text-white/40 mb-2">{g.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {g.skills.map((s) => (
                        <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {dev.projects.length > 0 && (
              <Section title="Selected Projects">
                <div className="grid sm:grid-cols-2 gap-4">
                  {dev.projects.map((p) => (
                    <div key={p.name} className="rounded-2xl border border-white/10 p-4">
                      <h5 className="font-medium text-white/90">{p.name}</h5>
                      <p className="mt-1 text-xs font-mono text-cyan-400/80">{p.stack}</p>
                      <p className="mt-2 text-sm text-white/60">{p.description}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Education">
              <p className="text-sm text-white/60">{dev.education}</p>
            </Section>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              {dev.links.resume && (
                <a
                  href={dev.links.resume}
                  download
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition-transform hover:scale-105"
                >
                  Download Resume
                </a>
              )}
              {dev.links.email && (
                <a href={`mailto:${dev.links.email}`} className="rounded-full glass glass-hover px-5 py-2.5 text-sm">
                  Email
                </a>
              )}
              {dev.links.github && (
                <a href={dev.links.github} target="_blank" rel="noreferrer" className="rounded-full glass glass-hover px-5 py-2.5 text-sm">
                  GitHub
                </a>
              )}
              {dev.links.linkedin && (
                <a href={dev.links.linkedin} target="_blank" rel="noreferrer" className="rounded-full glass glass-hover px-5 py-2.5 text-sm">
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h4 className="font-display text-sm uppercase tracking-wide text-white/40 mb-4">{title}</h4>
      {children}
    </div>
  )
}
