/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e73be',
        'secondary': '#1B4965',
        'accent': '#8102ce',
        'dark-blue': '#151e7b',
        'light-blue': '#6EC1E4',
      },
    },
  },
  plugins: [],
}
