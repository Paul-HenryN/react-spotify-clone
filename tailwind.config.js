/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "CircularSp, CircularSp-Arab, CircularSp-Hebr, CircularSp-Cyrl, CircularSp-Grek, CircularSp-Deva, Helvetica Neue, helvetica, arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic",
    },
    extend: {
      colors: {
        brand: "#1ed760",
        "accent-1": "#ae2997",
        "accent-2": "#519af4",
      },
    },
  },
  plugins: [],
};
