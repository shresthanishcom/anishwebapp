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
import { Photos } from "./Containers/Components/Photos";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="app-container">
          <div className="app-header">
            <Header />
          </div>
          <div className="app-body">
            <Switch>
              <Route path="/" exact component={Introduction} />
              <Route path="/photos" component={Photos} />
            </Switch>
          </div>
          <div className="app-footer">
            <Footer />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
