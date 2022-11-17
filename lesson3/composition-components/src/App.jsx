import React from 'react';
import Comment from './Comment.jsx';

const user = {
  name: 'Valera',
  avatarUrl: 'https://avatars.githubusercontent.com/truscoutjohn',
};

const App = () => {
  return <Comment author={user} date={new Date()} text="some text" />;
};

export default App;
