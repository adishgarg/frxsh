/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        cream: '#f5f5dc',
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.1), 0 10px 15px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}