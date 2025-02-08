import { motion, AnimatePresence } from 'framer-motion';

const EmojiRain = ({ show, emojis, side = 'center' }) => {
  const getXPosition = () => {
    switch(side) {
      case 'left':
        return Math.random() * (window.innerWidth / 2 - 100);
      case 'right':
        return window.innerWidth/2 + Math.random() * (window.innerWidth/2 - 100);
      default:
        return Math.random() * window.innerWidth;
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: -20,
                x: getXPosition(),
                opacity: 1,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: window.innerHeight + 20,
                rotate: Math.random() * 360
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 0.5
              }}
              className="absolute text-2xl"
            >
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default EmojiRain;