import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Optimus is the best");
  }

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click here</button>
      </>
    );
  }
}

export default ClassClick;
