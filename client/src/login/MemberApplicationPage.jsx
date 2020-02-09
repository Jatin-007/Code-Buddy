import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ProjectPageHeading = ({ mobile }) => (
  <Container text>

  </Container>
)

ProjectPageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: true })
  showFixedMenu = () => this.setState({ fixed: false })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                {}
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Account
                  </Button>
                  <br></br>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Logout
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <ProjectPageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}


DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const ProjectPageLayout = () => (
  <ResponsiveContainer>
    <br></br>
      <Header as='h3'>
        Placeholder Project Name
      </Header>
      <br></br>
<List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <br></br>
          <Button positive>Accept</Button>
          <Button negative>Reject</Button>
        </List.Content>
        <List.Content>
          LISA is proficient in JAVA, PYTHON and is a PROGRAMMER
          <br></br>
          <br></br>
          <Button >Chat with LISA</Button>
          <br></br>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <br></br>
          <Button positive>Accept</Button>
          <Button negative>Reject</Button>
        </List.Content>
        <List.Content>
          <br></br>
          ERIC is proficient in JAVA and is a PROGRAMMER
          <br></br>
          <br></br>
          <Button >Chat with ERIC</Button>
          <br></br>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <br></br>
          <Button positive>Accept</Button>
          <Button negative>Reject</Button>
        </List.Content>
        <List.Content>
          <br></br>
          HARLEY is proficient in NONE and is a VISUAL DESIGNER
          <br></br>
          <br></br>
          <Button >Chat with HARLEY</Button>
          <br></br>
        </List.Content>
      </List.Item>
    </List>
  </ResponsiveContainer>
)

export default ProjectPageLayout;
