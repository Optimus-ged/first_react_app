import React from "react";
import ReactDom from "react-dom";

// Styles
import "./to_delete/to_delete.css";

const Wrapper = () => {
  return (
    <article className="wrapper">
      <h2>Exercises on How to use Dropdowns</h2>
      <div className="dropdown">
        <span>See the dropdown</span>
        <div className="content">
        
        </div>
      </div>
    </article>
  );
};

ReactDom.render(<Wrapper/>, document.getElementById('root'));
