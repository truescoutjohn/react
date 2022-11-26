import React from 'react';

const Pagination = props => {
  const isPrevPageAvailable = props.currentPage > 1 ? false : true;
  const isNextPageAvailable =
    props.currentPage < Math.ceil(props.totalItems / props.itemsPerPage) ? false : true;
  return (
    <div className="pagination">
      <button className="btn" onClick={props.goPrev} disabled={isPrevPageAvailable}>
        ←
      </button>
      <span className="pagination__page">{props.currentPage}</span>
      <button className="btn" onClick={props.goNext} disabled={isNextPageAvailable}>
        →
      </button>
    </div>
  );
};

export default Pagination;
