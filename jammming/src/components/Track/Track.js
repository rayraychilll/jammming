import React from 'react';
import './Track.css';

class extends Track React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack() {
    this.props.onAdd(this.props.track); //#45
  }
  removeTrack() {
    this.props.onRemove(this.props.track); //#53
  }
  renderAction() {
    return (this.props.isRemoval ? "-" : "+");
  }
  render() {
    return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action" onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}>{this.renderAction()}</a>
    </div>
  )
  }
}

export default Track;
