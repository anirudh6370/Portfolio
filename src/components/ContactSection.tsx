import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { developers } from '../data/developers'

const primaryEmail = developers[0]?.links.email ?? ''

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'a potential client'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass p-8 sm:p-14">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/30 via-cyan-500/20 to-magenta-500/20 blur-3xl" />

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">Let's talk</span>
            <h2 className="relative mt-3 text-3xl sm:text-4xl font-semibold tracking-tight max-w-lg">
              Have a project in mind? <span className="text-gradient">Tell us about it.</span>
            </h2>
            <p className="relative mt-4 max-w-md text-white/60">
              Share a few details and the right engineer from the collective will get back to you within a day.
            </p>

            <form onSubmit={handleSubmit} className="relative mt-10 grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-cyan-400/50 transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-cyan-400/50 transition-colors"
              />
              <textarea
                required
                placeholder="What are you looking to build?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-cyan-400/50 transition-colors resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="sm:col-span-2 relative overflow-hidden rounded-xl px-6 py-3.5 font-medium text-ink-900"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-cyan-400 to-magenta-400 bg-[length:200%_auto] animate-gradient-x" />
                <span className="relative">Send message</span>
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
