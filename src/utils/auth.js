import { authEndpoint, clientId, redirectUri, scopes } from '../config/spotify';

// Generate random state string
const generateRandomString = (length) => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const state = generateRandomString(16);

// Create login URL
export const loginUrl = `${authEndpoint}?` + new URLSearchParams({
  response_type: "token",
  client_id: clientId,
  scope: scopes.join(" "),
  redirect_uri: redirectUri,
  state: state
}).toString();

// Parse token from URL
export const getTokenFromUrl = () => {
  console.log('LOGGIN IN');
  console.log('Current hash:', window.location.hash);
  
  const result = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
    
  console.log('Result:', result);
  return result;
};