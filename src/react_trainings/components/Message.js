import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to our project",
    };
  }

  changeMsg() {
    this.setState({
      message: "Optimus is the best",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMsg()}>Subscribe</button>
      </>
    );
  }
}

export default Message;
