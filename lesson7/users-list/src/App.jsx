import React, { Component } from 'react';
import UserList from './UserList.jsx';

class App extends Component {
  state = {
    sorting: '-',
  };

  users = [
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

  changeSorting() {
    if (this.state.sorting === 'asc') {
      this.setState({
        sorting: 'desc',
        sortingFunc: (a, b) => b.age - a.age,
      });
    } else {
      this.setState({
        sorting: 'asc',
        sortingFunc: (a, b) => a.age - b.age,
      });
    }
  }

  render() {
    let sortedArray = this.users;
    if (this.state.sorting !== '-') {
      sortedArray = [...sortedArray].sort(this.state.sortingFunc);
    }
    return (
      <div>
        <button className="btn" onClick={this.changeSorting.bind(this)}>
          {this.state.sorting}
        </button>
        <ul className="users">
          {sortedArray.map(user => (
            <UserList key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
