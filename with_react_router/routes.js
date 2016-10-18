import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './router'
import Main from './router/main'
import Detail from './router/detail'
import DetailLink from './component/NavBar/detail.link'

const Home = () => (
	<div>
		<DetailLink>首页的详情</DetailLink>
		<h3>Home Index</h3>
	</div>
)

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/:path" component={Main}>
			<Route path="/:path/:detail" component={Detail} />
		</Route>
	</Route>
)

export default routes