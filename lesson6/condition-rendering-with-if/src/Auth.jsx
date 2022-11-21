import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Greeting from './Greeting.jsx';

class Auth extends Component {
  state = {
    isLogged: false,
  };

  signIn = () => {
    this.setState({
      isLogged: true,
    });
  };

  signOut = () => {
    this.setState({
      isLogged: false,
    });
  };

  render() {
    let button;
    if (this.state.isLogged) {
      button = <Logout onLogout={this.signOut} />;
    } else {
      button = <Login onLogin={this.signIn} />;
    }

    return (
      <div className="panel">
        <Greeting isLogged={this.state.isLogged} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
