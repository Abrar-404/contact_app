/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

// tailwind.config.js
// tailwind.config.js
// const { nextui } = require('@nextui-org/theme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // single component styles
//     './node_modules/@nextui-org/theme/dist/components/button.js',
//     // or you can use a glob pattern (multiple component styles)
//     './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: 'class',
//   plugins: [nextui()],
// };
