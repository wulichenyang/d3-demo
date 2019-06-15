import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { IGraphViewData } from '../components/GraphView/types'
import SunburstGraph from './../components/SunburstGraph/SunburstGraph';
import {
  GraphViewWrapper
} from '../styled.jsx'

const Sunburst: React.FC<{}> = () => {
  return (
    <>
    <GraphViewWrapper>
      <SunburstGraph
        graphWidth={960}
        graphHeight={960}
      />
    </GraphViewWrapper>
    </>
  )
}
export default Sunburst