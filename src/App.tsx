import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/App.less';
// import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import SideBar from './components/Layout/SideBar/SideBar';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
import ErrorBoundary from './components/Error/ErrorBoundary';
import * as themes from './assets/css/themes'
import { ThemeProvider } from 'styled-components'
import { ITheme } from './assets/css/themes'
import {
  AppWrapper,
  StyledWrapper,
} from './styled'

// import Home from './views/Home';
// import About from './views/About';
// import Topics from './views/Topics';

interface Iprops {
  theme: string,
}

interface IState {
  sidebarCollapsed: boolean,
  loading: boolean,
}

class App extends React.Component<Iprops, IState> {

  readonly state: IState = {
    sidebarCollapsed: false,
    loading: true,
  }

  toggleSidebar = () => {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed
    })
  }
  render() {
    const {
      theme,
    } = this.props
    const {
      sidebarCollapsed
    } = this.state

    const themeData = (themes as ITheme)[theme] || themes['normal']

    return (
      <Router>
        <ErrorBoundary>
          <ThemeProvider theme={themeData}>
            <AppWrapper>
              <Loader loading={false} />
              <StyledWrapper>
                <SideBar className={sidebarCollapsed ? 'sidebar-collapsed' : ''} />
                <Main toggleSidebar={this.toggleSidebar} />
              </StyledWrapper>
            </AppWrapper>
          </ThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}


export default App;
