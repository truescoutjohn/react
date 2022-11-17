import React from 'react';
import Comment from './Comments.jsx';

const user = {
  name: 'Valera',
  avatarUrl: 'https://avatars.githubusercontent.com/truscoutjohn',
};

const App = () => {
  return <Comment name={user.name} date={new Date()} avatarUrl={user.avatarUrl} />;
};

export default App;
