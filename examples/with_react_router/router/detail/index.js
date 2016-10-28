import React from 'react'
import NavBar from '../../component/NavBar'
import LoginForm from '../../component/LoginForm'
const Detail = (props) => (
	<div>
		<p>detail: {props.params.path}-{props.params.detail}</p>
		{(() => {
			if (props.params.path === 'login') { // 登录
				return <LoginForm />
			}
		})()}
	</div>
)

export default Detail