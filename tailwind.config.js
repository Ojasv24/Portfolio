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
      /* Theme-dependent colors (use CSS variables for auto light/dark) */
      black: 'rgb(var(--color-bg-secondary) / <alpha-value>)',
      black2: '#300566',
      white: 'rgb(var(--color-text-primary) / <alpha-value>)',
      white2: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      Background: 'rgb(var(--color-bg-primary) / <alpha-value>)',
      gray: 'rgb(var(--color-text-muted) / <alpha-value>)',
      gray2: 'rgb(var(--color-surface) / <alpha-value>)',
      /* Accent colors stay the same in both themes */
      purple1: '#9C12DC',
      purple2: '#300566',
      purple3: '#B41992',
      purple4: 'var(--color-accent-soft)',
      blue: '#EDE9FE',
      pink: "#B41992",
      orange: "#E17E08",
      green: { 400: "#4ade80" },
      /* Fixed colors (theme-independent) */
      pureWhite: '#FFFFFF',
      pureBlack: '#0C0C0C',
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
        navSlideDown: 'navSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        navFadeIn: 'navFadeIn 0.5s ease-out forwards',
        menuSlideIn: 'menuSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
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
        },
        navSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        navFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        menuSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(156,18,220,0.4), 0 0 10px rgba(156,18,220,0.2)' },
          '50%': { boxShadow: '0 0 15px rgba(156,18,220,0.6), 0 0 30px rgba(156,18,220,0.3), 0 0 45px rgba(156,18,220,0.1)' }
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