// 主体部分
import React from 'react'
import {v1} from 'node-uuid'
import { Link } from 'react-router'
import * as _ from 'lodash'
import NavBar from '../../component/NavBar'
import DetailLink from '../../component/NavBar/detail.link'
/*
	react-router对于路由的path有严格的分析, 如果在Link的to中添加了?query=123之类的参数
	即使路由可以正确地跳转, 但是link的active可能不会正确地响应
*/
const Main = (props) => (
	<div>
		<DetailLink {...props}>进一步详情</DetailLink>	
		<p>当前路由:{props.params.path}</p>
		<p>携带参数: {
			_.map(props.location.query, (v, k) => 
				<span key={v1()}>{k} : {v}</span>
			)
		}</p>
		{props.children}
	</div>
)

export default Main