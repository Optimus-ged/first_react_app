// Importing module and dependancies
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Bit from "./images/bitcoin.png";

// Building HomePage component
const HomePage = () => {
  return (
    <article className="home-page">
      <section className="nav-bar">
        <ul>
          <li>Acceuil</li>
          <li>Clients</li>
          <li>Users</li>
          <li>Aide</li>
          <li>Exit</li>
        </ul>
        <p className="enterprise">Optimus Tec</p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Our besic thesis for bitcoin is that is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            autem quas totam vel voluptates explicabo, aut recusandae velit
            praesentium eligendi distinctio id eum suscipit quasi non illo
            corrupti iste temporibus!
          </p>
        </div>
        <div className="app-toph">
          <img src={Bit} alt="Bitcoin toph" />
        </div>
      </section>
    </article>
  );
};

// Exporting module
ReactDom.render(<HomePage />, document.getElementById("root"));
