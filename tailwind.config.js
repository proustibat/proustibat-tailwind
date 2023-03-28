/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  // darkMode: 'class',
  theme: {
    fontFamily: {
      header: ['Raleway', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },

    shadows: {
      default: '0 2px 18px rgba(0, 0, 0, 0.06)',
      md: '0 -3px 36px rgba(0, 0, 0, 0.12)',
    },
    extend: {
      colors: {
        'blue-diane': '#264653',
        'jungle-green': '#2a9d8f',
        'rob-boy': '#e9c46a',
        'sandy-brown': '#f4a261',
        'burnt-sienna': '#e76f51',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        42: '10.5rem',
        76: '19rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        124: '31rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
        152: '38rem',
        156: '39rem',
        160: '40rem',
        164: '41rem',
        168: '42rem',
        172: '43rem',
        176: '44rem',
        180: '45rem',
        184: '46rem',
        188: '47rem',
        190: '48rem',
        194: '49rem',
        200: '50rem',
        204: '51rem',
      },
      zIndex: {
        '-1': '-1',
        60: '60',
        70: '70',
      },
      inset: {
        '2/5': '40%',
      },
      transitionDuration: {
        0: '0ms',
        3000: '3000ms',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
