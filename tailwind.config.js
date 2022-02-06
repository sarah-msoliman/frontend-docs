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
          300: "#6d6e70",
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
        w77: "77%"
      },
      height: {
        h4: "4px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
