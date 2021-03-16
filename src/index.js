//Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building HomePage component
const HomePage = () => {
  return (
    <article className="home-page">
      <ul className="menu">
        <li>Home</li>
        <li>Clients</li>
        <li>Users</li>
        <li>About</li>
        <li>Exit</li>
      </ul>
      <p className="signup-btn">Sign-Up</p>
    </article>
  );
};

// Exporting module
ReactDom.render(<HomePage />, document.getElementById("root"));
