import { nextui } from '@nextui-org/react'

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        'black-i': 'var(--black-i)',
        'gray-i': 'var(--gray-i)',
        'gray-ii': 'var(--gray-ii)',
        'gray-iii': 'var(--gray-iii)',
        green: 'var(--green)',
        orange: 'var(--orange)',
        white: 'var(--white)',
      },
      fontFamily: {
        text: 'var(--text-font-family)',
        title: 'var(--title-font-family)',
        'title-big': 'var(--title-big-font-family)',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
