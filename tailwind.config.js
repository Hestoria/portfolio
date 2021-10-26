module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        'xs':'375px',
      },
      width: {
        700:'700px',
        650:'650px',
        575:'575px',
      },
      height: {
        400:'400px',
        300:'300px',
        'session':'calc(100vh - 4rem)',
      },
      inset:{
        '-3/5':'-55%',
        '-2/5':'-35%',
        '-1/5': '-20%',
        '16':'4rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
