/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    animation: ["motion-safe"]
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#D972FF",
        "secondary": "#D926A9",
        "accent": "#42351f",
        "neutral": "#ffffff",
        "base-100": "#f8f2e8",
        "base-200": "#a11d66",
        "info": "#e39f53",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
        "logo": "#a11d66",
        "bbc": "#861657"
      }
    }]
  },
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeInLeft: "fadeInLeft 2s ease-out",
        fadeInRight: "fadeInRight 2s ease-out",
        wave: "wave 1.5s infinite",
        fadeInBottom: "fadeInBottom 2s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        fadeOut: {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-40px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)"
          }
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(40px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)"
          }
        },
        fadeInBottom: {
          "0%": {
            transform: "translateY(120px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        wave: {
          "0%": {
            transform: "rotate(0.0deg)"
          },
          "15%": {
            transform: "rotate(14.0deg)"
          },
          "30%": {
            transform: "rotate(-8.0deg)"
          },
          "40%": {
            transform: "rotate(14.0deg)"
          },
          "50%": {
            transform: "rotate(-4.0deg)"
          },
          "60%": {
            transform: "rotate(10.0deg)"
          },
          "70%": {
            transform: "rotate(0.0deg)"
          },
          "100%": {
            transform: "rotate(0.0deg)"
          }
        }
      },

      backgroundImage: {
        'Services-iconimg' : "url('/src/Components/ComponentImgs/Fritter.PNG')"

      }
    }
  },
  plugins: [require("daisyui", 'tw-elements/dist/plugin')]
};