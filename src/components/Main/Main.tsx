import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../views/Home'
import ForceGraph from '../../views/ForceGraph'
import Sunburst from '../../views/Sunburst'

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/Force-directed" component={ForceGraph} />
        <Route path="/Sunburst" component={Sunburst} />
      </main>
    );
  }
}

export default Main;
