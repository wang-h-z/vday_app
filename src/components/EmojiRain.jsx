import { motion } from 'framer-motion';
import { useEffect } from 'react';

const EmojiRain = ({ emojis, onComplete }) => {
  const positions = [...Array(12)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: -20 - (Math.random() * 50),
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    scale: 0.8 + Math.random() * 0.4,
    duration: 1.5 + Math.random() * 0.5
  }));

  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          }}
          transition={{ 
            duration: config.duration,
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