import React from 'react';
import NumbersList from './NumbersList.jsx';

function App(props) {
  const numbers = [1, 2, 3, 4, 5];
  return <NumbersList numbers={numbers} />;
}

export default App;
