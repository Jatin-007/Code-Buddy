import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';

import Login from './login/Login';
import HomepageLayout from './login/Home';
import ProjectPage from './login/ProjectPage'

class App extends Component {
  render() {
      return <ProjectPage/>;
      // return <HomepageLayout />;
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
