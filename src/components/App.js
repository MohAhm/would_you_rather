import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Navigation from './Navigation'
import NotFound from './NotFound'
import Leaderboard from './Leaderboard'
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

					<div className="container mb-5">
						{this.props.loading === true
							? null
							: <div className='content mx-auto'>
								<Switch>
									<Route path='/home' component={Dashboard} />
									<Route path='/questions/:id' component={QuestionPage} />
									<Route path='/add' component={NewQuestion} />
									<Route path='/leaderboard' component={Leaderboard} />
									<Route path='/not-found' component={NotFound} />
									<Redirect from='/' exact to='/home' />
									<Redirect to='/not-found' />
								</Switch>
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