import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { HelloWorld } from "./components/Hello";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Greet name="Adele">
          <p>props children</p>
        </Greet>
        <Greet name="Salem" />
        <Greet name="John" />
        <Welcome name="Adele" />
      </div>
    );
  }
}

export default App;
