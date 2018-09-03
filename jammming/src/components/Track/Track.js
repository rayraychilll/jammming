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
  renderAction() {           //not sure about this.. #27
    return (isRemoval ? "-" : "+");
  }
  render() {
    return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action">{this.renderAction}</a> //not sure if uses a .this?
    </div>
  )
  }
}

export default Track;




{
  if (isRemoval) {
    return <a onClick ={this.removeTrack}>-</> //#55
  } else {
    return <a onClick={this.addTrack}>+</> //#47
}
