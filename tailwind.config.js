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
      purple4: '#DD94FF',
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
        rightslide: 'rightslide 0.5s ease-in-out forwards',
        leftslide: 'leftslide 0.5s ease-in-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        growLine: 'growLine 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        rightslide: {
          "0%": { transform: 'translateX(100%)' },
          "100%": { transform: 'translateX(0%)' }
        },
        leftslide: {
          "0%": { transform: 'translateX(-100%)' },
          "100%": { transform: 'translateX(0%)' }
        },
        slideUp: {
          "0%": { opacity: 0, transform: 'translateY(40px)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: '0 0 5px #9C12DC, 0 0 10px #9C12DC' },
          "50%": { boxShadow: '0 0 15px #DD94FF, 0 0 30px #9C12DC' }
        },
        growLine: {
          "0%": { height: '0%' },
          "100%": { height: '100%' }
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
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    animation: ["motion-safe"],
    scrollbar: ['rounded'],
  },
}