// Importing dependancies and modules
import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

// Building components
const Wrapper = ()=>{
  return (
    <article className="wrapper">
      <section className="container">
        <div className="avatar"></div>
      </section>
    </article>
  );
};

// Exporting module
ReactDom.render(<Wrapper/>, document.getElementById("root"));