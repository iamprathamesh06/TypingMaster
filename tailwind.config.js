/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgColor: '#323437',
        mainColor: '#e2b714',
        caretColor: '#e2b714',
        subColor: '#646669',
        subAltColor: '#2c2e31',
        textColor: '#d1d0c5',
        errorColor: '#ca4754',
        errorExtraColor: '#7e2a33',
        colorfulErrorColor: '#ca4754',
        colorfulErrorExtraColor: '#7e2a33',
      },
    },
  },
  plugins: [],
}

