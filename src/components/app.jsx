import React,  { Component } from 'react';
import Search from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {
    const gifs = [
      { id: "aNJi783l8MnTtxIKWl" },
      { id: "ANrbXQ5RtWYpjDhvfN" }
    ];
    return (
      <div>
        <div className="left-scene">
          <Search />
        <div className="selected-gif">
          <Gif id="aNJi783l8MnTtxIKWl"/>
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
