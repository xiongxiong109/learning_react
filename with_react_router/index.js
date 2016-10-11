import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

let github = 'https://github.com/reactjs/react-router-tutorial/tree/master/lessons'
let blog = 'http://www.ruanyifeng.com/blog/2016/05/react_router.html'

const HelloComponent = () => (
	<div>
		<p>Hello <a href={github}>React Router</a></p>
		<p><a href={blog}>ruan's blog</a></p>
	</div>
)

const App = () => (
	<Router history={browserHistory}>
		<Route path="/" component={HelloComponent} />
	</Router>
)

export default App