// 导航菜单
import React from 'react'
import { Link, IndexLink } from 'react-router'

const styles = {
	activeLink: {
		'textDecoration': 'none'
	}
}

const Nav = () => (
	<div className="nav-header">
		<IndexLink to="/" activeStyle={styles.activeLink}>首页</IndexLink>
		{" / "}
		<Link to="blog" activeStyle={styles.activeLink}>博客</Link>
	</div>
)

export default Nav