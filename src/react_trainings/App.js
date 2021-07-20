import React, { Component } from "react";
import ComponentA from "./components/ContextLearning/ComponentA";
import { UserProvider } from "./components/ContextLearning/UserContext";


class App extends Component {
  render() {
    return (
      <>
        <UserProvider value="Optimus YALA">
          <ComponentA />
        </UserProvider>
      </>
    );
  }
}

export default App;
