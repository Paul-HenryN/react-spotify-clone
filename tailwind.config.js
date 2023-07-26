/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Roboto, sans-serif",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
      extrabold: 900,
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
