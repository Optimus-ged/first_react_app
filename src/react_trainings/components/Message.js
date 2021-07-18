import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Faith is rising",
    };
  }

  changeMessage() {
    this.setState({
      message: "Keep up the good work",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change message</button>
      </>
    );
  }
}

export default Message;
