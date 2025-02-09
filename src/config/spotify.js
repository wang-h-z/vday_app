export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
export const redirectUri = import.meta.env.PROD 
  ? "vday-app-delta.vercel.app"  // Vercel production URL
  : "http://localhost:5173";
export const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "app-remote-control",
  "streaming"
];