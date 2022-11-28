import React, { Component } from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state, props) => ({
        number: state.number + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app">
        <Numbers title="Simple number" number={this.state.number} />
        <EvenNumbers title="Even number" number={this.state.number} />
        <OddNumbers title="Odd number" number={this.state.number} />
        <Numbers title="Simple number" number={17} />
      </div>
    );
  }
}

export default App;
