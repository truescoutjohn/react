import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this._onlineHandler.bind(this));
    window.addEventListener('offline', this._offlineHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('online', this._onlineHandler.bind(this));
    window.removeEventListener('offline', this._offlineHandler.bind(this));
  }

  _onlineHandler(event) {
    // document.querySelector('.status').classList.remove('status_offline');
    this.setState({
      connection: 'online',
    });
  }

  _offlineHandler(event) {
    // document.querySelector('.status').classList.add('status_offline');
    this.setState({
      connection: 'offline',
    });
  }

  render() {
    let result;
    if (this.state.connection === 'online') {
      result = <div className="status">online</div>;
    } else {
      result = <div className="status status_offline">offline</div>;
    }
    return result;
  }
}

export default ConnectionStatus;
