export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-magenta-500/15 blur-[120px] animate-float-slow" />
      <div className="absolute inset-0 noise" />
    </div>
  )
}
