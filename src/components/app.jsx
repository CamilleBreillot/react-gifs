import React,  { Component } from 'react';
import Search from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "aNJi783l8MnTtxIKWl"
    }
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <Search />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
