import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import SuccessModal from './components/SuccessModal'
import ProfilePictures from './components/ProfilePictures';

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  const handleNoClick = () => {
    setNoCount(c => c + 1)
    setIsMoving(true)
    // Calculate new position within viewport bounds
    const newX = Math.random() * (window.innerWidth - 200)
    const newY = Math.random() * (window.innerHeight - 100)
    setNoPosition({ x: newX, y: newY })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-8">
      <ProfilePictures 
        image1Src="/path-to-your-image.jpg"
        image2Src="/path-to-date-image.jpg"
      />
      <h1 className="text-6xl font-bold mb-16 text-gray-800">
        { 'Be my valentines (ik i asked u alr but yah.)' }
      </h1>
      
      <div className="flex gap-8 items-center relative">
        <Button 
          className="bg-rose-500 hover:bg-rose-600 px-8 py-4 text-xl font-semibold shadow-lg rounded-xl"
          onClick={() => setYesPressed(true)}
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
    </div>
  )
}

export default App