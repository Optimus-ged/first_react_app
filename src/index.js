// Importing modules and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <div className="logo">CODDING MARKET</div>
        <div className="top-menu">
          <div className="home-link">Home</div>
          <div className="right-info">
            <div className="user-btn">Users</div>
            <div className="client-btn">Clients</div>
          </div>
        </div>
      </section>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
