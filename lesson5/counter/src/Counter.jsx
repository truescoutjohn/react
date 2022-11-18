import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <button data-action="decrease" className="counter__button" onClick={this.decrease}>
          -
        </button>
        <span className="counter__value" onClick={() => this.reset()}>
          {this.state.count}
        </span>
        <button data-action="increase" className="counter__button" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
