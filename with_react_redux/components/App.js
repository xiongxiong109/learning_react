import React from 'react'
import { IptContainer, ListContainer, FilterContainer } from '../containers'

class App extends React.Component {
	render() {
		return (
			<div className="app-wrap">
				<h4>React Redux Todos</h4>
				<IptContainer />
				<ListContainer />
				<FilterContainer />
			</div>
		)
	}
}

export default App