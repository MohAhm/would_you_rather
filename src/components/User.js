import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component {
    render() {
        return (
            <p>{this.props.user.name}</p>
        )
    }
}


function mapStateToProps({ users }, { id }) {
    const user = users[id]

    return {
        user
    }
}


export default connect(mapStateToProps)(User)