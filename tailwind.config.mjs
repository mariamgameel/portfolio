/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        graphite: 'var(--color-graphite)',
        charcoal: 'var(--color-charcoal)',
        'slate-grey': 'var(--color-slate-grey)',
        silver: 'var(--color-silver)',
        mist: 'var(--color-mist)',
        'marble-white': 'var(--color-marble-white)',
        white: 'var(--color-pure-white)',
        status: {
          success: 'var(--color-success)',
          error: 'var(--color-error)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'hairline': '0 0 0 1px var(--color-border)',
        'marble-sm': '0 4px 16px -2px var(--shadow-color)',
        'marble-md': '0 12px 32px -4px var(--shadow-color)',
        'marble-lg': '0 24px 48px -8px var(--shadow-color)'
      }
    }
  },
  plugins: []
};
