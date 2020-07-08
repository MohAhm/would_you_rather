import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Navigation extends Component {
    render() {
        const { user } = this.props

        return (
            <Navbar bg="light" variant="light" className="mb-3">
                <div className="container">
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

                            <LinkContainer to='/signin' className="sign-in">
                                <Nav.Link>Logout</Nav.Link>
                            </LinkContainer>
                        </Fragment>
                    )}
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