/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        // DEFAULT: "10rem", // Set your desired padding here
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
  },
  plugins: [],
};
