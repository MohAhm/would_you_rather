import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helpers'


class User extends Component {
    render() {
        const { user } = this.props

        if (user === null)
            return <p>This User doesn't existd</p>

        const { name, avatar, answeredQuestions, createdQuestions, score } = user

        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={avatar} alt={`Avatar of ${name}`} className="card-img"/>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">Answered questions {answeredQuestions}</p>
                            <p className="card-text">Created questions {createdQuestions}</p>
                            <p className="card-text">Score: {score}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ users }, { id }) {
    const user = users[id]

    return {
        user: user
            ? formatUser(user)
            : null
    }
}


export default connect(mapStateToProps)(User)