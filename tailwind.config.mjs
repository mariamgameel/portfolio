/** @type {import('tailwindcss').Config} */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Architectural Editorial Palette
        porcelain: { DEFAULT: c('porcelain'), light: '#FFFFFF', dark: '#F4EFEA' },
        obsidian: { DEFAULT: c('obsidian'), card: c('obsidian-card'), inner: c('obsidian-inner') },
        gold: { DEFAULT: c('gold'), light: c('gold-light'), dark: c('gold-dark') },
        'border-light': c('border-light'),
        'border-dark': c('border-dark'),

        // Semantic & compatibility tokens
        sand: { DEFAULT: c('sand'), card: c('porcelain') },
        burgundy: { DEFAULT: c('burgundy'), dark: c('burgundy-dark') },
        wine: c('wine'),
        cocoa: c('cocoa'),
        taupe: c('taupe'),
        cream: c('cream'),
        latte: c('latte'),
        blush: c('blush'),
        divider: c('divider'),

        // Semantic UI
        bg: c('porcelain'),
        card: c('sand'),
        border: c('border-light'),
        'text-primary': c('text-dark'),
        'text-secondary': c('text-muted'),
        'text-muted': c('text-muted'),

        status: {
          success: 'var(--color-success)',
          error: 'var(--color-error)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        'arch': '200px 200px 16px 16px'
      },
      boxShadow: {
        hairline: '0 0 0 1px rgb(var(--c-border-light))',
        'arch-card': '0 20px 48px -12px rgba(26, 26, 28, 0.15)',
        'editorial-sm': '0 4px 16px rgba(0,0,0,0.03)',
        'editorial-md': '0 10px 30px rgba(0,0,0,0.04)',
        'editorial-lg': '0 20px 48px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
