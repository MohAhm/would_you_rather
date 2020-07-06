import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Tabs, Tab } from 'react-bootstrap'


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
                    <ul>
                        {this.props.unansweredQuestionsIds.map(id => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                </Tab>
                <Tab eventKey='answered' title='Answered Questions'>
                    <ul>
                        {this.props.answeredQuestionsIds.map(id => (
                            <li key={id}>
                                <Question id={id} />
                            </li>
                        ))}
                    </ul>
                </Tab>
            </Tabs>
        )
    }
}


function mapStateToProps ({ authedUser, questions }) {
    const answeredQuestions = Object.values(questions).filter(question =>
            question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
        )
    const unansweredQuestions = Object.values(questions).filter(question =>
            !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)
        )

    return {
        answeredQuestionsIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map(question => question.id),
        unansweredQuestionsIds: Object.values(unansweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map(question => question.id)
    }
}


export default connect(mapStateToProps)(Dashboard)