// 博客地址
// 子路由, 在rootRoutes中通过childRoutes里的require引入
import { isLogined } from '../../auth'
module.exports = {
	path: 'blog',
	// 处理各种router hook
	onEnter(routes, redirect) {
		// 判断是否登录, 如果没登录则跳转登录
		isLogined() ?  '' : redirect('/login?from=Blog');
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Blog'));
		});
	}
}