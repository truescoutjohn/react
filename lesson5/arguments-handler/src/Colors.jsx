// algo
// 1. Create class-component Colors
// 2. Create function which is changed colors
//   2.1. Get event.target color style
//   2.2. Apply this color to body

import React, { Component } from 'react';

class Colors extends Component {
  switchColor(event) {
    document.body.style.backgroundColor = event.target.style.backgroundColor;
  }

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          style={{ backgroundColor: '#f00' }}
          onClick={this.switchColor.bind(this)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#0f0' }}
          onClick={this.switchColor.bind(this)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: '#00f' }}
          onClick={this.switchColor.bind(this)}
        ></button>
      </div>
    );
  }
}

export default Colors;
