/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
    extend: {
      colors: {
        "dark-pri-0": "#282e2e",
        "dark-pri": "#2C3333",
        "dark-pri-2": "#33525a",
        "dark-acc": "#A5C9CA",
        "light-pri-0": "#FFFFFF",
        "light-pri": "#FBF8F1",
        "light-pri-2": "#F7ECDE",
        "light-acc": "#54BAB9",
      },
    },
  },
  plugins: [require("daisyui")],
};
