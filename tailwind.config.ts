import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1193d4',
        'background-light': '#f6f7f8',
        'background-dark': '#101c22',
        'surface-light': '#ffffff',
        'surface-dark': '#1a2830',
        'muted-light': '#6b7280',
        'muted-dark': '#9ca3af',
        'contrast-light': '#111827',
        'contrast-dark': '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
export default config
