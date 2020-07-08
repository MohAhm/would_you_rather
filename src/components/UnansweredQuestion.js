import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAnswerQuestion } from '../actions/shared'
import Radio from './common/Radio'


class UnansweredQuestion extends Component {
    state = {
        selectedOption: 'optionOne'
    }

    handleChange = e => {
        const selectedOption = e.target.value
        this.setState({ selectedOption })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { selectedOption } = this.state
        const { dispatch, id } = this.props

        dispatch(handleAnswerQuestion(id, selectedOption))
    }

    render() {
        const { selectedOption } = this.state
        const { question } = this.props

        const { name, avatar, optionOne, optionTwo } = question

        return (
            <div className="card">
                <h5 className="card-header">{name} asks:</h5>

                <div className="row card-body">
                    <div className="col-md-4">
                        <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className='card-img'
                        />
                    </div>

                    <div className="col-md-8 mt-4">
                        <div className="card-details">
                            <h3 className="card-title">Would you rather...</h3>

                            <form onSubmit={this.handleSubmit}>
                                <Radio
                                    name='optionOne'
                                    label={optionOne.text}
                                    option={selectedOption}
                                    onChange={this.handleChange}
                                />

                                <Radio
                                    name='optionTwo'
                                    label={optionTwo.text}
                                    option={selectedOption}
                                    onChange={this.handleChange}
                                />

                                <button type='submit' className='btn btn-primary btn-block mt-auto'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps ({ users, questions }, { id }) {
    const question = questions[id]

    return {
        id,
        question: question
            ? formatQuestion(question, users[question.author])
            : null
    }
}


export default connect(mapStateToProps)(UnansweredQuestion);