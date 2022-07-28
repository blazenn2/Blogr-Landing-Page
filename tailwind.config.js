module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ms': { 'max': '375px' },
        'ls' : { 'min' : '1440px'}
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}