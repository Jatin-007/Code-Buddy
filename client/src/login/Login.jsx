import React from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
import {BrowserRouter as Router, Route,  Link} from 'react-router-dom';


class Login extends React.Component {
  render() {
    return(
      <Menu>
              <Container>
      <Menu.Item position='right'>
                  <Router>
                  <Button as={ Link }
                    to='./client/src/login/Login.jsx'
                    // onClick={() => this.props.history.push('/Login')}
                  >
                    Home
                  </Button>
                  </Router>
                  <Button as='a' style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
    ) 
  }
}

export default Login;
