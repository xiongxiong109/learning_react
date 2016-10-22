import { browserHistory, Router } from 'react-router'

// const rootRouter = {
// 	path: '/',
// 	component: require('./component/App'), // 这里不使用indexRoute, 直接在nav中使用IndexLink 指定to="/"
// 	childRoutes: [
// 		require('./routes/Login'),
// 		require('./routes/Blog')
// 	]
// }

// 配置路由的时候传递一个数组进去，在数组的第二个参数里面可以设置默认路由，处理404
const rootRouter = [
	{
		path: '/',
		indexRoute: require('./routes/Home'), // indexRoute不指定path
		component: require('./component/App'),  // 直接在nav中使用IndexLink 指定to="/"
		childRoutes: [
			require('./routes/Login'),
			require('./routes/Blog'),
			require('./routes/Logout')
		]
	},
	{ // default router
		path: '*',
		component: require('./component/App'),
		onEnter(router, redirect) {
			redirect('/')
		}
	}
]

export default rootRouter