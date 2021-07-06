import React from "react";
import ReactDom from "react-dom";

// Styles
import './to_delete/to_delete.css';

const Wrapper = () => {
  return (
    <article className="wrapper">
      <h2>Handling css dropviews</h2>
      <div className="dropdown">
        <span>see the dropview</span>
        <div className="dropdown-content">
          <p>Editing file</p>
          <p>Users</p>
          <p>Customers</p>
          <p>Help</p>
          <p>Exit app</p>
        </div>
      </div>
    </article>
  );
};

ReactDom.render(<Wrapper />, document.getElementById("root"));
