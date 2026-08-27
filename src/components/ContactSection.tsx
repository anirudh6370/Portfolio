import { useState } from 'react'
import Reveal from './Reveal'
import GlassRing from './GlassRing'
import { developers } from '../data/developers'

const primaryEmail = developers[0]?.links.email ?? ''

const field =
  'w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-flame'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'a potential client'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-28">
      <GlassRing
        size={420}
        thickness={58}
        tiltX={66}
        tiltZ={22}
        duration={34}
        className="-left-32 top-24 hidden opacity-70 lg:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-start lg:gap-20">
        <Reveal>
          <div>
            <span className="eyebrow text-flame">Let&apos;s talk</span>
            <h2 className="headline mt-4 text-[clamp(2.25rem,5.5vw,4rem)] text-white">
              Have a project in mind? Tell us about it.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/55">
              Share a few details and the right engineer from the collective gets back to you within
              a day.
            </p>

            {primaryEmail && (
              <a
                href={`mailto:${primaryEmail}`}
                className="mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-1 font-mono text-sm text-white/70 transition-colors hover:border-flame hover:text-white"
              >
                {primaryEmail}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-3">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={field}
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={field}
              />
              <textarea
                required
                rows={5}
                placeholder="What are you looking to build?"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${field} resize-none`}
              />
              <button
                type="submit"
                className="group mt-2 flex items-center justify-between rounded-full bg-flame py-1.5 pl-6 pr-1.5 text-[15px] font-medium text-white transition-colors hover:bg-[#ff7a52]"
              >
                Send message
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white text-flame">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                  >
                    <path
                      d="M5 12h13M12 5.5 18.5 12 12 18.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
