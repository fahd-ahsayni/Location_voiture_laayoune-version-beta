/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1e88e5",

          secondary: "#161616",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#fff",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        'primary-dark-light': '#1A232E',
        'white-dark': "#c7c7c7",
        'primary-dark': '#0d1117',
        'second-dark': "#1c2333",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/heroImage.jpg')",
      },
    },
  },
  plugins: [require("daisyui"),  require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
});
