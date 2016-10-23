// 创建并使用公共组件
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import CDatePicker from './containers/DatePicker'
import ConnectRstPanel from './components/ResultPanel'

const App = () => (
	<Provider store={store}>
		<div>
			<h4>use Common Component</h4>
			<CDatePicker dateType = {'from'}>请选择出发时间</CDatePicker>
			<CDatePicker dateType = {'to'}>请选择到达时间</CDatePicker>
			<ConnectRstPanel />
		</div>
	</Provider>
)

export default App