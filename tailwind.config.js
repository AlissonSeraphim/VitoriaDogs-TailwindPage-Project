/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FDA7DF',
      secondary: '#12CBC4',
      tertiary: '#5758BB',
      darkpink: '#D980FA',
      red:'#EA2027',
      black:'#000000',
    },
    extend: {
      keyframes: {
        pulse: {
          '50%': { opacity: .7 },
        }
      }
    },
  },
  plugins: [],
}

