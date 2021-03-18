// importing modules and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import bitcoin from './images/bitcoin.png';

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <ul>
          <li>
            <a href="http//www.google.com">Home</a>
          </li>
          <li>
            <a href="http//www.google.com">Client</a>
          </li>
          <li>
            <a href="http//www.google.com">Users</a>
          </li>
          <li>
            <a href="http//www.google.com">Settings</a>
          </li>
          <li>
            <a href="http//www.google.com">Exit</a>
          </li>
        </ul>
        <p className="optimus">OptimusTec</p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Optimus code for bitcoin witch is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            illo voluptatibus eveniet recusandae quod porro. At necessitatibus
            dicta libero eum! Eos, ducimus repellendus mollitia rem quos ad
            officia error cum.
          </p>
        </div>
        <div className="app-toph">
          <img src={bitcoin} alt="bitcoin toph"/>
        </div>
      </section>
    </article>
  );
};

// Exporting module
ReactDom.render(<Wrapper />, document.getElementById("root"));
