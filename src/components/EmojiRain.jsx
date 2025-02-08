import { motion } from 'framer-motion';
import { useEffect } from 'react';

const EmojiRain = ({ emojis, count = 12, onComplete }) => {
  useEffect(() => {
    // Call onComplete after animation duration
    const timer = setTimeout(() => {
      onComplete?.(); // Optional chaining in case onComplete isn't provided
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const positions = [...Array(count)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: -20 - (Math.random() * 100),
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    scale: 0.7 + Math.random() * 0.6,
    duration: 1.5 + Math.random() * 1,
    delay: Math.random() * 0.7
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {positions.map((config, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: config.x,
            y: config.y,
            opacity: 1,
            scale: config.scale
          }}
          animate={{ 
            y: window.innerHeight + 50,
            opacity: [1, 1, 0.8],
          }}
          transition={{ 
            duration: config.duration,
            delay: config.delay,
            ease: "linear"
          }}
          className="absolute text-2xl will-change-transform"
        >
          {config.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default EmojiRain;