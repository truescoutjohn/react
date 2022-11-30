import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import User from './User.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>

          <Route path="/users/:userId">
            <User />
          </Route>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
