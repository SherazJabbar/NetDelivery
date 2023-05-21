const { gray } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem",
      md: "15px", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
    },
    minHeight: {
      28: "112px",
      200:"200px",
      250: "250px",
    },

    extend: {
      colors: {
        primary: "#FCBC04",
        secondary: "#000000",
        white: "#F5F5F5",
        gray: "#F2F2F2",
        darkgray: "#eeeeee",
        green: "#03B003",
        red: "#FF0000",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        sm: "8px",
        md: "26px",
        lg: "32px",
        xl: "48px",
        600: "600px",
      },
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
};
