import React from 'react';
import './search.scss';

const Search = prop => {
  return (
    <div className="search">
      <h1 className="search__title">Hello, {prop.name}. What to search for you?</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );
};

export default Search;
