import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const rootElement = ReactDOM.createRoot(document.querySelector('#root'));

const renderGreeting = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world!</h1>
    <p className="greeting__text">I'm learning React</p>
  </div>
);

rootElement.render(renderGreeting);
