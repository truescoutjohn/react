import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.offset = props.offset;
    this.getTimeWithOffset = this.getTimeWithOffset.bind(this);
    this.state = {
      time: this.getTimeWithOffset(this.offset),
    };
  }

  componentDidMount() {
    (this.interval = setInterval(() =>
      this.setState({
        time: this.getTimeWithOffset(this.offset),
      }),
    )),
      1000;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset(offset) {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.location}</div>
        <div className="clock__time">{this.state.time.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;
