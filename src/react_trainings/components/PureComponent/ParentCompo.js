import React, { Component } from "react";
import MemoComp from "./MemoComp";

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
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <PureCompo name={this.state.name} /> */}
        <MemoComp name={this.state.name}/>
      </>
    );
  }
}

export default ParentCompo;
