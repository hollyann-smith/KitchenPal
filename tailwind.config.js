/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sea-green': '#BBCEBA',
        'forest-green': '#628662',
        'kitchen-pink': '#E1A0A0',
        'kitchen-mustard': '#FFBD47',
        'kitchen-gray': {
          50: '#C9C9C9',
          100: '#F2F2F2',
          600: '#525252',
        },
      },
    },
  },
  plugins: [],
};
