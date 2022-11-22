import React from 'react';
const toggleSpinner = setState => {
  setState({ size: 35, isLoginVisible: false });
  setTimeout(() => {
    setState({ size: 0, isLogoutVisible: true });
  }, 2000);
};
const Login = props => {
  if (!props.isLoginVisible) {
    return null;
  }
  return (
    <button className="login btn" onClick={() => toggleSpinner(props.onLogin)}>
      Login
    </button>
  );
};

export default Login;
