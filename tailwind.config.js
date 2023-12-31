/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#14183E",
      orange: "#DF6951",
      yellow: "#F1A501",
      gray: "#5E6282",
      light_black: "#212832",
      green: "#006380",
      orange2: "#F15A2B",
      color2: "#DFD7F9"
    },
    fontFamily: {
      opensans: ['Open Sans', "sans-serif"],
      poppins: ['Poppins', "sans-serif"],
      volkhov: ['Volkhov', "serif"]
    },
    screens: {
      xsm: "400px",
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1300px",
      xxl: "1500px"
    },
    extend: {
      
    },
  },
  plugins: [],
}