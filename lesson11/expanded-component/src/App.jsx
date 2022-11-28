import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowed: false,
    };
  }

  hide = () => {
    this.setState({
      isShowed: false,
    });
  };

  show = () => {
    this.setState({
      isShowed: true,
    });
  };

  clickHandler = event => {
    if (this.state.isShowed) {
      this.hide();
    } else {
      this.show();
    }
  };

  render() {
    return (
      <div className="app">
        <Expand isShowed={this.state.isShowed} clickHandler={this.clickHandler}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
