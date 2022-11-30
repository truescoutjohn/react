import React from 'react';
import { Route, Link } from 'react-router-dom';
import User from './User.jsx';

function Users({ match }) {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:userId`} component={User} />
    </div>
  );
}

export default Users;
