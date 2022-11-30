import React, { Component } from 'react';

class User extends Component {
  state = {
    imgUrl: null,
  };

  async componentDidMount() {
    this.fetchImageUrl();
  }

  async componentDidUpdate() {
    this.fetchImageUrl();
  }

  fetchImageUrl = async () => {
    const response = await fetch(`https://api.github.com/users/${this.props.match.params.userId}`);
    const data = await response.json();
    this.setState({
      imgUrl: data.avatar_url,
    });
  };

  render() {
    return (
      <div className="user">
        <img alt="User Avatar" src={this.state.imgUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">GitHub</span>
          <span className="user__location">San Francisco,CA</span>
        </div>
      </div>
    );
  }
}

export default User;
