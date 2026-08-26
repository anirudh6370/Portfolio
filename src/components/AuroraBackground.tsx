/**
 * Fully static — no filter:blur, no animated transform on a full-viewport
 * fixed layer. Those were the actual jank source: an animated blurred
 * layer sitting behind the whole scrollable page forces the browser to
 * keep recompositing it (and anything layered above it) on every frame,
 * competing with scroll and the CSS marquee for the same GPU budget.
 * The soft glow here comes from radial-gradient's natural feathered edge
 * instead, which is paint-once and costs nothing during scroll.
 */
export default function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-ink-900"
      style={{
        backgroundImage: [
          'radial-gradient(38% 32% at 15% 12%, rgba(124,58,237,0.22), transparent 70%)',
          'radial-gradient(34% 30% at 88% 28%, rgba(6,182,212,0.16), transparent 70%)',
          'radial-gradient(36% 32% at 30% 92%, rgba(236,72,153,0.12), transparent 70%)',
        ].join(', '),
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 noise" />
    </div>
  )
}
