import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class ProtectedRoute extends Component {
    render () {
        const { auth, path, Component } = this.props

        return (
            <Route
                path={path}
                render={props => {
                    if (auth)
                        return (
                            <Redirect
                                to={{
                                    pathname: '/signin',
                                    state: { from: props.location }
                                }}
                            />
                        )

                    return <Component {...props} />
                }}
            />
        )
    }
}


function mapStateToProps ({ authedUser }, { path, component }) {
    return {
        auth: authedUser === null,
        path,
        Component: component,
    }
}


export default connect(mapStateToProps)(ProtectedRoute)