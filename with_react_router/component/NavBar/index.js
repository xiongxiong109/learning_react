// react-router
import React from 'react'
import { Link, IndexLink } from 'react-router'
import {v1} from 'node-uuid'
import style from './style.css'
// 导航组件
const NavBar = ({links}) => (
	<div className={style.navbarWrap}>
		<IndexLink to={''} activeClassName={style.linkActive}>首页</IndexLink>
		{links.map(link =>
			<Link key={v1()} to={link.url} activeClassName={style.linkActive}>{link.nm}</Link>	
		)}
	</div>
)
// 要想使activeClassName和activeStyle生效, 则必须配置有正确匹配的route

NavBar.defaultProps = {
	links: [
		{url: '/blog', nm: '博客'},
		{url: '/about', nm: '关于我们'},
		{url: '/login', nm: '登录'}
	]
}

export default NavBar