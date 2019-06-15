import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../views/Home'
import ForceGraph from '../../views/ForceGraph'
import Sunburst from '../../views/Sunburst'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'

import {
  MainWrapper,
  RightWrapper,
  BreadTabWrapper
} from './styled.jsx'

interface IProps {
  toggleSidebar: () => void,
  collapsed: boolean,
}

class Main extends React.Component<IProps, {}> {
  render() {
    const { toggleSidebar, collapsed } = this.props
    return (
      <RightWrapper id="right-wrapper">
        <Header 
          toggleSidebar={toggleSidebar} 
          collapsed={collapsed}
        />
        <MainWrapper>
          <BreadTabWrapper>
            bread
          </BreadTabWrapper>
          <Route exact path="/" component={Home} />
          <Route path="/Force-directed" component={ForceGraph} />
          <Route path="/Sunburst" component={Sunburst} />
        </MainWrapper>
        <Footer />
      </RightWrapper>
    );
  }
}

export default Main;
