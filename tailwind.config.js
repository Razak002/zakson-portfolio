
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['"kalam"', 'cursive'],
        openSans: [' "open sans" ', 'sans-serif'],
        Gothic: ['"Gothic A1"'],
        Montserrat: [' "Montserrat" '],
      },
    },
  },
  plugins: [],
};
