import React, { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Horered {count} times</h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
