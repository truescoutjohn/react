import React, { Component } from 'react';
import Spinner from './Spinner.jsx';

export const withDataLoader = url => {
  return function (InitialComponent) {
    return class extends Component {
      state = {
        data: null,
        isShowed: true,
      };
      async componentDidMount() {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data, isShowed: false });
      }
      render() {
        return (
          <>
            {this.state.isShowed && <Spinner />}
            {!this.state.isShowed && <InitialComponent data={this.state.data} />}
          </>
        );
      }
    };
  };
};
