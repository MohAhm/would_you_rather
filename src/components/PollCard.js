import React, { Component } from 'react'
import { connect } from 'react-redux';
import { formatPollCard } from '../utils/helpers';


class PollCard extends Component {
    viewPoll = (e, id) => {
        e.preventDefault()
        // todo: View selected poll.
    }

    render() {
        const { poll } = this.props

        if (poll === null) {
            return <p>This Poll doesn't existd</p>
        }

        console.log(this.props)

        const {
            id, name, avatar, subText, hasAnswered
        } = poll

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
                        <p className='card-text'>{`...${subText}...`}</p>

                        <button
                            className='btn btn-outline-primary'
                            onClick={e => this.viewPoll(e, id)}
                        >
                            View Poll
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps ({ authedUser, users, polls }, { id }) {
    const poll = polls[id]

    return {
        authedUser,
        poll: poll
            ? formatPollCard(poll, users[poll.author], authedUser)
            : null
    }
}


export default connect(mapStateToProps)(PollCard);