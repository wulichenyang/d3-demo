import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../views/Home'
import ForceGraph from '../../views/ForceGraph'

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/graph" component={ForceGraph} />
      </main>
    );
  }
}

export default Main;
