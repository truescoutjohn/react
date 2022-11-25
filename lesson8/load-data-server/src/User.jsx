import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(response => response.json())
      .then(user => {
        this.setState({
          user,
        });
      });
  }

  render() {
    const { avatar_url, location, login } = this.state.user;
    if (!login) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{login}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
