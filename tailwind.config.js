/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      dmSans: ['DM Sans', 'sans-serif'],
    },
    colors: {
      primary: '#FF5C00',
      secondary: '#FFC700',
      white: '#FFFFFF',
      black: '#000000',
      lightGray: '#E6E8EC',
      darkGray: '#777E90',
    },
  },
  plugins: [],
};
