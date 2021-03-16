// Importing depeendancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building HomePage component
const HomePage = () => {
  return (
    <article className="home-page">
      <ul>
        <li>Home</li>
        <li>Clients</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Exit</li>
      </ul>
      {/* <p className="signup-btn">
        <span> Sign-Up</span>
      </p> */}
      <div className="banner">
        <div className="app-text">
          <h1>Our besic thesis for bitcoin is that is the better than Gold</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Odit, labore magni? Est doloribus vel deleniti quaerat <br />{" "}
            explicabo incidunt necessitatibus omnis autem voluptatem, <br />{" "}
            atque sit in rerum. Assumenda necessitatibus <br /> reprehenderit
            corrupti ?
          </p>
        </div>
        <div className="app-picture">
          <img src={require("./images/bitcoin.png")} alt="error" />
        </div>
      </div>
    </article>
  );
};

// Exporting module
ReactDom.render(<HomePage />, document.getElementById("root"));
