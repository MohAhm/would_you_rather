import React, { Component } from 'react'
import { connect } from 'react-redux';


class AnsweredPoll extends Component {
    state = {  }

    render() {
        return (
            <div>
                Answered Poll
            </div>
        );
    }
}

export default connect()(AnsweredPoll);