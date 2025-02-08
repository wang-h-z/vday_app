import { useState, useRef } from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Button from './components/Button'
import SuccessModal from './components/SuccessModal'
import ProfilePictures from './components/ProfilePictures'
import EmojiRain from './components/EmojiRain'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [rainComponents, setRainComponents] = useState([]);
  
  const wolfEmojis = ['🐺', '🌙', '🐾'];
  const flowerEmojis = ['🌹', '🌸', '🌷', '🌺', '💐'];

  const handleProfileClick = (side) => {
    // Create and append a new div for this rain instance
    const container = document.createElement('div');
    document.body.appendChild(container);

    // Render a new, independent rain instance
    const root = ReactDOM.createRoot(container);
    root.render(
      <EmojiRain 
        emojis={side === 'left' ? wolfEmojis : flowerEmojis} 
        onComplete={() => {
          root.unmount();
          document.body.removeChild(container);
        }}
      />
    );
  };

  const heartRainRef = useRef()

  const handleNoClick = () => {
    setNoCount(c => c + 1)
    setIsMoving(true)
    // Calculate new position within viewport bounds
    const newX = Math.random() * (window.innerWidth - 200)
    const newY = Math.random() * (window.innerHeight - 100)
    setNoPosition({ x: newX, y: newY })
  }

  const handleRainComplete = (rainId) => {
    setRains(prev => prev.filter(rain => rain.id !== rainId));
  };

  const handleYesClick = () => {
    setYesPressed(true);
    heartRainRef.current?.createRainInstance();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-8">
      <ProfilePictures 
        image1Src="/path-to-your-image.jpg"
        image2Src="/path-to-date-image.jpg"
        onProfileClick={handleProfileClick}
      />
      <h1 className="text-6xl font-bold mb-16 text-gray-800">
        { 'Be my valentines (ik i asked u alr but yah.)' }
      </h1>
      
      <div className="flex gap-8 items-center relative">
        <Button 
          className="bg-rose-500 hover:bg-rose-600 px-8 py-4 text-xl font-semibold shadow-lg rounded-xl"
          onClick={handleYesClick}
        >
          Yes 💖
        </Button>

        <Button 
          isNo 
          className="bg-gray-500 hover:bg-gray-600 px-8 py-4 text-xl font-semibold shadow-lg rounded-xl"
          style={{
            position: isMoving ? 'fixed' : 'static',
            left: isMoving ? `${noPosition.x}px` : 'auto',
            top: isMoving ? `${noPosition.y}px` : 'auto',
            transition: 'all 0.3s ease'
          }}
          onClick={handleNoClick}
        >
          {['no', 'are you sure?', 'really?', 'WTF! ','uk its just gna keep going right', 'please?', 'PLEASEEEE', 'OMGGGG JUST SAY YESSSSS', 'CECE PLEASSEEEEE'][noCount] || 'i ran out of texts 🥺'}
        </Button>
      </div>

      <SuccessModal isOpen={yesPressed} />
      <EmojiRain ref={heartRainRef} emojis={['❤️']} />
    </div>
  )
}

export default App