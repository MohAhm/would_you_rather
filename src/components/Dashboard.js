import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import { Tabs, Tab } from 'react-bootstrap';


class Dashboard extends Component {
    state = {
        key: 'unanswered'
    }

    render() {
        return (
            <Tabs
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey='unanswered' title='Unanswered Questions'>
                    {this.props.unansweredPollsIds.map(id => (
                        <li key={id}>
                            <Poll id={id} />
                        </li>
                    ))}
                </Tab>
                <Tab eventKey='answered' title='Answered Questions'>
                    {this.props.answeredPollsIds.map(id => (
                        <li key={id}>
                            <Poll id={id} />
                        </li>
                    ))}
                </Tab>
            </Tabs>
        )
    }
}


function mapStateToProps ({ authedUser, polls }) {
    const answeredPolls = Object.values(polls).filter(poll =>
            poll.optionOne.votes.includes(authedUser) || poll.optionTwo.votes.includes(authedUser)
        )
    const unansweredPolls = Object.values(polls).filter(poll =>
            !poll.optionOne.votes.includes(authedUser) && !poll.optionTwo.votes.includes(authedUser)
        )

    return {
        answeredPollsIds: Object.values(answeredPolls)
            .sort((a, b) => b.timestamp - a.timestamp).map(poll => poll.id),
        unansweredPollsIds: Object.values(unansweredPolls)
            .sort((a, b) => b.timestamp - a.timestamp).map(poll => poll.id)
    }
}


export default connect(mapStateToProps)(Dashboard)