import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          400: 'var(--color-primary-400)',
          600: 'var(--color-primary-600)'
        },
        slate: {
          100: 'var(--color-neutral-100)',
          300: 'var(--color-neutral-300)',
          500: 'var(--color-neutral-500)',
          700: 'var(--color-neutral-700)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      maxWidth: {
        content: '1100px'
      }
    }
  },
  plugins: []
};

export default config;
