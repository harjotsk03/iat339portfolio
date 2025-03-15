/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Dark theme colors (software engineer)
        engineer: {
          bg: "#141312", // Dark background
          bgSecondary: "#1c1a19", // Dark background
          primary: "#ffffff", // White text
          secondary: "#353335", // Gray-600 equivalent
          accentGreen: "#c5ff41", // Blue-500 equivalent
          accentOrange: "#f46c39", // Blue-500 equivalent
          text: {
            primary: "#ffffff", // White
            secondary: "#353335", // Gray-400 equivalent
            muted: "#343434", // Gray-500 equivalent
          },
        },
      },
    },
  },
  plugins: [],
};
