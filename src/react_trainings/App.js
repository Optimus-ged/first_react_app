import React, { Component } from "react";
import ClickCounter from "./components/IncrementLearn&HOC/ClickCounter";
import HoverCounter from "./components/IncrementLearn&HOC/HoverCounter";

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
        <ClickCounter name="Optimus ged"/>
        <HoverCounter/>
      </>
    );
  }
}

export default App;
