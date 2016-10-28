import React from 'react'
import { Provider } from 'react-redux'
import Root from './components/todo.root'
import configStore from './store/configStore'
import { IptContainer, ListContainer, FilterContainer } from './containers'

require('./todo.css')

let store = configStore();
// 进一步细分组件
class Wrapper extends React.Component {
	render() {
		return (
			<Root store={store} />
		)
	}
}

export default Wrapper