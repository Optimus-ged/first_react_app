import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "React.js is awesome",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
      </>
    );
  }
}

export default Message;
