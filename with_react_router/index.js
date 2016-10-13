import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import HelloComponent from './component/hello'
import App from './router'
import Main from './router/main'
import Detail from './router/detail'
import DetailLink from './component/NavBar/detail.link'
const Home = () => (
	<div>
		<DetailLink>首页详情</DetailLink>
		<h3>Home Index</h3>
	</div>
)
// IndexRoute 还要配合IndexLink使用, 不然样式又不对了
const RouterApp = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/:path" component={Main}>
				<Route path="/:path/:detail" component={Detail} />
			</Route>
		</Route>
	</Router>
)

export default RouterApp