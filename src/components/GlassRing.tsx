import type { CSSProperties } from 'react'

/**
 * The iridescent chrome torus from the brand board, built from a conic
 * gradient punched into a ring by a radial mask, then tilted in 3D.
 *
 * Everything animated here is a transform (rotation), so it stays on the
 * compositor. The halo is a plain radial-gradient rather than a blur
 * filter — a filtered layer this large behind a scrolling page is exactly
 * what used to cost frames.
 */
export default function GlassRing({
  size,
  thickness,
  tiltX = 62,
  tiltZ = -18,
  duration = 26,
  reverse = false,
  className = '',
  style,
}: {
  size: number
  thickness: number
  /** Degrees of X-rotation — higher reads as a flatter, more elliptical ring. */
  tiltX?: number
  tiltZ?: number
  duration?: number
  reverse?: boolean
  className?: string
  style?: CSSProperties
}) {
  const mask = `radial-gradient(farthest-side, transparent calc(100% - ${thickness}px), #000 calc(100% - ${thickness}px))`

  return (
    <div className={`pointer-events-none absolute ${className}`} style={style} aria-hidden="true">
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transform: `perspective(1200px) rotateX(${tiltX}deg) rotateZ(${tiltZ}deg)`,
        }}
      >
        {/* Halo: soft light bleed around the torus. */}
        <div
          className="absolute -inset-[18%] rounded-full opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(closest-side, rgba(79,73,245,0.30), rgba(65,23,180,0.14) 55%, transparent 78%)',
          }}
        />
        {/* The torus body. */}
        <div
          className={`absolute inset-0 rounded-full bg-chrome will-change-transform ${
            reverse ? 'animate-spin-slow-reverse' : 'animate-spin-slow'
          }`}
          style={{
            animationDuration: `${duration}s`,
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
        {/* Specular rim — a thin bright edge that sells the glass. */}
        <div
          className="absolute inset-0 rounded-full mix-blend-screen opacity-60"
          style={{
            backgroundImage:
              'conic-gradient(from 40deg, transparent 0deg, rgba(255,255,255,0.9) 24deg, transparent 60deg, transparent 200deg, rgba(185,182,251,0.7) 232deg, transparent 268deg)',
            maskImage: `radial-gradient(farthest-side, transparent calc(100% - ${Math.max(
              2,
              thickness * 0.32
            )}px), #000 calc(100% - ${Math.max(2, thickness * 0.32)}px))`,
            WebkitMaskImage: `radial-gradient(farthest-side, transparent calc(100% - ${Math.max(
              2,
              thickness * 0.32
            )}px), #000 calc(100% - ${Math.max(2, thickness * 0.32)}px))`,
          }}
        />
      </div>
    </div>
  )
}
