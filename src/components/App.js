import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewPoll from './NewPoll'
import PollPage from './PollPage'
import Navigation from './Navigation'
import LoadingBar from 'react-redux-loading-bar'


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar style={{ backgroundColor: '#2ecc71' }} />

					<Navigation />

					<div className="container">
						{this.props.loading === true
							? null
							: <div className='content mx-auto'>
								<Route path='/home' component={Dashboard} />
								<Route path='/questions/:id' component={PollPage} />
								<Route path='/add' component={NewPoll} />
								<Redirect from='/' exact to='/home' />
							</div>
						}
					</div>
				</Fragment>
			</Router>
		)
	}
}


const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null
})


export default connect(mapStateToProps)(App)