/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          950: "#071e1a",
          900: "#0b2b26",
          800: "#123a33",
          700: "#1a4941",
          600: "#245c52",
        },
        gold: {
          400: "#e2c27a",
          500: "#c8a24d",
          600: "#a9823a",
        },
        cream: {
          50: "#fbf8f2",
          100: "#f5efe1",
        },
        ink: {
          900: "#10231f",
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
