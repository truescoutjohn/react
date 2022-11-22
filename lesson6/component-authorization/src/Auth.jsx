import React, { Component } from 'react';
import Spinner from './Spinner.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
// algo
// 1. Press login
// 2. Change state of spinner
// 3. Render Logout after 2 seconds by Timeout

class Auth extends Component {
  state = {
    size: 0,
    isLoginVisible: true,
    isLogoutVisible: false,
  };
  render() {
    return (
      <>
        <Login isLoginVisible={this.state.isLoginVisible} onLogin={this.setState.bind(this)} />
        <Spinner size={this.state.size} />
        <Logout isLogoutVisible={this.state.isLogoutVisible} onLogout={this.setState.bind(this)} />
      </>
    );
  }
}

export default Auth;
