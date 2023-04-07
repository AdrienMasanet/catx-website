const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "catx-red": "#970502",
      "catx-yellow": "#fee300",
      "catx-black": "#171716",
      "catx-white": "#fafafa",
    },
    extend: {
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
    },
  },
  plugins: [],
};
