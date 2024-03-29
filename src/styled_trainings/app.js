// Importing dependancies
import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./global_styles";
import Home from "./pages/home/home";

// Building components
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
