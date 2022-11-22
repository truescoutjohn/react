import React from 'react';

const Spinner = props => {
  if (props.size === 0) {
    return null;
  }
  return <span className="spinner" style={{ width: props.size, height: props.size }}></span>;
};

export default Spinner;
