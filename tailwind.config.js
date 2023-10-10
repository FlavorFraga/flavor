import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  // remove unused styles in production
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "black-i": "var(--black-i)",
        "gray-i": "var(--gray-i)",
        "gray-ii": "var(--gray-ii)",
        "gray-iii": "var(--gray-iii)",
        green: "var(--green)",
        orange: "var(--orange)",
        white: "var(--white)",
      },
      fontFamily: {
        "text-desktop": "var(--text-desktop-font-family)",
        "text-mobile": "var(--text-mobile-font-family)",
        title: "var(--title-font-family)",
        "title-big": "var(--title-big-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) {... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
