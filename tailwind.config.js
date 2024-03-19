/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallerscreen: { max: "520px" },
        smallestscreen: { max: "480px" },
        screen: { max: "850px" },
        smallscreen: { max: "1024px" },
        phone: { max: "750px" },
        smallphone: { max: "600px" },
        smallphone1: { max: "460px" },
      },
    },
  },
  plugins: [],
};
