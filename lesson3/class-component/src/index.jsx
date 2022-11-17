import React from 'react';
import Search from './Search.jsx';
import ReactDOM from 'react-dom/client';
import './style.scss';

const root = ReactDOM.createRoot(document.querySelector('#root'));

// const Search = prop => {
//   return (
//     <div className="search">
//       <h1 className="search__title">Hello, {prop.name}. What to search for you?</h1>
//       <div className="search__field">
//         <input type="text" className="search__input" />
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   );
// };

root.render(<Search name="Vova" />);
