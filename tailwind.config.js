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
      rotate: {
        cos: '720deg',
      },
      translate: {
        btn1: '-5.2rem',
        btn2: '-3.2rem',
        btn3: '-1.2rem',
        btn4: '0.8rem',
        letter1: '2.5rem',
        letter2: '4.5rem',
        letter3: '6.5rem',
        letter4: '8.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
