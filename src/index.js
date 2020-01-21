import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'; import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import NotFound from "./Components/404";
import "animate.css/animate.min.css";

const routing = (
  <Router >
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Creme" component={Project1} />
      <Route path="/EUM" component={Project2} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
