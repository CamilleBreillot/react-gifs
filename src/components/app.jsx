import React,  { Component } from 'react';
import Search from './search_bar.jsx';

class App extends Component {
  render () {
    return (
      <div>
        <div className="left-scene">
          <Search />
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
