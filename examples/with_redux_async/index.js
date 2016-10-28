import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { ButtonContainer, ItemsContainer } from './container'

const AsyncApp = (props) => (
	<div>
		<ButtonContainer>开始获取数据</ButtonContainer>
		<span>{props.fetchState}</span>
		<ItemsContainer />
	</div>
)

const App  = () => (
	<Provider store={store}>
		<AsyncApp />
	</Provider>
)

export default App