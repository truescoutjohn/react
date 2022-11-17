import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const clock = () => {
  const seconds = new Date().getSeconds();
  const style = {
    color: seconds % 2 === 0 ? '#000' : '#fff',
    backgroundColor: seconds % 2 === 0 ? '#fff' : '#000',
  };
  const elements = (
    <div className="seconds" style={style}>
      Now is {seconds}
    </div>
  );
  root.render(elements);
};

setInterval(clock, 1000);
