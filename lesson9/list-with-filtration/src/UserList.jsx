import React, { Component } from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      filterText: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this._filterUser = this._filterUser.bind(this);
  }

  _filterUser(user, filterText) {
    return user.name.toLowerCase().includes(filterText.toLowerCase());
  }

  onInputChange(event) {
    const filterText = event.target.value;
    const countNotFoundUser = this.props.users.reduce(
      (counter, user) => (!this._filterUser(user, filterText) ? counter + 1 : counter),
      0,
    );
    this.setState({
      count: this.props.users.length - countNotFoundUser,
      filterText,
    });
  }

  render() {
    return (
      <div>
        <Filter
          count={this.state.count}
          onChange={this.onInputChange}
          filterText={this.state.filterText}
        />
        <ul className="users">
          {this.props.users
            .filter(user => this._filterUser(user, this.state.filterText))
            .map(user => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
