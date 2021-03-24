// Import dependancies and modules
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

// Building components
const Wrapper = ()=>{
  return (
    <article className="wrapper">
      <div className="user-item">
        <div className="avatar"></div>
        <div className="content">
          <p className="name">Optimus ged</p>
          <p className="message">Est'ce que tout va bien ?</p>
        </div>
        <p className="heure">12:20</p>
      </div>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper/>, document.getElementById("root"));