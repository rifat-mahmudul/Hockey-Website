/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "color-first" : "#ff4240",
        "color-secound": "#c43230"
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}

