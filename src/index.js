// Importing depedancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="container">

      </div>
      <div className="container">
        <GestMessage />
        <div className="space-between"></div>
        <MyMessage />
        <div className="space-between"></div>
        <GestMessage />
        <div className="space-between"></div>
        <MyMessage />
        <div className="space-between"></div>
      </div>
    </article>
  );
};

// Building User item
const UserItem =()=>{
  return (
    <div className="user-item">
      <div className="avatar"></div>
    </div>
  );
};

// Building gest Message
const GestMessage = () => {
  return (
    <div className="msg-in">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  );
};

// Building my message
const MyMessage = () => {
  return (
    <div className="msg-out">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
