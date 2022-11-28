import React from 'react';

const Numbers = props => {
  return (
    <div className="number">
      <span className="number__title">{props.title}</span>
      <span className="number__value">{props.number}</span>
    </div>
  );
};

export default Numbers;
