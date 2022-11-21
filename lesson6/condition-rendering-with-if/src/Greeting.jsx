import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = ({ isLogged }) => {
  let greeting;
  if (isLogged) {
    greeting = <UserGreeting />;
  } else {
    greeting = <GuestGreeting />;
  }

  return <>{greeting}</>;
};

export default Greeting;
