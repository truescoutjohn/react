//algo
//1. create class Counter
//2. init state with initialVlaue
//3. create setInterval which is setValue with incremented value
//4. rerender component
import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      counter: props.start,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }
  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
