import React from 'react'
import { Link } from 'react-router'
import { isLogined } from '../../../auth'
import Nav from '../../../component/Nav'
const Blog = () => (
	<div>
		<p>Blogs</p>
		{
			(()=> {
				if (isLogined()) {
					return (<Link to="logout">退出登录</Link>)
				}
			})()
		}
	</div>
)

module.exports = Blog