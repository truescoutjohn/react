import React from 'react';
const doLogout = setState => {
  setState({
    isLoginVisible: true,
    isLogoutVisible: false,
  });
};
const Logout = props => {
  if (!props.isLogoutVisible) {
    return null;
  }
  return (
    <button
      className="logout btn"
      onClick={() => {
        doLogout(props.onLogout);
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
