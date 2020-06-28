import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'


class NewPoll extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    handleChane = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleAddPoll(optionOneText, optionTwoText))

        this.setState({
            optionOneText: '',
            optionTwoText: ''
        })
    }

    render() {
        const { optionOneText, optionTwoText } = this.state

        return (
            <div className="card">
                <h3 className="card-header text-center">Create New Question</h3>

                <div className="card-body">
                    <p className='card-text'>Complete the question:</p>
                    <h5 className="card-title">Would you rather ...</h5>

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='optionOneText'
                            value={optionOneText}
                            onChange={this.handleChane}
                            className='form-control'
                            placeholder='Enter Option One Text Here'
                        />

                        <h5 className="text-center mt-3 mb-3">OR</h5>

                        <input
                            type='text'
                            name='optionTwoText'
                            value={optionTwoText}
                            onChange={this.handleChane}
                            className='form-control'
                            placeholder='Enter Option Two Text Here'
                        />

                        <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewPoll)