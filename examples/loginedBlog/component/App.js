import React from 'react'
import Nav from './Nav'

const App = ({children}) => (
	<div className="app">
		<Nav />
		{children}
	</div>
)

module.exports = App