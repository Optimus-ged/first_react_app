import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Optimus",
    };

    console.log("ConstructorA");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromPropsA");
    return null;
  }

  componentDidMount = () => {
    console.log("Component did mountA");
  };

  shouldComponentUpdate = () => {
    console.log("Shoud component update A");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Get snapshot before update A");
    return null;
  };

  componentDidUpdate = () => {
    console.log("Component did update A");
  };

  changeState = () => {
    this.setState({
      name: "Code evolotion",
    });
  };

  render() {
    console.log("Render methodA");
    return (
      <div>
        <h1>LIFECYCLE A</h1>
        <LifecycleB />
        <button onClick={this.changeState}>Click here</button>
      </div>
    );
  }
}

export default LifecycleA;
