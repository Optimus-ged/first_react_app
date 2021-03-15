// Importing depedancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building HomePage component
const HomePage = () => {
  return (
    <article className="home-page">
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Clients</li>
          <li>Setings</li>
          <li>Exit</li>
        </ul>
      </div>
    </article>
  );
};

// Exporting module
ReactDom.render(<HomePage />, document.getElementById("root"));
