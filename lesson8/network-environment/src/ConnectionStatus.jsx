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
    document.querySelector('.status').classList.remove('status_offline');
    this.setState({
      connection: 'online',
    });
  }

  _offlineHandler(event) {
    document.querySelector('.status').classList.add('status_offline');
    this.setState({
      connection: 'offline',
    });
  }

  render() {
    return <div className="status">{this.state.connection}</div>;
  }
}

export default ConnectionStatus;
