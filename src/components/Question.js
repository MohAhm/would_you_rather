import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link } from 'react-router-dom'


class Question extends Component {
    render() {
        const { question } = this.props

        if (question === null)
            return <p>This question doesn't existd</p>

        const { id, name, avatar, optionOne} = question
        const { text } = optionOne

        return (
            <div className='card'>
                <h5 className='card-header'>{name} asks:</h5>

                <div className="card-body flex">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />

                    <div className="card-details">
                        <h5 className="card-title">Would you rather</h5>
                        <p className='card-text'>{`...${(text.substring(0, text.length / 2))}...`}</p>

                        <Link to={`/questions/${id}`} className='btn btn-outline-primary'>
                            View Question
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps ({ users, questions }, { id }) {
    const question = questions[id]

    return {
        question: question
            ? formatQuestion(question, users[question.author])
            : null
    }
}


export default connect(mapStateToProps)(Question)