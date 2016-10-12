import React from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'
// import HelloComponent from './component/hello'
import App from './router/'
import Main from './router/main'

const RouterApp = () => (
	<Router history={hashHistory}>
		<Route path="/" component={App} />
			<Route path="/:path" component={Main}/>
		<Route />
	</Router>
)

export default RouterApp