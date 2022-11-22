import React, { Component } from 'react';
import Message from './Message.jsx';

class Page extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setState({ text: 'Hello, world!' })}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setState({ text: 'Another exciting text.' })}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setState({ text: '' })}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
