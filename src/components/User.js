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
            <div className="card">
                <div className="row card-body font-weight-bold">
                    <div className="col-md-3 d-flex align-items-center">
                        <img src={avatar} alt={`Avatar of ${name}`} className="card-img"/>
                    </div>

                    <div className="col-md-6 my-4">
                        <div className="card-details">
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text my-auto">Answered questions {answeredQuestions}</p>
                            <p className="card-text">Created questions {createdQuestions}</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card text-center">
                            <div className="card-header">Score</div>
                            <div className="card-body">
                                <h5 className="circle">{score}</h5>
                            </div>
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