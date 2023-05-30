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
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [
      plugin(({addComponents, theme, addUtilities})=>{
        addUtilities({
          '.bg-gradient-white': {
            background: "linear-gradient(to bottom, transparent, rgb(255, 255, 255)), rgb(214, 219, 220)"
          },
          '.bg-static-black': {
            background: "linear-gradient(to bottom, transparent, rgb(40, 40, 40)), rgb(0, 0, 0)"
          }
        })
      })
  ],
}
