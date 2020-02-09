import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Route,  Link, Switch} from 'react-router-dom';
import Signup from './login/Signup'
import HomepageLayout from './login/Home'
import Login from './login/Login';

const APP = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={HomepageLayout}/>
        <Route path="/Login" component={Login}/>
        {/* <Route path="/consult" component={Consult}/> */}
      </Switch>  
  </Router>
    
)

class App extends Component {
  render() {
    return <APP />
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
