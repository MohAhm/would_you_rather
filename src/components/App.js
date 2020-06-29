import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewPoll from './NewPoll'
import PollPage from './PollPage';
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<div className="container">
				<LoadingBar style={{ backgroundColor: '#2ecc71' }} />
				{this.props.loading === true
					? null
					: <PollPage match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}} />
				}
			</div>
		)
	}
}


const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null
})


export default connect(mapStateToProps)(App)