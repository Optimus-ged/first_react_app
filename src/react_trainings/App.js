import React, { Component } from "react";
// import NameList from "./components/PersonList/NameList";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import { HelloWorld } from "./components/Hello";
// import Message from "./components/Message";
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentAndChild/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
import StyleSheet from "./components/CssBasics/StyleSheet";
import InLine from "./components/CssBasics/InLine";
import "./components/CssBasics/appStyles.css";
import style from "./components/CssBasics/appStyles.module.css";

class App extends Component {
  render() {
    return (
      <>
        {/* <HelloWorld /> */}
        {/* <Greet name="Adele">
          <p>props children</p>
        </Greet> */}
        {/* <Greet name="Salem" /> */}
        {/* <Greet name="John" /> */}
        {/* <Welcome name="Adele" /> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList /> */}
        <StyleSheet className={true}/>
        <InLine/>
        <h1 className={style.success}>Success</h1>
        
      </>
    );
  }
}

export default App;
