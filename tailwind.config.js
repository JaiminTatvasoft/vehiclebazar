/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" }, // Set the bounce height
        },
      },
      animation: {
        customBounce: "customBounce 1.5s infinite", // Define the animation name, duration, and repeat
      },
      colors: {
        lightGreen: "#D6EFD8",
        mediumGreen: "#80AF81",
        darkGreen: "#508D4E",
        darkestGreen: "#1A5319",
        textcolor: "#343434",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
