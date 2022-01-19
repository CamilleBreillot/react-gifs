import React,  { Component } from 'react';
import Search from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
          <Search />
        <div className="selected-gif">
          <Gif id="aNJi783l8MnTtxIKWl"/>
        </div>
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
