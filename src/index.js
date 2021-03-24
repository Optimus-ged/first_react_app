// Importing dependancies and modules
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

// Buidling components
const Wrapper = ()=>{
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <div className="logo">OptimusTec</div>
        <div className="right-part">
          <div className="home-btn">Home</div>
          <div className="menus">
            <p>Clients</p>
            <p>Users</p>
          </div>
        </div>
      </section>
    </article>
  );
};

// Exporting module
ReactDom.render(<Wrapper/>, document.getElementById("root"));