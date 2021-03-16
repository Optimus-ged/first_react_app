// Importing depedancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Bit from "./images/bitcoin.png";

// Building Home-page component
const HomePage = () => {
  return (
    <article className="home-page">
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Users</li>
          <li>Clients</li>
          <li>Settings</li>
          <li>Exit</li>
        </ul>
        <p className="signup-btn">Sign-Up</p>
      </div>
      <div className="banner">
        <section className="app-text">
          <h1>Our besic thesis for bitcoin is that is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            ducimus nam odit quia vero numquam? Ratione, nostrum et at natus,
            quae minus placeat consectetur facere magni officiis voluptatibus ut
            tempore.
          </p>
        </section>
        <section className="app-toph">
          <img src={Bit} alt="Bitcoin toph" />
        </section>
      </div>
    </article>
  );
};

// Exporting module
ReactDom.render(<HomePage />, document.getElementById("root"));
