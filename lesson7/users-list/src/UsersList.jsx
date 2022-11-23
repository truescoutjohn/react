import React from 'react';
import User from './User.jsx';
const UserList = props => {
  return (
    <li className="user">
      <User {...props.user} />
    </li>
  );
};

export default UserList;
