import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate() {
    return this.props.number % 2 === 0;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
