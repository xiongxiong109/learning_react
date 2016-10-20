// 用户登录
import React, {PropTypes} from 'react'
import { doLogin } from '../../../auth'
// import { browserHistory } from 'react-router'

class LoginPanel extends React.Component {

	componentDidMount() {
		this.refs.uname.focus();
	}

	loginSubmit(e) {
		console.log(this.props);
		e.preventDefault();
		let {uname, upwd} = this.refs;
		let from = this.props.location.query.from;
		console.log(doLogin(uname.value, upwd.value));
		if (from) {
			this.context.router.push(`/${from}`);
		} else {
			this.context.router.goBack();
		}
		// console.log(uname.value);
		// console.log(upwd.value);
	}
	render() {
		return (
			<form action="#" onSubmit={(e) => this.loginSubmit(e)}>
				<input type="text" ref="uname" placeholder="username" />
				<input type="password" ref="upwd" placeholder="password" />
				<button>login</button>
			</form>
		)
	}
}

// 指定上下文环境， 将组件包裹在router中
LoginPanel.contextTypes = {
	router: PropTypes.object
}

module.exports = LoginPanel