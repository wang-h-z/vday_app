import { motion, AnimatePresence } from 'framer-motion';

const SuccessModal = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="bg-pink-100 p-8 rounded-xl shadow-xl text-center"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ repeat: Infinity }}
            >
              <h2 className="text-3xl font-bold mb-4">Yay! 🎉</h2>
            </motion.div>
            <p className="text-xl">I knew you'd say yes! 💕</p>
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 1,
                    delay: i * 0.2 
                  }}
                >
                  ❤️
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal