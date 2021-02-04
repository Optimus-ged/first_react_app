import React from "react";
import ReactDom from "react-dom";

// Comment
// Stateless functional component
// Return always a JSX
function Greeting() {
  return <h2>Optimus-ged cr3sc3nd0 is the Best</h2>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
