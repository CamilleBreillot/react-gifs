/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.setSelected(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        src={src}
        className="gif"
        alt=""
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
