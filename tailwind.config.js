/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mountains-majesty": "#9078C0",
        "dark-levander": "#6C559F",
        mustard: "#FDCC0D",
      },
      minHeight: {
        "3/4": "75vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
