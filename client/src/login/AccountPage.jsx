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
  Table,
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const AccountPageHeading = ({ mobile }) => (
  <Container text>

  </Container>
)

AccountPageHeading.propTypes = {
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
                  <Button  as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Logout
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <AccountPageHeading />
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

const AccountPageLayout = () => (
  <ResponsiveContainer>
  <Header as ='h1'> Mark's Account </Header>
  <br></br>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}> Proficient Languages </Table.Cell>
          <Table.Cell>Java, C++, PHP </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Type of Member</Table.Cell>
          <Table.Cell>Programmer </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <br></br>
      <Header as='h3'>
        Your Projects
      </Header>

<List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button>View Member Applications</Button>
          <Button>View Project Page</Button>
        </List.Content>
        <List.Content>
          Project STRIDE is written in JAVA and is LOOKING FOR MEMBERS
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>View Project Page </Button>
        </List.Content>
        <List.Content>
          Project EVDAR is written in PHP, JAVASCRIPT and is COMPLETED
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>View Project Page </Button>
        </List.Content>
        <List.Content>
          Project ECHO is written in C++ and is UNDERWAY
        </List.Content>
      </List.Item>
    </List>
    <Header as='h3'>
      Projects You've Joined
    </Header>

    <List divided verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button>View Project Page</Button>
              <Button>Leave Project</Button>
            </List.Content>
            <List.Content>
              Project TRU is written in PHP and is UNDERWAY
            </List.Content>
          </List.Item>

        </List>

  </ResponsiveContainer>
)

export default AccountPageLayout;
