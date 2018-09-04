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
  },

  search(term) {
    return fetch('https://api.spotify.com/v1/search?type=track&q={term}',
    {
       headers: {Authorization: `Bearer ${accessToken}`}
    }
  ).then(response => {
     return response.json();
   }).then(jsonResponse => {
    if (jsonResponse.tracks) {
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    } else {
        return [];
    }
  });
},


//REVIEWING #89-94
  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs) {
      const accessToken = Spotify.getAccessToken();
      let headers = {Authorization: `Bearer ${accessToken}`};
      let userID = '';
      return fetch('https://api.spotify.com/v1/me',
    {headers: headers}
  ).then(response => {
       return response.json();
     }).then(jsonResponse => {
      if (jsonResponse.id) { //not sure if i need 53-55 or just return jsonResponse.id?
        return jsonResponse.id.map(id => ({
          id: userID //#92
        }));
      }
    });
    return fetch('https://api.spotify.com/v1/playlists/{playlist_id}/tracks');
    }
     else {
      return;
    }
  }}


/*other option
savePlaylist(name, trackUris) {
    if (!playlistName || !trackURIs.length) {
      return;
    }*/

export default Spotify;
