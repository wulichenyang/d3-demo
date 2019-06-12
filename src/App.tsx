import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/App.less';
// import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import SideBar from './components/Layout/SideBar/SideBar';
import Loader from './components/Loader/Loader';
import Main from './components/Main/Main';
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
import ErrorBoundary from './components/Error/ErrorBoundary';

interface Iprops {
  theme: string,
}

interface IState {

}

class App extends React.Component<Iprops, IState> {
  render() {
    const {
      theme,
    } = this.props

    const themeData = (themes as ITheme)[theme] || themes['normal']

    return (
      <Router>
        <ErrorBoundary>
          <ThemeProvider theme={themeData}>
            <AppWrapper>
              <Loader loading={false} />
              <StyledWrapper>
                <SideBar />
                <Main />
              </StyledWrapper>
            </AppWrapper>
          </ThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}


export default App;
