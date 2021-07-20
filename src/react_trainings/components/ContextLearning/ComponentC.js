import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <h1>{userName}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;