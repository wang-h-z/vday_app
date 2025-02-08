export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const redirectUri = "http://localhost:5173"; 
export const playlistId = "32tJT506SK5kdQJDd5toTI?si=7776727d31154948"; 
export const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "app-remote-control", // Add this
  "web-playback-sdk", // Add this
  "user-library-read", // Add this
  "user-library-modify", // Add this
  "playlist-read-private", // Add this
  "playlist-modify-private" // Add this
];