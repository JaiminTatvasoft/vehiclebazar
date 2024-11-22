// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
});
