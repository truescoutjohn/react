import React from 'react';
import './button.scss';

const GoodButton = props => {
  return (
    <button className="fancy-button" onClick={() => alert('Good job!')}>
      Good button!
    </button>
  );
};

export default GoodButton;
