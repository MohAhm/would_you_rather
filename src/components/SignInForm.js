import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'


class SignInForm extends Component {
    state = {
        selectedOption: null,
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption })
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log('Option selected: ', this.state.selectedOption)
    }

    render() {
        const { selectedOption } = this.state
        const { options } = this.props

        return (
            <div className="card text-center">
                <div className="card-header">
                    <h5>Welcome to the Would You Rather App</h5>
                    <p>Please sign in to continue</p>
                </div>

                <div className="card-body">
                    <h3 className="card-title sign-in-text mb-3">Sign in</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                placeholder="Select User"
                                theme={theme => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#93e7b6',
                                        primary50: '#69dd9a',
                                        primary: '#27ae60',
                                    }
                                })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-3"
                            disabled={selectedOption === null}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ users }) {
    const options = Object.values(users).map(user => {
        return ({
            value: user.id,
            label: user.name
        })
    })

    return {
        options
    }
}


export default connect(mapStateToProps)(SignInForm)