import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureCompo from "./PureComponent";

class ParentCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Optimus",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Optimus",
      });
    }, 2000);
  }

  render() {
    console.log("Parent component render");
    return (
      <>
        <div>Parent component</div>
        <RegularComponent name={this.state.name} />
        <PureCompo name={this.state.name} />
      </>
    );
  }
}

export default ParentCompo;
