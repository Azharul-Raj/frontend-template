/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'merienda': ['Merienda', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        primary:"#396c03",
        secondary:"#676767",
        yellow:"#FF8B00",
        disable:"#C7C7C7"
      }
    },
  },
  plugins: [],
}