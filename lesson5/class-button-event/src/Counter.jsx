import React, { Component } from 'react';
import './goodButton.scss';
// algo
// 1. Create class component Clock
// 2. Set props to inner state
// 3. Change and render new time after each second
//  3.1. Use moment to transform date to time

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  click(event) {
    alert(event.target.textContent);
  }

  render() {
    return (
      <div className="fancy-button" onClick={this.click.bind(this)}>
        Click me
      </div>
    );
  }
}

export default Counter;
