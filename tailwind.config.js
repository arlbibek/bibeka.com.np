/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        "my-yellow": "#b0914f",
      },
    },
    fontFamily: {
      serif: ["var(--font-merriweather)"],
      mono: ["Consolas", "Courier New", "monospace"],
    },
  },
  plugins: [],
};
