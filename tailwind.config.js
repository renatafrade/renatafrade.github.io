/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./partials/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Crimson Pro", "Georgia", "serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      minHeight: {
        18: "4.5rem",
      },
      colors: {
        accent: {
          DEFAULT: "#5b21b6",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
        },
      },
    },
  },
  plugins: [],
};
