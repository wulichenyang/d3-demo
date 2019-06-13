import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { IGraphViewData } from '../components/GraphView/types'
import ForceDirectedGraph from './../components/ForceDirectedGraph/ForceDirectedGraph';

const ForceGraph: React.FC<{}> = () => {
  return (
    <>
      <ForceDirectedGraph
        graphWidth={960}
        graphHeight={600}
      />
    </>
  )
}
export default ForceGraph