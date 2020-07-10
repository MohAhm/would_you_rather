import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Navigation extends Component {
    render() {
        const { user } = this.props

        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="mb-3">
                <div className="container">
                    <Navbar.Brand />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav activeKey='/' className="mr-auto">
                            <LinkContainer to='/home' exact>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/add'>
                                <Nav.Link>New Question</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/leaderboard'>
                                <Nav.Link>Leader Board</Nav.Link>
                            </LinkContainer>
                        </Nav>

                        {user && (
                            <Fragment>
                                <Navbar.Text>Hello, {user.name}</Navbar.Text>

                                <img
                                    src={user.avatarURL}
                                    alt={`Avatar of ${user.name}`}
                                    className='min-avatar'
                                />

                                <LinkContainer to='/signout' className="sign-out">
                                    <Nav.Link>Logout</Nav.Link>
                                </LinkContainer>
                            </Fragment>
                        )}
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}


function mapStateToProps({ authedUser, users }) {
    const user = users[authedUser]

	return {
        user
    }
}


export default connect(mapStateToProps)(Navigation)