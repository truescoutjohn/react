import React from 'react';
import NumberLists from './NumberLists.jsx';

function App(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map(number => (
        <NumberLists key={number} number={number} />
      ))}
    </ul>
  );
}

export default App;
