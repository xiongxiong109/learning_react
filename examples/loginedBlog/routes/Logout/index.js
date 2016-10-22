import { isLogined } from '../../auth'
module.exports = {
	path: 'logout',
	onEnter(routes, redirect) {
		if (isLogined()) {
			localStorage.removeItem('token');
			redirect('/');
		}
	}
}