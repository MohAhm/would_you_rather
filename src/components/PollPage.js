import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'


class PollPage extends Component {
    render() {
        const { id, hasAnswered } = this.props

        console.log(this.props)

        return (
            <div>
                {hasAnswered === true
                    ? <AnsweredPoll id={id} />
                    : <UnansweredPoll id={id} />
                }
            </div>
        )
    }
}


function mapStateToProps({ authedUser, polls }, props) {
    const { id } = props.match.params
    const poll = polls[id]

    return {
        id,
        hasAnswered: poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
    }
}


export default connect(mapStateToProps)(PollPage)