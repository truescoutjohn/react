import React from 'react';
import NumberList from './NumberList.jsx';

function App(props) {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map(number => (
        <NumberList key={number} number={number} />
      ))}
    </ul>
  );
}

export default App;
