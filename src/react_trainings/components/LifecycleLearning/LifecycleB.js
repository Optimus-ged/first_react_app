import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Optimus",
    };

    console.log("ConstructorB");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromPropsB");
    return null;
  }

  componentDidMount = () => {
    console.log("Component did mountB");
  };

  shouldComponentUpdate = () => {
    console.log("Shoud component update B");
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("Get snapshot before update B");
    return null;
  };

  componentDidUpdate = () => {
    console.log("Component did update B");
  };

  render() {
    console.log("Render methodB");
    return <div>LIFECYCLE B</div>;
  }
}

export default LifecycleB;
