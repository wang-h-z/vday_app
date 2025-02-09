import { useState, useEffect } from 'react'
import { getTokenFromUrl, loginUrl } from './utils/auth';
import ReactDOM from 'react-dom/client';
import './App.css'
import Button from './components/Button'
import SuccessModal from './components/SuccessModal'
import ProfilePictures from './components/ProfilePictures'
import EmojiRain from './components/EmojiRain'
import SpotifyPlayer from './components/SpotifyPlayer';

function App() {
  
 const [noCount, setNoCount] = useState(0)
 const [yesPressed, setYesPressed] = useState(false)
 const [noPosition, setNoPosition] = useState({ x: 100, y: 0 })
 const [isHovered, setIsHovered] = useState(false)
 const [token, setToken] = useState(null);
 const wolfEmojis = ['🐺', '🐺', '🐺', '🌙', '🐾'];
 const flowerEmojis = ['🌹', '🌸', '🌷', '🌺', '💐'];
 console.log("Client ID:", import.meta.env.VITE_SPOTIFY_CLIENT_ID);

 useEffect(() => {

  // First check localStorage
  const storedToken = localStorage.getItem('spotify_token');
  console.log('Stored token:', storedToken);

  // Then check URL hash
  const hash = getTokenFromUrl();
  const _token = hash.access_token;
  console.log('URL Hash:', hash);
  console.log('URL Token:', _token);

  // Clear hash if exists
  if (window.location.hash) {
    window.location.hash = "";
  }

  if (_token) {
    console.log('Setting token from URL');
    localStorage.setItem('spotify_token', _token);
    setToken(_token);
  } else if (storedToken) {
    console.log('Setting token from localStorage');
    setToken(storedToken);
  } else {
    console.log('No token found, redirecting to Spotify login');
    window.location.href = loginUrl;
  }
}, []);

console.log('Current token state:', token);


 const handleYesClick = () => {
   setYesPressed(true);
   
   const container = document.createElement('div');
   document.body.appendChild(container);
   
   const root = ReactDOM.createRoot(container);
   root.render(
     <EmojiRain 
       emojis={['❤️']} 
       count={50}
       onComplete={() => {
         root.unmount();
         document.body.removeChild(container);
       }}
     />
   );
 };

 const handleNoHover = () => {
  const padding = 100;
  const maxWidth = window.innerWidth - padding;
  const maxHeight = window.innerHeight - padding;
  
  const newX = Math.min(Math.max(padding, Math.random() * maxWidth), maxWidth);
  const newY = Math.min(Math.max(padding, Math.random() * maxHeight), maxHeight);
  
  setIsHovered(true);
  setNoPosition({ x: newX - window.innerWidth/2, y: newY - window.innerHeight/2 });
  setNoCount(c => c + 1); // Move this from click to hover
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

 const handleModalClose = () => {
  setYesPressed(false);
  setNoCount(0);
  setIsMoving(false);
  setNoPosition({ x: 0, y: 0 });
};

 return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-8">
     <ProfilePictures 
       image1Src="cece.jpg"
       image2Src="me.jpg"
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
            position: isHovered ? 'fixed' : 'static',
            left: isHovered ? '50%' : 'auto',
            top: isHovered ? '50%' : 'auto',
            transform: isHovered ? `translate(calc(-50% + ${noPosition.x}px), calc(-50% + ${noPosition.y}px))` : 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={handleNoHover}
        >
          {['no', 'are you sure?', 'really?', 'WTF! ','uk its just gna keep going right', 'please?', 'PLEASEEEE', 'CECE PLEASSEEEEE', 'i can go all day...', 'this is pointless PRESS YES!!!', 'OMGGGGGG PLEASSEEEEE', '不要这样 lehhh', 'i ran out of texts 🥺', 'SIKEEEEEE', 'ok press yes now!', 'yes', 'pressssssss', 'yessssss'][noCount] || 'i ran out of texts (fr this time) 🥺'}
        </Button>
      </div>

     <SuccessModal 
       isOpen={yesPressed} 
       onClose={handleModalClose}
     />

    {token && (
      <SpotifyPlayer 
        accessToken={token}
        className="fixed bottom-4 left-4 z-50"  
      />
    )}
   </div>
   
 )
}

export default App