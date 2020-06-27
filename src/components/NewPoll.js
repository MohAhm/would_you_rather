import React, { Component } from 'react'


class NewPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChane = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state

        // todo: Add Poll to the store

        console.log('New Poll: ', optionOne, optionTwo)

        this.setState({
            optionOne: '',
            optionTwo: ''
        })
    }

    render() {
        const { optionOne, optionTwo } = this.state

        return (
            <div className="card">
                <h3 className="card-header text-center">Create New Question</h3>

                <div className="card-body">
                    <p className='card-text'>Complete the question:</p>
                    <h5 className="card-title">Would you rather ...</h5>

                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            name='optionOne'
                            value={optionOne}
                            onChange={this.handleChane}
                            className='form-control'
                            placeholder='Enter Option One Text Here'
                        />

                        <h5 className="text-center mt-3 mb-3">OR</h5>

                        <input
                            type='text'
                            name='optionTwo'
                            value={optionTwo}
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

export default NewPoll