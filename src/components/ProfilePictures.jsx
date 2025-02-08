import { motion } from 'framer-motion';

const ProfilePictures = ({ image1Src, image2Src }) => {
 return (
   <div className="flex gap-4 mb-8">
     <motion.div 
       className="relative w-32 h-32"
       initial={{ x: -100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
     >
       <img 
         src={image1Src} 
         alt="Profile 1" 
         className="rounded-full w-full h-full object-cover border-4 border-rose-400 shadow-lg"
       />
     </motion.div>

     <motion.div 
       className="relative w-32 h-32"
       initial={{ x: 100, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
     >
       <img 
         src={image2Src} 
         alt="Profile 2" 
         className="rounded-full w-full h-full object-cover border-4 border-rose-400 shadow-lg"
       />
     </motion.div>
   </div>
 );
};

export default ProfilePictures;