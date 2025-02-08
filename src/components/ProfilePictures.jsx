import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProfilePictures = ({ image1Src, image2Src, onProfileClick }) => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  return (
    <div className="flex gap-8 mb-12">
      <motion.div 
        className="relative group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-40 h-40 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovering1(true)}
          onHoverEnd={() => setIsHovering1(false)}
          onClick={() => onProfileClick('left')}
        >
          <img 
            src={image1Src} 
            alt="Profile 1" 
            className="rounded-full w-full h-full object-cover border-4 border-rose-400 shadow-lg 
                       transition-all duration-300 group-hover:border-rose-500"
          />
          
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovering1 
                ? '0 0 25px rgba(244, 114, 182, 0.6)' 
                : '0 0 0px rgba(244, 114, 182, 0)'
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-white px-4 py-1 rounded-full shadow-md text-rose-500 font-semibold flex items-center gap-1">
            You <span className="text-sm">🐺</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Second profile with flower emojis */}
      <motion.div 
        className="relative group"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-40 h-40 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onHoverStart={() => setIsHovering2(true)}
          onHoverEnd={() => setIsHovering2(false)}
          onClick={() => onProfileClick('right')}
        >
          <img 
            src={image2Src} 
            alt="Profile 2" 
            className="rounded-full w-full h-full object-cover border-4 border-rose-400 shadow-lg 
                       transition-all duration-300 group-hover:border-rose-500"
          />
          
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isHovering2 
                ? '0 0 25px rgba(244, 114, 182, 0.6)' 
                : '0 0 0px rgba(244, 114, 182, 0)'
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-white px-4 py-1 rounded-full shadow-md text-rose-500 font-semibold flex items-center gap-1">
            Your Date 😁 <span className="text-sm"></span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePictures;