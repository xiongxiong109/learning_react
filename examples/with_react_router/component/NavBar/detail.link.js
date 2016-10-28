import React from 'react'
import { Link } from 'react-router'
// import style from './style.css'

const DetailLink = ({params, children}) => (
		<Link to={`/${params.path}/detail`} activeStyle={{
			'textDecoration': 'none'
		}}>{children}</Link>
)

DetailLink.defaultProps = {
	params: {
		path: 'index'
	}
}

export default DetailLink