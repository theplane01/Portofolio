/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        chalk: '#f4f1eb',
        acid: '#c8ff00',
        ember: '#ff4d1c',
        glacier: '#7eb8ff',
        void: '#0e0e16',
        panel: '#14141e',
        silver: '#888896',
        'dark-border': 'rgba(255,255,255,.08)',
        'dark-chalk': '#f4f1eb',
        'dark-silver': '#888896',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float-orb': 'floatOrb 9s ease-in-out infinite',
        'marquee': 'marquee 16s linear infinite',
        'pulse-dot': 'pulseDot 1.5s ease infinite',
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(12px,-18px) scale(1.05)' },
          '66%': { transform: 'translate(-10px,10px) scale(.96)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.6)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
