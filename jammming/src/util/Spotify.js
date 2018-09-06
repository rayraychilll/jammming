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
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
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


/*
//#89-94
  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs) {
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      // GET user ID
      let userID;
      return fetch('https://api.spotify.com/v1/me',
    { headers: headers }
  ).then(response => response.json()
).then(jsonResponse => {
     // POST new playlist to user account
     userId = jsonResponse.id;
     return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
     {
       method: 'POST',
       headers: headers,
       body: JSON.stringify({name: name})
     }).then(response => response.json()
   ).then(jsonResponse => {
     //receive playlist ID from request
             const playlistId = jsonResponse.id;
             return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
             {
               method: 'POST',
               headers: headers,
               body: JSON.stringify({uris: trackUris})
             });
           });
        });
 } else {
  return;
  }
},

export default Spotify;
*/

savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};

export default Spotify;
