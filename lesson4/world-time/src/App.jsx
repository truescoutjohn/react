import React from 'react';
import Clock from './Clock.jsx';
// algo
// 1. create function component App
// 2. insert clock component to app component
const App = props => {
  return (
    <>
      <Clock offset={-5} location="NEW YORK" />
      <Clock offset={2} location="KYIV" />
      <Clock offset={0} location="LONDON" />
    </>
  );
};

export default App;
