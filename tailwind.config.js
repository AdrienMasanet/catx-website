const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "catx-red": "#970502",
        "catx-yellow": "#fee300",
        "catx-black": "#171716",
        "catx-white": "#fafafa",
      },
      fontFamily: {
        bignoodletitling: ["var(--font-bignoodletitling)"],
        raleway: ["var(--font-raleway)"],
      },
      maxWidth: {
        "9/10": "90%",
      },
      transitionTimingFunction: {
        "catx-ease": "cubic-bezier(0.08, 0.04, 0, 1)",
      },
      dropShadow: {
        "catx-red-hard-sm": ".1em .1em 0 #970502",
        "catx-red-hard-md": ".2em .2em 0 #970502",
      },
    },
  },
  plugins: [],
};
