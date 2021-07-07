// Importing depedancies
import React from "react";
import ReactDom from "react-dom";

// Importing components
import { Button } from "./components/button.style";

const Wrapper = () => {
  return (
    <div>
      <h1>Optimus ged</h1>
      <h2>Le grand trombonnier sisabidimu</h2>
      <Button bgc="#000"></Button>
      <Button bgc="green"></Button>
    </div>
  );
};

ReactDom.render(<Wrapper />, document.getElementById("root"));
