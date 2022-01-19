import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media.giphy.com/media/aNJi783l8MnTtxIKWl/giphy.gif"
    return (
        <img src={src} className="gif" alt=""/>
    );
  }
}

export default Gif;
