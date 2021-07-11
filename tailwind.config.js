module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coffee_1: '#dfb78c',
        coffee_2: '#49281a',
        coffee_3: '#ab6832',
      },
      height: {
        hero__1: '90vh',
        hero__2: '70vh',
      },
      fontFamily: {
        body: ['Work Sans'],
        luki: ['Luckiest Guy'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
