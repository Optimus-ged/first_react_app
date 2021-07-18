import React, { Component } from "react";

class ClassClick extends Component {
  render() {
    function clickHandler() {
      console.log("Button clicked");
    }
    return (
      <>
        <button onClick={clickHandler}>Click this button</button>
      </>
    );
  }
}

export default ClassClick;
