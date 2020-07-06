import React, { Component, Fragment } from 'react'
import User from './User'
import { connect } from 'react-redux'


class Leaderboard extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    {this.props.usersIds.map(id => (
                        <li key={id}>
                            <User id={id} />
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}


function mapStateToProps ({ users }) {
    const sortUsers = Object.keys(users).sort((a, b) => (
        (Object.keys(users[b].answers).length + users[b].questions.length) -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    ))

    return {
        usersIds: sortUsers
    }
}


export default connect(mapStateToProps)(Leaderboard)