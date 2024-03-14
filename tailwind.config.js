/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      serif: ["DM Sans", "serif"],
    },
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#E0E0E0",
        tertiary: "#616161",
        quaternary: "#757575",
      },
      backgroundImage: {
        'background': "url('src/assets/Background.png')",
      }
    },
  },
  plugins: [],
};
