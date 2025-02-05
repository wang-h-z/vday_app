import { motion } from 'framer-motion';

const Button = ({ onClick, className, style, children, isNo = false }) => {
  return isNo ? (
    <motion.button
      initial={{ position: 'absolute', left: '50%', top: '50%' }}
      animate={style}
      transition={{ duration: 0.3 }}
      className={`rounded-lg text-white transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  ) : (
    <button
      className={`rounded-lg text-white transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;