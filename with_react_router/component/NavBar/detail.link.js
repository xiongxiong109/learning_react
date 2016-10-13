import React from 'react'
import { Link } from 'react-router'
import style from './style.css'

const DetailLink = ({params, children}) => (
		<Link to={`/${params.path}/detail`} activeClassName={style.linkActive}>{children}</Link>
)

DetailLink.defaultProps = {
	params: {
		path: 'index'
	}
}

export default DetailLink