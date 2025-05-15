/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      translate: {
        '15': '3.75rem',
        '22': '5.5rem',
        '28': '7rem',
      }
    },
  },
  plugins: [],
}
  