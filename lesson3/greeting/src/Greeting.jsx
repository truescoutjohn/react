import React from 'react';
const MILLISECONDS_PER_YEAR = 1000 * 3600 * 24 * 365;

const Greeting = props => {
  const age = Math.trunc((new Date() - props.birthDate) / MILLISECONDS_PER_YEAR);
  return (
    <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}</div>
  );
};

export default Greeting;
