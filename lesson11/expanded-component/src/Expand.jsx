import React from 'react';

const Expand = props => {
  const style = props.isShowed ? { transform: 'rotate(180deg)' } : {};
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">Some title</span>
        <button className="expand__toggle-btn" onClick={props.clickHandler}>
          <i className="fas fa-chevron-up" style={style}></i>
        </button>
      </div>
      {props.isShowed && <div className="expand__content">{props.children}</div>}
    </div>
  );
};

export default Expand;
