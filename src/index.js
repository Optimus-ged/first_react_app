// Importing depedancies and moduels
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import bitcoin from "./images/bitcoin.png";

// Building wrapper componen
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <ul>
          <li>
            <a href="www.google.com">Home</a>
          </li>
          <li>
            <a href="www.google.com">Users</a>
          </li>
          <li>
            <a href="www.google.com">Clients</a>
          </li>
          <li>
            <a href="www.google.com">About</a>
          </li>
          <li>
            <a href="www.google.com">Exit</a>
          </li>
        </ul>
        <p className="optimus">Optimus Tec</p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Optimus code for bitcoin witch is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, quos, dicta explicabo nesciunt itaque autem error
            consequatur labore reprehenderit nobis possimus. Assumenda, itaque.
            Assumenda explicabo delectus accusantium, nesciunt aliquid
            distinctio.
          </p>
        </div>
        <div className="app-toph">
          <img src={bitcoin} alt="Erreur de chargement"/>
        </div>
      </section>
    </article>
  );
};

// Exporting our component
ReactDom.render(<Wrapper />, document.getElementById("root"));
