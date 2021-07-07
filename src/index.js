// Importing depedancies
import React from "react";
import ReactDom from "react-dom";

// Importing components
import { Button } from "./components/button.style";
import { Wrapper } from "./components/wrapper.style";

const App = () => {
  return (
    <Wrapper>
      <h1>Optimus ged</h1>
      <h2>Le grand trombonnier sisabidimu</h2>
      <Button bgc="#000"></Button>
      <Button bgc="green"></Button>
    </Wrapper>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
