/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Krub'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0C0C0C',
      black2: '#300566',
      white: '#FFFFFF',
      white2: '#D9D9D9',
      Background: '#0C1014',
      purple1: '#9C12DC',
      purple2: '#300566',
      purple3: '#B41992',
      blue: '#eae9ee',
      gray: "#9CA3AF",
      gray2: "#1E1E1E",
      pink: "#B41992",
      orange: "#E17E08",

    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        }
      },
      height: {
        '110': '26.2rem',
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
      },
      maxWidth: {
        "2xs": '12rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }

    },
  },
  plugins: [
  ],
  variants: {
    animation: ["motion-safe"]
  },
}