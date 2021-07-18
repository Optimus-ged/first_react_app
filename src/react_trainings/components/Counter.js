import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //   incrementCounter() {
  //     this.setState(
  //       {
  //         count: this.state.count + 1,
  //       },
  //       () => console.log(this.state.count)
  //     );
  //   }

  //   incrementCounter() {
  //     this.setState((prevState, props) => ({
  //       count: this.state.count + 1,
  //     }));
  //   }

  incrementFive() {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Incrementer</button>
      </>
    );
  }
}

export default Counter;
