import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Greeting firstName="John" lastName="Travolta" birthDate={new Date('26 February 1996')} />,
);
