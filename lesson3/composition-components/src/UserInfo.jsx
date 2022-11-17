import React from 'react';
import Avatar from './Avatar.jsx';
import './userInfo.scss';

const UserInfo = props => {
  console.log(props);
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.name}</div>
    </div>
  );
};

export default UserInfo;
