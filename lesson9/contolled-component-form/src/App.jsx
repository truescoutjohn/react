import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(user) {
    console.log(user);
  }

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
