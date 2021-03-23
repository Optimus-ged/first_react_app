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
          <div className="home-link"></div>
          <div className="right-info"></div>
        </div>
      </section>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
