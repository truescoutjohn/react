import React, { Component } from 'react';
import UserList from './UserList.jsx';

const users = [
  { id: 1, name: 'vasya', age: 17 },
  { id: 2, name: 'petya', age: 22 },
];

const App = props => {
  return <UserList users={users} />;
};

export default App;
