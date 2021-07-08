// Importing dependancies
import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./global_styles";

// Building components
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
};

export default App;
