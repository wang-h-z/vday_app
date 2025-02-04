import React from 'react';

const Button = ({ onClick, className, style, children }) => (
  <button
    className={`rounded-lg text-white transition-all ${className}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;