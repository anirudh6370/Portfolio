/**
 * The collective's mark: three nodes on a triangle, linked — a nexus.
 * Drawn on a 24×24 grid with round caps so it sits comfortably next to the
 * rounded display face.
 */
export default function Mark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 5.5 5 18M12 5.5 19 18M5 18h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <circle cx="12" cy="5.5" r="2.6" fill="currentColor" />
      <circle cx="5" cy="18" r="2.6" fill="currentColor" />
      <circle cx="19" cy="18" r="2.6" fill="currentColor" />
    </svg>
  )
}
