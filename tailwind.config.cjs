/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),
      colors: {
        black: "#141521",
       
        accent: {
         50: "#EBEDFF",
      100: "#D6DAFF",
      200: "#A8B1FF",
      300: "#808CFF",
      400: "#5263FF",
      500: "#283CFF",
      600: "#0017EB",
      700: "#0012B3",
      800: "#000C75",
      900: "#00063D"
        },
      },
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],

      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        marquee3: 'marquee3 15s linear infinite',
        marquee4: 'marquee4 15s linear infinite',
        typing: "typing 3s steps(20) alternate, blink .7s infinite",
        typing2: "typing2 6s steps(20) alternate, blink .7s infinite",
        gifentrance: "gifentrance 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) 6.5s both",
        fadein: "fadein 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        typing2: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "60%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        gifentrance: {
          "0%": {
            transform: "scale(2)",
            filter: "blur(4px)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1"
          }
        },
        fadein: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }  
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
