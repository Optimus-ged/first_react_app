import React, { Component } from "react";
import Counter from "./components/RenderPropsLearning/Counter";
import ClickCounterTwo from "./components/RenderPropsLearning/ClickCounterTwo";
import HoverCounterTwo from "./components/RenderPropsLearning/HoverCounterTwo";

class App extends Component {
  render() {
    return (
      <>
        <Counter>
          {(incrementCount, count) => (
            <ClickCounterTwo incrementCount={incrementCount} count={count} />
          )}
        </Counter>

        <Counter>
          {(incrementCount, count) => (
            <HoverCounterTwo incrementCount={incrementCount} count={count} />
          )}
        </Counter>
      </>
    );
  }
}

export default App;
