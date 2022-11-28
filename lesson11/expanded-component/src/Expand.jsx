import React from 'react';

class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowed: false,
    };
  }

  hide = () => {
    this.setState({
      isShowed: false,
    });
  };

  show = () => {
    this.setState({
      isShowed: true,
    });
  };

  clickHandler = event => {
    if (this.state.isShowed) {
      this.hide();
    } else {
      this.show();
    }
  };

  render() {
    const style = this.state.isShowed ? {} : { transform: 'rotate(180deg)' };
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.clickHandler}>
            <i className="fas fa-chevron-up" style={style}></i>
          </button>
        </div>
        {this.state.isShowed && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
