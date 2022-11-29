import React, { Component } from 'react';
import Spinner from './Spinner.jsx';

export const withDataLoader = url => {
  return function (InitialComponent) {
    return class extends Component {
      state = {
        data: null,
        isShowed: true,
      };
      componentDidMount() {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.setState({ data, isShowed: false });
          });
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
