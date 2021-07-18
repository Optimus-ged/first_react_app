import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello there",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye big bro",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye big bro",
    });
  };

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Clik here</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Clik here</button> */}
        <button onClick={this.clickHandler}>Clik here</button>
      </>
    );
  }
}

export default EventBind;
