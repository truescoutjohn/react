import React, { Component } from 'react';
import Profile from './Profile.jsx';
import ShoppingCart from './ShoppingCart.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state, props) => ({ ...state, [name]: value }));
  }

  render() {
    return (
      <div className="page">
        <h1 className="title">
          Hello, {this.state.firstName} {this.state.lastName}
        </h1>
        <main className="content">
          <ShoppingCart userData={this.state} />
          <Profile userData={this.state} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
