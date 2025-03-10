import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        primary: {
          50: '#f0f4fc',
          100: '#dbe4f7',
          200: '#bccbef',
          300: '#92a9e4',
          400: '#6582d8',
          500: '#4563cc',
          600: '#2d52a3',
          700: '#254182',
          800: '#1f3568',
          900: '#1c2d56',
        },
        secondary: {
          50: '#fdf3f2',
          100: '#fbe6e3',
          200: '#f7d0cb',
          300: '#f0afa7',
          400: '#e78276',
          500: '#d85640',
          600: '#c13f2a',
          700: '#a13224',
          800: '#852b22',
          900: '#6f261f',
        },
        accent: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce0ac',
          300: '#f9c977',
          400: '#f7b03d',
          500: '#f59815',
          600: '#db7909',
          700: '#b6590b',
          800: '#934610',
          900: '#793a11',
          DEFAULT: '#f59815'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/pattern-bg.svg')",
        'section-pattern': "url('/grid-pattern.svg')",
      }
    },
  },
  plugins: [],
}
export default config 