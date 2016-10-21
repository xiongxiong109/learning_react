import React from 'react'
import Nav from './Nav'
import base from './base.css'
const App = ({children}) => (
	<div className="app">
		<Nav />
		{children}
	</div>
)

module.exports = App