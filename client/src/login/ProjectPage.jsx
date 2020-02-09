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
  Comment,
  Form,
  TextArea,
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
    <React.Fragment>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='tag' />
            Project Name
          </Header>
        </Divider>


        <Header as='h3'>
          Placeholder Project Name
        </Header>


        <Divider horizontal>
          <Header as='h4'>
            <Icon name='bar chart' />
            Project Goal
          </Header>
        </Divider>

        <p>
          This is a placeholder of the user specified project goals
        </p>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Project Language</Table.Cell>
              <Table.Cell>Java </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Project Github Link</Table.Cell>
              <Table.Cell>placeholderlink.github.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Project Deadline</Table.Cell>
              <Table.Cell>2020-12-12</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </React.Fragment>
{/*
      <Header as='h3'>
      Announcements
      </Header>
      <Comment.Group>
        <Comment>
      <List.Icon name='github' size='large' verticalAlign='middle' />
                <Comment.Content>
            <Comment.Author>Lena</Comment.Author>
            <Comment.Metadata>
              <div>2 days ago</div>
              <div>
                <Icon name='star' />2 Faves
              </div>
            </Comment.Metadata>
            <Comment.Text>
              Hey guys, I hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
      <Form>  <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Post Announcement'
          placeholder='Announcement'
        /></Form>

      </Comment.Group>
      */}

<br></br>

      <Header as='h3'>
        List of Collaborators
      </Header>
  <List divided verticalAlign='middle'>


    <List.Item>
      <List.Content floated='right'>
        <Button>Message</Button>
        <Button>Kick</Button>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>Lena</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Message</Button>
        <Button>Kick</Button>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>Lindsay</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Message</Button>
        <Button>Kick</Button>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>Mark</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Message</Button>
        <Button>Kick</Button>
      </List.Content>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>





  </ResponsiveContainer>
)

export default ProjectPageLayout;



/*import PropTypes from 'prop-types'
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

  </ResponsiveContainer>
)

export default ProjectPageLayout;
*/
