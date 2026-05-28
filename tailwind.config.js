/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E10600',
          'red-dark': '#C00500',
          'red-light': '#FF1A16',
          black: '#1C1C1C',
          'gray-dark': '#4A4A4A',
          'gray-mid': '#8A8A8A',
          'gray-light': '#F5F5F5',
          'gray-border': '#E0E0E0',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-cta': 'pulseCta 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(24px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        pulseCta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225, 6, 0, 0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(225, 6, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
        cta: '0 4px 20px rgba(225, 6, 0, 0.35)',
        'cta-hover': '0 8px 32px rgba(225, 6, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
