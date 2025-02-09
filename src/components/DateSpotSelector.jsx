import { motion } from 'framer-motion';

const SpotButton = ({ icon, label, link, type }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(link, '_blank')}
      className={`
        flex flex-col items-center justify-center
        bg-white rounded-xl p-3
        shadow-md hover:shadow-lg
        transition-all duration-300
        ${type === 'square' ? 'w-16 h-16' : 'w-16 h-16'}
      `}
    >
      <span className="text-lg mb-1">{icon}</span>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </motion.button>
  );
};

const DateSpotSelector = ({ restaurantUrl, mapsUrl, menuUrl, name, emoji }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2 min-h-[2rem] text-center w-full max-w-[90%] shrink-0">
          <span>{emoji}</span>
          <span>{name}</span>
        </h3>
        
        <div className="flex justify-center gap-4">
          <SpotButton icon="🏰" label="Visit" link={restaurantUrl} />
          <SpotButton icon="📍" label="Map" link={mapsUrl} type="square" />
          <SpotButton icon="📜" label="Menu" link={menuUrl} type="square" />
        </div>
      </div>
    );
  };

export default DateSpotSelector;