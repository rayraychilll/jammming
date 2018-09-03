const client_id = '11859478ed4a47a7bf2100cf70af1cde';
const redirect_uri = 'http://localhost:3000/';

let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (!accessToken) {
      const access_token = window.location.href.match(/access_token=([^&]*)/);
      const expires_in = window.location.href.match(/expires_in=([^&]*)/);
      if (access_token && expires_in) {
        let accessToken = access_token[1];
        let expiresIn = expires_in[1];
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else {
        window.location.href = 'https://accounts.spotify.com/authorize?client_id={client_id}&response_type=token&scope=playlist-modify-public&redirect_uri={redirect_uri}';
      }
    }
    return accessToken;
  }
}
});

export default Spotify;
