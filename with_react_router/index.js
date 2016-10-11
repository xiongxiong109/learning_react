import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

const HelloComponent = () => (
	<div>Hello <a href="https://github.com/reactjs/react-router-tutorial/tree/master/lessons">React Router</a></div>
)

const App = () => (
	<Router history={browserHistory}>
		<Route path="/" component={HelloComponent} />
	</Router>
)

export default App