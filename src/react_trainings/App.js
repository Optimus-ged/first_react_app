import React, { Component } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <Hero heroName="optimus" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="ged" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Jocker" />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
