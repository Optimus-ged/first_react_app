// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <div className="logo">Coding Market</div>
        <div className="top-header">
          <div className="home-link">Home</div>
          <div className="right-menus">
            <p className="user-btn">User</p>
            <p className="client-btn">Client</p>
          </div>
        </div>
      </section>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
