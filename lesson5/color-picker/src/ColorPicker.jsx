import React, { Component } from 'react';
// algo
// 1. create component ColorPicker
// 2. get classList
// 3. iterate through classList
// 4. find class which contain color
// 5. divide this class with _ character
// 6. transform first letter(to upper case)
// 7. set to state transformed class
// 8. create event with mouseleave and set state empty string
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
    this.enterMouse = this.enterMouse.bind(this);
    this.leaveMouse = this.leaveMouse.bind(this);
  }
  enterMouse(event) {
    const arrayClass = [...event.target.classList]
      .find(element => /(?<=[a-zA-Z]|^)([_])(?=[a-zA-Z]|$)/.test(element))
      .split('_');

    if (arrayClass && arrayClass.length === 0) {
      return undefined;
    }

    const colorString =
      arrayClass[arrayClass.length - 1][0].toUpperCase() +
      arrayClass[arrayClass.length - 1].slice(1);

    this.setState({
      color: colorString,
    });
  }

  leaveMouse() {
    this.setState({
      color: '',
    });
  }
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.enterMouse}
            onMouseLeave={this.leaveMouse}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.enterMouse}
            onMouseLeave={this.leaveMouse}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.enterMouse}
            onMouseLeave={this.leaveMouse}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
