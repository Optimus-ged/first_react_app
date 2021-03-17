// Importing modules and depenfancies
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
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Exit</a>
          </li>
        </ul>
        <p className="optimus">
          <a href="#">Optimus Tec</a>
        </p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Optimus code for bitcoin witch is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            blanditiis excepturi commodi veritatis, sint sequi totam? Modi neque
            eum, asperiores excepturi nesciunt sit incidunt sint corporis
            similique doloremque? Velit, molestiae.
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
