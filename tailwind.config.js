/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      screens: {
        "xl": "1024px",
        "2xl": "1024px"
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {
      colors:{
        primary: {
          DEFAULT: '#f3c17c',
          dark: '#eab366',
          light: '#DAD1C3'
        },
        secondary: '#194139',
        background: '#FDFBF7',
        text: '#231A16'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}