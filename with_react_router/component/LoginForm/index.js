import React, {PropTypes} from 'react'
import { browserHistory } from 'react-router'

class LoginForm extends React.Component {

	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log('loginForm');
		this.refs.ipt.focus();
	}

	loginSubmit(e) {
		e.preventDefault();
		console.log(this.refs.ipt.value);
		// 通过browserHistory的push方法进行url跳转
		// browserHistory.push('/blog/detail');
		// 通过设置router context上下文进行跳转
		this.context.router.push('/blog/detail');
	}

	render() {
		return (
			<form action="#" onSubmit={(e) => this.loginSubmit(e)}>
				<input type="text" ref="ipt" placeholder="username" />
				<button>login</button>
			</form>
		)
	}

}
// 这个属性只能设置为static静态属性
LoginForm.contextTypes = {
	router: PropTypes.object
}

export default LoginForm