/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: { min: "640px" },

      md: { min: "768px" },

      lg: { min: "1024px" },

      xl: { min: "1280px" },
    },
    container: {
      center: true,
    },
    colors: {
      white: "#fff",
      grey: "#717171",
      primary: "#4CAF4F",
      "neutral-d-grey": "#4D4D4D",
      silver: "#F5F7FA",
      "neutral-l-grey": "#89939E",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "custom-lg": ["64px", "76px"],
      },
    },
  
  },
  plugins: [],
};
