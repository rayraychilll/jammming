import React from 'react';
import './SearchBar.css';

search() {
  this.props.onSearch(this.state.term); //#69
}

handleTermChange(event) {
  this.state.term = event.target.value;
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  render() {
    return (
    <div className="SearchBar">
      <input placeholder="Enter a Song, Album, or Artist" onChange={this.handleTermChange}/>
      <a>SEARCH</a>
    </div>
  )
  }
}

export default SearchBar;
