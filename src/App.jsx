import { useState } from 'react'
import './App.css'

import Button from './components/Button'
import SuccessModal from './components/SuccessModal'

function App() {
 const [noCount, setNoCount] = useState(0)
 const [yesPressed, setYesPressed] = useState(false)
 const [noButtonStyle, setNoButtonStyle] = useState({})

 const handleNoClick = () => {
   setNoCount(c => c + 1)
   setNoButtonStyle({
     position: 'absolute', 
     left: `${Math.random() * (window.innerWidth - 100)}px`,
     top: `${Math.random() * (window.innerHeight - 50)}px`,
     transition: 'all 0.3s'
   })
 }

 return (
   <div className="app">
     <h1>Will you be my Valentine?</h1>
     
     <div className="buttons">
       <Button onClick={() => setYesPressed(true)}>
         Yes 💖
       </Button>

       <Button onClick={handleNoClick} style={noButtonStyle}>
         {['No', 'Sure?', 'Really?'][noCount] || 'Please?'}
       </Button>
     </div>

     <SuccessModal isOpen={yesPressed} />
   </div>
 )
}

export default App
