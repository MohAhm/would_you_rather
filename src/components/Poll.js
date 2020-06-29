import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../utils/helpers'


class Poll extends Component {
    render() {
        const { poll } = this.props

        if (poll === null) {
            return <p>This Poll doesn't existd</p>
        }

        console.log(this.props)

        const { name, avatar, optionOne} = poll
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
                        <a
                            className='btn btn-outline-primary'
                            href="#poll"
                        >
                            View Poll
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps ({ users, polls }, { id }) {
    const poll = polls[id]

    return {
        poll: poll
            ? formatPoll(poll, users[poll.author])
            : null
    }
}


export default connect(mapStateToProps)(Poll)