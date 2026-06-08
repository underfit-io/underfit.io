import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        surface: {
          DEFAULT: '#0e0f11',
          2: '#13161a',
          3: '#171b20',
        },
        accent: {
          DEFAULT: '#635BFF',
          strong: '#7A73FF',
          on: '#ffffff',
        },
        ink: '#f5f5ef',
        muted: {
          DEFAULT: '#b4b4ae',
          2: '#83837e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      borderRadius: {
        card: '28px',
        'card-md': '22px',
        'card-sm': '14px',
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        card: '0 28px 70px rgba(0,0,0,0.44)',
        'accent-glow': '0 14px 30px rgba(99,91,255,0.25)',
        'accent-dot': '0 0 18px rgba(99,91,255,0.7)',
      },
      animation: {
        'fade-up': 'fadeUp 220ms ease both',
        'band-move': 'bandMove 18s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bandMove: {
          '0%': { transform: 'translateX(0) skewX(-12deg)' },
          '100%': { transform: 'translateX(-20%) skewX(-12deg)' },
        },
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
        'cta-gradient': 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)',
        'ambient': 'radial-gradient(ellipse at 15% 10%, rgba(99,91,255,0.07), transparent 18%), radial-gradient(ellipse at 85% 80%, rgba(162,89,255,0.04), transparent 14%)',
      },
    },
  },
  plugins: [],
} satisfies Config
