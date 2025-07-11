/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#484349",
        "primary-content": "#F7F0F0",
        secondary: "#F7F0F0",
        "secondary-content": "#484349",
        accent: "#B07156",
        "accent-dark": "#8CBA80",
        info: "#18A999",
      },
      borderRadius: {
        'xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
