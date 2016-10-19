// 博客地址
// 子路由, 在rootRoutes中通过childRoutes里的require引入
module.exports = {
	path: '/blog',
	// 处理各种router hook
	onEnter(routes, redirect) {
		console.log(routes)
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Blog'));
		});
	}
}