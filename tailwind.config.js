module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      thin: 300,
      normal: 400,
      semibold: 500,
      bold: 600,
      extrabold: 700,
    },
    screens: {
      sm: "640px",

      md: "768px",

      "lg-md": "790px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        inter: ["Rubik", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      width: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "60p": "60%",
      },
      height: {
        "10p": "10%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "60p": "60%",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
      },
    },
  },
  plugins: [],
};
