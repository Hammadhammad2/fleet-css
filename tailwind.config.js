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
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '180%': '180%',
      16: '4rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      dmSans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#23262F',
        secondary: '#777E90',
        lightGray: '#E6E8EC',
        buttonPrimary: '#3B71FE',
        primaryGray: '#F4F5F6',
        tabBg: '#353945',
      },
    },
  },
  plugins: [],
};
