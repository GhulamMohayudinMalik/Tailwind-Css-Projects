/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./css/**/*.css", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'title': ["Sansita", 'serif'],
        'body': ["Lato", 'sans-serif']
      },
      colors:{
        'pri': "#081F4D",
        'sec': "#0083FF",
        'bg-col': "#D9E6FF",
        'gen': "#3B4D71"
      }
    },
  },
  plugins: [],
}