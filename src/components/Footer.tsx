import { developers } from '../data/developers'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} Nexus Collective. Built by the collective itself.</p>
        <div className="flex gap-5">
          {developers.map(
            (d) =>
              d.links.github && (
                <a key={d.id} href={d.links.github} target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">
                  {d.name.split(' ')[0]}
                </a>
              )
          )}
        </div>
      </div>
    </footer>
  )
}
