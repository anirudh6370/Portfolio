/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070b',
          900: '#0a0a0f',
          850: '#0e0e16',
          800: '#131320',
          700: '#1a1a2b',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        magenta: {
          400: '#f472b6',
          500: '#ec4899',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient':
          'radial-gradient(60% 60% at 20% 20%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0) 60%), radial-gradient(55% 55% at 50% 90%, rgba(236,72,153,0.25) 0%, rgba(236,72,153,0) 60%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
