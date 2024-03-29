import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handeClick = () => {
    alert(`${this.inputRef.current.value}`);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handeClick}>Click this button</button>
      </div>
    );
  }
}

export default RefsDemo;
