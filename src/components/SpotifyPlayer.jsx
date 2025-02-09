import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SpotifyWebApi from 'spotify-web-api-js';
import { loginUrl } from '../utils/auth';

const SpotifyPlayer = ({ accessToken }) => {
 const [player, setPlayer] = useState(null);
 const [currentTrack, setCurrentTrack] = useState(null);
 const [isPaused, setIsPaused] = useState(true);
 const [loadingTime, setLoadingTime] = useState(0);

 const refreshAuth = () => {
   localStorage.removeItem('spotify_token');
   window.location.href = loginUrl;
 };

 // Add loading time tracker
 useEffect(() => {
   let timer;
   if (!currentTrack) {
     timer = setInterval(() => {
       setLoadingTime(prev => prev + 1);
     }, 1000);
   }
   return () => clearInterval(timer);
 }, [currentTrack]);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);

    // Load SDK
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Valentine Player',
        getOAuthToken: cb => { cb(accessToken); }
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        spotifyApi.transferMyPlayback([device_id]);
      });

      // State changes
      player.addListener('player_state_changed', state => {
        if (!state) return;
        setCurrentTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      });

      player.connect();
      setPlayer(player);
    };

    return () => {
      if (player) player.disconnect();
    };
  }, [accessToken]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 left-4 bg-white/90 p-4 rounded-xl shadow-xl w-80"
    >
      {currentTrack ? (
        <div className="flex items-center gap-4">
          <img 
            src={currentTrack.album.images[0].url} 
            alt="Album Art"
            className="w-16 h-16 rounded-lg"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{currentTrack.name}</h3>
            <p className="text-sm text-gray-600 truncate">
              {currentTrack.artists[0].name}
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <button onClick={() => player?.previousTrack()}>⏮️</button>
              <button onClick={() => player?.togglePlay()}>
                {isPaused ? '▶️' : '⏸️'}
              </button>
              <button onClick={() => player?.nextTrack()}>⏭️</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-2">
          <p className="mb-3">Loading music player...</p>
          {loadingTime > 5 && (
            <motion.button
              onClick={refreshAuth}
              className="px-4 py-2 bg-rose-500 text-white rounded-full text-sm font-medium hover:bg-rose-600 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Refresh Player Token
            </motion.button>
          )}
        </div>
      )}
    </motion.div>
  );
 };
 
 export default SpotifyPlayer;