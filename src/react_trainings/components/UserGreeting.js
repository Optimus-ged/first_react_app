import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedIn: false,
    };
  }

  render() {
    // Short circuit operator
    // return this.state.isLogedIn && <h1>Optimus is the best</h1>

    // Tenary conditional operator
    // return this.state.isLogedIn ? (
    //   <h1>Optimus is the best</h1>
    // ) : (
    //   <h1>React.js is great !!!</h1>
    // );

    // If/else conditional operator
    if (this.state.isLogedIn) {
      return <h1>Optimus is the best</h1>;
    } else {
      <h1>React.js is great !!!</h1>;
    }
  }
}

export default UserGreeting;
