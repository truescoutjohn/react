import React from 'react';

const User = props => {
  return (
    <>
      <span className="user__name">{props.name}</span>
      <span className="user__age">{props.age}</span>
    </>
  );
};

export default User;
