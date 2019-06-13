import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { IGraphViewData } from '../components/GraphView/types'
import ForcDirectedGraph from './../components/ForcDirectedGraph/ForcDirectedGraph';

const ForceGraph: React.FC<{}> = () => {
  return (
    <>
      <ForcDirectedGraph
        graphWidth={960}
        graphHeight={600}
      />
    </>
  )
}
export default ForceGraph