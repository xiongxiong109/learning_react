// 主体部分
import React from 'react'
import {v1} from 'node-uuid'
import * as _ from 'lodash'
import NavBar from '../../component/NavBar'
const Main = (props) => (
	<div>
		<NavBar />
		<p>当前路由:{props.params.path}</p>
		<p>携带参数: {
			_.map(props.location.query, (v, k) => 
				<span key={v1()}>{k} : {v}</span>
			)
		}</p>
	</div>
)

export default Main