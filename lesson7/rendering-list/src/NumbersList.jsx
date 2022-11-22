import React from 'react';

const NumbersList = props => {
  return (
    <ul>
      {props.numbers.map(number => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
