import React, { Component } from 'react';

class Search extends Component {
  handleUpdate = (event) => {
    return event.target.value;
  }

  render() {
    return (
      <input className='form-search form-control' type='text'
      onChange={this.handleUpdate}></input>
    );
  }
}

export default Search;
