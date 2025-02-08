// App.jsx
import { useState } from 'react'
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
  
  const wolfEmojis = ['🐺', '🌙', '🐾'];
  const flowerEmojis = ['🌹', '🌸', '🌷', '🌺', '💐'];

  const handleYesClick = () => {
    setYesPressed(true);
    
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    const root = ReactDOM.createRoot(container);
    root.render(
      <EmojiRain 
        emojis={['❤️']} 
        count={50}  // Specify higher count just for heart rain
        onComplete={() => {
          root.unmount();
          document.body.removeChild(container);
        }}
      />
    );
  };

  const handleProfileClick = (side) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

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

  const handleNoClick = () => {
    setNoCount(c => c + 1)
    setIsMoving(true)
    const newX = Math.random() * (window.innerWidth - 200)
    const newY = Math.random() * (window.innerHeight - 100)
    setNoPosition({ x: newX, y: newY })
  }

  const handleModalClose = () => {
    setYesPressed(false);
    setNoCount(0);
    setIsMoving(false);
    setNoPosition({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-8">
      <ProfilePictures 
        image1Src="/cece.jpg"
        image2Src="/me.jpg"
        onProfileClick={handleProfileClick}
      />
      <h1 className="text-6xl font-bold mb-16 text-gray-800">
        be my valentines pls (ik i asked u alr but yah.)
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

      <SuccessModal 
        isOpen={yesPressed} 
        onClose={handleModalClose}
      />
    </div>
  )
}

export default App