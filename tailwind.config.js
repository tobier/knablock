/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js" // configure the Flowbite JS source template paths
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        light: '#eeeeee',
        DEFAULT: '#eeeeee',
        dark: '#dddddd',
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // require Flowbite's plugin for Tailwind CSS
  ],
}
