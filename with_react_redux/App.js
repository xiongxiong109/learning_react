import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducer'

import { IptContainer, ListContainer, FilterContainer } from './containers'

require('./todo.css')

let store = createStore(reducers)

store.subscribe(() => {
	console.log(store.getState())
})

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

class Wrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

export default Wrapper