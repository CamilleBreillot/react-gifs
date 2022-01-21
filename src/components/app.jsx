/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import Search from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  // search = (query) => {
  //   giphy('FjxyPCmkRrA2Z00TSWkWN6nJOvY3dO5j').search({
  //     q: query,
  //     rating: 'g',
  //     limit: 10
  //   }, (error, result) => {
  //     this.setState({
  //       gifs: result.data
  //     });
  //   });
  // }

  search = (query) => {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=FjxyPCmkRrA2Z00TSWkWN6nJOvY3dO5j&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      // const gifs = data.data.map(giph => giph.id);
      this.setState({
        gifs: data.data
      });
    });
  }

  setSelected = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <Search search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setSelected={this.setSelected} />
        </div>
      </div>
    );
  }
}

export default App;
