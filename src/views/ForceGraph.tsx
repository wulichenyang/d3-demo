import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { IGraphViewData } from '../components/GraphView/types'
import ForceDirectedGraph from './../components/ForceDirectedGraph/ForceDirectedGraph';
import {
  BreadTabWrapper,
  GraphViewWrapper
} from '../styled.jsx'

const ForceGraph: React.FC<{}> = () => {
  return (
    <>
      <BreadTabWrapper>
        bread
      </BreadTabWrapper>
      <GraphViewWrapper>
        <ForceDirectedGraph
          graphWidth={960}
          graphHeight={600}
        />
      </GraphViewWrapper>

    </>
  )
}
export default ForceGraph