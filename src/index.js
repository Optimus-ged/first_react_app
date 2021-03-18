// Importing modules and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import bit from './images/bitcoin.png';

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <ul>
          <li>
            <a href="www.google.com">Home</a>
          </li>
          <li>
            <a href="www.facebook.com">Users</a>
          </li>
          <li>
            <a href="www.twitter.com">Clients</a>
          </li>
          <li>
            <a href="www.instagram.com">About</a>
          </li>
          <li>
            <a href="www.whatsap.com">Exit</a>
          </li>
        </ul>
        <p className="optimus">OptimusTec</p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Optimus code for bitcoin witch is the better than Gold</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            nobis modi consequuntur, rem nisi, iure laborum quos molestiae
            possimus ex veniam atque est animi, totam dignissimos minus
            doloremque. Tempore, dolor?
          </p>
        </div>
        <div className="app-toph">
          <img src={bit} alt="toph bitcoin"/>
        </div>
      </section>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
