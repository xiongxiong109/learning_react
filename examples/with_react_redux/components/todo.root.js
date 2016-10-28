import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'

// 使用react-router来管理应用程序
const Root = ({store}) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/(:filter)" component={App} />
		</Router>
	</Provider>
)

export default Root