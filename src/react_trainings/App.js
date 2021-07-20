import React, { Component } from "react";
import ClickCounter from "./components/IncrementLearn/ClickCounter";
import HoverCounter from "./components/IncrementLearn/HoverCounter";

class App extends Component {
  render() {
    return (
      <>
        {/* <ErrorBoundary>
          <Hero heroName="optimus" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="ged" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Jocker" />
        </ErrorBoundary> */}
        <ClickCounter />
        <HoverCounter/>
      </>
    );
  }
}

export default App;
