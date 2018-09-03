import React from 'react';
import TrackList from './components/TrackList/TrackList.js';
import '.Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
    this.playlist.onNameChange(event.target.value); //#59 needs input?
  }
  render() {
    return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} onChange={this.props.handleNameChange}/>//not sure about isRemoval={true}..#51
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    )
  }
}

export default Playlist;
