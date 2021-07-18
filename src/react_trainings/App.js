import React, { Component } from "react";
import Greet  from "./components/Greet";
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <>
        <Greet />
        <Welcome/>
      </>
    );
  }
}

export default App;
