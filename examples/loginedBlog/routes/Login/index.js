// 用户登录注册
import { isLogined } from '../../auth'
import { browserHistory } from 'react-router'
module.exports = {
	path: 'login',
	onEnter({location}, redirect) { // 进入登录页面时, 判断是否登录, 如果登录过，则不再重复登陆, 直接回到上一级
		if (isLogined()) {
			if (location.query.from) {
				redirect(`/${location.query.from}`)
			} else {
				browserHistory.goBack()
			}
		}
	},
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/Login'));
		})
	}
}