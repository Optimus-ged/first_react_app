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
        <div className="content"></div>
      </div>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper/>, document.getElementById("root"));