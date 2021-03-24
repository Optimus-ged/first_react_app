// Importing modules and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="container">
        <div className="avatar"></div>
      </div>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
