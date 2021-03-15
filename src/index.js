// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building HomePage Component
const HomePage = () => {
  return (
    <article className="home-page">
      <ul className="menu">
        <li>Home</li>
        <li>Users</li>
        <li>Clients</li>
        <li>Settings</li>
        <li>Exit</li>
      </ul>
      <p className="signup-btn">
        <span>Sign-Up</span>
      </p>
    </article>
  );
};

// Exporting Module
ReactDom.render(<HomePage />, document.getElementById("root"));
