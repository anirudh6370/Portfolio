import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { developers, type Developer } from '../data/developers'
import { accents } from './DeveloperCard'

export default function DeveloperModal({
  dev,
  onClose,
}: {
  dev: Developer | null
  onClose: () => void
}) {
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

  const accent = dev
    ? accents[Math.max(0, developers.findIndex((d) => d.id === dev.id)) % accents.length]
    : accents[0]

  return (
    <AnimatePresence>
      {dev && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${dev.name} profile`}
        >
          <motion.div
            className="fixed inset-0 bg-ink-950/85 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 my-8 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 text-white"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
              style={{
                backgroundImage: `radial-gradient(closest-side, ${accent.blob}, transparent 74%)`,
              }}
            />

            <div className="relative p-8 sm:p-10">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex items-start gap-5 pr-12">
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-bold ${accent.chip}`}
                >
                  {dev.avatarInitials}
                </span>
                <div>
                  <h3 className="headline text-3xl">{dev.name}</h3>
                  <p className="mt-1 font-medium text-lilac">{dev.role}</p>
                  <p className="mt-1 font-mono text-xs text-white/40">
                    {dev.location} · {dev.yearsExperience}+ years
                  </p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-white/70">{dev.tagline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {dev.domains.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs text-white/75"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <Section title="Experience">
                <div className="space-y-6">
                  {dev.experience.map((exp) => (
                    <div key={exp.company + exp.role}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-display font-semibold text-white">
                          {exp.role} <span className="font-body font-normal text-white/40">· {exp.company}</span>
                        </h4>
                        <span className="font-mono text-[11px] text-white/40">{exp.period}</span>
                      </div>
                      <ul className="mt-2.5 space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                            <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-flame" />
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
                      <p className="eyebrow mb-2 text-white/35">{g.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {g.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-white/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {dev.projects.length > 0 && (
                <Section title="Selected projects">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {dev.projects.map((p) => (
                      <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <h5 className="font-display font-semibold text-white">{p.name}</h5>
                        <p className="mt-1 font-mono text-[11px] text-lilac">{p.stack}</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              <Section title="Education">
                <p className="text-sm leading-relaxed text-white/60">{dev.education}</p>
              </Section>

              {dev.recognition && dev.recognition.length > 0 && (
                <Section title="Recognition">
                  <ul className="space-y-1.5">
                    {dev.recognition.map((r, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/60">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-sand" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <div className="mt-9 flex flex-wrap gap-2.5 border-t border-white/10 pt-7">
                {dev.links.resume && (
                  <a
                    href={dev.links.resume}
                    download
                    className="rounded-full bg-flame px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#ff7a52]"
                  >
                    Download résumé
                  </a>
                )}
                {dev.links.email && (
                  <ModalLink href={`mailto:${dev.links.email}`}>Email</ModalLink>
                )}
                {dev.links.github && (
                  <ModalLink href={dev.links.github} external>
                    GitHub
                  </ModalLink>
                )}
                {dev.links.linkedin && (
                  <ModalLink href={dev.links.linkedin} external>
                    LinkedIn
                  </ModalLink>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ModalLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/40 hover:bg-white/5"
    >
      {children}
    </a>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-9">
      <h4 className="eyebrow mb-4 text-white/35">{title}</h4>
      {children}
    </div>
  )
}
