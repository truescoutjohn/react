import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.handlerFormSubmit = this.handlerFormSubmit.bind(this);
  }

  handlerInput(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handlerFormSubmit(event) {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  }

  render() {
    return (
      <form className="search" onSubmit={this.handlerFormSubmit}>
        <input
          type="text"
          className="search__input"
          value={this.state.value}
          onChange={this.handlerInput}
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
