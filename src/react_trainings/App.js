import React, { Component } from "react";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import { HelloWorld } from "./components/Hello";
// import Message from "./components/Message";
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentAndChild/ParentComponent";

class App extends Component {
  render() {
    return (
      <>
        {/* <HelloWorld /> */}
        {/* <Greet name="Adele">
          <p>props children</p>
        </Greet> */}
        {/* <Greet name="Salem" />
        <Greet name="John" />
        <Welcome name="Adele" /> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        <ParentComponent/>
      </>
    );
  }
}

export default App;
