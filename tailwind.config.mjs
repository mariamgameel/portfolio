/** @type {import('tailwindcss').Config} */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Burgundy & sand design palette
        burgundy: { DEFAULT: c('burgundy'), dark: c('burgundy-dark') },
        wine: c('wine'),
        cocoa: c('cocoa'),
        taupe: c('taupe'),
        sand: c('sand'),
        cream: c('cream'),
        latte: c('latte'),
        blush: c('blush'),
        divider: c('divider'),

        // Semantic tokens
        bg: c('taupe'),
        card: c('sand'),
        border: c('divider'),
        'text-primary': c('wine'),
        'text-secondary': c('cocoa'),
        'text-muted': c('muted'),

        // Legacy names, remapped onto the new palette so every page follows it
        ink: c('burgundy'),
        graphite: c('wine'),
        charcoal: c('burgundy-dark'),
        'slate-grey': c('cocoa'),
        silver: c('divider'),
        mist: c('sand'),
        'marble-white': c('cream'),
        white: c('cream'),

        status: {
          success: 'var(--color-success)',
          error: 'var(--color-error)'
        }
      },
      fontFamily: {
        serif: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '2.75rem'
      },
      boxShadow: {
        hairline: '0 0 0 1px rgb(var(--c-divider))',
        'marble-sm': '0 4px 16px -2px var(--shadow-color)',
        'marble-md': '0 12px 32px -4px var(--shadow-color)',
        'marble-lg': '0 24px 48px -8px var(--shadow-color)'
      }
    }
  },
  plugins: []
};
