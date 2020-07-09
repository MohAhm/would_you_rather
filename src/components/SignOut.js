import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { unsetAuthedUser } from '../actions/authedUser'


class SignOut extends Component {
    componentDidMount() {
        this.props.dispatch(unsetAuthedUser())
    }

    render() {
        return <Redirect to='/signin'/>
    }
}

export default connect()(SignOut)