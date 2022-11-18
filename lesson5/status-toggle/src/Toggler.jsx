import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togglerText: false,
    };
  }
  click(event) {
    this.setState({
      togglerText: !this.state.togglerText,
    });
  }
  render() {
    return (
      <button className="toggler" onClick={this.click.bind(this)}>
        {this.state.togglerText ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggler;
