import { browserHistory, Router } from 'react-router'

const rootRouter = {
	path: '/',
	component: require('./component/App'), // 这里不使用indexRoute, 直接在nav中使用IndexLink 指定to="/"
	childRoutes: [
		require('./routes/Login'),
		require('./routes/Blog')
	]
}

export default rootRouter