import React, { Component } from 'react';
import About from './About'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class ForceGraph extends Component<{}, {}> {
  render() {
    return (
      <Router basename="/graph">
        {"Force graph"}
        <br/>
        <Link to="/nextSub">next</Link>
        <Route path="/nextSub" component={About} />
      </Router>
    )
  }
}

export default ForceGraph