import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { HelloWorld } from "./components/Hello";
import Message from './components/Message'

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
        <Message/>
      </div>
    );
  }
}

export default App;
