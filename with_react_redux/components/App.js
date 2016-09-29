import React from 'react'
import { IptContainer, ListContainer, FilterContainer } from '../containers'

class App extends React.Component {
	// 通过props.params拿到url上的参数
	render() {
		return (
			<div className="app-wrap">
				<h4>React Redux Todos</h4>
				<IptContainer />
				<ListContainer filter={this.props.params.filter}/>
				<FilterContainer />
			</div>
		)
	}
}

export default App