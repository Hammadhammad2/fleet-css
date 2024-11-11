import React from 'react';

const Button = ({ variant = 'primary', children, className = '' }) => {
  const variants = {
    primary: 'bg-buttonPrimary text-white',
    secondary: 'bg-secondary text-white',
    tertiary: 'bg-tertiary text-white',
    white: 'bg-white text-black',
    black: 'bg-black text-white',
  };
  return (
    <button className={`rounded-full px-6 py-4 font-bold text-lg ${variants[variant]} ${className}`}>{children}</button>
  );
};

export default Button;
