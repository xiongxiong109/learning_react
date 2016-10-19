import React from 'react'
import {Link} from 'react-router'

const App = ({children}) => (
	<div className="app">
		<h3>App</h3>
		<Link to="/blog" >to blog</Link>
		{children}
	</div>
)

module.exports = App