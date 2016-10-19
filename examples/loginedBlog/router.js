import { browserHistory, Router } from 'react-router'

const rootRouter = {
	path: '/',
	indexRoute: {component: require('./component/App')}, // 这样的写法已经实现了路由的按需加载
	childRoutes: [
		require('./routes/Blog')
	]
}

export default rootRouter