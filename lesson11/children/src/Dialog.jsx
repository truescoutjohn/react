import React from 'react';

const Dialog = props => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{props.title}</h4>
        <button className="dialog__close-btn" onClick={props.onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{props.children}</div>
    </div>
  );
};

export default Dialog;
