import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const initializePlayer = (token) => {
  spotifyApi.setAccessToken(token);
};

export const startPlayback = async (deviceId) => {
  try {
    await spotifyApi.play({
      device_id: deviceId,
      context_uri: `spotify:playlist:${playlistId}`,
    });
  } catch (error) {
    console.error("Error starting playback:", error);
  }
};

export const getPlaylistTracks = async () => {
  try {
    const response = await spotifyApi.getPlaylist(playlistId);
    return response.tracks.items;
  } catch (error) {
    console.error("Error fetching playlist:", error);
    return [];
  }
};