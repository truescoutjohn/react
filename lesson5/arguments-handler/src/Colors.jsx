// algo
// 1. Create class-component Colors
// 2. Create function which is changed colors
//   2.1. Get event.target color style
//   2.2. Apply this color to body

import React, { Component } from 'react';
const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.switchColor = this.switchColor.bind(this);
  }

  switchColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: RED }}
          onClick={() => this.switchColor(RED)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#0f0' }}
          onClick={() => this.switchColor(GREEN)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#00f' }}
          onClick={() => this.switchColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
