/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  //@ts-ignore until daisyui types are added https://github.com/saadeghi/daisyui/pull/1469
  plugins: ["@tailwindcss/typography", require("daisyui")],
};
