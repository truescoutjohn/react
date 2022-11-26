// algo
// 1. Create index FROM current page decrease 1 and multiply on itemsPerPage
// 2. Create index TO index FROM increase on itemsPerPage
// 3. Make slice with FROM to TO + 1 index;
import React from 'react';
import UsersList from './UsersList.jsx';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

const App = props => {
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default App;
