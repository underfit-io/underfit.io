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
        // Gateway platform tokens, resolved through CSS variables so the
        // site can flip between dark (default) and light themes
        canvas: 'var(--c-canvas)',
        surface: {
          DEFAULT: 'var(--c-surface)',
          2: 'var(--c-surface-2)',
          3: 'var(--c-surface-3)',
        },
        accent: {
          DEFAULT: '#635BFF',
          strong: '#7A73FF',
          light: '#818cf8',
          on: '#ffffff',
        },
        ink: 'var(--c-ink)',
        bright: 'var(--c-bright)',
        muted: {
          DEFAULT: 'var(--c-muted)',
          2: 'var(--c-muted-2)',
        },
        line: 'rgb(var(--line-rgb) / <alpha-value>)',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      borderRadius: {
        card: '16px',
        'card-md': '12px',
        'card-sm': '8px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'accent-glow': '0 0 24px rgba(99,91,255,0.2)',
        'accent-dot': '0 0 18px rgba(99,91,255,0.7)',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #635BFF 0%, #A259FF 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 260ms ease both',
        marquee: 'marquee 32s linear infinite',
        blink: 'blink 1.1s steps(1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
