import { motion } from 'framer-motion';

const Button = ({ onClick, className, style, children, isNo, onMouseEnter }) => {
  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter} 
    >
      {children}
    </button>
  );
};

export default Button;