import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './router'
import Main from './router/main'
import Detail from './router/detail'
import DetailLink from './component/NavBar/detail.link'

const Home = () => (
	<div>
		<DetailLink>首页之详情</DetailLink>
		<h3>Home Index</h3>
	</div>
)

// jsx写法
// const routes = (
// 	<Route path="/" component={App}>
// 		<IndexRoute component={Home} />
// 		<Route path="/:path" component={Main}>
// 			<Route path="/:path/:detail" component={Detail} />
// 		</Route>
// 	</Route>
// )

// obj写法, 使用obj的写法，可以方便地挂载router hook, 还可以有效地控制路由组件的按需加载

const routes = {
	path: '/',
	component: App,
	indexRoute: {component: Home },
	childRoutes: [
		{ 
			path: '/:path',
			component: Main,
			childRoutes: [
				{
					path: '/:path/:detail',
					component: Detail,
					// hook
					onEnter: (router, replace) => {
						console.log(router.params);
						console.log(router);
						// console.log(replace); // 这是一个替换路由的函数
					},
					onLeave: ({params}) => {
						console.log(params)
					}
				}
			]
		},
	]
}

export default routes