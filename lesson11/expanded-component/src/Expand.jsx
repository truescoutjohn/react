import React from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expand = props => {
  const style = props.isShowed ? {} : { transform: 'rotate(180deg)' };
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">Some title</span>
        <button className="expand__toggle-btn" onClick={props.clickHandler}>
          <FontAwesomeIcon style={style} icon={faChevronUp} />
        </button>
      </div>
      {props.isShowed && <div className="expand__content">{props.children}</div>}
    </div>
  );
};

export default Expand;
