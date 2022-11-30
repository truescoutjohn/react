import React, { Component } from 'react';
import Dialog from './Dialog.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  openDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="app">
        <button className="btn" onClick={this.openDialog}>
          Show dialog
        </button>
        <Dialog onClose={this.hideDialog} isOpen={this.state.isOpen}>
          <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
