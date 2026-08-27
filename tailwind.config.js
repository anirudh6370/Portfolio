/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Charcoal → black scale. 700 is the brand charcoal (#2F2F2F); the
           darker steps are for section grounds and card surfaces. */
        ink: {
          950: '#000000',
          900: '#08080A',
          850: '#101012',
          800: '#18181B',
          700: '#2F2F2F',
        },
        /* The light half of the palette — sections alternate ink / paper. */
        paper: {
          100: '#FFFFFF',
          200: '#F5F4F1',
          300: '#EFEEEA',
          400: '#E2E0DA',
          500: '#C9C6BE',
        },
        sand: '#F8D7B1',
        flame: '#FF6434',
        electric: '#4F49F5',
        royal: '#4117B4',
        lilac: '#B9B6FB',
      },
      fontFamily: {
        /* Rounded geometric for headlines, neo-grotesque for running text —
           the two-tier split from the brand board. */
        display: ['Quicksand', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        /* The iridescent chrome sweep used by the ring / keycap artifacts. */
        chrome:
          'conic-gradient(from 210deg, #0B0B12 0deg, #4117B4 40deg, #B9B6FB 78deg, #FFFFFF 100deg, #4F49F5 140deg, #0B0B12 200deg, #4F49F5 250deg, #B9B6FB 300deg, #FFFFFF 322deg, #0B0B12 360deg)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 26s linear infinite',
        'marquee-reverse': 'marquee-reverse 34s linear infinite',
        /* Expertise columns — deliberately very slow, so the wall drifts
           rather than scrolls. Per-column durations are set inline. */
        'scroll-up': 'marquee-y 90s linear infinite',
        'scroll-down': 'marquee-y-reverse 90s linear infinite',
        'spin-slow': 'spin 26s linear infinite',
        'spin-slow-reverse': 'spin 26s linear infinite reverse',
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        /* Drives the work-deck timing: the bar's animationend event is what
           advances the deck, so pausing the bar pauses the deck in sync. */
        progress: 'fill-y 1.5s linear forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0%, 0, 0)' },
        },
        'marquee-y': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, -50%, 0)' },
        },
        'marquee-y-reverse': {
          '0%': { transform: 'translate3d(0, -50%, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        'fill-y': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}
