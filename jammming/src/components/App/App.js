import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        searchResults: [],
        playlistName: 'New Playlist',
        playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

addTrack(track) {
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
      }
}

removeTrack(track) {
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } else {
      tracks.filter(track);
      this.setState({playlistTracks: tracks});
      }
}

updatePlaylistName(name) {
  this.setState({
    playlistName: name});
}

//REVIEWING #63-64, 89B, 95
savePlaylist() {
  let trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(playlist => { //playlist?
      this.setState({
        playlistName : 'New Playlist',
        playlistTracks: []
    });
    })
}

search(term) {
  Spotify.search(term).then(tracks => {
    this.setState({
      tracks: tracks
    });
  });
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults ={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
