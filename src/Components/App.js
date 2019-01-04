import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Slack from "./Slack";
import Resouces from "./Resources";
import Talks from "./Talks";
import Jobs from "./Jobs";

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/resources" component={Resouces} />
      <Route path="/talks" component={Talks} />
      <Route path="/slack" component={Slack} />
      <Route path="/jobs" component={Jobs} />
    </div>
  </Router>
);

export default App;
