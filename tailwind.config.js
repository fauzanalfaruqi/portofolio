/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'my-primary': '#3F94A7',
        'my-header': '#5A5A5A'
      },
    },
  },
  plugins: [],
}

