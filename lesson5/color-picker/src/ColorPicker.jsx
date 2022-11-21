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
const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
    this.enterMouse = this.enterMouse.bind(this);
    this.leaveMouse = this.leaveMouse.bind(this);
    this._findCssClassWithModificator = this._findCssClassWithModificator.bind(this);
    this._capitalizeFirstLetterWord = this._capitalizeFirstLetterWord.bind(this);
  }

  _findCssClassWithModificator(event) {
    return [...event.target.classList]
      .find(element => /(?<=[a-zA-Z0-9]|^)([_])(?=[a-zA-Z0-9]|$)/.test(element))
      .split('_');
  }

  _capitalizeFirstLetterWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  enterMouse(event) {
    const arrayClass = this._findCssClassWithModificator(event);
    if (arrayClass && arrayClass.length === 0) {
      return undefined;
    }

    const colorString = this._capitalizeFirstLetterWord(arrayClass[arrayClass.length - 1]);

    this.setState({
      color: colorString,
    });
  }

  setTitle(colorName) {
    this.setState({
      color: colorName,
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
            onMouseEnter={() => {
              this.setTitle('Coral');
            }}
            onMouseLeave={this.leaveMouse}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => {
              this.setTitle('Aqua');
            }}
            onMouseLeave={this.leaveMouse}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => {
              this.setTitle('Bisque');
            }}
            onMouseLeave={this.leaveMouse}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
