/*
	输入框搜索关键字, 用户点击关键字后, 把用户的相关搜索情况存储在本地
	下次访问相同页面的时候, 显示用户的最近搜索历史记录
*/

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import SearchIptContainer from './containers/search.input'
import SearchRstContainer from './containers/search.rst'

let store = createStore(reducers);

store.subscribe(() => {
	console.log(store.getState())
});

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="search-app">
					<SearchIptContainer />
					<SearchRstContainer />
					<h3>最近搜索记录</h3>
					<ul className="search-store">
						<li>
							<span>最近搜索记录1</span>
							<a href="javascript:void(0);">x</a>
						</li>
					</ul>
				</div>
			</Provider>
		)
	}
}

export default App