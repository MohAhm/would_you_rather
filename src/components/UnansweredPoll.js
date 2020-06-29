import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../utils/helpers'
import Radio from './common/Radio'


class UnansweredPoll extends Component {
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
        const { poll } = this.props

        if (selectedOption === 'optionOne') {
            console.log('Submitted option is: ', poll.optionOne.text)
        }
        else {
            console.log('Submitted option is: ', poll.optionTwo.text)
        }
    }

    render() {
        const { selectedOption } = this.state
        const { poll } = this.props

        const { name, avatar, optionOne, optionTwo } = poll

        return (
            <div className="card">
                <h5 className="card-header">{name} asks:</h5>

                <div className="card-body flex">
                    <img
                        src={avatar}
                        alt={`Avatar of ${name}`}
                        className='avatar'
                    />

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

                            <button type='submit' className='btn btn-primary btn-block'>
                                Submit
                            </button>
                        </form>
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
            ? formatPoll(poll, users[poll.author])
            : null
    }
}


export default connect(mapStateToProps)(UnansweredPoll);