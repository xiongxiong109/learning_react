/*
	输入框搜索关键字, 用户点击关键字后, 把用户的相关搜索情况存储在本地
	下次访问相同页面的时候, 显示用户的最近搜索历史记录
*/

import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router' 
import store from './store'
import Monitor from '../../dev_tools/chart.monitor'
import { SearchApp } from './App'

// require('./style.css')
import style from './style.css' // 打开css 模块化写法

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Router history={browserHistory}>
						<Route path="/" component={SearchApp} />
					</Router>
					<div className='dev-box'><Monitor /></div>
				</div>
			</Provider>
		)
	}
}

export default App