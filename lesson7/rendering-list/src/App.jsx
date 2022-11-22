import React from 'react';
import NumbersList from './NumbersList.jsx';

function App(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map(number => (
        <NumbersList key={number} number={number} />
      ))}
    </ul>
  );
}

export default App;
