/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./public/*.html",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'naranjo':  {
        100 : '#BF2806' ,
        200 : '#F29863',
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
}

