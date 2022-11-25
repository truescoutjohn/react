import React, { Component } from 'react';
import moment from 'moment';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
    this.state = {
      timer: new Date(),
    };
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
    this.interval = setInterval(
      () =>
        this.setState(function (state, props) {
          return {
            timer: new Date(),
          };
        }),
      1000,
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
    clearInterval(this.interval);
  }

  render() {
    console.log('return React element to build DOM');
    return <div>{moment(this.state.timer).format('HH:mm:ss')}</div>;
  }
}

export default Life;
