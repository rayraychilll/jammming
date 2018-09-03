//create empty JS module called Spotify

const client_id: '11859478ed4a47a7bf2100cf70af1cde';
const redirect_uri: 'http://localhost:3000/';

const accessToken = '';

const Spotify = {
  getAccessToken() { //#79
    if (window.location.href.match('https://accounts.spotify.com/authorize')) {
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123';
    } else {
      window.location.href = 'ENTER A URL';
    }

  }
}

});

export default Spotify;




getAccessToken() {
if (/*parse url for an access token; if there IS one, then...*/) {
  const access_token = window.location.href.match(/access_token=([^&]*)/);
  const expires_in = window.location.href.match(/expires_in=([^&]*)/);
  return access_token = accessToken; //return the value saved to access token
  if the access token and expo time are in the URL, then
    const access_token = '/access_token=([^&]*)/';
    const expires_in = '/expires_in=([^&]*)/';
    //set the access token to expire at the value for expiration time;
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
    -make sure the access token variable is empty and not in the URL;
    window.location.href = 'https://accounts.spotify.com/authorize?client_id={client_id}&response_type=token&scope=playlist-modify-public&redirect_uri={redirect_uri}';
} else { //parse url for an access token; if there ISN'T one, then...
  check the URL to see if it has just been obtained [

]
}
}

to retrieve access token and expo time from URL, do:
window.location.href.match('https://accounts.spotify.com/authorize#access_token={access_token}&token_type=Bearer&expires_in={expires_in}&state={state}');
