// Importing dependancies
import React from "react";
import ReactDom from "react-dom";

//  Importing components
import { Wrapper } from "./components/wrapper.style";
import { Button } from "./components/button.style";


// Building component
const App = () => {
  return (
   
      <Wrapper>
        <h1>Optimus ged the Boss</h1>
        <Button>Visiter</Button>
      </Wrapper>
    
  );
};

ReactDom.render(<App />, document.getElementById("root"));
