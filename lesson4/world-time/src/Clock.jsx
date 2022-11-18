import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';
// algo
// 1. Create class component Clock
// 2. Set props to inner state
// 3. Change and render new time after each second
//  3.1. Use moment to transform date to time

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      location: props.location,
      time: this.getTimeWithOffset(),
    };

    setInterval(() => {
      this.setState({
        time: this.getTimeWithOffset(),
      });
    }, 1000);
  }
  getTimeWithOffset() {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + this.props.offset + utcOffset));
  }
  getTime(date) {
    return moment(date).format('hh:mm:ss A');
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.getTime(this.getTimeWithOffset())}</div>
      </div>
    );
  }
}

export default Clock;
