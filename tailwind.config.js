module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e5533a",
          100: "#ffebdc",
          200: "#febe8b",
          300: "#f66d00",
        },
        secondary: {
          100: "#e7e7e7",
          200: "#ebeff5",
          300: "#6d6e70",
          400: "#718098",
          500: "#e2e8f0",
          600: "#f8f8f8",
          700: "#374453",
          800: "#a0aec0",
          900: "#2d3949"
        },
        white: "#ffffff",
        overlay: "#2126314d"
      },
      padding: {
        imglg: "60%",
        imgsm: "10%",
        tag: "3px 10px"      
      },
      margin: {
        mh: "0 auto"
      },
      width: {
        w31: "31.5%",
        w47: "47%",
        w48: "48%",
        w70: "70%",
        w77: "77%",
        wfit: "fit-content"
      },
      height: {
        h4: "4px",
        h15: "15rem",
        h29: "29rem"
        
      },
      minHeight : {
        h8: "8.3rem",
        mh15: "15rem"
      },
      maxHeight: {
        mh20: "20rem"
      },
      borderWidth: {
        b20: "20px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
