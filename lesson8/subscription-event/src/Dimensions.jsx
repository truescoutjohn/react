import React, { Component } from 'react';

class Dimensions extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this._fillPropObject() };
    this._resizeEventHandler = this._resizeEventHandler.bind(this);
    this._fillPropObject = this._fillPropObject.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._resizeEventHandler);
    document.title = this.state.title;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeEventHandler);
  }

  _resizeEventHandler(event) {
    this.setState({ ...this._fillPropObject() });
    document.title = this.state.title;
  }

  _fillPropObject() {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      title: `${window.innerHeight} x ${window.innerWidth}`,
    };
  }
  render() {
    return (
      <div className="dimensions">
        {this.state.innerWidth}px - {this.state.innerHeight}px
      </div>
    );
  }
}

export default Dimensions;
