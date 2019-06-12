import React from 'react';
import { Route } from "react-router-dom";
import Home from '../../views/Home'
import ForceGraph from '../../views/ForceGraph'

class Main extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/graph" component={ForceGraph} />
      </>
    );
  }
}

export default Main;
