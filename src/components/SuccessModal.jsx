import { motion, AnimatePresence } from 'framer-motion';
import { dateSpots } from '../constants/dateSpots';
import DateSpotSelector from './DateSpotSelector';

const SuccessModal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }} // Faster animation
            className="bg-pink-50 p-8 rounded-3xl shadow-2xl text-center max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ repeat: Infinity }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold mb-4">YIPPIE! 🎉</h2>
            </motion.div>

            <p className="text-xl mb-6">lmaoooo i knew you'd say yes! 💕</p>

            <div className="flex justify-center mb-8 space-x-2">
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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dateSpots.map((spot, index) => (
                <motion.div
                  key={spot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                >
                  <DateSpotSelector {...spot} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;