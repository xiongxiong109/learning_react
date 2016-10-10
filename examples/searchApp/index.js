/*
	输入框搜索关键字, 用户点击关键字后, 把用户的相关搜索情况存储在本地
	下次访问相同页面的时候, 显示用户的最近搜索历史记录
*/

import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import SearchIptContainer from './containers/search.input'
import SearchRstContainer from './containers/search.rst'
import SearchStoreContainer from './containers/search.store'

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="search-app">
					<SearchIptContainer />
					<SearchRstContainer />
					<SearchStoreContainer />
				</div>
			</Provider>
		)
	}
}

export default App