import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        name: 'name',
        artist: 'artist',
        album: 'album',
        id: 'id'
      ]
      ];
      playlistName: 'Dope Playlist',
      playlistTracks: [
        name: 'Dance to This',
        artist: 'Troye Sivan, Ariana Grande',
        album: 'Bloom',
        id: '1NbGcdgwRHZ5rbPIT9hdR3'
    ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

addTrack(track) {
  this.setState({
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  })
}

removeTrack(track) {
  this.setState({
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
      return;
    }
  })
}

updatePlaylistName(name) {
  this.setState({
    this.state.playlistName = this.playlist.input; //#57
  })
}

savePlaylist() {
  //generates an array of uri values called trackURIs from the playlistTracks property.. #63
}

search(term) {
  console.log(term);
}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={search}/> //need a this? #68
          <div className="App-playlist">
            <SearchResults searchResults ={this.state.searchResults} onAdd={this.state.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.state.removeTrack} onNameChange={this.state.updatePlaylistName} onSave={this.savePlaylist}/> //not sure about state in removeTrack or savePlaylist. #64 playlistName is #58
          </div>
        </div>
      </div>
    );
  }
}

export default App;
