const { gray } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FCBC04',
        secondary: '#000000',
        white: '#F5F5F5',
        gray: '#FBFBFB'
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
      },
      spacing: {
         sm: '8px',
      md: '26px',
      lg: '32px',
      xl: '48px',
      '600': '600px',
      },
    },
  },
  variants: {},
  plugins: [ require('flowbite/plugin')],
};
