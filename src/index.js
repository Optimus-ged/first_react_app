// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./test.css";
import logo from "./images/logo.svg";

// Buidlding components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="header">
        <div className="nav-bar">
          <p className="title">Optimus Tec</p>
          <ul>
            <li>Home</li>
            <li>Users</li>
            <li>Clients</li>
            <li>About</li>
            <li>Exit</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="content">
          <div className="toph">
            <img src={logo} alt="Error"/>
          </div>
          <h1>Now I know that React.js is so Amazing</h1>
        </div>
      </div>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
