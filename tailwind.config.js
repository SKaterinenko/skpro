/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    letterSpacing: {
      widest: '.28em',
    },
    extend: {
        screens: {
            '3xl': '1756px',
        },
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui']
      },
    },
  },
  plugins: [],
}
