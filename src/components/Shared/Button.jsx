import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ variant = 'primary', children, className = '' }) => {
  const variants = {
    primary: 'bg-buttonPrimary text-white',
    secondary: 'bg-secondary text-white',
    tertiary: 'bg-tertiary text-white',
    gray: 'border-lightGray border text-primary bg-primaryGray hover:bg-primary hover:text-white',
    black: 'bg-black text-white',
  };
  return (
    <button className={twMerge(`rounded-full px-6 py-4 font-bold text-lg ${variants[variant]}`, className)}>
      {children}
    </button>
  );
};

export default Button;
