import React from 'react';
import Profile from './Profile.jsx';

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const App = props => {
  return <Profile user={userData} />;
};

export default App;
