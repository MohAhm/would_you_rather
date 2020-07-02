import React, { Component } from 'react'
import { connect } from 'react-redux';
import { formatPoll } from '../utils/helpers';


class AnsweredPoll extends Component {
    percentage = (totalValue, partialValue) => {
        return Math.floor((100 * partialValue) / totalValue)
    }

    render() {
        const { authedUser, poll } = this.props

        const { name, avatar, optionOne, optionTwo } = poll

        const totoalVotes = optionOne.votes.length + optionTwo.votes.length
        const optionOneVotes = optionOne.votes.length
        const optionTwoVotes = optionTwo.votes.length
        const percentOne = this.percentage(totoalVotes, optionOneVotes)
        const percentTwo = this.percentage(totoalVotes, optionTwoVotes)

        const yourVote = <p className="text-right">
            <span className="badge badge-pill badge-secondary">YOUR VOTE</span>
        </p>

        return (
            <div className="card">
                <h5 className="card-header">Asked by {name}</h5>

                <div className="card-body flex">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />

                    <div className="card-details font-weight-bold">
                        <h3 className="card-title">Results:</h3>

                        <div
                            className={
                                optionOne.votes.includes(authedUser) ?
                                'card mb-3 your-vote' : 'card mb-3'
                            }>
                            {optionOne.votes.includes(authedUser) && yourVote}

                            <div className="card-body">
                                <p className="card-text">Would you rather {optionOne.text}?</p>

                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${percentOne}%` }}
                                    >
                                        {percentOne}%
                                    </div>
                                </div>

                                <p className="card-text text-center mt-1">{`${optionOneVotes} out of ${totoalVotes} votes`}</p>
                            </div>
                        </div>

                        <div
                            className={
                                optionTwo.votes.includes(authedUser) ?
                                'card your-vote' : 'card'
                            }>
                            {optionTwo.votes.includes(authedUser) && yourVote}

                            <div className="card-body">
                                <p className="card-text">Would you rather {optionTwo.text}?</p>

                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${percentTwo}%` }}
                                    >
                                        {percentTwo}%
                                    </div>
                                </div>

                                <p className="card-text text-center mt-1">{`${optionTwoVotes} out of ${totoalVotes} votes`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps ({ authedUser, users, polls }, { id })  {
    const poll = polls[id]

    return {
        authedUser,
        poll: poll
            ? formatPoll(poll, users[poll.author])
            : null
    }
}


export default connect(mapStateToProps)(AnsweredPoll);