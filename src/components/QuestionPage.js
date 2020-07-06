import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'


class QuestionPage extends Component {
    render() {
        const { id, hasAnswered } = this.props

        if (hasAnswered === null)
            return <Redirect to='/not-found'/>

        return (
            <Fragment>
                {hasAnswered === true
                    ? <AnsweredQuestion id={id} />
                    : <UnansweredQuestion id={id} />
                }
            </Fragment>
        )
    }
}


function mapStateToProps({ authedUser, questions }, props) {
    const { id } = props.match.params
    const question = questions[id]

    return {
        id,
        hasAnswered: question
            ? question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
            : null
        }
}


export default connect(mapStateToProps)(QuestionPage)