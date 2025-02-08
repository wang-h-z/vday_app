import { motion, AnimatePresence } from 'framer-motion';

const HeartRain = ({ show }) => {
  const hearts = Array(20).fill('❤️');
  
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none">
          {hearts.map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: -100,
                x: Math.random() * window.innerWidth,
                opacity: 1,
                scale: Math.random() + 0.5
              }}
              animate={{ 
                y: window.innerHeight + 100,
                rotate: Math.random() * 360
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 0.5
              }}
              className="absolute text-2xl"
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default HeartRain