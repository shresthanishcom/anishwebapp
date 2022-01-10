import React from "react";
import "./App.css";
import "./Containers/Components/Css/Introduction.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import Introduction from "./Containers/Components/Introduction";
import Header from "./Containers/Components/Header";
import Footer from "./Containers/Components/Footer";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Introduction} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
