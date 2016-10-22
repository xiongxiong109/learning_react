// 导航菜单
import React from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './nav.less'
const Nav = () => (
	<div className={styles.navHeader}>
		<IndexLink to="/" activeClassName={'activeLink'}>首页</IndexLink>
		{" | "}
		<Link to="blog" activeClassName={'activeLink'}>博客</Link>
	</div>
)

export default Nav