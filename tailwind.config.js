/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080810',
          2: '#0d0d18',
          3: '#14141f',
          4: '#1a1a28',
        },
        surface: {
          DEFAULT: '#0d0d18',
          2: '#14141f',
          3: '#1d1d2b',
        },
        line: 'rgba(255,255,255,0.06)',
        'line-hover': 'rgba(255,255,255,0.1)',
        ink: {
          1: '#f0f0f0',
          2: '#888898',
          3: '#4a4a5a',
        },
        accent: {
          DEFAULT: '#6366f1',
          dim: 'rgba(99,102,241,0.1)',
          muted: 'rgba(99,102,241,0.4)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        container: '1100px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
