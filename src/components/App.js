import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Home from './Home';


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<div className="container">
				{this.props.loading === true
					? null
					: <Home />
				}
			</div>
		)
	}
}


const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null
})


export default connect(mapStateToProps)(App)