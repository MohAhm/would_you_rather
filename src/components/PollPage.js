import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'


class PollPage extends Component {
    render() {
        const { id, hasAnswered } = this.props

        if (hasAnswered === null)
            return <Redirect to='/not-found'/>

        return (
            <Fragment>
                {hasAnswered === true
                    ? <AnsweredPoll id={id} />
                    : <UnansweredPoll id={id} />
                }
            </Fragment>
        )
    }
}


function mapStateToProps({ authedUser, polls }, props) {
    const { id } = props.match.params
    const poll = polls[id]

    return {
        id,
        hasAnswered: poll
            ? poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
            : null
        }
}


export default connect(mapStateToProps)(PollPage)